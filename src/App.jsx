import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToHash from "./components/ScrollToHash.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Cookies from "./pages/Cookies.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import Privacy from "./pages/Privacy.jsx";

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-light">
      {loading ? <Loader /> : <Routes />}
      <ScrollToHash />
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
      <CookieBanner />
    </div>
  );
}

export default App;
