import { motion } from "framer-motion";
import { Factory, Pencil, Globe, Handshake, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    video: "oem-video.mov",
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
    video: "project-supply-video.mp4",
  },
  {
    icon: Handshake,
    title: "Retailer Partnership Program",
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
    image: "retailer-partnership.jpg",
    video: null,
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4"
          >
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="w-20 h-1 bg-accent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-body text-primary-foreground/70 max-w-2xl mx-auto"
          >
            From concept to delivery, we provide end-to-end furniture manufacturing solutions tailored to your business needs.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Media */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
                  {service.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={`${import.meta.env.BASE_URL}${service.video}`} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <service.icon size={48} className="text-muted-foreground/30" strokeWidth={1} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                      <service.icon size={24} className="text-accent-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent mb-3">
                  {service.subtitle}
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="font-display font-semibold text-foreground">What We Offer:</p>
                  {service.offers.map((offer) => (
                    <div key={offer} className="flex items-start gap-3">
                      <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{offer}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-8"
          >
            Contact us today and let's discuss how we can bring your furniture vision to life.
          </motion.p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;
