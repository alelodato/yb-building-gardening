export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE — LOGO */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="/Logo.png" 
              alt="YB Building & Gardening" 
              className="w-60 h-auto object-contain"
            />
          </div>

          {/* SOCIALS IF YOU WANT LATER */}
          <div className="flex gap-4 text-gray-600">
            <a href="#"><i className="fa-brands fa-instagram text-2xl"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin text-2xl"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter text-2xl"></i></a>
          </div>
        </div>

        {/* RIGHT SIDE — LINKS */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <a href="/cookies" className="text-gray-700 hover:text-gray-900 text-sm">
            Cookies Policy
          </a>
          <a href="/privacy" className="text-gray-700 hover:text-gray-900 text-sm">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        Website by <span className="font-medium text-gray-700"><a href="https://www.alessiolodato.dev">Alessio Lodato</a></span>
      </div>
    </footer>
  );
}
