/**
 * BookCard — Premium editorial card for OUR LEGACY library.
 *
 * Design: clean cover (Arabic initial) + info panel below.
 * No heavy frames, no leather textures, no SVG illustrations.
 * Typography and whitespace carry the weight.
 */

import type { BookEntry, CategoryId } from "../../data/libraryData";
import { getBookProgress, hasBookProgress } from "../../data/libraryData";

type BookCardProps = {
  book: BookEntry;
  onClick: (book: BookEntry) => void;
  size?: "sm" | "md" | "lg";
};

/* ── Series labels ───────────────────────────────────────────────────────── */
const SERIES_LABEL: Record<CategoryId, string> = {
  sirah:                "Sīrah Series",
  ummahatul_muminin:    "Mothers of the Believers",
  asharah_mubasharah:   "Asharah Mubasharah",
  mufassirun:           "Great Mufassirūn",
  muhaddithin:          "Great Muḥaddithūn",
  fuqaha:               "Great Fuqahāʾ",
  mujahidin:            "Great Mujāhidīn",
  great_women:          "Great Women of Islam",
  qurra:                "Great Qurrāʾ of the Ṣaḥābah",
};

/* ── Arabic initial per personality ─────────────────────────────────────── */
const ARABIC_INITIAL: Record<string, string> = {
  // Sīrah
  "sirah-prophet-001":        "م",
  // Mothers of the Believers
  "um-khadijah":              "خ",
  "um-sawdah":                "س",
  "um-aisha":                 "ع",
  "um-hafsah":                "ح",
  "um-zaynab-khuzaymah":      "ز",
  "um-umm-salamah":           "هـ",
  "um-zaynab-jahsh":          "ز",
  "um-juwayriyyah":           "ج",
  "um-umm-habibah":           "ر",
  "um-safiyyah":              "ص",
  "um-maymunah":              "م",
  // Asharah Mubasharah
  "ash-abu-bakr":             "أ",
  "ash-umar":                 "ع",
  "ash-uthman":               "ع",
  "ash-ali":                  "ع",
  "ash-talha":                "ط",
  "ash-zubayr":               "ز",
  "ash-abdurrahman":          "ع",
  "ash-saad-abi-waqqas":      "س",
  "ash-said-zayd":            "س",
  "ash-abu-ubayda":           "أ",
  // Mufassirūn
  "muf-ibn-masud":            "ع",
  "muf-ubayy":                "أ",
  "muf-zayd":                 "ز",
  "muf-ibn-abbas":            "ع",
  // Muḥaddithūn
  "muh-abu-hurayrah":         "أ",
  "muh-aisha":                "ع",
  "muh-ibn-umar":             "ع",
  "muh-jabir":                "ج",
  "muh-anas":                 "أ",
  // Fuqahāʾ
  "fuq-muadh":                "م",
  "fuq-ali":                  "ع",
  "fuq-aisha":                "ع",
  "fuq-ibn-masud":            "ع",
  "fuq-zayd":                 "ز",
  // Mujāhidīn
  "muj-khalid":               "خ",
  "muj-abu-ubayda":           "أ",
  "muj-amr":                  "ع",
  "muj-saad":                 "س",
  "muj-zubayr":               "ز",
  "muj-bilal":                "ب",
  "muj-hamzah":               "ح",
  "muj-jafar":                "ج",
  "muj-muawiyah":             "م",
  "muj-nusaybah":             "ن",
  "muj-khawlah":              "خ",
  // Great Women
  "gw-fatimah":               "ف",
  "gw-asma":                  "أ",
  "gw-umm-sulaym":            "أ",
  "gw-al-shifa":              "ش",
  "gw-umm-darda":             "أ",
  // Great Qurrāʾ
  "qr-salim":                 "س",
  "qr-abu-darda":             "أ",
};

const DEFAULT_INITIAL = "◆";

/* ── Progress ring ──────────────────────────────────────────────────────── */
function ProgressRing({ percent, color }: { percent: number; color: string }) {
  const r = 14;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return (
    <svg className="book-cover-ring" width="36" height="36" viewBox="0 0 36 36"
      aria-label={`${percent}% complete`}>
      <circle cx="18" cy="18" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
      <circle cx="18" cy="18" r={r} fill="none" stroke={color} strokeWidth="2.5"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform="rotate(-90 18 18)"
        style={{ transition: "stroke-dashoffset 0.6s ease-out" }} />
      <text x="18" y="22" textAnchor="middle" fontSize="7" fontWeight="600" fill="white">
        {percent}%
      </text>
    </svg>
  );
}

/* ── BookCard ─────────────────────────────────────────────────────────────── */
export function BookCard({ book, onClick, size = "md" }: BookCardProps) {
  const progress   = getBookProgress(book.id);
  const started    = hasBookProgress(book.id);
  const complete   = progress >= 95;
  const isLocked   = book.status !== "available";
  const isNew      = !started && !isLocked;
  const gold       = book.accentColor ?? "#d4a843";
  const seriesLabel = SERIES_LABEL[book.categoryId] ?? book.seriesName ?? "";
  const initial    = ARABIC_INITIAL[book.id] ?? DEFAULT_INITIAL;

  const handleClick   = () => onClick(book);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(book); }
  };

  return (
    <article
      className={`book-card book-card--${size}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={
        isLocked
          ? `${book.title} — In Preparation`
          : `${book.title}${started ? `, ${progress}% read` : ""}`
      }
    >
      {/* Cover — dark field with Arabic initial */}
      <div className="book-card-cover" style={{ background: book.coverColor ?? "var(--forest)" }}>

        {/* Subtle inner vignette for depth */}
        <div className="book-card-vignette" aria-hidden="true" />

        {/* Arabic initial — centrepiece */}
        <div className="book-card-initial" aria-hidden="true"
          style={{ color: gold }}>{initial}</div>

        {/* Thin gold rule below initial */}
        <div className="book-card-cover-rule" aria-hidden="true"
          style={{ background: gold }} />

        {/* Progress ring */}
        {started && !complete && (
          <div className="book-cover-ring-wrap">
            <ProgressRing percent={progress} color={gold} />
          </div>
        )}

        {/* Status badge */}
        {isLocked && (
          <span className="book-card-badge book-card-badge--prep"
            style={{ borderColor: `${gold}55`, color: gold }}>
            In Preparation
          </span>
        )}
        {isNew && (
          <span className="book-card-badge book-card-badge--new"
            style={{ borderColor: `${gold}55`, color: gold }}>
            New
          </span>
        )}
        {complete && (
          <span className="book-card-badge book-card-badge--complete"
            style={{ borderColor: `${gold}55`, color: gold }}>
            ✓ Complete
          </span>
        )}
      </div>

      {/* Info panel — white/cream below cover */}
      <div className="book-card-info">
        <p className="book-card-series">{seriesLabel}</p>
        <h3 className="book-card-title">{book.title}</h3>
        {book.subtitle && (
          <p className="book-card-subtitle">{book.subtitle}</p>
        )}
      </div>
    </article>
  );
}

export default BookCard;
