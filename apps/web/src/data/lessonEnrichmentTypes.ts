/**
 * OUR LEGACY — Lesson Enrichment Types
 *
 * Phase 2: Deep Learning Layer — Lesson Companion
 * Extends the base reader content with structured enrichment fields per lesson.
 *
 * Key convention: "<bookId>:<partNumber>"
 * Example:        "sirah_journey:6"  →  Lesson 6 — The Death of Āminah
 *
 * Template note: Lesson 6 is the permanent template for all future lessons.
 * Adding a new lesson only requires adding an entry to lessonEnrichmentData.ts.
 */

// ── Authentication vocabulary ──────────────────────────────────────────────────

/**
 * Learner-friendly reliability grade for a specific historical claim.
 * Deliberately avoids technical hadith terminology (ṣaḥīḥ/ḥasan) for
 * clarity with family, classroom, and madrasa audiences.
 */
export type AuthenticationGrade =
  | "Established"            // Recorded in Ṣaḥīḥ Muslim / Bukhārī, or consensus of primary Sīrah sources
  | "Widely Accepted"        // Strong scholarly acceptance across major Sīrah books; no significant dispute
  | "Scholarly Discussion"   // Accepted by majority but debated in detail by some scholars
  | "Weak Reports"           // Not well-attested; secondary sources only; not used in lesson content
  | "Rejected Reports";      // Contradicts established sources or deemed unreliable by scholars

// ── Context types ──────────────────────────────────────────────────────────────

export type RecommendedUseContext =
  | "individual"   // Solo reading and reflection
  | "family"       // Family taʿlīm session
  | "classroom"    // School Islamic studies class
  | "madrasa";     // Madrasa / ḥifẓ class

// ── Sub-types ──────────────────────────────────────────────────────────────────

/** Structured key fact — topic label + substantive information */
export interface KeyFact {
  topic: string;
  information: string;
}

/** Lesson drawn from a specific event */
export interface WhatWeLearnItem {
  event: string;
  lesson: string;
}

/** One structured discussion prompt with an optional facilitator hint */
export interface FamilyDiscussionPrompt {
  question: string;
  /** Guidance for the person leading the discussion */
  hint?: string;
}

/**
 * Source reliability grade for a specific historical claim.
 * sources[] must name the actual book(s) that establish or limit the grade.
 */
export interface AuthenticationNote {
  /** The specific historical claim being graded */
  claim: string;
  grade: AuthenticationGrade;
  /** Named source(s) — title and hadith number where applicable */
  sources: string[];
  /** Clarifying note for the reader */
  explanation: string;
}

/** Overall reliability assessment for the entire lesson */
export interface LessonReliabilitySummary {
  overallGrade: AuthenticationGrade;
  /** 2–3 sentences summarising the lesson's source quality */
  summary: string;
}

/** Theological reflection on why Allāh permitted this trial */
export interface WhyDidAllahAllowThis {
  question: string;
  reflection: string;
  /** Optional Qurʾānic connection — Arabic text and reference */
  quranicConnection?: {
    arabic: string;
    translation: string;
    reference: string;
  };
}

/** A single event on the mini timeline graphic */
export interface LessonTimelineEvent {
  year: string;
  label: string;
}

export interface ExploreFurtherItem {
  title: string;
  author?: string;
  type: "book" | "article" | "video" | "audio";
  /** Brief note on why this resource is recommended */
  note: string;
}

export interface TeacherNote {
  /** The intended facilitator for this note */
  audience: "family" | "classroom" | "madrasa" | "assembly" | "all";
  heading: string;
  body: string;
}

export interface QuickReviewItem {
  question: string;
  answer: string;
}

/**
 * Cross-tab connection references.
 * All strings match identifiers used in BookDetail.tsx / bookEnrichmentData.ts:
 *   timeline   → event year strings     (e.g. "~576 CE")
 *   maps       → MAP_VISUALS svgType    (e.g. "abwaa")
 *   characters → character name strings (e.g. "Āminah bint Wahb")
 *   references → reference title strings (e.g. "Ṣaḥīḥ Muslim — Ḥadīth 976")
 */
export interface LessonConnections {
  timeline: string[];
  maps: string[];
  characters: string[];
  references: string[];
}

// ── Main enrichment type ───────────────────────────────────────────────────────

export interface LessonEnrichment {
  /** Book ID — matches ReaderLesson.id */
  bookId: string;
  /** Part number — matches part-divider subtitle number */
  partNumber: number;
  /** Display title — matches part-divider title */
  lessonTitle: string;

  // ── Meta ──────────────────────────────────────────────────────────────────

  /** Estimated time for reading + companion in minutes */
  estimatedReadingTime: {
    readingMinutes: number;
    studyMinutes: number;
  };

  /** Contexts in which this lesson companion is suitable */
  recommendedUse: RecommendedUseContext[];

  // ── Opening sections ───────────────────────────────────────────────────────

  /** 2–3 sentences: why this sīrah moment speaks to families today */
  whyThisMattersToday: string;

  /** A memorable, pithy quotation or statement to take from this lesson */
  memoryGem: string;

  /**
   * ~150-word source-conscious narrative summary of the lesson.
   * Must use hedged language where primary sources use hedged language.
   */
  oneMinuteSummary: string;

  // ── Content sections ───────────────────────────────────────────────────────

  /** Structured historical facts — max 6 items */
  keyFacts: KeyFact[];

  /** Moral and spiritual lessons drawn from this lesson */
  whatWeLearn: WhatWeLearnItem[];

  /** Theological reflection on why Allāh permitted this event */
  whyDidAllahAllowThis: WhyDidAllahAllowThis;

  /** Structured discussion prompts for family / classroom dialogue */
  familyDiscussion: FamilyDiscussionPrompt[];

  /** One concrete family practice tied to this lesson */
  familyApplication: string;

  /** Short Q&A pairs for end-of-lesson review */
  quickReview: QuickReviewItem[];

  // ── Resources ─────────────────────────────────────────────────────────────

  /** Reading / viewing suggestions beyond the lesson */
  exploreFurther: ExploreFurtherItem[];

  // ── Scholarly & teacher sections ───────────────────────────────────────────

  /** Guidance for teachers and parents facilitating this lesson */
  teacherNotes: TeacherNote[];

  /** Overall reliability summary for the lesson as a whole */
  lessonReliabilitySummary: LessonReliabilitySummary;

  /** Per-claim source grading — collapsed by default in the UI */
  authenticationNotes: AuthenticationNote[];

  // ── Connections ────────────────────────────────────────────────────────────

  /** Mini timeline events for the inline graphic */
  lessonTimeline: LessonTimelineEvent[];

  /** Cross-tab links to existing enrichment data */
  connections: LessonConnections;
}

/** Full enrichment map — keyed by "<bookId>:<partNumber>" */
export type LessonEnrichmentMap = Record<string, LessonEnrichment>;
