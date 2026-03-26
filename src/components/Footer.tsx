import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="MFM Logo" className="h-16 mb-4 brightness-200" />
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              Mastercraft Furniture Manufacturer — Crafting Comfort Since 2004. 
              Your trusted partner for premium mattress, sofa & bedframe manufacturing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {["OEM Manufacturing", "ODM Solutions", "Project Supply", "Retailer Partnership"].map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">
                  Malaysia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">
                  +60 12-345 6789
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">
                  info@mfm.com.my
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Mastercraft Furniture Manufacturer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
