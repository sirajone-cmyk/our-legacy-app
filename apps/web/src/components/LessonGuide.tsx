/**
 * OUR LEGACY — Lesson Companion Screen
 *
 * A full-screen enrichment view triggered from the reader's closing page.
 * Dynamically renders whatever lesson enrichment data exists for the
 * current bookId + partNumber. Adding a new lesson only requires data —
 * no component changes needed.
 *
 * Section order:
 *  1. Why This Matters Today
 *  2. Memory Gem
 *  3. One Minute Summary
 *  4. Key Facts
 *  5. What We Learn
 *  6. Why Did Allāh Allow This?
 *  7. Family Discussion
 *  8. Family Application
 *  9. Quick Review
 * 10. Explore Further
 * 11. For Teachers & Parents (collapsible)
 * 12. Lesson Reliability Summary
 * 13. Authentication Notes (collapsed by default)
 * 14. Connections (with mini timeline graphic)
 */

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, ArrowLeft } from "lucide-react";
import type { LessonEnrichment, LessonTimelineEvent, TeacherNote } from "../data/lessonEnrichmentTypes";

// ── Grade badge ────────────────────────────────────────────────────────────────

const GRADE_COLOURS: Record<string, string> = {
  "Established":          "lg-grade-established",
  "Widely Accepted":      "lg-grade-accepted",
  "Scholarly Discussion": "lg-grade-discussion",
  "Weak Reports":         "lg-grade-weak",
  "Rejected Reports":     "lg-grade-rejected",
};

function GradeBadge({ grade }: { grade: string }) {
  const cls = GRADE_COLOURS[grade] ?? "lg-grade-weak";
  return <span className={`lg-grade-badge ${cls}`}>{grade}</span>;
}

// ── Mini timeline graphic ──────────────────────────────────────────────────────

function MiniTimeline({ events }: { events: LessonTimelineEvent[] }) {
  return (
    <div className="lg-mini-timeline" aria-label="Lesson timeline">
      {events.map((event, i) => (
        <div key={i} className="lg-mini-timeline-item">
          <div className="lg-mini-timeline-track">
            <div className="lg-mini-timeline-dot" />
            {i < events.length - 1 && <div className="lg-mini-timeline-line" />}
          </div>
          <div className="lg-mini-timeline-content">
            <span className="lg-mini-timeline-year">{event.year}</span>
            <span className="lg-mini-timeline-label">{event.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Collapsible section ────────────────────────────────────────────────────────

function CollapsibleSection({
  heading,
  defaultOpen = false,
  children,
}: {
  heading: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="lg-collapsible-section">
      <button
        className="lg-collapsible-trigger"
        onClick={() => setOpen((v) => !v)}
        type="button"
        aria-expanded={open}
      >
        <span>{heading}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="lg-collapsible-body">{children}</div>}
    </section>
  );
}

// ── Quick review card ──────────────────────────────────────────────────────────

function ReviewCard({ question, answer }: { question: string; answer: string }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="lg-review-card">
      <p className="lg-review-question">{question}</p>
      {revealed ? (
        <p className="lg-review-answer">{answer}</p>
      ) : (
        <button
          className="lg-review-reveal"
          onClick={() => setRevealed(true)}
          type="button"
        >
          Show Answer
        </button>
      )}
    </div>
  );
}

// ── Teacher notes ──────────────────────────────────────────────────────────────

const AUDIENCE_LABEL: Record<TeacherNote["audience"], string> = {
  family:    "Family Taʿlīm",
  classroom: "Classroom",
  madrasa:   "Madrasa",
  assembly:  "Assembly",
  all:       "All Settings",
};

function TeacherNotesSection({ notes }: { notes: LessonEnrichment["teacherNotes"] }) {
  const [active, setActive] = useState<string>("all");
  const audiences = Array.from(new Set(notes.map((n) => n.audience)));
  const filtered = notes.filter((n) => n.audience === active);

  return (
    <div className="lg-teacher-notes">
      <div className="lg-audience-tabs" role="tablist">
        {audiences.map((aud) => (
          <button
            key={aud}
            role="tab"
            aria-selected={active === aud}
            className={`lg-audience-tab${active === aud ? " active" : ""}`}
            onClick={() => setActive(aud)}
            type="button"
          >
            {AUDIENCE_LABEL[aud]}
          </button>
        ))}
      </div>
      {filtered.map((note) => (
        <div key={note.heading} className="lg-teacher-note-card">
          <h4 className="lg-teacher-note-heading">{note.heading}</h4>
          <p className="lg-teacher-note-body">{note.body}</p>
        </div>
      ))}
    </div>
  );
}

// ── Recommended use chips ──────────────────────────────────────────────────────

const USE_LABEL: Record<string, string> = {
  individual: "Individual Reading",
  family:     "Family Taʿlīm",
  classroom:  "Classroom",
  madrasa:    "Madrasa",
};

// ── Main component ─────────────────────────────────────────────────────────────

export interface LessonGuideProps {
  enrichment: LessonEnrichment;
  onBack: () => void;
}

export function LessonGuide({ enrichment, onBack }: LessonGuideProps) {
  const e = enrichment;

  return (
    <main className="lg-screen">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="lg-header">
        <button className="lg-back-btn" onClick={onBack} type="button" aria-label="Back to lesson">
          <ArrowLeft size={20} />
          <span>Back to Lesson</span>
        </button>
      </header>

      <div className="lg-content">

        {/* ── Title block ─────────────────────────────────────────────────── */}
        <div className="lg-title-block">
          <p className="lg-eyebrow">Lesson Companion</p>
          <h1 className="lg-title">Lesson {e.partNumber} — {e.lessonTitle}</h1>
          <div className="lg-meta-strip">
            <span className="lg-timing">
              ⏱ ~{e.estimatedReadingTime.readingMinutes} min lesson
              &nbsp;·&nbsp;
              ~{e.estimatedReadingTime.studyMinutes} min companion
            </span>
          </div>
          <div className="lg-use-chips">
            {e.recommendedUse.map((ctx) => (
              <span key={ctx} className="lg-use-chip">✓ {USE_LABEL[ctx]}</span>
            ))}
          </div>
        </div>

        {/* ── 1. Why This Matters Today ──────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Why This Matters Today</h2>
          <p className="lg-prose">{e.whyThisMattersToday}</p>
        </section>

        {/* ── 2. Memory Gem ─────────────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Memory Gem</h2>
          <blockquote className="lg-memory-gem">
            <span className="lg-gem-mark" aria-hidden="true">✦</span>
            <p>{e.memoryGem}</p>
          </blockquote>
        </section>

        {/* ── 3. One Minute Summary ─────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">One Minute Summary</h2>
          <p className="lg-prose lg-summary-text">{e.oneMinuteSummary}</p>
        </section>

        {/* ── 4. Key Facts ──────────────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Key Facts</h2>
          <div className="lg-key-facts-table">
            {e.keyFacts.map((fact) => (
              <div key={fact.topic} className="lg-key-fact-row">
                <dt className="lg-fact-topic">{fact.topic}</dt>
                <dd className="lg-fact-info">{fact.information}</dd>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. What We Learn ──────────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">What We Learn</h2>
          <div className="lg-learn-table">
            {e.whatWeLearn.map((item) => (
              <div key={item.event} className="lg-learn-row">
                <dt className="lg-learn-event">{item.event}</dt>
                <dd className="lg-learn-lesson">{item.lesson}</dd>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Why Did Allāh Allow This? ──────────────────────────────── */}
        <section className="lg-section lg-section-allah">
          <h2 className="lg-section-heading">Why Did Allāh Allow This?</h2>
          <p className="lg-allah-question">{e.whyDidAllahAllowThis.question}</p>
          <p className="lg-prose">{e.whyDidAllahAllowThis.reflection}</p>
          {e.whyDidAllahAllowThis.quranicConnection && (
            <aside className="lg-quran-box">
              <p
                className="lg-quran-arabic"
                dir="rtl"
                lang="ar"
              >
                {e.whyDidAllahAllowThis.quranicConnection.arabic}
              </p>
              <p className="lg-quran-translation">
                "{e.whyDidAllahAllowThis.quranicConnection.translation}"
              </p>
              <p className="lg-quran-ref">
                {e.whyDidAllahAllowThis.quranicConnection.reference}
              </p>
            </aside>
          )}
        </section>

        {/* ── 7. Family Discussion ──────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Family Discussion</h2>
          <div className="lg-discussion-cards">
            {e.familyDiscussion.map((prompt, i) => (
              <div key={i} className="lg-discussion-card">
                <p className="lg-discussion-q">{prompt.question}</p>
                {prompt.hint && (
                  <p className="lg-discussion-hint">
                    <span className="lg-hint-label">💡 Facilitator:</span>{" "}
                    {prompt.hint}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. Family Application ─────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Family Application</h2>
          <div className="lg-application-box">
            <p className="lg-prose">{e.familyApplication}</p>
          </div>
        </section>

        {/* ── 9. Quick Review ───────────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Quick Review</h2>
          <div className="lg-review-cards">
            {e.quickReview.map((item, i) => (
              <ReviewCard key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* ── 10. Explore Further ───────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Explore Further</h2>
          <div className="lg-explore-cards">
            {e.exploreFurther.map((item) => (
              <div key={item.title} className="lg-explore-card">
                <div className="lg-explore-icon">
                  <BookOpen size={18} />
                </div>
                <div className="lg-explore-text">
                  <p className="lg-explore-title">{item.title}</p>
                  {item.author && (
                    <p className="lg-explore-author">{item.author}</p>
                  )}
                  <p className="lg-explore-note">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 11. For Teachers & Parents ────────────────────────────────── */}
        <CollapsibleSection heading="For Teachers & Parents" defaultOpen={false}>
          <TeacherNotesSection notes={e.teacherNotes} />
        </CollapsibleSection>

        {/* ── 12. Lesson Reliability Summary ────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Lesson Reliability</h2>
          <div className="lg-reliability-box">
            <div className="lg-reliability-grade">
              <GradeBadge grade={e.lessonReliabilitySummary.overallGrade} />
              <span className="lg-reliability-label">Overall</span>
            </div>
            <p className="lg-prose">{e.lessonReliabilitySummary.summary}</p>
          </div>
        </section>

        {/* ── 13. Authentication Notes (collapsed) ──────────────────────── */}
        <CollapsibleSection heading="Authentication Notes" defaultOpen={false}>
          <p className="lg-auth-intro">
            These notes grade specific claims in this lesson against the primary
            sources. They are provided for transparency — not every detail requires
            verification before reading and reflecting on a lesson.
          </p>
          <div className="lg-auth-notes">
            {e.authenticationNotes.map((note, i) => (
              <div key={i} className="lg-auth-note-card">
                <div className="lg-auth-note-header">
                  <GradeBadge grade={note.grade} />
                </div>
                <p className="lg-auth-claim">{note.claim}</p>
                <p className="lg-auth-explanation">{note.explanation}</p>
                {note.sources.length > 0 && (
                  <ul className="lg-auth-sources">
                    {note.sources.map((src) => (
                      <li key={src}>{src}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* ── 14. Connections ───────────────────────────────────────────── */}
        <section className="lg-section">
          <h2 className="lg-section-heading">Connections</h2>

          {/* Mini timeline */}
          {e.lessonTimeline.length > 0 && (
            <div className="lg-connections-block">
              <h3 className="lg-connections-sub">Timeline</h3>
              <MiniTimeline events={e.lessonTimeline} />
            </div>
          )}

          {/* Maps */}
          {e.connections.maps.length > 0 && (
            <div className="lg-connections-block">
              <h3 className="lg-connections-sub">Maps</h3>
              <div className="lg-connection-chips">
                {e.connections.maps.map((m) => (
                  <span key={m} className="lg-connection-chip">{m}</span>
                ))}
              </div>
            </div>
          )}

          {/* Profiles */}
          {e.connections.characters.length > 0 && (
            <div className="lg-connections-block">
              <h3 className="lg-connections-sub">Profiles</h3>
              <div className="lg-connection-chips">
                {e.connections.characters.map((c) => (
                  <span key={c} className="lg-connection-chip">{c}</span>
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {e.connections.references.length > 0 && (
            <div className="lg-connections-block">
              <h3 className="lg-connections-sub">References</h3>
              <div className="lg-connection-chips lg-connection-chips--refs">
                {e.connections.references.map((r) => (
                  <span key={r} className="lg-connection-chip">{r}</span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── Return button ──────────────────────────────────────────────── */}
        <div className="lg-footer">
          <button className="lg-return-btn" onClick={onBack} type="button">
            ← Return to Lesson
          </button>
        </div>

      </div>
    </main>
  );
}
