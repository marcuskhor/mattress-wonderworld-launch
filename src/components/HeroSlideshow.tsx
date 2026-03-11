import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Crafting Comfort Since 2004",
    title: "Mastercraft Furniture\nManufacturer",
    desc: "Specialist in Mattress, Sofa & Bedframe Manufacturing",
  },
  {
    image: hero2,
    subtitle: "Premium Quality Guaranteed",
    title: "Your Design.\nOur Production.",
    desc: "OEM & ODM Service  •  Flexible MOQ",
  },
  {
    image: hero3,
    subtitle: "Factory Direct",
    title: "Bulk Order\nSpecialist",
    desc: "Certified Safe & Eco-Friendly  •  Rigid Quality Control",
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl"
            >
              <p className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-accent">
                {slides[current].subtitle}
              </p>
              <h1 className="mb-6 font-display text-5xl md:text-7xl font-bold leading-tight text-primary-foreground whitespace-pre-line">
                {slides[current].title}
              </h1>
              <p className="mb-8 font-body text-lg text-primary-foreground/80 max-w-lg">
                {slides[current].desc}
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
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-accent transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-accent transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-accent" : "w-6 bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
