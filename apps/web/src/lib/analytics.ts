/**
 * OUR LEGACY — Google Analytics 4
 *
 * The GA4 gtag snippet is loaded directly in index.html (fires before React).
 * initAnalytics() detects it and marks the module as ready for trackPageView/trackEvent.
 *
 * Fallback: if running without the index.html snippet (dev only),
 * set VITE_GA_MEASUREMENT_ID in apps/web/.env.local and the script is injected dynamically.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialised = false;

/**
 * Initialise GA4. Call once at app start (main.tsx).
 * Safe to call multiple times -- only runs on the first call.
 */
export function initAnalytics(): void {
  if (initialised) return;

  // Primary path: gtag loaded directly in index.html
  if (typeof window.gtag !== "undefined") {
    initialised = true;
    return;
  }

  // Fallback: dynamic injection for dev without the HTML snippet
  if (!MEASUREMENT_ID || MEASUREMENT_ID.startsWith("G-XXXXXXX")) return;

  initialised = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

/**
 * Track a virtual page view.
 * Call on every screen change so single-page navigation is counted.
 */
export function trackPageView(pagePath: string, pageTitle: string): void {
  if (!initialised || typeof window.gtag === "undefined") return;
  window.gtag("event", "page_view", {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

/**
 * Track a named custom event.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!initialised || typeof window.gtag === "undefined") return;
  window.gtag("event", eventName, params ?? {});
}
