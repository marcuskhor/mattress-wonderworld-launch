import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="w-20 h-1 bg-accent mx-auto"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Whether you're looking for OEM manufacturing, ODM solutions, or a retail partnership, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Address</h4>
                    <p className="font-body text-sm text-muted-foreground">Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Phone</h4>
                    <p className="font-body text-sm text-muted-foreground">0184718996</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                    <p className="font-body text-sm text-muted-foreground">mastercraftmanufacturer@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="font-body text-sm text-muted-foreground">Mon – Fri: 9:00 AM – 6:00 PM</p>
                    <p className="font-body text-sm text-muted-foreground">Sat: 9:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/60184718996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-body text-sm font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-card border border-border rounded-xl p-8 md:p-12"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-2 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-2 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-2 block">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-semibold text-foreground mb-2 block">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-semibold text-foreground mb-2 block">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="oem">OEM Manufacturing</option>
                    <option value="odm">ODM Solutions</option>
                    <option value="project">Project Supply</option>
                    <option value="retail">Retailer Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm font-semibold text-foreground mb-2 block">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
