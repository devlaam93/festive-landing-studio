import { Menu, X, Gift } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/modeiptv-logo.svg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Platinum', href: '#platinum' },
    { label: 'Features', href: '#features' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}>
      {/* Promo Banner - hides on scroll */}
      <div className={`bg-gradient-to-r from-christmas-red via-christmas-red-dark to-christmas-red overflow-hidden transition-all duration-300 ${scrolled ? 'max-h-0 py-0' : 'max-h-20 py-2'}`}>
        <p className="text-xs md:text-sm font-semibold text-foreground flex items-center justify-center gap-2 px-4">
          <Gift className="w-4 h-4" />
          CHRISTMAS SALE — 80% OFF + 1 Month FREE — Limited Time!
          <Gift className="w-4 h-4" />
        </p>
      </div>

      {/* Main Header */}
      <div className={`border-b border-border/50 transition-all duration-300 ${scrolled ? 'glass-strong bg-background/95' : 'glass-strong'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img 
                src={logo} 
                alt="MODEIPTV Logo" 
                className="h-10 md:h-12 w-auto"
              />
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

            {/* CTA Button - Desktop only */}
            <div className="hidden lg:block">
              <a href="https://api.whatsapp.com/send/?phone=15594826660&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  🎄 Start Free Trial
                </Button>
              </a>
            </div>

            {/* Tablet & Mobile: CTA + Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* CTA Button - Tablet */}
              <a href="https://api.whatsapp.com/send/?phone=15594826660&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                <Button variant="hero" size="sm">
                  🎄 Start Free Trial
                </Button>
              </a>
              
              {/* Mobile Menu Button */}
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
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
              <a href="https://api.whatsapp.com/send/?phone=15594826660&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
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
