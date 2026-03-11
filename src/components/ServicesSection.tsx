import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Check } from "lucide-react";

const services = [
  {
    id: "oem",
    number: "01",
    title: "OEM",
    subtitle: "Your Design. Our Production.",
    description:
      "We transform your ideas into finished products. Send us your specifications, drawings, or sample, and we'll handle the rest.",
    offers: [
      "Custom size, material & finishing",
      "Confidential production",
      "Your branding on every piece",
    ],
    color: "from-primary/90 to-primary/70",
  },
  {
    id: "odm",
    number: "02",
    title: "ODM",
    subtitle: "In-House Designs. Your Brand.",
    description:
      "Choose from our collection of proven, market-ready designs and customize them to fit your brand identity.",
    offers: [
      "Exclusive designs to choose from",
      "Customizable features (fabric, color, firmness, etc.)",
      "Faster product launch",
      "Lower development cost",
    ],
    color: "from-accent/90 to-accent/70",
  },
  {
    id: "project",
    number: "03",
    title: "Project Supply",
    subtitle: "Furnishing on a Grand Scale.",
    description:
      "We specialize in large-scale projects requiring uniformity, quality, and timely delivery.",
    offers: [
      "Volume discount pricing",
      "Consistent quality across all units",
      "Staggered delivery options",
      "Installation support available",
    ],
    color: "from-primary/85 to-accent/60",
  },
  {
    id: "retailer",
    number: "04",
    title: "Retailer Partnership",
    subtitle: "Stock Your Store. Grow Your Business.",
    description:
      "Partner with us to furnish your retail space with high-quality, factory-direct products that keep your customers coming back.",
    offers: [
      "Wholesale pricing for better margins",
      "Mix & match container orders",
      "Consistent quality, batch after batch",
      "Ready stock for quick replenishment",
      "Display samples for your showroom",
      "Marketing materials support",
    ],
    color: "from-accent/80 to-primary/70",
  },
];

const ServicesSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % services.length);
  const prev = () => setCurrent((c) => (c - 1 + services.length) % services.length);

  const service = services[current];

  return (
    <section id="services" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Our Services
          </h2>
        </motion.div>

        {/* Service slideshow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Service tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrent(i)}
                className={`px-6 py-3 rounded font-body text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  i === current
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Left: Video placeholder */}
              <div className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${service.color} min-h-[350px] flex items-center justify-center group cursor-pointer`}>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-accent-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                    <Play size={32} className="text-accent-foreground ml-1" />
                  </div>
                  <p className="font-body text-primary-foreground/80 text-sm uppercase tracking-wider">
                    Watch Video
                  </p>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="font-display text-8xl font-bold text-primary-foreground/10">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center">
                <p className="font-body text-accent text-sm uppercase tracking-[0.2em] mb-2">
                  {service.number} — {service.title}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  {service.subtitle}
                </h3>
                <p className="font-body text-primary-foreground/70 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="font-body text-sm font-semibold text-accent uppercase tracking-wider">
                    What We Offer
                  </p>
                  {service.offers.map((offer) => (
                    <div key={offer} className="flex items-start gap-3">
                      <Check size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-body text-primary-foreground/80 text-sm">
                        {offer}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex w-fit px-8 py-3.5 bg-accent text-accent-foreground font-body font-semibold uppercase tracking-wider text-sm rounded hover:bg-accent/90 transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-accent hover:border-accent transition-colors"
              aria-label="Next service"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
