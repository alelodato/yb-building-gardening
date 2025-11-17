import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="bg-brand-light">
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <h1 className="mb-3 text-2xl font-semibold text-brand-dark md:text-3xl">
          Services
        </h1>
        <p className="max-w-2xl text-sm text-slate-700 md:text-base">
          YB offers a flexible range of building and gardening services, adapted
          to the size and needs of your space. You can book a single service or
          combine several into one project for a smoother, more efficient
          workflow.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-5 shadow-card">
            <h2 className="mb-2 text-lg font-semibold text-brand-dark">
              Small Repairs &amp; Fixes
            </h2>
            <p className="text-sm text-slate-700">
              Furniture assembly, wall touch-ups, small damage repairs, doors,
              frames, and other everyday fixes that keep your home in good
              shape.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-card">
            <h2 className="mb-2 text-lg font-semibold text-brand-dark">
              Building &amp; Maintenance
            </h2>
            <p className="text-sm text-slate-700">
              Interior and exterior work, structural improvements, regular
              maintenance, and project-based tasks coordinated by one person who
              knows your space.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-card">
            <h2 className="mb-2 text-lg font-semibold text-brand-dark">
              Gardening &amp; Outdoor Care
            </h2>
            <p className="text-sm text-slate-700">
              Lawn care, plant maintenance, seasonal clean-ups, and small garden
              projects designed to keep your outdoor areas tidy and enjoyable.
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-card">
            <h2 className="mb-2 text-lg font-semibold text-brand-dark">
              Custom Multi-Service Projects
            </h2>
            <p className="text-sm text-slate-700">
              Need repairs, building work, and garden care in one go? YB can
              combine multiple services into a single, coordinated project so
              you only deal with one person from start to finish.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-brand-dark px-8 py-3 text-sm font-medium text-white shadow-sm hover:bg-black"
          >
            Request a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
