import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";

export default function Contact() {
  // Stato passato dalle card dei servizi
  const location = useLocation();
  const { selectedService, messagePreset } = location.state || {};

  // Ref per il form (serve a EmailJS)
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Placeholder dinamico per la textarea
  const messagePlaceholder =
    messagePreset ||
    "Describe your space, what needs to be done, and your preferred timing.";

  // Valore di default per il select
  const defaultService =
    selectedService || "Furnitures Assembly & Small Repairs";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "9c050044-a03d-4941-b07c-f44eff195c51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      console.log("Message sent!");
    }
  };

  return (
    <div className="bg-[url('/contact-bg.webp')] bg-cover bg-center">
      <section className="bg-gradient-to-tr from-black/90 to-black/70 w-full px-4 py-10 md:py-16">
        <h1 className="mb-3 text-2xl font-semibold-heading text-brand-light md:text-4xl text-center mx-auto">
          Get a Free Quote
        </h1>
        <p className="mb-8 max-w-2xl text-base md:text-lg text-brand-light text-center mx-auto">
          Tell YB what you need help with — building, repairs, gardening, or a
          mix of services. You&apos;ll get a clear, no-obligation quote and a
          realistic timeline based on your project.
        </p>

        <form
          className="space-y-5 rounded-xl bg-white p-6 shadow-card mx-auto max-w-3xl"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input type="hidden" name="access_key" value="9c050044-a03d-4941-b07c-f44eff195c51" />
          <input type="hidden" name="subject" value="New Service Request" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          <input type="hidden" name="from_name" value="YB Property Services Website" />
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
                name="name"
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
                name="email"
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
                name="phone" // <-- EmailJS
                type="tel"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
                placeholder="‪(+44) 1234 567 890‬"
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
              name="service" // <-- EmailJS
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
              required
              defaultValue={defaultService}
            >
              <option>Furnitures Assembly &amp; Small Repairs</option>
              <option>Dry Lining</option>
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
              name="message" // <-- EmailJS
              rows={5}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
              placeholder={messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="inline-flex w-full justify-center rounded-full bg-brand-dark px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send Request"}
          </button>

          {feedback && (
            <p className="text-center text-xs md:text-sm text-slate-700">
              {feedback}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}