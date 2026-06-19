/**
 * HistoryTimeline — Horizontal scrolling timeline of historical events.
 *
 * Design: parchment background, gold timeline line, cream event cards.
 * Horizontally scrollable on mobile, larger cards on desktop.
 * Each event tap reveals a full description card.
 *
 * Triggered from reader pages that have associated timeline events.
 */

import { X } from "lucide-react";
import { useRef, useState } from "react";

export type EventCategory =
  | "birth"
  | "revelation"
  | "battle"
  | "death"
  | "hijrah"
  | "conquest"
  | "milestone";

export type TimelineEvent = {
  id: string;
  /** Display date — can be AH, CE, or both */
  date: string;
  dateHijri?: string;
  dateCE?: string;
  title: string;
  description: string;
  category: EventCategory;
  /** Major events get a larger, golden card */
  importance: "major" | "standard";
  /** Optional: highlights corresponding reader page */
  pageLink?: number;
};

type HistoryTimelineProps = {
  events: TimelineEvent[];
  title?: string;
  subtitle?: string;
  onClose: () => void;
  isOpen: boolean;
  onNavigateToPage?: (pageIndex: number) => void;
};

// ── Category styling ──────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<
  EventCategory,
  { color: string; label: string; symbol: string }
> = {
  birth:       { color: "#2e6f5b", label: "Birth",      symbol: "◉" },
  revelation:  { color: "#b88a32", label: "Revelation", symbol: "◈" },
  battle:      { color: "#7a1f2e", label: "Battle",     symbol: "✕" },
  death:       { color: "#55334f", label: "Passing",    symbol: "◇" },
  hijrah:      { color: "#1a3d5c", label: "Hijrah",     symbol: "➜" },
  conquest:    { color: "#12332f", label: "Conquest",   symbol: "◆" },
  milestone:   { color: "#4a5c35", label: "Milestone",  symbol: "●" },
};

// ── TimelineCard ──────────────────────────────────────────────────────────

function TimelineCard({
  event,
  isSelected,
  onClick,
  position, // "above" or "below" alternates for visual rhythm
}: {
  event: TimelineEvent;
  isSelected: boolean;
  onClick: () => void;
  position: "above" | "below";
}) {
  const config = CATEGORY_CONFIG[event.category];
  const isMajor = event.importance === "major";

  return (
    <div
      className={`tl-card-wrap tl-card-wrap--${position}`}
      data-major={isMajor}
    >
      {/* Connector line to timeline */}
      <div
        className={`tl-connector tl-connector--${position}`}
        aria-hidden="true"
      />

      {/* Card */}
      <button
        className={`tl-card ${isMajor ? "tl-card--major" : ""} ${isSelected ? "tl-card--selected" : ""}`}
        onClick={onClick}
        type="button"
        aria-pressed={isSelected}
        aria-label={`${event.date}: ${event.title}`}
        style={isMajor ? { borderColor: config.color } : undefined}
      >
        {/* Category dot */}
        <span
          className="tl-card-dot"
          style={{ background: config.color }}
          aria-hidden="true"
        >
          {config.symbol}
        </span>

        <span className="tl-card-date">{event.date}</span>
        <span className="tl-card-title">{event.title}</span>

        {isMajor && (
          <span
            className="tl-card-category-badge"
            style={{ color: config.color, borderColor: `${config.color}40` }}
          >
            {config.label}
          </span>
        )}
      </button>
    </div>
  );
}

// ── Event Detail Panel ────────────────────────────────────────────────────

function EventDetail({
  event,
  onClose,
  onNavigate,
}: {
  event: TimelineEvent;
  onClose: () => void;
  onNavigate?: () => void;
}) {
  const config = CATEGORY_CONFIG[event.category];

  return (
    <div
      className="tl-detail"
      role="region"
      aria-label={`Details: ${event.title}`}
    >
      <div className="tl-detail-header">
        <span
          className="tl-detail-category"
          style={{ color: config.color, borderColor: `${config.color}40` }}
        >
          {config.symbol} {config.label}
        </span>
        <button
          className="tl-detail-close"
          onClick={onClose}
          type="button"
          aria-label="Close event details"
        >
          <X size={14} />
        </button>
      </div>

      <h4 className="tl-detail-title">{event.title}</h4>

      <div className="tl-detail-dates">
        {event.dateHijri && (
          <span className="tl-detail-date-hijri">{event.dateHijri} AH</span>
        )}
        {event.dateHijri && event.dateCE && (
          <span className="tl-detail-date-sep" aria-hidden="true">·</span>
        )}
        {event.dateCE && (
          <span className="tl-detail-date-ce">{event.dateCE} CE</span>
        )}
        {!event.dateHijri && !event.dateCE && (
          <span className="tl-detail-date-ce">{event.date}</span>
        )}
      </div>

      <p className="tl-detail-desc">{event.description}</p>

      {onNavigate && event.pageLink !== undefined && (
        <button
          className="tl-detail-link"
          onClick={onNavigate}
          type="button"
        >
          Read this section →
        </button>
      )}
    </div>
  );
}

// ── HistoryTimeline ───────────────────────────────────────────────────────

export function HistoryTimeline({
  events,
  title = "Historical Timeline",
  subtitle,
  onClose,
  isOpen,
  onNavigateToPage,
}: HistoryTimelineProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selected = selectedId ? events.find((e) => e.id === selectedId) ?? null : null;

  const handleCardClick = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="tl-backdrop" onClick={onClose} aria-hidden="true" />
      )}

      {/* Panel */}
      <div
        className={`tl-panel ${isOpen ? "tl-panel--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="tl-header">
          <div>
            <h3 className="tl-title">{title}</h3>
            {subtitle && <p className="tl-subtitle">{subtitle}</p>}
          </div>
          <button
            className="tl-close-btn"
            onClick={onClose}
            type="button"
            aria-label="Close timeline"
          >
            <X size={18} />
          </button>
        </div>

        <div className="tl-rule" aria-hidden="true"><span /></div>

        {/* Scrollable timeline track */}
        <div className="tl-scroll-wrap" ref={scrollRef}>
          <div className="tl-track" aria-label="Timeline">
            {/* Gold centre line */}
            <div className="tl-line" aria-hidden="true" />

            {/* Event cards — alternate above/below */}
            {events.map((event, i) => (
              <TimelineCard
                key={event.id}
                event={event}
                isSelected={selectedId === event.id}
                onClick={() => handleCardClick(event.id)}
                position={i % 2 === 0 ? "above" : "below"}
              />
            ))}
          </div>
        </div>

        {/* Selected event detail */}
        {selected && (
          <EventDetail
            event={selected}
            onClose={() => setSelectedId(null)}
            onNavigate={
              selected.pageLink !== undefined && onNavigateToPage
                ? () => {
                    onNavigateToPage(selected.pageLink!);
                    onClose();
                  }
                : undefined
            }
          />
        )}

        {!selected && (
          <p className="tl-tap-hint">
            Tap any event to learn more
          </p>
        )}
      </div>
    </>
  );
}

// ── Sample data exported for use in reader pages ──────────────────────────

export const ABU_BAKR_TIMELINE: TimelineEvent[] = [
  {
    id: "abu-bakr-birth",
    date: "573 CE",
    dateCE: "573",
    title: "Birth of Abū Bakr al-Ṣiddīq رضي الله عنه",
    description:
      "Abū Bakr was born in Makkah approximately two years after the Prophet ﷺ. He grew up known for his noble character, wisdom, and trustworthiness — earning the respect of all Makkans.",
    category: "birth",
    importance: "major",
  },
  {
    id: "abu-bakr-accepts-islam",
    date: "610 CE",
    dateCE: "610",
    title: "Abū Bakr accepts Islām",
    description:
      "Without a moment of hesitation, Abū Bakr became the first free adult male to accept Islām. The Prophet ﷺ said: 'I never called anyone to Islām except that he hesitated — except Abū Bakr, who did not hesitate at all.'",
    category: "milestone",
    importance: "major",
    pageLink: 1,
  },
  {
    id: "abu-bakr-hijrah",
    date: "622 CE / 1 AH",
    dateHijri: "1",
    dateCE: "622",
    title: "The Hijrah — Cave of Thawr",
    description:
      "Abū Bakr accompanied the Prophet ﷺ on the most important journey in Islamic history. They sheltered in the Cave of Thawr for three nights while the Quraysh searched for them. Allāh granted them divine protection.",
    category: "hijrah",
    importance: "major",
    pageLink: 2,
  },
  {
    id: "badr",
    date: "2 AH / 624 CE",
    dateHijri: "2",
    dateCE: "624",
    title: "Battle of Badr",
    description:
      "Abū Bakr fought at Badr and was one of the closest to the Prophet ﷺ, always by his side. His own son ʿAbd al-Raḥmān was on the side of the Quraysh — yet Abū Bakr offered to fight him himself.",
    category: "battle",
    importance: "standard",
  },
  {
    id: "uhud",
    date: "3 AH / 625 CE",
    dateHijri: "3",
    dateCE: "625",
    title: "Battle of Uḥud",
    description:
      "When many fled the field of Uḥud, Abū Bakr remained with the Prophet ﷺ, defending him with his life. His loyalty never wavered in moments of hardship.",
    category: "battle",
    importance: "standard",
  },
  {
    id: "prophet-death",
    date: "11 AH / 632 CE",
    dateHijri: "11",
    dateCE: "632",
    title: "The Prophet ﷺ passes away",
    description:
      "The most devastating moment for the ummah. When ʿUmar رضي الله عنه could not accept it, it was Abū Bakr who steadied the community with the words: 'Whoever worshipped Muḥammad, then Muḥammad has died. Whoever worships Allāh, then Allāh is Ever-Living, and will never die.'",
    category: "death",
    importance: "major",
  },
  {
    id: "abu-bakr-khalifah",
    date: "11 AH / 632 CE",
    dateHijri: "11",
    dateCE: "632",
    title: "Abū Bakr becomes Khalīfah",
    description:
      "By the consensus of the Companions, Abū Bakr رضي الله عنه became the first Khalīfah — carrying the weight of an ummah in grief, facing apostasy, and maintaining the unity of Islām.",
    category: "milestone",
    importance: "major",
  },
  {
    id: "ridda-wars",
    date: "11–12 AH / 632–633 CE",
    dateHijri: "11–12",
    dateCE: "632–633",
    title: "The Ridda Wars — Suppression of Apostasy",
    description:
      "When tribes across Arabia refused to pay Zakāt and some followed false prophets, Abū Bakr declared: 'I will fight anyone who separates Ṣalāh from Zakāt.' He dispatched eleven armies and restored the unity of Islām.",
    category: "battle",
    importance: "major",
  },
  {
    id: "quran-compiled",
    date: "12 AH / 633 CE",
    dateHijri: "12",
    dateCE: "633",
    title: "Compilation of the Qurʾān",
    description:
      "After many Ḥuffāẓ were martyred in the Ridda wars, Abū Bakr commanded ʿUmar and Zayd ibn Thābit to compile the Qurʾān into a single manuscript for the first time — a gift to the ummah until the Day of Judgement.",
    category: "revelation",
    importance: "major",
  },
  {
    id: "abu-bakr-death",
    date: "13 AH / 634 CE",
    dateHijri: "13",
    dateCE: "634",
    title: "Abū Bakr رضي الله عنه passes away",
    description:
      "After just two years and three months as Khalīfah, Abū Bakr passed away at the age of 63 — the same age as the Prophet ﷺ. He was buried beside the Prophet ﷺ in his noble chamber.",
    category: "death",
    importance: "major",
  },
];
