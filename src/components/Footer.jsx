import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-light border-t border-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* LOGO + CONTACT */}
        <div className="flex flex-col items-center text-center mb-8">
          <img src='/Logo.png' alt="YB Building & Gardening" className="w-28 mb-3" />

          <p className="text-dark font-body text-sm">email@mail.com</p>
          <p className="text-dark font-body text-sm">(+44) 7860 719 081</p>
          <p className="text-dark font-body text-sm">Cambridge, UK</p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex gap-6 text-dark font-body text-sm mb-6">
          <Link to="/cookies" className="hover:text-brand-red transition-colors">Cookies Policy</Link>
          <Link to="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mb-6">
          <a href="#" aria-label="Instagram" className="text-dark hover:text-brand-green transition-colors text-xl">
           <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-dark hover:text-brand-green transition-colors text-xl">
          <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" aria-label="Facebook" className="text-dark hover:text-brand-green transition-colors text-xl">
          <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>

        {/* BOTTOM */}
        <p className="text-dark/60 text-xs font-body">
        Website by
        <a href="https://www.alessiolodato.dev" target="_blank" rel="noopener noreferrer" className="text-sm"> Alessio Lodato</a>
        </p>
      </div>
    </footer>
  );
}