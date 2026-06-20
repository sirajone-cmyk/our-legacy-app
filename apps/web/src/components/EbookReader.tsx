import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FastForward,
  Heart,
  Maximize2,
  Menu,
  MessageCircle,
  Mic,
  Minimize2,
  Moon,
  Pause,
  Play,
  Square,
  Sun,
  Type,
  Volume2,
  X
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { getLessonCover } from "../data/readerContent";
import type { ReaderLesson, ReaderPage, ReaderSection, SacredTextBox } from "../data/readerContent";
import { getLessonEnrichment } from "../data/lessonEnrichmentData";

// ── Part number detection ──────────────────────────────────────────────────────

/**
 * Scans backwards through the pages array from currentIndex to find the
 * nearest part-divider page and extracts the number from its subtitle.
 * Returns null if no part-divider is found.
 *
 * Example: subtitle "Part 6 — The Death of Āminah" → 6
 */
function getPartNumber(pages: ReaderPage[], currentIndex: number): number | null {
  for (let i = currentIndex; i >= 0; i--) {
    const p = pages[i];
    if (p?.kind === "part-divider") {
      const match = p.subtitle.match(/\d+/);
      return match ? parseInt(match[0], 10) : null;
    }
  }
  return null;
}

const STORAGE_PREFIX = "our_legacy_reader_page";
const SCROLL_PREFIX = "our_legacy_reader_scroll";

// ── Page label helpers ─────────────────────────────────────────────────────────

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
  if (page.kind === "segment") return page.chapterTitle;
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
  if (page.kind === "segment") return `Part ${page.segmentNumber} · ${index + 1}/${total}`;
  if (page.kind === "reflection") return `Reflection · ${index + 1}/${total}`;
  return `Closing · ${index + 1}/${total}`;
}

// ── Sub-components ─────────────────────────────────────────────────────────────

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
      <p className="book-translation">"{box.translation}"</p>
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
        — Part {page.segmentNumber} | {page.minutes} minutes —
      </p>
      <h1>{page.chapterTitle}</h1>
      <p className="book-sub-label">{page.subLabel}</p>
      <SacredBox box={page.hadith} />
      <p className="book-section-label">Explanation</p>
      {page.explanation.map((paragraph, i) => (
        <p key={paragraph.slice(0, 90)} className={i === 0 ? "drop-cap" : undefined}>{paragraph}</p>
      ))}
      {page.sections.map((section, index) => (
        <ReaderSectionBlock key={`${section.heading ?? section.sacredText?.arabic ?? "section"}-${index}`} section={section} />
      ))}
      <p className="book-reflection-prompt">{page.reflection}</p>
    </article>
  );
}

function ReflectionPage({
  page,
  hasGuide,
  onViewGuide,
}: {
  page: Extract<ReaderPage, { kind: "reflection" }>;
  hasGuide: boolean;
  onViewGuide?: () => void;
}) {
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
      {hasGuide && onViewGuide && (
        <div className="closing-guide-cta closing-guide-cta--secondary">
          <div className="closing-guide-cta-rule" aria-hidden="true" />
          <button
            className="closing-guide-cta-btn closing-guide-cta-btn--secondary"
            onClick={onViewGuide}
            type="button"
          >
            Open Lesson Companion →
          </button>
        </div>
      )}
    </article>
  );
}

function ClosingPage({
  page,
  hasGuide,
  onViewGuide,
}: {
  page: Extract<ReaderPage, { kind: "closing" }>;
  hasGuide: boolean;
  onViewGuide?: () => void;
}) {
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
      {page.nextLessonPreview && (
        <div className="closing-next-preview">
          <div className="closing-next-rule" />
          <p className="closing-next-label">Coming Next</p>
          <p className="closing-next-text">{page.nextLessonPreview}</p>
        </div>
      )}
      {hasGuide && onViewGuide && (
        <div className="closing-guide-cta">
          <div className="closing-guide-cta-rule" aria-hidden="true" />
          <div className="closing-guide-cta-card">
            <p className="closing-guide-cta-eyebrow">✦ Lesson Companion</p>
            <p className="closing-guide-cta-desc">
              Reflection questions, family discussion, key facts, and source notes
              — tailored to this lesson.
            </p>
            <div className="closing-guide-cta-meta">
              <span>✓ Individual</span>
              <span>✓ Family Taʿlīm</span>
              <span>✓ Classroom</span>
              <span>✓ Madrasa</span>
            </div>
            <button
              className="closing-guide-cta-btn"
              onClick={onViewGuide}
              type="button"
            >
              Open Lesson Companion →
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function ReaderPageView({
  page,
  onBegin,
  hasGuide,
  onViewGuide,
}: {
  page: ReaderPage;
  onBegin: () => void;
  hasGuide: boolean;
  onViewGuide?: () => void;
}) {
  if (page.kind === "cover") return <CoverPage page={page} onBegin={onBegin} />;
  if (page.kind === "part-divider") return <PartDividerPage page={page} onBegin={onBegin} />;
  if (page.kind === "segment") return <SegmentPage page={page} />;
  if (page.kind === "reflection") return <ReflectionPage page={page} hasGuide={hasGuide} onViewGuide={onViewGuide} />;
  return <ClosingPage page={page} hasGuide={hasGuide} onViewGuide={onViewGuide} />;
}

// ── Read-aloud helpers ─────────────────────────────────────────────────────────

/**
 * Assembles all readable English text from a page into a single string
 * for the Web Speech API to narrate.
 */
function buildPageText(page: ReaderPage): string {
  if (page.kind === "cover") {
    return `${page.title}. ${page.lessonTitle}.`;
  }
  if (page.kind === "part-divider") {
    return `${page.title}. ${page.subtitle}. ${page.description.join(" ")}`;
  }
  if (page.kind === "reflection") {
    const qs = page.questions.map((q, i) => `Question ${i + 1}. ${q}`).join(" ");
    return `Reflection. ${qs} Action point. ${page.actionPoint}`;
  }
  if (page.kind === "closing") {
    const preview = page.nextLessonPreview ? ` Coming next. ${page.nextLessonPreview}` : "";
    return `Closing. ${page.paragraphs.join(" ")} Duaa. ${page.duaTranslation}${preview}`;
  }
  // segment
  const parts: string[] = [page.chapterTitle, "."];
  parts.push(...page.explanation);
  for (const section of page.sections) {
    if (section.heading) parts.push(section.heading, ".");
    if (section.text) parts.push(...section.text);
  }
  parts.push(page.reflection);
  return parts.join(" ");
}

const SPEEDS = [0.75, 1, 1.25, 1.5, 2] as const;
type Speed = (typeof SPEEDS)[number];
type ReadAloudState = "idle" | "playing" | "paused";

const VOICE_PREF_KEY = "our_legacy_tts_voice";

/**
 * Priority patterns for auto-selecting the best available English voice.
 * First match wins. Neural/Natural voices are significantly clearer.
 */
const VOICE_PRIORITY: RegExp[] = [
  /microsoft.*aria.*natural/i,
  /microsoft.*jenny.*natural/i,
  /microsoft.*guy.*natural/i,
  /microsoft.*davis.*natural/i,
  /google.*us.*english/i,
  /google.*english.*united states/i,
  /google.*english/i,
  /samantha/i,          // iOS — high quality built-in
  /karen/i,             // iOS AU — very clear
  /daniel/i,            // iOS UK
  /microsoft.*aria/i,
  /microsoft.*zira/i,
  /microsoft.*david/i,
];

/** Returns true if the voice name suggests high (Neural / Natural / Enhanced) quality */
function isHighQuality(v: SpeechSynthesisVoice): boolean {
  return /natural|neural|enhanced|premium/i.test(v.name);
}

/** Short display name — strips "Microsoft" / "Google" prefix noise */
function shortVoiceName(v: SpeechSynthesisVoice): string {
  return v.name
    .replace(/^Microsoft\s+/i, "")
    .replace(/\s+Online\s*\(Natural\)/i, " ·")
    .replace(/\s+\(Natural\)/i, " ·")
    .replace(/^Google\s+/i, "")
    .trim();
}

function pickBestVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const english = voices.filter((v) => /^en/i.test(v.lang));
  if (!english.length) return voices[0] ?? null;
  for (const pattern of VOICE_PRIORITY) {
    const match = english.find((v) => pattern.test(v.name));
    if (match) return match;
  }
  // Prefer online (server-side) voices — tend to be clearer
  return english.find((v) => !v.localService) ?? english[0] ?? null;
}

function ReadAloudBar({ page, nightMode }: { page: ReaderPage; nightMode: boolean }) {
  const [state, setState] = useState<ReadAloudState>("idle");
  const [speed, setSpeed] = useState<Speed>(1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>(() =>
    localStorage.getItem(VOICE_PREF_KEY) ?? ""
  );
  const [pickerOpen, setPickerOpen] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load voices — Chrome fires voiceschanged asynchronously; Safari/Firefox sync
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;

    const load = () => {
      const all = synth.getVoices();
      const english = all
        .filter((v) => /^en/i.test(v.lang))
        .sort((a, b) => {
          // Sort: high quality first, then by name
          const aHQ = isHighQuality(a) ? 0 : 1;
          const bHQ = isHighQuality(b) ? 0 : 1;
          return aHQ - bHQ || a.name.localeCompare(b.name);
        });
      if (english.length) {
        setVoices(english);
        // Auto-select: use saved preference if still available, else pick best
        setSelectedVoiceName((prev) => {
          if (prev && english.some((v) => v.name === prev)) return prev;
          const best = pickBestVoice(english);
          const bestName = best?.name ?? "";
          localStorage.setItem(VOICE_PREF_KEY, bestName);
          return bestName;
        });
      }
    };

    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, []);

  // Cancel speech when page changes
  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
      setState("idle");
    };
  }, [page]);

  // Cancel on unmount
  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  const getVoice = () =>
    voices.find((v) => v.name === selectedVoiceName) ??
    pickBestVoice(voices) ??
    null;

  const speak = (fromPaused = false) => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (fromPaused) { synth.resume(); setState("playing"); return; }

    synth.cancel();
    const text = buildPageText(page);
    const utt = new SpeechSynthesisUtterance(text);
    const voice = getVoice();
    if (voice) {
      utt.voice = voice;
      utt.lang = voice.lang;
    } else {
      utt.lang = "en-US";
    }
    utt.rate = speed;
    utt.pitch = 1;
    utt.volume = 1;
    utt.onstart = () => setState("playing");
    utt.onpause = () => setState("paused");
    utt.onresume = () => setState("playing");
    utt.onend = () => setState("idle");
    utt.onerror = () => setState("idle");
    utteranceRef.current = utt;
    synth.speak(utt);
  };

  const pause = () => { window.speechSynthesis?.pause(); setState("paused"); };
  const stop  = () => { window.speechSynthesis?.cancel(); setState("idle"); };

  const cycleSpeed = () => {
    const next = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length] ?? 1;
    setSpeed(next);
    if (state === "playing") { stop(); setTimeout(() => speak(), 80); }
  };

  const selectVoice = (name: string) => {
    setSelectedVoiceName(name);
    localStorage.setItem(VOICE_PREF_KEY, name);
    setPickerOpen(false);
    // If currently reading, restart with new voice
    if (state !== "idle") { stop(); setTimeout(() => speak(), 80); }
  };

  const notSupported = typeof window === "undefined" || !window.speechSynthesis;
  if (notSupported) return null;

  const activeVoice = voices.find((v) => v.name === selectedVoiceName);
  const activeLabel = activeVoice ? shortVoiceName(activeVoice) : "Voice";

  return (
    <div className={`book-read-aloud-bar${nightMode ? " night" : ""}`}>

      {/* Voice picker panel — floats above the bar */}
      {pickerOpen && (
        <div className="book-voice-picker">
          <div className="book-voice-picker-header">
            <span>Choose Narrator Voice</span>
            <button
              onClick={() => setPickerOpen(false)}
              type="button"
              aria-label="Close voice picker"
            >
              <X size={16} />
            </button>
          </div>
          <div className="book-voice-list">
            {voices.length === 0 && (
              <p className="book-voice-empty">
                No English voices found on this device.
              </p>
            )}
            {voices.map((v) => (
              <button
                key={v.name}
                className={`book-voice-item${v.name === selectedVoiceName ? " active" : ""}`}
                onClick={() => selectVoice(v.name)}
                type="button"
              >
                <span className="book-voice-item-name">{shortVoiceName(v)}</span>
                <span className="book-voice-item-meta">
                  {isHighQuality(v) && <span className="book-voice-badge hd">HD</span>}
                  {!v.localService && <span className="book-voice-badge online">Online</span>}
                  <span className="book-voice-lang">{v.lang}</span>
                </span>
              </button>
            ))}
          </div>
          <p className="book-voice-tip">
            💡 On iPhone: Settings → Accessibility → Spoken Content → Voices → English → download an Enhanced voice for best quality.
          </p>
        </div>
      )}

      <div className="book-read-aloud-inner">
        <Mic size={15} className="book-read-aloud-icon" aria-hidden="true" />
        <span className="book-read-aloud-label">Read Aloud</span>

        {/* Playback controls */}
        <div className="book-read-aloud-controls">
          {state === "idle" && (
            <button className="book-read-aloud-btn primary" onClick={() => speak()} type="button" aria-label="Play">
              <Play size={16} /><span>Play</span>
            </button>
          )}
          {state === "playing" && (
            <>
              <button className="book-read-aloud-btn" onClick={pause} type="button" aria-label="Pause">
                <Pause size={16} />
              </button>
              <button className="book-read-aloud-btn danger" onClick={stop} type="button" aria-label="Stop">
                <Square size={14} />
              </button>
            </>
          )}
          {state === "paused" && (
            <>
              <button className="book-read-aloud-btn primary" onClick={() => speak(true)} type="button" aria-label="Resume">
                <Play size={16} /><span>Resume</span>
              </button>
              <button className="book-read-aloud-btn danger" onClick={stop} type="button" aria-label="Stop">
                <Square size={14} />
              </button>
            </>
          )}
        </div>

        {/* Speed control */}
        <button
          className="book-read-aloud-speed"
          onClick={cycleSpeed}
          type="button"
          aria-label={`Speed ${speed}x — tap to change`}
        >
          <FastForward size={13} />{speed}×
        </button>

        {/* Voice selector button */}
        <button
          className={`book-read-aloud-voice-btn${pickerOpen ? " active" : ""}`}
          onClick={() => setPickerOpen((o) => !o)}
          type="button"
          aria-label="Choose narrator voice"
          title={selectedVoiceName}
        >
          <Volume2 size={13} />
          <span className="book-read-aloud-voice-name">{activeLabel}</span>
        </button>

        {state !== "idle" && (
          <span className="book-read-aloud-status">
            {state === "playing" ? "Reading…" : "Paused"}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Sticky Audio Player ────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function StickyAudioPlayer({ url, title }: { url: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      void audio.play();
    }
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const clientX =
      "touches" in event
        ? event.touches[0]?.clientX ?? rect.left
        : (event as React.MouseEvent).clientX;
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  };

  return (
    <div className="book-audio-player">
      <audio
        ref={audioRef}
        src={url}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); setCurrentTime(0); }}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
      />
      <div className="book-audio-inner">
        <button
          className="book-audio-play-btn"
          onClick={togglePlay}
          type="button"
          aria-label={playing ? "Pause audio" : "Play audio"}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <div className="book-audio-info">
          <span className="book-audio-title">{title}</span>
          <div
            className="book-audio-track"
            onClick={handleSeek}
            onTouchEnd={handleSeek}
            role="slider"
            aria-label="Seek audio"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="book-audio-track-fill" style={{ width: `${progress}%` }} />
            <div className="book-audio-thumb" style={{ left: `${progress}%` }} />
          </div>
        </div>

        <span className="book-audio-time">
          {formatTime(currentTime)}
          <span className="book-audio-duration"> / {formatTime(duration)}</span>
        </span>

        <Volume2 size={15} className="book-audio-vol-icon" aria-hidden="true" />
      </div>
    </div>
  );
}

// ── Main EbookReader component ─────────────────────────────────────────────────

export function EbookReader({
  lesson,
  onComplete,
  onBack,
  onViewGuide,
}: {
  lesson: ReaderLesson;
  onComplete?: () => void;
  onBack?: () => void;
  /** Called with the detected partNumber when user opens the Lesson Companion */
  onViewGuide?: (partNumber: number) => void;
}) {
  const storageKey = `${STORAGE_PREFIX}:${lesson.id}`;
  const scrollKey = `${SCROLL_PREFIX}:${lesson.id}`;
  const cover = getLessonCover(lesson);

  // Page index — initialised once from localStorage
  const [pageIndex, setPageIndex] = useState(() => {
    const stored = Number(localStorage.getItem(`${STORAGE_PREFIX}:${lesson.id}`) ?? "0");
    return Number.isFinite(stored) ? stored : 0;
  });

  const [contentsOpen, setContentsOpen] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [distractionFree, setDistractionFree] = useState(false);

  // ── Refs ──────────────────────────────────────────────────────────────────────
  // Touch start tracked in refs — no state update, no re-render on touch start
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Scroll container ref
  const stageRef = useRef<HTMLElement>(null);

  // ── Derived values ────────────────────────────────────────────────────────────
  const total = lesson.pages.length;
  const safeIndex = Math.max(0, Math.min(pageIndex, total - 1));
  const page = lesson.pages[safeIndex] ?? lesson.pages[0];
  const progressPct = useMemo(() => Math.round(((safeIndex + 1) / total) * 100), [safeIndex, total]);

  // Detect part number from nearest preceding part-divider (used for Lesson Companion)
  const currentPartNumber = useMemo(
    () => getPartNumber(lesson.pages, safeIndex),
    [lesson.pages, safeIndex]
  );

  // Check whether enrichment data exists for the current lesson part
  // lesson.id === book.lessonKey === e.g. "sirah_journey" (no colon)
  const hasGuide = currentPartNumber !== null
    ? getLessonEnrichment(lesson.id, currentPartNumber) !== undefined
    : false;

  const handleViewGuide = useMemo(() => {
    if (!onViewGuide || currentPartNumber === null || !hasGuide) return undefined;
    return () => onViewGuide(currentPartNumber);
  }, [onViewGuide, currentPartNumber, hasGuide]);

  // ── Effects ───────────────────────────────────────────────────────────────────

  // Save page index whenever it changes
  useEffect(() => {
    localStorage.setItem(storageKey, String(safeIndex));
  }, [safeIndex, storageKey]);

  // Restore scroll position when page changes (after paint)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const saved = Number(localStorage.getItem(`${scrollKey}:${safeIndex}`) ?? "0");
    const raf = requestAnimationFrame(() => {
      stage.scrollTop = saved > 0 ? saved : 0;
    });
    return () => cancelAnimationFrame(raf);
  }, [safeIndex, scrollKey]);

  // Save scroll position as user reads (throttled with rAF)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          if (stage.scrollTop > 0) {
            localStorage.setItem(`${scrollKey}:${safeIndex}`, String(Math.round(stage.scrollTop)));
          }
          ticking = false;
        });
      }
    };
    stage.addEventListener("scroll", onScroll, { passive: true });
    return () => stage.removeEventListener("scroll", onScroll);
  }, [safeIndex, scrollKey]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setPageIndex((current) => {
          const next = Math.min(total - 1, current + 1);
          if (next === total - 1) onComplete?.();
          return next;
        });
        requestAnimationFrame(() => { stageRef.current?.scrollTo({ top: 0 }); });
      }
      if (event.key === "ArrowLeft") {
        setPageIndex((current) => Math.max(0, current - 1));
        requestAnimationFrame(() => { stageRef.current?.scrollTo({ top: 0 }); });
      }
      if (event.key.toLowerCase() === "m") setContentsOpen((current) => !current);
      if (event.key === "Escape") setContentsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total, onComplete]);

  // ── Navigation ────────────────────────────────────────────────────────────────

  const scrollToTop = () => {
    requestAnimationFrame(() => {
      stageRef.current?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    });
  };

  const goBack = () => {
    setPageIndex((current) => Math.max(0, current - 1));
    scrollToTop();
  };

  const goForward = () => {
    setPageIndex((current) => {
      const next = Math.min(total - 1, current + 1);
      if (next === total - 1) onComplete?.();
      return next;
    });
    scrollToTop();
  };

  const goToPage = (index: number) => {
    setPageIndex(index);
    setContentsOpen(false);
    scrollToTop();
  };

  // ── Touch swipe (horizontal only — refs avoid re-renders) ─────────────────

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchStartY.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    const deltaY = (event.changedTouches[0]?.clientY ?? 0) - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    const isHorizontalSwipe = Math.abs(deltaX) > 72 && Math.abs(deltaX) > Math.abs(deltaY) * 1.8;
    if (!isHorizontalSwipe) return;
    if (deltaX < 0) goForward();
    else goBack();
  };

  // ── Render ────────────────────────────────────────────────────────────────────

  if (!page) return null;

  const audioUrl = page.kind === "segment" ? (page.audioUrl ?? null) : null;
  const audioTitle = page.kind === "segment" ? page.chapterTitle : "";

  const readerClass = [
    "book-reader-app",
    nightMode ? "night" : "",
    audioUrl ? "has-audio" : "",
    "has-read-aloud",
    distractionFree ? "df" : ""
  ].filter(Boolean).join(" ");

  return (
    <main
      className={readerClass}
      style={{ "--book-font-scale": fontScale } as CSSProperties}
    >
      {onBack && (
        <button
          className="book-floating-back"
          onClick={onBack}
          type="button"
          aria-label="Back to library"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      <button
        className="book-floating-menu"
        onClick={() => setContentsOpen(true)}
        type="button"
        aria-label="Open table of contents"
      >
        <Menu size={22} />
      </button>

      <div className="book-floating-tools">
        <button
          onClick={() => setFontScale((value) => (value >= 1.14 ? 0.94 : value + 0.1))}
          type="button"
          aria-label="Adjust text size"
        >
          <Type size={19} />
        </button>
        <button
          onClick={() => setNightMode((value) => !value)}
          type="button"
          aria-label="Toggle night mode"
        >
          {nightMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button
          onClick={() => setDistractionFree((v) => !v)}
          type="button"
          aria-label={distractionFree ? "Exit focus mode" : "Enter focus mode"}
          className={distractionFree ? "active" : undefined}
        >
          {distractionFree ? <Minimize2 size={19} /> : <Maximize2 size={19} />}
        </button>
      </div>

      <section
        ref={stageRef}
        className="book-reading-stage"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={distractionFree ? () => setDistractionFree(false) : undefined}
      >
        <ReaderPageView
          page={page}
          onBegin={goForward}
          hasGuide={hasGuide}
          onViewGuide={handleViewGuide}
        />
      </section>

      <ReadAloudBar page={page} nightMode={nightMode} />

      {audioUrl && <StickyAudioPlayer url={audioUrl} title={audioTitle} />}

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

      <div className="book-progress-track" aria-label={`${progressPct}% complete`}>
        <span style={{ width: `${progressPct}%` }} />
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
