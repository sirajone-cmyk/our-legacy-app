/**
 * AppShell — Persistent navigation wrapper for OUR LEGACY.
 *
 * Provides:
 * - Bottom tab bar (mobile)
 * - Keyboard accessibility
 * - ARIA live region for page announcements
 * - Skip-to-content link
 *
 * The reader hides the nav bar (reader is full-screen);
 * the library and other pages show it.
 */

import {
  BookMarked,
  BookOpen,
  HeartHandshake,
  Library,
  MoreHorizontal,
  Search,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

export type AppRoute =
  | "library"
  | "reader"
  | "search"
  | "family"
  | "more"
  | "support"
  | "sources";

type NavItem = {
  id: AppRoute;
  label: string;
  icon: React.ElementType;
  hideInReader?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { id: "library",  label: "Library", icon: Library },
  { id: "search",   label: "Search",  icon: Search },
  { id: "reader",   label: "Reading", icon: BookOpen },
  { id: "family",   label: "Family",  icon: Users },
  { id: "more",     label: "More",    icon: MoreHorizontal },
];

type AppShellProps = {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  children: ReactNode;
  /** Hide the bottom nav (used in full-screen reader) */
  hideNav?: boolean;
  /** Announcement text for screen readers */
  announcement?: string;
};

export function AppShell({
  currentRoute,
  onNavigate,
  children,
  hideNav = false,
  announcement,
}: AppShellProps) {
  return (
    <div className="app-shell">
      {/* Skip to main content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ARIA live region */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="app-announce"
      >
        {announcement}
      </div>

      {/* Main content area */}
      <div
        className={`app-content ${hideNav ? "app-content--fullscreen" : ""}`}
        id="main-content"
      >
        {children}
      </div>

      {/* Bottom navigation */}
      {!hideNav && (
        <nav
          className="app-nav"
          aria-label="Main navigation"
          role="navigation"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = currentRoute === item.id;

            return (
              <button
                key={item.id}
                className={`app-nav-item ${isActive ? "app-nav-item--active" : ""}`}
                onClick={() => onNavigate(item.id)}
                type="button"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="app-nav-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <span className="app-nav-label">{item.label}</span>
                {isActive && (
                  <span className="app-nav-indicator" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}

// ── More Menu ─────────────────────────────────────────────────────────────
// Shown when user taps "More" in the bottom nav

type MoreMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: AppRoute) => void;
};

const MORE_ITEMS = [
  { id: "support" as AppRoute, label: "Support This Work", icon: HeartHandshake },
  { id: "sources" as AppRoute, label: "Sources & Methodology", icon: BookMarked },
  { id: "family" as AppRoute, label: "Family Mode", icon: Users },
];

export function MoreMenu({ isOpen, onClose, onNavigate }: MoreMenuProps) {
  return (
    <>
      {isOpen && (
        <div
          className="more-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={`more-menu ${isOpen ? "more-menu--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="More options"
        aria-hidden={!isOpen}
      >
        <div className="more-handle" aria-hidden="true" />
        <p className="more-heading">OUR LEGACY</p>
        <nav aria-label="More navigation">
          {MORE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className="more-item"
                onClick={() => { onNavigate(item.id); onClose(); }}
                type="button"
              >
                <Icon size={18} aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="more-footer">
          <p>© 2026 OUR LEGACY · SirajOne</p>
          <p>SirajOne · Durban, South Africa</p>
        </div>
      </div>
    </>
  );
}
