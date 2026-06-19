/**
 * OUR LEGACY — App Router
 */

import { useCallback, useEffect, useState } from "react";
import { trackPageView } from "./lib/analytics";
import { AppShell, MoreMenu } from "./components/AppShell";
import { FamilyModePlaceholder } from "./components/family/FamilyModePlaceholder";
import { BookDetail } from "./components/library/BookDetail";
import { LibraryHome } from "./components/library/LibraryHome";
import { SearchModal } from "./components/search/SearchModal";
import { EbookReader } from "./components/EbookReader";
import { LessonGuide } from "./components/LessonGuide";
import { SourcesPage, SupportPage } from "./components/HomePage";
import type { ChapterEntry } from "./components/library/BookDetail";
import type { AppRoute } from "./components/AppShell";
import type { BookEntry, CategoryId } from "./data/libraryData";
import {
  getFeaturedReaderLesson,
  getLessonCover,
  getReaderLessonById,
} from "./data/readerContent";
import { getLessonEnrichment } from "./data/lessonEnrichmentData";

type AppView =
  | { screen: "splash" }
  | { screen: "library" }
  | { screen: "book-detail"; book: BookEntry }
  | { screen: "reader"; lessonId: string }
  | { screen: "lesson-guide"; lessonId: string; partNumber: number }
  | { screen: "family" }
  | { screen: "support" }
  | { screen: "sources" };

function SplashScreen({ exiting }: { exiting: boolean }) {
  return (
    <div
      className={`splash-screen${exiting ? " splash-exiting" : ""}`}
      role="status"
      aria-label="Our Legacy — Loading"
    >
      {/* Body: mark + title grouped and centred together */}
      <div className="splash-body">
        {/* Geometric mark */}
        <div className="splash-mark" aria-hidden="true">
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            {/* Outer hexagon — flat-top, R=46 */}
            <path
              className="splash-hex-outer"
              d="M106,60 L83,20 L37,20 L14,60 L37,100 L83,100 Z"
            />
            {/* Inner hexagon — R=30, rotated 30° */}
            <path
              className="splash-hex-inner"
              d="M86,45 L60,30 L34,45 L34,75 L60,90 L86,75 Z"
            />
            {/* Centre circle — r=8 */}
            <circle className="splash-circle" cx="60" cy="60" r="8" />
            {/* Centre dot */}
            <circle className="splash-dot-center" cx="60" cy="60" r="2.5" />
          </svg>
        </div>

        {/* Text */}
        <div className="splash-text">
          <h1 className="splash-title">OUR LEGACY</h1>
          <div className="splash-rule" aria-hidden="true" />
          <p className="splash-subtitle">The Lives That Shaped History</p>
          <p className="splash-presenter">Presented by Ustāḏh Hāshim · SirājOne</p>
        </div>
      </div>

      {/* Loader dots */}
      <div className="splash-loader" aria-hidden="true">
        <span /><span /><span />
      </div>
    </div>
  );
}

export function App() {
  const [view, setView] = useState<AppView>({ screen: "splash" });
  const [splashExiting, setSplashExiting] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<AppRoute>("library");

  useEffect(() => {
    // Start exit animation at 6000ms, unmount at 6600ms
    const exitTimer  = window.setTimeout(() => setSplashExiting(true),              6000);
    const leaveTimer = window.setTimeout(() => setView({ screen: "library" }),      6600);
    return () => { window.clearTimeout(exitTimer); window.clearTimeout(leaveTimer); };
  }, []);

  // Track a virtual page view on every screen change (SPA analytics)
  useEffect(() => {
    if (view.screen === "splash") return;
    const bookTitle = view.screen === "book-detail" && "book" in view ? view.book.title : "";
    const pageTitle =
      view.screen === "library"      ? "OUR LEGACY - Library"          :
      view.screen === "book-detail"  ? "Book - " + bookTitle            :
      view.screen === "reader"       ? "OUR LEGACY - Reader"            :
      view.screen === "lesson-guide" ? "OUR LEGACY - Lesson Companion"  :
      view.screen === "family"       ? "OUR LEGACY - Family Mode"       :
      view.screen === "support"      ? "OUR LEGACY - Support"           :
      view.screen === "sources"      ? "OUR LEGACY - Sources"           :
      "OUR LEGACY";
    trackPageView("/" + view.screen, pageTitle);
  }, [view]);

  const dismissSplash = useCallback(() => {
    setSplashExiting(true);
    window.setTimeout(() => setView({ screen: "library" }), 400);
  }, []);

  const handleNavSelect = useCallback((route: AppRoute) => {
    if (route === "search") { setSearchOpen(true); return; }
    if (route === "more") { setMoreOpen(true); return; }
    if (route === "family") { setView({ screen: "family" }); setActiveNav("family"); return; }
    if (route === "library") { setView({ screen: "library" }); setActiveNav("library"); return; }
    if (route === "reader") {
      const lesson = getFeaturedReaderLesson();
      if (lesson) { setView({ screen: "reader", lessonId: lesson.id }); setActiveNav("reader"); }
      return;
    }
  }, []);

  const handleBookOpen = useCallback((book: BookEntry) => {
    setView({ screen: "book-detail", book });
    setActiveNav("library");
    window.scrollTo(0, 0);
  }, []);

  const handleChapterOpen = useCallback((chapter: ChapterEntry, book: BookEntry) => {
    // Only open the reader if this book has a specific lessonKey with actual content
    if (chapter.pageIndex !== undefined && book.lessonKey) {
      const lesson = getReaderLessonById(book.lessonKey);
      if (lesson) {
        localStorage.setItem(`our_legacy_reader_page:${book.lessonKey}`, String(chapter.pageIndex));
        setView({ screen: "reader", lessonId: book.lessonKey });
        setActiveNav("reader");
        return;
      }
    }
    // No valid reader content — stay on book detail (chapter card is disabled when pageIndex undefined)
    // This prevents accidentally showing another book's reader content
  }, []);

  const handleSearchBookOpen = useCallback((book: BookEntry) => {
    setSearchOpen(false);
    setView({ screen: "book-detail", book });
    setActiveNav("library");
    window.scrollTo(0, 0);
  }, []);

  const handleCategorySelect = useCallback((_id: CategoryId) => {
    setSearchOpen(false);
    setView({ screen: "library" });
    setActiveNav("library");
  }, []);

  const handleMoreNav = useCallback((route: AppRoute) => {
    setMoreOpen(false);
    if (route === "support") setView({ screen: "support" });
    else if (route === "sources") setView({ screen: "sources" });
    else if (route === "family") { setView({ screen: "family" }); setActiveNav("family"); }
  }, []);

  if (view.screen === "splash") return <SplashScreen exiting={splashExiting} />;

  if (view.screen === "reader") {
    const lesson = getReaderLessonById(view.lessonId) ?? getFeaturedReaderLesson();
    if (!lesson) {
      return (
        <main style={{ padding: "2rem", textAlign: "center" }}>
          <p>No lesson found.</p>
          <button onClick={() => setView({ screen: "library" })} type="button">Back</button>
        </main>
      );
    }
    return (
      <EbookReader
        lesson={lesson}
        onBack={() => { setView({ screen: "library" }); setActiveNav("library"); }}
        onViewGuide={(partNumber) => {
          setView({ screen: "lesson-guide", lessonId: lesson.id, partNumber });
        }}
      />
    );
  }

  if (view.screen === "lesson-guide") {
    // view.lessonId === book.lessonKey (e.g. "sirah_journey")
    // getLessonEnrichment("sirah_journey", 6) → looks up "sirah_journey:6"
    const enrichment = getLessonEnrichment(view.lessonId, view.partNumber);
    if (!enrichment) {
      return (
        <main style={{ padding: "2rem", textAlign: "center" }}>
          <p>No companion found for this lesson.</p>
          <button
            onClick={() => setView({ screen: "reader", lessonId: view.lessonId })}
            type="button"
          >
            Back to Lesson
          </button>
        </main>
      );
    }
    return (
      <LessonGuide
        enrichment={enrichment}
        onBack={() => setView({ screen: "reader", lessonId: view.lessonId })}
      />
    );
  }

  if (view.screen === "support") {
    return (
      <AppShell currentRoute="more" onNavigate={handleNavSelect}>
        <SupportPage
          onBeginReading={() => { const l = getFeaturedReaderLesson(); if (l) setView({ screen: "reader", lessonId: l.id }); }}
          onSources={() => setView({ screen: "sources" })}
        />
      </AppShell>
    );
  }

  if (view.screen === "sources") {
    return (
      <AppShell currentRoute="more" onNavigate={handleNavSelect}>
        <SourcesPage
          onBeginReading={() => { const l = getFeaturedReaderLesson(); if (l) setView({ screen: "reader", lessonId: l.id }); }}
          onSupport={() => setView({ screen: "support" })}
        />
      </AppShell>
    );
  }

  if (view.screen === "family") {
    return (
      <AppShell currentRoute="family" onNavigate={handleNavSelect}>
        <FamilyModePlaceholder onStartReading={() => { const l = getFeaturedReaderLesson(); if (l) setView({ screen: "reader", lessonId: l.id }); }} />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} onBookOpen={handleSearchBookOpen} onCategorySelect={handleCategorySelect} />
        <MoreMenu isOpen={moreOpen} onClose={() => setMoreOpen(false)} onNavigate={handleMoreNav} />
      </AppShell>

    );
  }

  if (view.screen === "book-detail") {
    const { book } = view;
    return (
      <AppShell currentRoute={activeNav} onNavigate={handleNavSelect}>
        <BookDetail
          book={book}
          onBack={() => { setView({ screen: "library" }); setActiveNav("library"); }}
          onOpenChapter={(chapter) => handleChapterOpen(chapter, book)}
          onOpenMap={(_mapId) => { /* Future: open IslamicMap panel */ }}

        />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} onBookOpen={handleSearchBookOpen} onCategorySelect={handleCategorySelect} />
        <MoreMenu isOpen={moreOpen} onClose={() => setMoreOpen(false)} onNavigate={handleMoreNav} />
      </AppShell>
    );
  }

  return (
    <AppShell currentRoute={activeNav} onNavigate={handleNavSelect}>
      <LibraryHome onBookOpen={handleBookOpen} onSearch={() => setSearchOpen(true)} onSupport={() => setView({ screen: "support" })} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} onBookOpen={handleSearchBookOpen} onCategorySelect={handleCategorySelect} />
      <MoreMenu isOpen={moreOpen} onClose={() => setMoreOpen(false)} onNavigate={handleMoreNav} />
    </AppShell>
  );
}
