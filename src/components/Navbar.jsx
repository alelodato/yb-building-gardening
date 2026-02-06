import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const baseLink =
  "relative text-sm md:text-base font-medium text-slate-700 hover:text-brand-dark transition-colors";

function linkClasses({ isActive }) {
  return [
    baseLink,
    isActive
      ? "text-brand-dark after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-brand-dark after:content-['']"
      : "",
  ].join(" ");
}

function mobileLinkClasses({ isActive }) {
  return [
    "block py-3 text-base font-medium transition-colors",
    isActive ? "text-brand-dark" : "text-slate-700 hover:text-brand-dark",
  ].join(" ");
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // ESC chiude
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // blocca scroll quando menu aperto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img src="/Logo.png" alt="Logo" className="w-60 h-auto object-contain" />
        </Link>

        {/* Links desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/building" className={linkClasses}>Building</NavLink>
          <NavLink to="/gardening" className={linkClasses}>Gardening</NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </div>

        {/* CTA desktop */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-brand-dark px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black md:inline-block"
        >
          Get a Free Quote
        </Link>

        {/* Mobile: SOLO burger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* ✅ Mobile menu in PORTAL */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[99999] md:hidden">
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/45"
              onClick={closeMenu}
            />

            {/* Panel */}
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 p-4">
                <span className="text-sm font-semibold text-slate-800">Menu</span>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <NavLink to="/" end className={mobileLinkClasses} onClick={closeMenu}>
                  Home
                </NavLink>
                <NavLink to="/services" className={mobileLinkClasses} onClick={closeMenu}>
                  Services
                </NavLink>
                <NavLink to="/contact" className={mobileLinkClasses} onClick={closeMenu}>
                  Contact
                </NavLink>

                <div className="mt-5">
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-brand-dark px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-black"
                    onClick={closeMenu}
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}

export default Navbar;