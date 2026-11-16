import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const KEY = "theme";

function systemTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function storedTheme() {
  try {
    const t = localStorage.getItem(KEY);
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

// Follows the system setting until someone picks a theme; their pick is
// remembered. public/index.html applies a saved pick before React loads.
function ThemeToggle() {
  const [theme, setTheme] = useState(() => storedTheme() || systemTheme());

  // Keep following the system while nothing has been picked.
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => { if (!storedTheme()) setTheme(systemTheme()); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch { /* private mode: still switches */ }
    setTheme(next);
  };

  const next = theme === "dark" ? "light" : "dark";
  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      <svg viewBox="0 0 8 8" width="20" height="20" shapeRendering="crispEdges" aria-hidden="true">
        {theme === "dark" ? (
          // sun
          <path fill="currentColor" d="M3 0h2v1H3zM3 7h2v1H3zM0 3h1v2H0zM7 3h1v2H7zM1 1h1v1H1zM6 1h1v1H6zM1 6h1v1H1zM6 6h1v1H6zM2 2h4v4H2z" />
        ) : (
          // moon
          <path fill="currentColor" d="M2 0h4v1H2zM1 1h2v1H1zM0 2h2v4H0zM1 6h2v1H1zM2 7h4v1H2z" />
        )}
      </svg>
    </button>
  );
}

export default ThemeToggle;
