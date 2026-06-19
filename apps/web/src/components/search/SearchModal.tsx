/**
 * SearchModal — Full-screen search overlay for the library.
 *
 * Searches across: book titles, subtitles, series names, author, category.
 * Designed as a premium Islamic library experience — not a search engine.
 *
 * Future: integrate Fuse.js for full-text fuzzy search.
 */

import { BookOpen, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  LIBRARY_BOOKS,
  LIBRARY_CATEGORIES,
  type BookEntry,
  type CategoryId,
} from "../../data/libraryData";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onBookOpen: (book: BookEntry) => void;
  onCategorySelect?: (id: CategoryId) => void;
};

// ── Search logic ──────────────────────────────────────────────────────────

function searchBooks(query: string): BookEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return LIBRARY_BOOKS.filter((book) => {
    return (
      book.title.toLowerCase().includes(q) ||
      (book.subtitle?.toLowerCase().includes(q) ?? false) ||
      (book.seriesName?.toLowerCase().includes(q) ?? false) ||
      book.author.toLowerCase().includes(q) ||
      book.description.toLowerCase().includes(q) ||
      book.categoryId.includes(q)
    );
  });
}

// ── Sub-components ────────────────────────────────────────────────────────

function SearchInput({
  value,
  onChange,
  onClear,
  inputRef,
}: {
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  return (
    <div className="search-input-wrap">
      <Search size={18} className="search-input-icon" aria-hidden="true" />
      <input
        ref={inputRef}
        className="search-input"
        type="search"
        placeholder="Search books, companions, topics…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search the library"
        autoComplete="off"
        spellCheck={false}
      />
      {value && (
        <button
          className="search-clear-btn"
          onClick={onClear}
          type="button"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

function CategoryGrid({
  onSelect,
}: {
  onSelect?: (id: CategoryId) => void;
}) {
  return (
    <section className="search-categories" aria-label="Browse by category">
      <p className="search-section-label">Browse by Category</p>
      <div className="search-cat-grid">
        {LIBRARY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="search-cat-card"
            onClick={() => onSelect?.(cat.id)}
            type="button"
            style={{ borderColor: `${cat.color}40` }}
          >
            <span
              className="search-cat-dot"
              style={{ background: cat.color }}
              aria-hidden="true"
            />
            <span className="search-cat-label">{cat.label}</span>
            <span
              className="search-cat-ar"
              dir="rtl"
              lang="ar"
            >
              {cat.labelAr}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function SearchResults({
  results,
  query,
  onBookOpen,
}: {
  results: BookEntry[];
  query: string;
  onBookOpen: (book: BookEntry) => void;
}) {
  if (results.length === 0) {
    return (
      <div className="search-empty" role="status">
        <BookOpen size={36} aria-hidden="true" />
        <p className="search-empty-heading">No results for "{query}"</p>
        <p className="search-empty-sub">Try searching for a name, a theme, or a category.</p>
      </div>
    );
  }

  return (
    <section aria-label={`${results.length} results for ${query}`}>
      <p className="search-section-label">
        {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
      </p>
      <ul className="search-results-list" role="list">
        {results.map((book) => (
          <li key={book.id} role="listitem">
            <button
              className={`search-result-item ${book.status === "coming-soon" ? "search-result-item--locked" : ""}`}
              onClick={() => book.status !== "coming-soon" && onBookOpen(book)}
              type="button"
              disabled={book.status === "coming-soon"}
            >
              {/* Cover swatch */}
              <div
                className="search-result-cover"
                style={{ background: book.coverColor }}
                aria-hidden="true"
              />
              {/* Info */}
              <div className="search-result-info">
                {book.seriesName && (
                  <p className="search-result-series">{book.seriesName}</p>
                )}
                <p className="search-result-title">{book.title}</p>
                {book.subtitle && (
                  <p className="search-result-subtitle">{book.subtitle}</p>
                )}
              </div>
              {/* Status */}
              {book.status === "coming-soon" && (
                <span className="search-result-badge">Soon</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ── SearchModal ───────────────────────────────────────────────────────────

export function SearchModal({
  isOpen,
  onClose,
  onBookOpen,
  onCategorySelect,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce search for performance
  const [debouncedQuery, setDebouncedQuery] = useState("");
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 250);
    return () => clearTimeout(t);
  }, [query]);

  // Auto-focus on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setDebouncedQuery("");
    }
  }, [isOpen]);

  // Keyboard: Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const results = useMemo(
    () => searchBooks(debouncedQuery),
    [debouncedQuery]
  );

  const handleBookOpen = (book: BookEntry) => {
    onBookOpen(book);
    onClose();
  };

  const handleCategorySelect = (id: CategoryId) => {
    onCategorySelect?.(id);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="search-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Modal */}
      <div
        className={`search-modal ${isOpen ? "search-modal--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Search the library"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="search-header">
          <p className="search-kicker">OUR LEGACY</p>
          <h2 className="search-heading">Search the Library</h2>
          <button
            className="search-close-btn"
            onClick={onClose}
            type="button"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Input */}
        <SearchInput
          value={query}
          onChange={setQuery}
          onClear={() => setQuery("")}
          inputRef={inputRef}
        />

        {/* Body */}
        <div className="search-body">
          {!debouncedQuery ? (
            <CategoryGrid onSelect={handleCategorySelect} />
          ) : (
            <SearchResults
              results={results}
              query={debouncedQuery}
              onBookOpen={handleBookOpen}
            />
          )}
        </div>
      </div>
    </>
  );
}
