import { motion } from "framer-motion";
import { Shield, Leaf, Settings, Wrench, Package, Factory } from "lucide-react";

const features = [
  { icon: Shield, label: "Premium Materials & Expert Finish" },
  { icon: Leaf, label: "Certified Safe & Eco-Friendly" },
  { icon: Settings, label: "Rigid Quality Control System" },
  { icon: Wrench, label: "Custom OEM Solutions Ready" },
  { icon: Package, label: "Bulk Order Specialist" },
  { icon: Factory, label: "Direct From Factory Floor" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WelcomeSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-4">
            Welcome to MFM
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Top Choice for Premium Furniture Manufacturer in Malaysia
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Since 2004, Mastercraft Furniture Manufacturer has been crafting comfort with precision, 
            delivering premium mattresses, sofas, and bedframes to clients worldwide. We combine 
            traditional craftsmanship with modern technology to produce furniture that stands the test of time.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.label}
              variants={itemVariants}
              className="group flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <feature.icon size={26} className="text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <span className="font-body font-semibold text-foreground text-sm uppercase tracking-wide">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "20+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Global Partners" },
            { number: "100%", label: "Quality Assured" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-5xl font-bold text-accent">{stat.number}</p>
              <p className="font-body text-sm uppercase tracking-wider text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
