import { motion } from "framer-motion";

const HeroSlideshow = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}hero-video.mov`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-accent">
              Crafting Comfort Since 2004
            </p>
            <h1 className="mb-6 font-display text-5xl md:text-7xl font-bold leading-tight text-primary-foreground whitespace-pre-line">
              {"Mastercraft Furniture\nManufacturer"}
            </h1>
            <p className="mb-8 font-body text-lg text-primary-foreground/80 max-w-lg">
              Specialist in Mattress, Sofa & Bedframe Manufacturing
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-3.5 bg-accent text-accent-foreground font-body font-semibold uppercase tracking-wider text-sm rounded hover:bg-accent/90 transition-colors"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold uppercase tracking-wider text-sm rounded hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
