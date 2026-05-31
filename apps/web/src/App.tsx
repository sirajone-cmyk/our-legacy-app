import { useEffect, useState } from "react";
import { EbookReader } from "./components/EbookReader";
import { HomePage, SupportPage } from "./components/HomePage";
import { getFeaturedReaderLesson, getLessonCover } from "./data/readerContent";

type AppView = "home" | "reader" | "support";

export function App() {
  const lesson = getFeaturedReaderLesson();
  const cover = lesson ? getLessonCover(lesson) : undefined;
  const [showSplash, setShowSplash] = useState(true);
  const [view, setView] = useState<AppView>("home");

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!lesson) {
    return <main className="book-app-empty">No book content found.</main>;
  }

  if (showSplash) {
    return (
      <main className="ebook-splash" onClick={() => setShowSplash(false)}>
        <div className="ebook-splash-grain" />
        <div className="ebook-splash-glow" />
        <section className="ebook-splash-content">
          <div className="ebook-splash-rule" aria-hidden="true">
            <span />
          </div>
          <p className="ebook-splash-kicker">{cover?.series ?? lesson.seriesName}</p>
          <h1>{cover?.title ?? "OUR LEGACY"}</h1>
          <p className="ebook-splash-subtitle">{cover?.subtitle ?? "Daily Family Taʿlīm"}</p>
          <div className="ebook-splash-dot-rule" aria-hidden="true">
            <span />
          </div>
          <p className="ebook-splash-lesson">{cover?.lessonTitle ?? lesson.cardTitle}</p>
          <p className="ebook-splash-author">{cover?.author ?? lesson.author}</p>
          <div className="ebook-splash-progress" aria-hidden="true">
            <span />
          </div>
        </section>
      </main>
    );
  }

  if (view === "home") {
    return <HomePage onBeginReading={() => setView("reader")} onSupport={() => setView("support")} />;
  }

  if (view === "support") {
    return <SupportPage onBeginReading={() => setView("reader")} />;
  }

  return <EbookReader lesson={lesson} />;
}
