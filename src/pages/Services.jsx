import furnitureImg from "/small-r.webp";
import liningImg from "/lining.webp";
import flooringImg from "/flooring.webp";
import roofingImg from "/roofing.webp";
import outdoorImg from "/garden1.webp";
import combinedProjectsImg from "/multi-service.webp";
import { Link } from "react-router-dom";

const services = [
  {
    id: "small-repairs",
    title: "Furnitures Assembly & Small Repairs",
    short: "Need to assemble a new furniture? YB can help you with that, also as quick fixes and upgrades that keep your home in shape without the hassle.",
    description:
      "From assembling new furniture to repairing fixtures, fittings, and small household issues, YB delivers fast and reliable handyman support. Ideal for tenants, homeowners, and anyone who wants practical, hassle-free solutions handled with precision.",
    image: furnitureImg,
  },
  {
    id: "dry-lining",
    title: "Dry Lining",
    short: "Professional dry lining for clean, smooth walls and precise interior finishes.",
    description:
      "Professional dry lining for both small and large projects. YB handles plasterboard installation, partition walls, ceiling systems, repairs, and smooth finishing ready for painting. A clean, precise service ideal for renovations, extensions, and new builds.",
    image: liningImg,
  },
  {
    id: "flooring",
    title: "Floor Installation & Repair",
    short: "High quality flooring installation and repair for durable, clean, and perfectly finished interiors.",
    description:
      "From laminate to hardwood to vinyl, YB delivers high-quality flooring installation and repair. You get precise cutting, secure fitting, and a flawless finish that transforms any room. Ideal for home upgrades, renovations, and full room makeovers.",
    image: flooringImg,
  },
  {
    id: "roofing",
    title: "Roofing & Waterproofing",
    short: "Reliable roofing and waterproofing solutions that protect your home from leaks, weather damage, and long-term wear.",
    description:
      "Reliable roofing services including repairs, tile replacement, leak fixing, structural checks, and full waterproof coating to protect your home from weather damage. YB ensures long-lasting protection and high-quality workmanship on every roof.",
    image: roofingImg,
  },
  {
    id: "gardening",
    title: "Gardening & Outdoor Care",
    short: "Keep your outdoor spaces healthy, tidy, and enjoyable all year round.",
    description:
      "From lawn care and hedge trimming to planting, seasonal clean-ups, and basic landscape improvements, YB helps your garden look well kept and welcoming. You work with the same trusted person who already knows your space and preferences, so every visit is more efficient.",
    image: outdoorImg,
  },
  {
    id: "multi-service",
    title: "Combined Projects & Multi-Service Jobs",
    short: "One trusted professional for projects that involve both building and gardening.",
    description:
      "Need to repair a wall, adjust paving, and refresh the surrounding garden in one go? YB can plan and execute multi-step projects that mix indoor and outdoor work. Instead of calling different contractors, you deal with one person who coordinates the whole process and keeps everything aligned with your timeline and budget.",
    image: combinedProjectsImg,
  },
];

export default function Services() {
  return (
    <main className="bg-brand-light min-h-screen font-body">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-20">
        <header className="mb-10 sm:mb-12 lg:mb-16 text-brand-dark space-y-5">
          <h1 className="text-3xl font-heading font-semibold leading-tight text-brand-dark md:text-4xl">
            Professional <span className="text-brand-red">Building</span> &amp; <span className="text-brand-green">Gardening</span> Services.
            <br />
            <span className="text-4xl lg:text-5xl">All In One Place.</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-dark/80 max-w-2xl">
            YB offers multi-service support handled by one trusted
            professional. Choose the service that fits your project or combine
            several for a complete, streamlined solution.
          </p>
        </header>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {services.map((service) => (
            <Link
              to="/contact"
              state={{
                selectedService: service.title,
                messagePreset: `I’m interested in ${service.title.toLowerCase()} for...`,
              }}
            >

              <article
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl shadow-md shadow-brand-dark/5 overflow-hidden my-10 hover:shadow-lg hover:shadow-brand-dark/10 transition-shadow"
              >
                {/* wrapper: verticale su mobile, orizzontale su md+ */}
                <div className="flex flex-col md:flex-row md:items-center md:h-[360px] h-auto">
                  {/* testo */}
                  <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                    <h2 className="font-heading font-semibold text-xl sm:text-2xl text-brand-dark mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-brand-dark/80 mb-3">
                      {service.short}
                    </p>
                    <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* immagine */}
                  <div className="md:w-1/2 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-56 sm:h-64 md:h-full w-full object-cover"
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        {/* micro-CTA finale */}
        <section className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-brand-dark mb-3">
            Not sure which service you need?
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/80 max-w-xl mx-auto mb-6">
            You don’t have to choose everything in advance. Tell YB what you’d
            like to improve, and together you can decide which combination of
            building and gardening services fits your space, budget, and timing
            best.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold font-heading bg-brand-dark text-white hover:bg-brand-green transition-colors"
          >
            Get a Free Quote
          </a>
        </section>
      </section>
    </main>
  );
}
