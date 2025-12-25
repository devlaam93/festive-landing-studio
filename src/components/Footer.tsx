import { Mail, MapPin, Tv, Shield, Headphones, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import logo from "@/assets/modeiptv-logo.svg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  const highlights = [
    { icon: Tv, label: "30,000+ Channels" },
    { icon: Shield, label: "99.9% Uptime" },
    { icon: Headphones, label: "24/7 Support" },
    { icon: Clock, label: "Instant Activation" },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-christmas-red/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-christmas-gold/50 to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-christmas-gold/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-christmas-red/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-16">
        {/* Highlights Bar */}
        <ScrollReveal animation="fade-up" delay={0} duration={500}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-christmas-gold/30 transition-all duration-300 group"
              >
                <item.icon className="w-5 h-5 text-christmas-gold group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <ScrollReveal animation="fade-up" delay={100} duration={500}>
            <div className="space-y-6">
              <img src={logo} alt="MODEIPTV Logo" className="h-14 w-auto" />
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Experience premium entertainment with Canada's most trusted IPTV service. 
                Crystal-clear 4K streaming, thousands of channels, and world-class support.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://api.whatsapp.com/send/?phone=15594826660" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white border-0 shadow-lg shadow-[#25D366]/20">
                    <WhatsAppIcon className="w-5 h-5" />
                    Message Us
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Cards */}
          <ScrollReveal animation="fade-up" delay={200} duration={500}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=15594826660" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-4 sm:p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-christmas-gold/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-christmas-gold/20 to-christmas-gold/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-christmas-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">WhatsApp</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">+1 559 482 6660</p>
              </a>

              <a 
                href="mailto:support@modeiptv.ca"
                className="group p-4 sm:p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-christmas-gold/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-christmas-gold/20 to-christmas-gold/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-christmas-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h4>
                <p className="text-xs sm:text-sm text-muted-foreground break-all">support@modeiptv.ca</p>
              </a>

              <div className="group p-4 sm:p-5 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-christmas-gold/50 hover:bg-card/80 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-christmas-gold/20 to-christmas-gold/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-christmas-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Location</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Toronto, Canada 🇨🇦</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal animation="fade" delay={300} duration={500}>
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} MODEIPTV. All rights reserved.
              </p>
              <div className="flex items-center gap-8">
                <a href="#" className="text-sm text-muted-foreground hover:text-christmas-gold transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-christmas-gold transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-christmas-gold transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
