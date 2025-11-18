// src/pages/Cookies.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Cookies() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="max-w-5xl mx-auto px-4 py-16 lg:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold font-montserrat text-slate-900 mb-4">
          Cookie Policy
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="space-y-8 text-slate-700 font-inter">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              1. What are cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help the site remember your preferences, improve
              performance, and understand how visitors use the pages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              2. How this website uses cookies
            </h2>
            <p className="mb-3">
              This website is a small portfolio and service site for Yassin
              Barka. Cookies are used in a limited way, mainly to:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Ensure the website works correctly on your device.</li>
              <li>
                Remember basic preferences such as language or cookie choices.
              </li>
              <li>
                (Optional) Collect anonymous statistics to improve the user
                experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              3. Types of cookies used
            </h2>
            <h3 className="font-semibold text-slate-800 mt-3 mb-1">
              Essential cookies
            </h3>
            <p className="mb-3">
              These cookies are necessary for the website to function (for
              example, to remember your cookie consent). They cannot be
              disabled.
            </p>

            <h3 className="font-semibold text-slate-800 mt-3 mb-1">
              Functional & performance cookies
            </h3>
            <p>
              These cookies help improve how the website works, for example by
              measuring which pages are visited most. They are only used if you
              give your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              4. Managing your cookie preferences
            </h2>
            <p className="mb-3">
              You can choose to accept or reject non-essential cookies using the
              cookie banner when you first visit the site. You can also clear
              your cookies at any time in your browser settings. If you delete
              cookies, your preferences may be reset.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              5. Contact
            </h2>
            <p>
              If you have any questions about this Cookie Policy or how cookies
              are used on this website, you can get in touch via the{" "}
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 underline underline-offset-2"
              >
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
