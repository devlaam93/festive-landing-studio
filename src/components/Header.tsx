import { Menu, X, Gift } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Features', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-christmas-red via-christmas-red-dark to-christmas-red py-2 px-4 text-center">
        <p className="text-xs md:text-sm font-semibold text-foreground flex items-center justify-center gap-2">
          <Gift className="w-4 h-4" />
          CHRISTMAS SALE — 80% OFF + 1 Month FREE — Limited Time!
          <Gift className="w-4 h-4" />
        </p>
      </div>

      {/* Main Header */}
      <div className="glass-strong border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-christmas flex items-center justify-center relative">
                <span className="font-display font-black text-foreground text-lg">M</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-christmas-gold animate-twinkle" />
              </div>
              <span className="font-display font-bold text-xl text-christmas-gold hidden sm:block">
                MODEIPTV
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-christmas-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#pricing">
                <Button variant="hero" size="lg">
                  🎄 Start Free Trial
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-strong border-t border-border/50">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-christmas-gold transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#pricing">
                <Button variant="hero" size="lg" className="w-full mt-2">
                  🎄 Start Free Trial
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
