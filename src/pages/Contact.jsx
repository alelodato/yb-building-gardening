// src/pages/Contact.jsx
import { useLocation } from "react-router-dom";

function Contact() {
  // Leggo eventuale stato passato dalle card dei servizi
  const location = useLocation();
  const { selectedService, messagePreset } = location.state || {};

  // Placeholder dinamico per la textarea
  const messagePlaceholder =
    messagePreset ||
    "Describe your space, what needs to be done, and your preferred timing.";

  // Valore di default per il select
  const defaultService =
    selectedService || "Furnitures Assembly & Small Repairs";

  return (
    <div className="bg-[url('/contact-bg.webp')] bg-cover bg-center">
      <section className=" bg-gradient-to-tr from-black/90 to-black/70 w-full px-4 py-10 md:py-16">
        <h1 className="mb-3 text-2xl font-semibold-heading text-brand-light md:text-4xl text-center mx-auto">
          Get a Free Quote
        </h1>
        <p className="mb-8 max-w-2xl text-base md:text-lg text-brand-light text-center mx-auto">
          Tell YB what you need help with — building, repairs, gardening, or a
          mix of services. You&apos;ll get a clear, no-obligation quote and a
          realistic timeline based on your project.
        </p>

        <form className="space-y-5 rounded-xl bg-white p-6 shadow-card mx-auto max-w-3xl">
          <div className="grid gap-4 md:grid-cols-1">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Phone (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
                placeholder="(+44) 1234 567 890"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-1 block text-xs font-medium text-slate-700"
            >
              What do you need help with?
            </label>
            <select
              id="service"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
              required
              // qui avviene la magia: se arrivi da una card, questo è già selezionato
              defaultValue={defaultService}
            >
              <option>Furnitures Assembly &amp; Small Repairs</option>
              <option>Dry Lining</option>
              <option>Flooring Installation &amp; Repair</option>
              <option>Roofing &amp; Waterproofing</option>
              <option>Gardening &amp; outdoor care</option>
              <option>Multiple services / custom project</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-xs font-medium text-slate-700"
            >
              Project details
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
              placeholder={messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-full bg-brand-dark px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black md:w-auto"
          >
            Send Request
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;