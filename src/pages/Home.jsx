import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-brand-light">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:grid md:grid-cols-2 md:items-center md:gap-12 md:py-16">
          {/* Copy */}
          <div className="space-y-5">
            <h1 className="text-3xl font-heading font-semibold leading-tight text-brand-dark md:text-4xl">
              Professional <span className="text-brand-red">Building</span> &amp; <span className="text-brand-green">Gardening</span> Services.
              <br />
              <span className="text-4xl lg:text-5xl">All In One Place.</span>
            </h1>
            <p className="text-sm text-slate-600 md:text-base">
              From small repairs and home improvements to gardening and outdoor
              care, YB delivers reliable, high-quality work with attention to
              detail. One trusted professional who looks after your space, inside
              and out.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
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
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-3">
            <div className="h-32 rounded-lg bg-[url('/lining.webp')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/garden1.webp')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/flooring.webp')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('/roofing.webp')] bg-cover bg-center md:h-40" />
          </div>
        </div>
      </section>

      {/* VANTAGGIO MULTI-SERVIZIO */}
      <section className="border-b border-slate-200 bg-[url('/homep-bg.jpg')] bg-cover bg-center">
        <div className="px-4 py-10 text-center md:py-14 bg-gradient-to-tr from-black/90 to-black/60">
          <p className="text-lg text-semibold text-brand-light md:text-2xl font-heading">
            Hiring one person who can handle multiple services saves you time,
            money, and stress. Instead of coordinating different companies, you
            get a single reliable professional who knows your space, understands
            your needs, and delivers consistent, high-quality results.
          </p>
        </div>
      </section>

      {/* CARDS SERVIZI */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <Link
              to="/services#small-repairs"
            >
              <div className="flex flex-col rounded-xl bg-white shadow-card">
                <div className="h-40 rounded-t-xl bg-[url('/small-r.webp')] bg-cover bg-center" />
                <div className="space-y-2 p-4">
                  <h3 className="text-sm font-semibold text-brand-dark">
                    Furniture Assembly & Small Repairs
                  </h3>
                  <p className="text-xs text-slate-600 md:text-sm">
                    Fast, reliable assembly and repair services for furniture,
                    fixtures, and fittings to keep your home functional and tidy.
                  </p>
                </div>
              </div>
            </Link>
            {/* Card 2 */}
            <Link
              to="/services#dry-lining"
            >
              <div className="flex flex-col rounded-xl bg-white shadow-card">
                <div className="h-40 rounded-t-xl bg-[url('/lining-card.jpg')] bg-cover bg-center" />
                <div className="space-y-2 p-4">
                  <h3 className="text-sm font-semibold text-brand-dark">
                    Dry Lining
                  </h3>
                  <p className="text-xs text-slate-600 md:text-sm">
                    Plasterboard installation, partition walls, ceilings, repairs, and smooth finishing ready for painting.
                  </p>
                </div>
              </div>
            </Link>
            {/* Card 4 */}
            <Link
              to="/services#roofing"
            >
              <div className="flex flex-col rounded-xl bg-white shadow-card">
                <div className="h-40 rounded-t-xl bg-[url('/service5.jpg')] bg-cover bg-center" />
                <div className="space-y-2 p-4">
                  <h3 className="text-sm font-semibold text-brand-dark">
                    Roofing & Waterproofing
                  </h3>
                  <p className="text-xs text-slate-600 md:text-sm">
                    Roof repairs, tile replacement, leak fixing, and waterproof coatings for long-lasting protection.
                  </p>
                </div>
              </div>
            </Link>
            {/* Card 5 */}
            <Link
              to="/services#gardening"
            >
              <div className="flex flex-col rounded-xl bg-white shadow-card">
                <div className="h-40 rounded-t-xl bg-[url('/garden2.webp')] bg-cover bg-bottom" />
                <div className="space-y-2 p-4">
                  <h3 className="text-sm font-semibold text-brand-dark">
                    Gardening Services
                  </h3>
                  <p className="text-xs text-slate-600 md:text-sm">
                    From simple garden clean-ups to ongoing garden care, YB
                    maintains your outdoor space with the same reliable standards
                    used for interior work.
                  </p>
                </div>
              </div>
            </Link>
            {/* Card 6 */}
            <Link
              to="/services#multi-service"
            >
              <div className="flex flex-col rounded-xl bg-white shadow-card">
                <div className="h-40 rounded-t-xl bg-[url('/multi-service.webp')] bg-cover bg-center" />
                <div className="space-y-2 p-4">
                  <h3 className="text-sm font-semibold text-brand-dark">
                    Multi-Service Jobs
                  </h3>
                  <p className="text-xs text-slate-600 md:text-sm">
                    If you need both building and gardening work, YB can plan and
                    execute multi-step projects that keep everything aligned with
                    your timeline and budget.
                  </p>
                </div>
              </div>
            </Link>
            {/* Micro sezione sotto le cards */}
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="max-w-2xl text-s text-slate-600 md:text-sm lg:text-xl font-heading">
              Need something that doesn&apos;t fit into a single category? YB can
              combine services — from repairs and maintenance to garden work —
              so you don&apos;t have to coordinate multiple people for one project.
            </p>
            <Link
              to="/services"
              className="inline-flex rounded-full bg-slate-900 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-black"
            >
              See all Services
            </Link>
          </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-light">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow-md h-80 lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.496205707336!2d0.121817!3d52.205337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d870a5475d3df5%3A0xf34582ec81d1a3!2sCambridge%2C%20UK!5e0!3m2!1sen!2sit!4v000000000"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* TEXT */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-heading-semibold mb-4">Service Area — Cambridge & Beyond</h3>
            <p className="text-body leading-relaxed font-body-regular">
              YB is based in Cambridge and proudly serves homeowners and businesses across the local area.
              Whether you're located in the heart of Cambridge or in nearby towns and villages, you can
              count on reliable, high-quality service delivered with care and professionalism.
              From small projects to larger renovations, YB covers a flexible working radius — so even if
              you’re just outside the city, you can still reach out with confidence. If you're unsure whether
              your location is included, simply get in touch and we’ll confirm availability right away.
            </p>
          </div>

        </div>
      </section>


      {/* WHY CHOOSE YB */}
      <section className="bg-[url('/cta-bg.jpg')] bg-cover bg-center">
        <div className="text-center bg-gradient-to-tr from-black/80 to-black/50 px-6 py-8 w-full flex flex-col items-center font-heading">
          <p className="text-lg text-white md:text-2xl">
            If you have roofing leaks, damaged walls, or general maintenance issues, we provide expert practical solutions to fix them properly.Just get in touch with us, and we will walk you through the process—offering a clear price and a fast turnaround. We make home improvements straightforward from start to finish.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-brand-dark px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-black"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
