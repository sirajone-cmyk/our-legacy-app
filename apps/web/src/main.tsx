import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { registerServiceWorker } from "./registerServiceWorker";
import { initAnalytics } from "./lib/analytics";

// Initialise GA4 before first render (silently skipped if VITE_GA_MEASUREMENT_ID is not set)
initAnalytics();

// ── CSS import order matters ────────────────────────────────────────
// 0. Splash (first — loads before everything else)
// 1. Design tokens first (custom properties used by everything else)
// 2. Global base styles (resets, body, splash, existing reader)
// 3. Library & card styles (LibraryHome, BookCard, SearchModal, AppShell)
// 4. Reader enhanced styles (TOC, Maps, Timeline)
// 5. Book detail styles (BookDetail, ChapterList, placeholders)
// 6. Lesson Companion screen
import "./styles/splash.css";
import "./styles/design-tokens.css";
import "./styles/global.css";
import "./styles/library.css";
import "./styles/reader-enhanced.css";
import "./styles/book-detail.css";
import "./styles/lesson-guide.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerServiceWorker();
