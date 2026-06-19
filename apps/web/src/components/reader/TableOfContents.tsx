/**
 * TableOfContents — Slide-in TOC panel for the reader.
 * Shows all pages grouped by part, with current page highlighted.
 * Slides in from left on mobile, docked on desktop (via CSS).
 */

import { BookOpen, CheckCircle, Heart, MessageCircle, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ReaderPage } from "../../data/readerContent";

type TocEntry = {
  index: number;
  label: string;
  sublabel?: string;
  partLabel?: string;
  kind: ReaderPage["kind"];
  isCompleted: boolean;
};

type TableOfContentsProps = {
  pages: ReaderPage[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
  isOpen: boolean;
  bookTitle?: string;
  completedPages?: Set<number>;
};

// ── Helpers ───────────────────────────────────────────────────────────────

function getTocLabel(page: ReaderPage): string {
  if (page.kind === "cover") return page.lessonTitle ?? page.title;
  if (page.kind === "part-divider") return page.subtitle;
  if (page.kind === "segment") return page.chapterTitle;
  if (page.kind === "reflection") return "Reflection & Discussion";
  return "Closing Duʿāʾ";
}

function getTocSublabel(page: ReaderPage): string | undefined {
  if (page.kind === "segment") return `Part ${page.segmentNumber} · ~${page.minutes} min`;
  return undefined;
}

function getTocGroupLabel(page: ReaderPage): string | undefined {
  if (page.kind === "cover") return "Introduction";
  if (page.kind === "part-divider") return page.title;
  if (page.kind === "reflection") return "Reflection";
  if (page.kind === "closing") return "Closing";
  return undefined;
}

function TocIcon({ kind }: { kind: ReaderPage["kind"] }) {
  if (kind === "reflection") return <MessageCircle size={14} aria-hidden="true" />;
  if (kind === "closing") return <Heart size={14} aria-hidden="true" />;
  return <BookOpen size={14} aria-hidden="true" />;
}

// ── Group pages by section ─────────────────────────────────────────────────

type TocGroup = {
  groupLabel: string;
  entries: TocEntry[];
};

function buildTocGroups(pages: ReaderPage[], completedPages: Set<number>): TocGroup[] {
  const groups: TocGroup[] = [];
  let currentGroup: TocGroup | null = null;

  pages.forEach((page, index) => {
    const groupLabel = getTocGroupLabel(page) ?? "Content";
    const entry: TocEntry = {
      index,
      label: getTocLabel(page),
      sublabel: getTocSublabel(page),
      partLabel: groupLabel,
      kind: page.kind,
      isCompleted: completedPages.has(index),
    };

    if (!currentGroup || currentGroup.groupLabel !== groupLabel) {
      currentGroup = { groupLabel, entries: [] };
      groups.push(currentGroup);
    }
    currentGroup.entries.push(entry);
  });

  return groups;
}

// ── TableOfContents ────────────────────────────────────────────────────────

export function TableOfContents({
  pages,
  currentIndex,
  onNavigate,
  onClose,
  isOpen,
  bookTitle,
  completedPages = new Set(),
}: TableOfContentsProps) {
  const panelRef = useRef<HTMLElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);
  const groups = buildTocGroups(pages, completedPages);

  // Scroll active item into view when TOC opens
  useEffect(() => {
    if (isOpen && activeItemRef.current) {
      setTimeout(() => {
        activeItemRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      }, 300);
    }
  }, [isOpen]);

  // Trap focus and handle Escape
  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    first?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const completedCount = Array.from(completedPages).filter((i) => i < pages.length).length;
  const progressPercent = pages.length > 0 ? Math.round((completedCount / pages.length) * 100) : 0;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="toc-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <aside
        ref={panelRef}
        className={`toc-panel ${isOpen ? "toc-panel--open" : ""}`}
        aria-label="Table of contents"
        aria-hidden={!isOpen}
        role="dialog"
      >
        {/* Header */}
        <div className="toc-header">
          <div className="toc-header-info">
            <p className="toc-header-eyebrow">Table of Contents</p>
            {bookTitle && <h2 className="toc-header-title">{bookTitle}</h2>}
          </div>
          <button
            className="toc-close-btn"
            onClick={onClose}
            type="button"
            aria-label="Close table of contents"
          >
            <X size={18} />
          </button>
        </div>

        {/* Reading progress */}
        <div className="toc-progress-row" aria-label={`Reading progress: ${progressPercent}%`}>
          <div className="toc-progress-track">
            <div
              className="toc-progress-fill"
              style={{ width: `${progressPercent}%` }}
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <span className="toc-progress-label">{progressPercent}% read</span>
        </div>

        {/* Entries */}
        <nav className="toc-nav" aria-label="Chapter navigation">
          {groups.map((group) => (
            <div key={group.groupLabel} className="toc-group">
              <p className="toc-group-label">{group.groupLabel}</p>
              {group.entries.map((entry) => {
                const isCurrent = entry.index === currentIndex;
                return (
                  <button
                    key={entry.index}
                    ref={isCurrent ? activeItemRef : undefined}
                    className={`toc-item ${isCurrent ? "toc-item--current" : ""} ${entry.isCompleted ? "toc-item--done" : ""}`}
                    onClick={() => {
                      onNavigate(entry.index);
                      onClose();
                    }}
                    type="button"
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    <span className="toc-item-icon">
                      {entry.isCompleted && !isCurrent
                        ? <CheckCircle size={14} aria-hidden="true" />
                        : <TocIcon kind={entry.kind} />
                      }
                    </span>
                    <span className="toc-item-text">
                      <span className="toc-item-label">{entry.label}</span>
                      {entry.sublabel && (
                        <span className="toc-item-sub">{entry.sublabel}</span>
                      )}
                    </span>
                    {isCurrent && (
                      <span className="toc-item-current-dot" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="toc-footer">
          <p className="toc-footer-note">
            {pages.length} pages · {completedCount} read
          </p>
        </div>
      </aside>
    </>
  );
}
