import React, { useEffect, useState } from "react";

const STORAGE_KEY = "yb-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        value,
        timestamp: new Date().toISOString(),
      })
    );
    setVisible(false);
    // Qui in futuro potrai attivare/disattivare script di analytics
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="max-w-5xl mx-auto px-4 pb-4">
        <div className="rounded-2xl bg-white shadow-lg border border-slate-200 px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-sm md:text-[0.9rem] text-slate-700 font-inter">
            <p className="font-semibold text-slate-900 mb-1">
              We use cookies
            </p>
            <p>
              This website uses essential cookies to function, and optional
              cookies to understand how it is used and improve your experience.
              You can accept all cookies or continue with only essential ones.
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleChoice("essential")}
              className="px-3 py-2 rounded-full border border-slate-300 text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Only essential
            </button>
            <button
              type="button"
              onClick={() => handleChoice("all")}
              className="px-4 py-2 rounded-full text-xs md:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
