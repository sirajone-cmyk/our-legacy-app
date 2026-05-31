import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  Type,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { getLessonCover } from "../data/readerContent";
import type { ReaderLesson, ReaderPage, ReaderSection, SacredTextBox } from "../data/readerContent";

const STORAGE_PREFIX = "our_legacy_reader_page";

function pageTitle(page: ReaderPage) {
  if (page.kind === "cover") return "Cover";
  if (page.kind === "part-divider") return page.title;
  if (page.kind === "segment") return `Segment ${page.segmentNumber}`;
  if (page.kind === "reflection") return "Reflection";
  return "Closing";
}

function pageSubtitle(page: ReaderPage) {
  if (page.kind === "cover") return page.lessonTitle;
  if (page.kind === "part-divider") return page.subtitle;
  if (page.kind === "segment") return page.heading;
  if (page.kind === "reflection") return "Discussion Questions & Action Point";
  return "Duʿāʾ & Conclusion";
}

function pageIcon(page: ReaderPage) {
  if (page.kind === "reflection") return MessageCircle;
  if (page.kind === "closing") return Heart;
  return BookOpen;
}

function pageIndicator(page: ReaderPage, index: number, total: number) {
  if (page.kind === "cover") return `Cover · ${index + 1}/${total}`;
  if (page.kind === "part-divider") return `${page.title} · ${index + 1}/${total}`;
  if (page.kind === "segment") return `Segment ${page.segmentNumber} · ${index + 1}/${total}`;
  if (page.kind === "reflection") return `Reflection · ${index + 1}/${total}`;
  return `Closing · ${index + 1}/${total}`;
}

function DecorativeRule() {
  return (
    <div className="book-rule" aria-hidden="true">
      <span />
    </div>
  );
}

function SacredBox({ box }: { box: SacredTextBox }) {
  return (
    <aside className={`book-sacred-box ${box.type}`}>
      <p className="book-arabic" dir="rtl" lang="ar">
        {box.arabic}
      </p>
      <p className="book-translation">“{box.translation}”</p>
      {box.reference && <p className="book-reference">{box.reference}</p>}
    </aside>
  );
}

function ReaderSectionBlock({ section }: { section: ReaderSection }) {
  return (
    <section className="book-section">
      {section.heading && <h3>{section.heading}</h3>}
      {section.sacredText && <SacredBox box={section.sacredText} />}
      {section.text?.map((paragraph) => {
        const isHeadingLine =
          paragraph.startsWith("Reason ") ||
          paragraph.startsWith("The Love ") ||
          paragraph.startsWith("Al-");
        return (
          <p className={isHeadingLine ? "book-emphasis-line" : undefined} key={paragraph.slice(0, 90)}>
            {paragraph}
          </p>
        );
      })}
    </section>
  );
}

function CoverPage({
  page,
  onBegin
}: {
  page: Extract<ReaderPage, { kind: "cover" }>;
  onBegin: () => void;
}) {
  return (
    <article className="book-page book-cover-page">
      <DecorativeRule />
      <p className="book-kicker">{page.series}</p>
      <h1>{page.title}</h1>
      <p className="book-cover-subtitle">{page.subtitle}</p>
      <div className="book-dot-rule" aria-hidden="true">
        <span />
      </div>
      <h2>{page.lessonTitle}</h2>
      <p className="book-author">{page.author}</p>
      <span className="book-part-pill">{page.part}</span>
      <button className="book-begin-button" onClick={onBegin} type="button">
        <span>Begin Reading</span>
        <ChevronDown size={18} />
      </button>
    </article>
  );
}

function PartDividerPage({
  page,
  onBegin
}: {
  page: Extract<ReaderPage, { kind: "part-divider" }>;
  onBegin: () => void;
}) {
  return (
    <article className="book-page book-cover-page">
      <DecorativeRule />
      <p className="book-kicker">{page.title}</p>
      <h1>{page.subtitle}</h1>
      <div className="book-dot-rule" aria-hidden="true">
        <span />
      </div>
      {page.description.map((paragraph) => (
        <p className="book-author" key={paragraph}>
          {paragraph}
        </p>
      ))}
      <button className="book-begin-button" onClick={onBegin} type="button">
        <span>Continue Reading</span>
        <ChevronDown size={18} />
      </button>
    </article>
  );
}

function SegmentPage({ page }: { page: Extract<ReaderPage, { kind: "segment" }> }) {
  return (
    <article className="book-page book-segment-page">
      <p className="book-segment-label">
        — Segment {page.segmentNumber} | {page.minutes} minutes —
      </p>
      <h1>{page.heading}</h1>
      <p className="book-sub-label">{page.subLabel}</p>
      <SacredBox box={page.hadith} />
      <p className="book-section-label">Explanation</p>
      {page.explanation.map((paragraph) => (
        <p key={paragraph.slice(0, 90)}>{paragraph}</p>
      ))}
      {page.sections.map((section, index) => (
        <ReaderSectionBlock key={`${section.heading ?? section.sacredText?.arabic ?? "section"}-${index}`} section={section} />
      ))}
      <p className="book-reflection-prompt">{page.reflection}</p>
    </article>
  );
}

function ReflectionPage({ page }: { page: Extract<ReaderPage, { kind: "reflection" }> }) {
  return (
    <article className="book-page book-reflection-page">
      <DecorativeRule />
      <p className="book-kicker">Reflect and Discuss</p>
      <h1>Carry the Lesson Home</h1>
      <ol className="book-reflection-list">
        {page.questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ol>
      <section className="book-action-point">
        <p className="book-section-label">Action Point</p>
        <p>{page.actionPoint}</p>
      </section>
    </article>
  );
}

function ClosingPage({ page }: { page: Extract<ReaderPage, { kind: "closing" }> }) {
  return (
    <article className="book-page book-closing-page">
      <DecorativeRule />
      <p className="book-kicker">Closing Page</p>
      <h1>Duʿāʾ & Conclusion</h1>
      {page.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 90)}>{paragraph}</p>
      ))}
      <SacredBox
        box={{
          type: "dua",
          arabic: page.duaArabic,
          translation: page.duaTranslation
        }}
      />
    </article>
  );
}

function ReaderPageView({ page, onBegin }: { page: ReaderPage; onBegin: () => void }) {
  if (page.kind === "cover") return <CoverPage page={page} onBegin={onBegin} />;
  if (page.kind === "part-divider") return <PartDividerPage page={page} onBegin={onBegin} />;
  if (page.kind === "segment") return <SegmentPage page={page} />;
  if (page.kind === "reflection") return <ReflectionPage page={page} />;
  return <ClosingPage page={page} />;
}

export function EbookReader({ lesson, onComplete }: { lesson: ReaderLesson; onComplete?: () => void }) {
  const storageKey = `${STORAGE_PREFIX}:${lesson.id}`;
  const cover = getLessonCover(lesson);
  const [pageIndex, setPageIndex] = useState(() => {
    const stored = Number(localStorage.getItem(`${STORAGE_PREFIX}:${lesson.id}`) ?? "0");
    return Number.isFinite(stored) ? stored : 0;
  });
  const [contentsOpen, setContentsOpen] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const total = lesson.pages.length;
  const safeIndex = Math.max(0, Math.min(pageIndex, total - 1));
  const page = lesson.pages[safeIndex] ?? lesson.pages[0];
  const progress = useMemo(() => Math.round(((safeIndex + 1) / total) * 100), [safeIndex, total]);

  useEffect(() => {
    localStorage.setItem(storageKey, String(safeIndex));
  }, [safeIndex, storageKey]);

  useEffect(() => {
    const stored = Number(localStorage.getItem(storageKey) ?? "0");
    setPageIndex(Number.isFinite(stored) ? stored : 0);
  }, [storageKey]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setPageIndex((current) => Math.min(total - 1, current + 1));
      if (event.key === "ArrowLeft") setPageIndex((current) => Math.max(0, current - 1));
      if (event.key.toLowerCase() === "m") setContentsOpen((current) => !current);
      if (event.key === "Escape") setContentsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total]);

  const goBack = () => setPageIndex((current) => Math.max(0, current - 1));
  const goForward = () => {
    setPageIndex((current) => {
      const next = Math.min(total - 1, current + 1);
      if (next === total - 1) onComplete?.();
      return next;
    });
  };
  const goToPage = (index: number) => {
    setPageIndex(index);
    setContentsOpen(false);
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStart === null) return;
    const delta = clientX - touchStart;
    if (Math.abs(delta) > 48) {
      if (delta < 0) goForward();
      if (delta > 0) goBack();
    }
    setTouchStart(null);
  };

  if (!page) return null;

  return (
    <main
      className={nightMode ? "book-reader-app night" : "book-reader-app"}
      style={{ "--book-font-scale": fontScale } as CSSProperties}
    >
      <button className="book-floating-menu" onClick={() => setContentsOpen(true)} type="button" aria-label="Open table of contents">
        <Menu size={22} />
      </button>

      <div className="book-floating-tools">
        <button onClick={() => setFontScale((value) => (value >= 1.14 ? 0.94 : value + 0.1))} type="button" aria-label="Adjust text size">
          <Type size={19} />
        </button>
        <button onClick={() => setNightMode((value) => !value)} type="button" aria-label="Toggle night mode">
          {nightMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
      </div>

      <section
        className="book-reading-stage"
        onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      >
        <ReaderPageView page={page} onBegin={goForward} />
      </section>

      <footer className="book-reader-nav">
        <button disabled={safeIndex === 0} onClick={goBack} type="button" aria-label="Previous page">
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => setContentsOpen(true)} type="button" aria-label="Open contents">
          <Menu size={20} />
        </button>
        <span>{pageIndicator(page, safeIndex, total)}</span>
        <button disabled={safeIndex === total - 1} onClick={goForward} type="button" aria-label="Next page">
          <ChevronRight size={24} />
        </button>
      </footer>

      <div className="book-progress-track" aria-label={`${progress}% complete`}>
        <span style={{ width: `${progress}%` }} />
      </div>

      {contentsOpen && (
        <div className="book-contents-backdrop" onClick={() => setContentsOpen(false)}>
          <aside className="book-contents-panel" onClick={(event) => event.stopPropagation()}>
            <header>
              <div>
                <h2>{cover?.title ?? "OUR LEGACY"}</h2>
                <p>{cover?.series ?? lesson.seriesName}</p>
              </div>
              <button onClick={() => setContentsOpen(false)} type="button" aria-label="Close table of contents">
                <X size={22} />
              </button>
            </header>
            <nav>
              {lesson.pages.map((item, index) => {
                const Icon = pageIcon(item);
                return (
                  <button
                    className={index === safeIndex ? "active" : undefined}
                    key={`${lesson.id}-${index}`}
                    onClick={() => goToPage(index)}
                    type="button"
                  >
                    <Icon size={22} />
                    <span>
                      <strong>{pageTitle(item)}</strong>
                      <small>{pageSubtitle(item)}</small>
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </main>
  );
}
