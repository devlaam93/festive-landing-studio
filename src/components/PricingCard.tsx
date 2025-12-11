import { Check, Flame, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  title: string;
  serverType: string;
  price: string;
  originalPrice: string;
  discount: string;
  features: string[];
  popular?: boolean;
  premium?: boolean;
  orderLink: string;
}

const PricingCard = ({
  title,
  serverType,
  price,
  originalPrice,
  discount,
  features,
  popular = false,
  premium = false,
  orderLink,
}: PricingCardProps) => {
  return (
    <div 
      className={`relative group transition-all duration-500 hover:scale-105 ${
        popular ? 'scale-105 z-10' : ''
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-gradient-accent px-4 py-1 rounded-full flex items-center gap-2 animate-pulse-glow">
            <Flame className="w-4 h-4 text-background" />
            <span className="text-xs font-display font-bold text-background uppercase tracking-wider">
              Most Popular
            </span>
          </div>
        </div>
      )}

      {/* Glow Effect */}
      <div 
        className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg ${
          premium 
            ? 'bg-gradient-to-r from-neon-orange to-neon-gold' 
            : 'bg-gradient-to-r from-neon-cyan to-neon-magenta'
        }`} 
      />

      {/* Card */}
      <div 
        className={`relative glass-strong rounded-2xl p-6 md:p-8 border transition-all duration-300 ${
          popular 
            ? 'border-accent/50' 
            : premium 
              ? 'border-neon-orange/30 hover:border-neon-orange/60' 
              : 'border-primary/30 hover:border-primary/60'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            {premium ? (
              <Crown className="w-5 h-5 text-neon-orange" />
            ) : (
              <Zap className="w-5 h-5 text-primary" />
            )}
            <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
          </div>
          <p className={`text-sm font-medium ${premium ? 'text-neon-orange' : 'text-primary'}`}>
            {serverType}
          </p>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center gap-1">
            <span className={`text-5xl md:text-6xl font-display font-black ${
              premium ? 'text-gradient-accent' : 'text-gradient-primary'
            }`}>
              ${price}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            <span className="line-through">${originalPrice}</span>
            <span className={`ml-2 font-semibold ${premium ? 'text-neon-orange' : 'text-primary'}`}>
              {discount}
            </span>
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.slice(0, 8).map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                premium ? 'text-neon-orange' : 'text-primary'
              }`} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href={orderLink} target="_blank" rel="noopener noreferrer">
          <Button 
            variant={premium ? "accent" : "hero"} 
            size="xl" 
            className="w-full"
          >
            Order Now
          </Button>
        </a>

        {/* Trust Badge */}
        <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          7-Day Money Back Guarantee
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
