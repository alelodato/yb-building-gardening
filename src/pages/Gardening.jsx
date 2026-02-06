import { Link } from "react-router-dom";

const gardeningServices = [
  {
    title: "Garden Clean-ups & Clearance",
    desc: "One-off tidy-ups for overgrown gardens: removing debris, clearing leaves, general reset and leaving the space clean and usable.",
    image: "/garden2.webp",
  },
  {
    title: "Lawn Care & Basic Maintenance",
    desc: "Grass cutting, edging, simple lawn improvements and regular visits to keep everything neat across seasons.",
    image: "/garden1.webp",
  },
  {
    title: "Hedges, Trimming & Pruning",
    desc: "Hedge shaping, trimming and basic pruning to keep plants healthy and your garden looking sharp.",
    image: "/garden1.webp",
  },
  {
    title: "Outdoor Improvements",
    desc: "Small upgrades that improve the outdoor space: light adjustments, minor fixes, simple refresh jobs and better usability.",
    image: "/multi-service.webp",
  },
];

const faq = [
  {
    q: "Do you offer regular maintenance?",
    a: "Yes. Many clients choose scheduled visits (weekly/bi-weekly/monthly) to keep the garden consistently tidy.",
  },
  {
    q: "Can you help with a garden that hasn’t been maintained in months?",
    a: "Yes. A full clean-up can be done first, then a simple maintenance plan keeps it under control.",
  },
  {
    q: "Do you only work in Cambridge?",
    a: "Cambridge + surrounding areas depending on distance and workload. Send your postcode and we’ll confirm quickly.",
  },
];

export default function Gardening() {
  return (
    <main className="bg-brand-light min-h-screen">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-3xl font-heading font-semibold leading-tight text-brand-dark md:text-4xl">
              <span className="text-brand-green">Gardening</span> Services in Cambridge
              <br />
              <span className="text-4xl lg:text-5xl">Clean-ups, Trimming & Outdoor Care</span>
            </h1>

            <p className="text-sm text-slate-600 md:text-base max-w-xl">
              Keep your garden tidy, healthy and enjoyable all year round.
              From one-off clean-ups to ongoing maintenance, YB delivers reliable outdoor care with attention to detail.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                state={{
                  selectedService: "Gardening & outdoor care",
                  messagePreset: "I’m interested in gardening services in Cambridge. The garden needs...",
                }}
                className="rounded-full bg-brand-dark px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black"
              >
                Get a Free Quote
              </Link>

              <Link
                to="/services#gardening"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-brand-dark"
              >
                See gardening on Services
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              *Images are representative examples of typical garden care.
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-3">
            <div className="h-32 rounded-lg bg-[url('/garden1.webp')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/garden2.webp')] bg-cover bg-bottom md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/multi-service.webp')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/homep-bg.jpg')] bg-cover bg-center md:h-40" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="mb-8 md:mb-10 space-y-2">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-dark">
              What’s included in Gardening
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl">
              Gardening work should feel simple: a tidy space, healthier plants, and predictable upkeep.
              Choose a one-off visit or a maintenance schedule.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {gardeningServices.map((s) => (
              <article
                key={s.title}
                className="rounded-xl bg-white shadow-card overflow-hidden hover:shadow-lg hover:shadow-brand-dark/10 transition-shadow"
              >
                <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url('${s.image}')` }} />
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-semibold text-brand-dark">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      state={{
                        selectedService: "Gardening & outdoor care",
                        messagePreset: `I’m interested in: ${s.title}. The garden needs...`,
                      }}
                      className="inline-flex text-sm font-medium text-brand-dark hover:underline"
                    >
                      Request a quote →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* mini CTA */}
          <div className="mt-10 rounded-xl bg-brand-light p-6 border border-slate-200">
            <h3 className="font-heading font-semibold text-xl text-brand-dark">
              Want ongoing garden care?
            </h3>
            <p className="text-sm text-slate-600 mt-2 max-w-3xl">
              If you prefer a tidy garden all year, ask for a simple maintenance plan.
              Regular visits reduce costs over time and keep everything under control.
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                state={{
                  selectedService: "Gardening & outdoor care",
                  messagePreset: "I’d like a regular gardening maintenance plan in Cambridge. Frequency preference is...",
                }}
                className="inline-flex rounded-full bg-brand-dark px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black"
              >
                Ask for a maintenance plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-6">
            FAQs
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="rounded-xl bg-white p-5 shadow-card">
                <p className="font-semibold text-brand-dark">{f.q}</p>
                <p className="text-sm text-slate-600 mt-2">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              state={{
                selectedService: "Gardening & outdoor care",
                messagePreset: "I’d like a quote for gardening services in Cambridge. The garden needs...",
              }}
              className="inline-flex rounded-full bg-brand-dark px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-black"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}