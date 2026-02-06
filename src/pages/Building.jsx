import { Link } from "react-router-dom";

const buildingServices = [
  {
    title: "Home Repairs & Maintenance",
    desc: "Fixes for common issues like loose fixtures, damaged skirting boards, minor wall repairs, doors that don’t close properly, and general maintenance.",
    image: "/small-r.webp",
  },
  {
    title: "Dry Lining (Plasterboard)",
    desc: "Plasterboard installation, partition walls, ceiling systems, patch repairs and smooth finishing ready for painting—clean, precise and reliable.",
    image: "/lining.webp",
  },
  {
    title: "Roofing & Waterproofing",
    desc: "Tile replacement, leak checks, minor roofing repairs and waterproof coatings to protect your property from weather damage and long-term wear.",
    image: "/roofing.webp",
  },
  {
    title: "Flooring & Interior Upgrades",
    desc: "Support with small flooring jobs, adjustments, trims, and improvements that make the space look cleaner and feel more solid.",
    image: "/flooring.webp",
  },
];

const faq = [
  {
    q: "Do you handle small jobs?",
    a: "Yes. Small repairs and quick fixes are a big part of the service—ideal for homeowners, tenants, landlords and busy professionals.",
  },
  {
    q: "Can you combine multiple building tasks in one visit?",
    a: "Absolutely. Many projects are a mix of small repairs, lining/fixing walls and finishing touches. One visit can cover multiple tasks when planned properly.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes. You’ll get a clear quote and an honest timeline based on the job complexity and availability.",
  },
];

export default function Building() {
  return (
    <main className="bg-brand-light min-h-screen">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-3xl font-heading font-semibold leading-tight text-brand-dark md:text-4xl">
              <span className="text-brand-red">Building</span> Services in Cambridge
              <br />
              <span className="text-4xl lg:text-5xl">Repairs, Dry Lining & Maintenance</span>
            </h1>
            <p className="text-sm text-slate-600 md:text-base max-w-xl">
              Practical, professional building support for homes and small businesses across Cambridge.
              From quick repairs to dry lining and waterproofing, YB delivers clean workmanship and reliable results.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                state={{
                  selectedService: "Building / Repairs",
                  messagePreset: "I’m interested in building work (repairs / lining / maintenance) in Cambridge. The project is...",
                }}
                className="rounded-full bg-brand-dark px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black"
              >
                Get a Free Quote
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-brand-dark"
              >
                See all Services
              </Link>
            </div>

            <p className="text-xs text-slate-500">
              *Images are representative examples of typical work and finishes.
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-3">
            <div className="h-32 rounded-lg bg-[url('/lining.webp')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/roofing.webp')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/flooring.webp')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/small-r.webp')] bg-cover bg-center md:h-40" />
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="mb-8 md:mb-10 space-y-2">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-dark">
              What’s included in Building
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl">
              A focused list of the most common building tasks requested in Cambridge—ideal for ongoing maintenance,
              fixes after wear & tear, and small improvement projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {buildingServices.map((s) => (
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
                        selectedService: "Building / Repairs",
                        messagePreset: `I’m interested in: ${s.title}. The project is...`,
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
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-slate-200 bg-brand-light">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-brand-dark mb-6">
            How it works
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                t: "1) Tell us what you need",
                d: "Send a short description and your preferred timing. Photos help, but they’re optional.",
              },
              {
                t: "2) Clear quote & timeline",
                d: "You’ll get a transparent quote and a realistic plan—no confusion, no surprises.",
              },
              {
                t: "3) Professional finish",
                d: "Clean, careful work with attention to detail and respect for your space.",
              },
            ].map((step) => (
              <div key={step.t} className="rounded-xl bg-white p-5 shadow-card">
                <p className="font-semibold text-brand-dark">{step.t}</p>
                <p className="text-sm text-slate-600 mt-2">{step.d}</p>
              </div>
            ))}
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
                selectedService: "Building / Repairs",
                messagePreset: "I’d like a quote for building work in Cambridge. The project is...",
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