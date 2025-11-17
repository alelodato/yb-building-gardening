function Contact() {
  return (
    <div className="bg-brand-light">
      <section className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <h1 className="mb-3 text-2xl font-semibold text-brand-dark md:text-3xl">
          Get a Free Quote
        </h1>
        <p className="mb-8 max-w-2xl text-sm text-slate-700 md:text-base">
          Tell YB what you need help with — building, repairs, gardening, or a
          mix of services. You&apos;ll get a clear, no-obligation quote and a
          realistic timeline based on your project.
        </p>

        <form className="space-y-5 rounded-xl bg-white p-6 shadow-card">
          <div className="grid gap-4 md:grid-cols-2">
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
            >
              <option>Small repairs</option>
              <option>Building &amp; maintenance</option>
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
              placeholder="Describe your space, what needs to be done, and your preferred timing."
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
