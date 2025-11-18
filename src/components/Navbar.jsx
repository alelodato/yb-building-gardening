import { Link, NavLink } from "react-router-dom";

const navLinkClasses =
  "text-sm md:text-base font-medium text-slate-700 hover:text-brand-dark transition-colors";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/Logo.png" alt="Logo" className="w-60 h-auto object-contain"/>
        </Link>

        {/* Links desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-brand-dark px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black md:inline-block"
        >
          Get a Free Quote
        </Link>

        {/* Mobile: solo CTA piccola che porta a contact, nav semplice in scroll */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-brand-dark px-3 py-1.5 text-xs font-medium text-white shadow-sm md:hidden"
        >
          Quote
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
