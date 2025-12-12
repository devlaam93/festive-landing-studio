import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import logo from "@/assets/modeiptv-logo.svg";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border/50 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-christmas-red via-christmas-gold to-christmas-green" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <ScrollReveal animation="fade-up" delay={0} duration={500}>
            <div>
              <div className="mb-4">
                <img src={logo} alt="MODEIPTV Logo" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                🎄 Premium IPTV service in Canada with 15,000+ channels, 4K streaming, and unmatched reliability.
              </p>
              <div className="flex gap-3">
                <a href="https://api.whatsapp.com/send/?phone=15594826660" target="_blank" rel="noopener noreferrer">
                  <Button variant="glass" size="icon">
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal animation="fade-up" delay={100} duration={500}>
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Pricing", "Features", "FAQ", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-christmas-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Support */}
          <ScrollReveal animation="fade-up" delay={200} duration={500}>
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.modeiptv.ca/iptv-installation-tutorials/"
                    className="text-sm text-muted-foreground hover:text-christmas-gold transition-colors"
                  >
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.modeiptv.ca/terms-and-general-conditions/"
                    className="text-sm text-muted-foreground hover:text-christmas-gold transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal animation="fade-up" delay={300} duration={500}>
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MessageCircle className="w-4 h-4 text-christmas-gold" />
                  <a
                    href="https://api.whatsapp.com/send/?phone=15594826660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-christmas-gold transition-colors"
                  >
                    WhatsApp: +1 559 482 6660
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-christmas-gold" />
                  <span>support@modeiptv.ca</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-christmas-gold" />
                  <span>Canada 🇨🇦</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal animation="fade" delay={400} duration={500}>
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MODEIPTV. All rights reserved. 🎄 Happy Holidays!
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-christmas-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-christmas-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
