/**
 * LibraryHome — Premium Islamic library landing page.
 *
 * Hierarchy:
 *   Bismillah
 *   OUR LEGACY
 *   The Lives That Shaped History
 *   [Featured Book Hero — The Seal of the Prophets ﷺ]
 *   [Search]
 *   [Category pills]
 *   [Book grid]
 *   [Sadaqah note]
 */

import {
  Award,
  BookMarked,
  BookOpen,
  ChevronRight,
  HeartHandshake,
  Scale,
  ScrollText,
  Search,
  Shield,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  LIBRARY_BOOKS,
  SECTION_CATEGORIES,
  getBooksByCategory,
  getBookProgress,
  getSavedReaderPage,
  hasBookProgress,
  type BookEntry,
  type CategoryId,
} from "../../data/libraryData";
import { BookCard } from "./BookCard";

// ── Icon map for categories ───────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  HeartHandshake,
  Award,
  BookOpen,
  ScrollText,
  Scale,
  BookMarked,
  Shield,
  Users,
};

// ── Sub-components ────────────────────────────────────────────────────────


function WhyOurLegacy() {
  return (
    <section className="why-our-legacy" aria-label="About Our Legacy">
      <div className="wol-inner">

        <div className="wol-header">
          <span className="wol-eyebrow">About This Library</span>
          <h2 className="wol-title">Why Our Legacy?</h2>
        </div>

        <div className="wol-intro">
          <p className="wol-lead">
            Our Legacy is more than a collection of biographies.
          </p>
          <p className="wol-body">
            It is a guided journey through the people, events, sacrifices,
            knowledge, and contributions that shaped Islamic civilisation.
            Explore the lives of the Ṣaḥābah رضي الله عنهم, discover their
            stories, trace their journeys, learn from their character, and
            connect with the legacy they left behind.
          </p>
        </div>

        <div className="wol-pillars">
          <div className="wol-pillar">
            <span className="wol-pillar-num" aria-hidden="true">I</span>
            <h3 className="wol-pillar-title">Authentic Personalities</h3>
            <p className="wol-pillar-text">
              Lives drawn from the Qurʾān, Ṣaḥīḥ Aḥādīth, and established
              classical scholarship — not legends or folklore.
            </p>
          </div>
          <div className="wol-pillar">
            <span className="wol-pillar-num" aria-hidden="true">II</span>
            <h3 className="wol-pillar-title">Historical Journey</h3>
            <p className="wol-pillar-text">
              Organised by era and role — Companions, Mothers of the Believers,
              Scholars, Mujāhidīn, and more.
            </p>
          </div>
          <div className="wol-pillar">
            <span className="wol-pillar-num" aria-hidden="true">III</span>
            <h3 className="wol-pillar-title">Lessons and Legacy</h3>
            <p className="wol-pillar-text">
              Each biography shows not only who they were, but what lessons
              their lives continue to teach every generation.
            </p>
          </div>
          <div className="wol-pillar">
            <span className="wol-pillar-num" aria-hidden="true">IV</span>
            <h3 className="wol-pillar-title">Growing Library</h3>
            <p className="wol-pillar-text">
              Continuously expanding with new biographies, verified timelines,
              and educational content for family and classroom use.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function GoldRule() {
  return <div className="library-rule" aria-hidden="true"><span /></div>;
}

function LibraryBrand() {
  return (
    <section className="library-brand">
      <p className="library-bismillah-quiet" dir="rtl" lang="ar" aria-label="Bismillah">
        بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ
      </p>
      <GoldRule />
      <h1 className="library-title">OUR LEGACY</h1>
      <p className="library-tagline">The Lives That Shaped History</p>
      <div className="library-brand-rule" aria-hidden="true" />
      <p className="library-presented">
        Presented by Ustādh Hāshim · SirajOne
      </p>
    </section>
  );
}

/** ─── Featured Book Hero ─────────────────────────────────────────────────
 *  Full-width dark-green card spotlighting The Seal of the Prophets ﷺ.
 *  Feels like a museum-quality announcement panel.
 */
function FeaturedHero({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="library-featured-wrap" aria-label="Featured Book">
      <button
        className="library-featured"
        onClick={onOpen}
        type="button"
        aria-label="Open The Seal of the Prophets — The Greatest Life Ever Lived"
      >
        {/* Leather grain */}
        <div className="library-featured-grain" aria-hidden="true" />

        {/* CSS corner brackets — scale correctly at any width */}
        <span className="lfc-tl" aria-hidden="true" />
        <span className="lfc-tr" aria-hidden="true" />
        <span className="lfc-bl" aria-hidden="true" />
        <span className="lfc-br" aria-hidden="true" />

        {/* Content */}
        <div className="library-featured-content">

          {/* Series kicker */}
          <p className="library-featured-kicker">
            <span aria-hidden="true">◆</span>
            Now Available &nbsp;·&nbsp; Sīrah Series
            <span aria-hidden="true">◆</span>
          </p>

          {/* Thin gold divider */}
          <div className="library-featured-thin-rule" aria-hidden="true" />

          {/* Title */}
          <h2 className="library-featured-title">
            The Seal of the Prophets&nbsp;ﷺ
          </h2>

          {/* Subtitle */}
          <p className="library-featured-subtitle">
            The Greatest Life Ever Lived
          </p>

          {/* Gold divider */}
          <div className="library-featured-divider" aria-hidden="true" />

          {/* Author */}
          <p className="library-featured-author">By Ustādh Hāshim</p>
          <p className="library-featured-org">SirajOne · Durban, South Africa</p>

          {/* CTA */}
          <div className="library-featured-cta" aria-hidden="true">
            Begin Reading
            <ChevronRight size={14} strokeWidth={2.5} />
          </div>
        </div>
      </button>
    </section>
  );
}

/** Maps saved reader page index to lesson label for the Sirah series */
function getSirahLessonLabel(pageIndex: number): string {
  const lessonNum = Math.floor(pageIndex / 7) + 1;
  const lessonTitles: Record<number, string> = {
    1: "Lesson 1 — Introduction to Sirah",
    2: "Lesson 2 — The Meccan Period",
    3: "Lesson 3 — The Year of the Elephant",
    4: "Lesson 4 — Halimah al-Sa\'diyyah",
    5: "Lesson 5 — The Opening of the Chest",
    6: "Lesson 6 — The Death of Aminah",
    7: "Lesson 7 — The Death of Abd al-Muttalib",
  };
  return lessonTitles[lessonNum] ?? `Lesson ${lessonNum}`;
}

function ContinueReadingCard({
  book,
  onContinue,
}: {
  book: BookEntry;
  onContinue: () => void;
}) {
  const progress = getBookProgress(book.id);
  const savedPage = book.lessonKey ? getSavedReaderPage(book.lessonKey) : null;
  const lessonLabel = savedPage !== null ? getSirahLessonLabel(savedPage) : null;

  return (
    <section className="library-continue" aria-label="Continue Reading">
      <p className="library-section-label">Continue Reading</p>
      <button className="library-continue-card" onClick={onContinue} type="button">
        <div
          className="library-continue-cover"
          style={{ background: book.coverColor }}
          aria-hidden="true"
        >
          <BookOpen size={20} color="rgba(255,255,255,0.6)" />
        </div>
        <div className="library-continue-info">
          {book.seriesName && (
            <p className="library-continue-series">{book.seriesName}</p>
          )}
          <p className="library-continue-title">{book.title}</p>
          {lessonLabel && (
            <p className="library-continue-lesson">{lessonLabel}</p>
          )}
          <div className="library-continue-progress-track" aria-hidden="true">
            <div
              className="library-continue-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="library-continue-meta">{progress}% complete</p>
        </div>
        <ChevronRight size={20} className="library-continue-arrow" aria-hidden="true" />
      </button>
    </section>
  );
}

function CategoryPills({
  active,
  onSelect,
}: {
  active: CategoryId | "all";
  onSelect: (id: CategoryId | "all") => void;
}) {
  return (
    <nav className="library-categories" aria-label="Browse by category">
      <div className="library-categories-scroll">
        <button
          className={`library-cat-pill ${active === "all" ? "active" : ""}`}
          onClick={() => onSelect("all")}
          type="button"
          aria-pressed={active === "all"}
        >
          All
        </button>
        {SECTION_CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.icon] ?? BookOpen;
          return (
            <button
              key={cat.id}
              className={`library-cat-pill ${active === cat.id ? "active" : ""}`}
              onClick={() => onSelect(cat.id)}
              type="button"
              aria-pressed={active === cat.id}
              style={active === cat.id ? { borderColor: cat.color, color: cat.color } : undefined}
            >
              <Icon size={13} aria-hidden="true" />
              {cat.chipLabel ?? cat.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function BooksGrid({
  books,
  onBookOpen,
}: {
  books: BookEntry[];
  onBookOpen: (book: BookEntry) => void;
}) {
  if (books.length === 0) {
    return (
      <div className="library-empty">
        <BookOpen size={40} aria-hidden="true" />
        <p>No books in this category yet.</p>
        <p className="library-empty-sub">More are being prepared — check back soon.</p>
      </div>
    );
  }

  return (
    <div className="library-grid" role="list">
      {books.map((book) => (
        <div key={book.id} role="listitem">
          <BookCard book={book} onClick={onBookOpen} />
        </div>
      ))}
    </div>
  );
}

function SadaqahNote({ onSupport }: { onSupport: () => void }) {
  return (
    <section className="library-sadaqah" aria-label="Support this project">
      <div className="library-rule" aria-hidden="true"><span /></div>
      <p className="library-sadaqah-arabic" dir="rtl" lang="ar">
        مَن دَلَّ عَلَى خَيرٍ فَلَهُ مِثلُ أَجرِ فَاعِلِهِ
      </p>
      <p className="library-sadaqah-translation">
        "Whoever guides someone to good will have a reward equal to the doer of that good."
      </p>
      <p className="library-sadaqah-ref">Sahih Muslim, 1893</p>
      <p className="library-sadaqah-desc">
        This library is a Sadaqah Jāriyah project. Every lesson shared, every family that reads,
        every student that learns — continues as a living charity.
      </p>
      <button className="library-sadaqah-btn" onClick={onSupport} type="button">
        <HeartHandshake size={16} aria-hidden="true" />
        Support This Work
      </button>
    </section>
  );
}

// ── LibraryHome ───────────────────────────────────────────────────────────

type LibraryHomeProps = {
  onBookOpen: (book: BookEntry) => void;
  onSearch: () => void;
  onSupport: () => void;
  /** Jump directly to reader at saved position (Continue Reading card) */
  onContinueReading: (book: BookEntry) => void;
};

export function LibraryHome({ onBookOpen, onSearch, onSupport, onContinueReading }: LibraryHomeProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all");

  // Sirah book for featured hero
  const sirahBook = useMemo(
    () => LIBRARY_BOOKS.find((b) => b.id === "sirah-prophet-001") ?? null,
    []
  );

  // Find the most recently started book for "Continue Reading"
  const continueBook = useMemo(() => {
    return LIBRARY_BOOKS.find(
      (b) => b.status === "available" && hasBookProgress(b.id)
    ) ?? null;
  }, []);

  // Filter books by selected category.
  // Sirah prophet entry is featured in the hero above — exclude from grid.
  const filteredBooks = useMemo(() => {
    const books = activeCategory === "all"
      ? LIBRARY_BOOKS
      : getBooksByCategory(activeCategory);
    return books.filter((b) => b.id !== "sirah-prophet-001");
  }, [activeCategory]);

  // Active category label for section heading
  const activeCategoryLabel = useMemo(() => {
    if (activeCategory === "all") return "All Books";
    return SECTION_CATEGORIES.find((c) => c.id === activeCategory)?.label ?? "Books";
  }, [activeCategory]);

  return (
    <main className="library-home" id="main-content">
      {/* Skip to content */}
      <a href="#library-books" className="skip-link">Skip to book list</a>

      {/* ARIA live region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="library-announce" />

      <LibraryBrand />
      <WhyOurLegacy />

      {/* Featured Book Hero */}
      {sirahBook && (
        <FeaturedHero onOpen={() => onBookOpen(sirahBook)} />
      )}

      {/* Search shortcut */}
      <div className="library-search-shortcut">
        <button
          className="library-search-btn"
          onClick={onSearch}
          type="button"
          aria-label="Search the library"
        >
          <Search size={16} aria-hidden="true" />
          <span>Search books, topics, companions…</span>
        </button>
      </div>

      {/* Continue Reading */}
      {continueBook && (
        <ContinueReadingCard
          book={continueBook}
          onContinue={() => onContinueReading(continueBook)}
        />
      )}

      {/* Category pills */}
      <CategoryPills active={activeCategory} onSelect={setActiveCategory} />

      {/* Book grid */}
      <section
        id="library-books"
        className="library-books-section"
        aria-label={activeCategoryLabel}
      >
        <div className="library-books-header">
          <h2 className="library-section-heading">{activeCategoryLabel}</h2>
          <p className="library-books-count">{filteredBooks.length} {filteredBooks.length === 1 ? "biography" : "biographies"}</p>
        </div>
        <BooksGrid books={filteredBooks} onBookOpen={onBookOpen} />
      </section>

      {/* Sadaqah note */}
      <SadaqahNote onSupport={onSupport} />

      {/* Footer */}
      <footer className="library-footer">
        <p>© 2026 OUR LEGACY · SirajOne · All rights reserved</p>
        <p>Durban, KwaZulu-Natal, South Africa</p>
      </footer>
      </main>
  );
}
