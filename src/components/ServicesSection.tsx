import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Factory, Pencil, Globe, Handshake, Play, Check } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "OEM Production",
    subtitle: "Your Design. Our Production.",
    description:
      "We transform your ideas into finished products. Send us your specifications, drawings, or sample, and we'll handle the rest.",
    offers: [
      "Custom size, material & finishing",
      "Confidential production",
      "Your branding on every piece",
    ],
    video: null,
  },
  {
    icon: Pencil,
    title: "ODM Production",
    subtitle: "In-House Designs. Your Brand.",
    description:
      "Choose from our collection of proven, market-ready designs and customize them to fit your brand identity.",
    offers: [
      "Exclusive designs to choose from",
      "Customizable features (fabric, color, firmness)",
      "Faster product launch",
      "Lower development cost",
    ],
    video: "odm-video.mov",
  },
  {
    icon: Globe,
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
    video: null,
  },
  {
    icon: Handshake,
    title: "Retailer Partnership",
    subtitle: "Stock Your Store. Grow Your Business.",
    description:
      "Partner with us to furnish your retail space with high-quality, factory-direct products that keep your customers coming back.",
    offers: [
      "Wholesale pricing for better margins",
      "Mix & match container orders",
      "Consistent quality, batch after batch",
      "Ready stock & display samples",
      "Marketing materials support",
    ],
    video: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              {/* Card body */}
              <div className="flex-1 p-8 text-center flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <service.icon
                    size={30}
                    className="text-accent group-hover:text-accent-foreground transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-xs uppercase tracking-widest text-accent mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Offers */}
                <div className="text-left space-y-2 mb-6">
                  {service.offers.map((offer) => (
                    <div key={offer} className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      <span className="font-body text-xs text-muted-foreground">
                        {offer}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Find out more link */}
                <Link
                  to="/services"
                  className="mt-auto inline-flex items-center gap-1 font-body text-sm font-semibold text-accent uppercase tracking-wider hover:text-accent/80 transition-colors"
                >
                  Find Out More &rsaquo;
                </Link>
              </div>

              {/* Video area at bottom */}
              <div className="border-t border-border bg-muted/50 p-4">
                <button className="w-full flex items-center justify-center gap-3 py-4 rounded-lg bg-primary/5 hover:bg-accent/10 transition-colors duration-300 group/play">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center group-hover/play:bg-accent transition-colors duration-300">
                    <Play
                      size={16}
                      className="text-accent group-hover/play:text-accent-foreground transition-colors ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground group-hover/play:text-foreground transition-colors">
                    Watch Video
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
