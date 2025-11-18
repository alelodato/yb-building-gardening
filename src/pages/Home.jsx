import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-brand-light">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:grid md:grid-cols-2 md:items-center md:gap-12 md:py-16">
          {/* Copy */}
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold leading-tight text-brand-dark md:text-4xl">
              Professional Building &amp; Gardening Services.
              <br />
              <span className="text-brand-red">All In One Place.</span>
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

      {/* ABOUT YASSIN */}
      <section className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center md:gap-12 md:py-14">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-brand-dark md:text-2xl">
              Meet Yassin Barka
            </h2>
            <p className="text-sm text-slate-700 md:text-base">
              Yassin Barka is a hands-on professional with years of experience
              across various sectors of building and home maintenance. His
              background ranges from small repairs and home improvements to
              exterior work and gardening, giving him a complete understanding
              of how different parts of a property work together.
            </p>
            <p className="text-sm text-slate-700 md:text-base">
              Yassin brings precision, reliability, and a strong
              problem-solving mindset to every project, treating each space with
              the same care he would give to his own. With YB, clients work
              directly with the person who plans, executes, and finishes the
              job — ensuring quality, trust, and a personal touch at every step.
            </p>
          </div>

          <div className="h-60 rounded-xl bg-[url('/yas.webp')] bg-cover bg-center shadow-card md:h-72" />
        </div>
      </section>

      {/* CARDS SERVIZI */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col rounded-xl bg-white shadow-card">
              <div className="h-40 rounded-t-xl bg-[url('/small-r.webp')] bg-cover bg-center" />
              <div className="space-y-2 p-4">
                <h3 className="text-sm font-semibold text-brand-dark">
                  Small Repairs
                </h3>
                <p className="text-xs text-slate-600 md:text-sm">
                  From fixing small issues to handling quick touch-ups, YB takes
                  care of the small jobs that make a big difference. You get
                  reliable work, always handled without extra calls.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col rounded-xl bg-white shadow-card">
              <div className="h-40 rounded-t-xl bg-[url('/card2.webp')] bg-cover bg-center" />
              <div className="space-y-2 p-4">
                <h3 className="text-sm font-semibold text-brand-dark">
                  Building &amp; Maintenance
                </h3>
                <p className="text-xs text-slate-600 md:text-sm">
                  Whether it&apos;s structural work, new installations, or
                  regular upkeep, YB covers multiple building needs with
                  consistent quality and a single point of contact for all your
                  projects.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col rounded-xl bg-white shadow-card">
              <div className="h-40 rounded-t-xl bg-[url('/garden2.webp')] bg-cover bg-center" />
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
          </div>

          {/* Micro sezione sotto le cards */}
          <div className="mt-8 flex flex-col items-center gap-3 text-center">          
            <p className="max-w-2xl text-s text-slate-600 md:text-sm">
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
      </section>

      {/* WHY CHOOSE YB */}
      <section className="bg-[url('/cta-bg.jpg')] bg-cover bg-center">
        <div className="text-center bg-gradient-to-tr from-black/80 to-black/50 px-6 py-8 w-full flex flex-col items-center font-heading">
          <p className="text-lg text-white md:text-2xl">
            Hiring YB it&apos;s a practical, cost-effective choice that gives
            you peace of mind from the first message to the final result.
            Get your free quote today and experience the convenience of
            having all your building and gardening needs handled by one trusted
            expert.
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
