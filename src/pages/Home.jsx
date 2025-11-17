import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-brand-light">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:grid md:grid-cols-2 md:items-center md:gap-12 md:py-16">
          {/* Copy */}
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-green">
              YB Building &amp; Gardening
            </p>
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
            <div className="h-32 rounded-lg bg-[url('https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('https://images.pexels.com/photos/8481103/pexels-photo-8481103.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center md:h-40" />
            <div className="h-32 rounded-lg bg-[url('https://images.pexels.com/photos/5875890/pexels-photo-5875890.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center md:h-40" />
          </div>
        </div>
      </section>

      {/* VANTAGGIO MULTI-SERVIZIO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center md:py-14">
          <p className="text-sm text-slate-700 md:text-base">
            Hiring one person who can handle multiple services saves you time,
            money, and stress. Instead of coordinating different companies, you
            get a single reliable professional who knows your space, understands
            your needs, and delivers consistent, high-quality results. Whether
            it&apos;s small repairs, building work, or taking care of your garden,
            you can count on a smooth and efficient experience from start to
            finish.
          </p>
        </div>
      </section>

      {/* ABOUT YASSIN */}
      <section className="border-b border-slate-200 bg-white">
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

          <div className="h-60 rounded-xl bg-[url('https://images.pexels.com/photos/6476581/pexels-photo-6476581.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center shadow-card md:h-72" />
        </div>
      </section>

      {/* CARDS SERVIZI */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col rounded-xl bg-white shadow-card">
              <div className="h-40 rounded-t-xl bg-[url('https://images.pexels.com/photos/3640935/pexels-photo-3640935.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center" />
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
              <div className="h-40 rounded-t-xl bg-[url('https://images.pexels.com/photos/5854190/pexels-photo-5854190.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center" />
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
              <div className="h-40 rounded-t-xl bg-[url('https://images.pexels.com/photos/5878457/pexels-photo-5878457.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center" />
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
            <p className="max-w-2xl text-xs text-slate-600 md:text-sm">
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
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-16">
          <h2 className="mb-4 text-xl font-semibold text-brand-dark md:text-2xl">
            WHY CHOOSE YB
          </h2>
          <p className="text-sm text-slate-700 md:text-base">
            Hiring YB means choosing a reliable, multi-skilled professional who
            can take care of everything your home or outdoor space needs.
            Instead of dealing with multiple contractors, schedules, and quotes,
            you get one trusted expert who understands your environment, listens
            to your priorities, and keeps the entire workflow smooth and
            consistent. With YB, you benefit from faster turnarounds, clear
            communication, and a high level of workmanship across every service
            — from repairs, building work, and improvements to garden care and
            maintenance. It&apos;s a practical, cost-effective choice that gives
            you peace of mind from the first message to the final result.
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
