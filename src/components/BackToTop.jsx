import { useEffect, useState } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsVisible(window.scrollY > 300);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-6 right-6 z-50 transition-all duration-300
        shadow-lg rounded-full border border-gray-200
        bg-white
        p-3
        flex items-center justify-center
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
            aria-label="Back to top"
        >
            {/* Freccia blu minimal della tua palette */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#020a23ff"   // blu elegante (Tailwind blue-900)
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M6 15 L12 9 L18 15" />
            </svg>
        </button>
    );
}
