import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumSection = () => {
  const features = [
    'Just for 🇨🇦 & 🇺🇸 content',
    'Hotiptv app for free',
    'Ibo player app for free',
    'Instant Activation!',
    '+35,000 Channels',
    '+130K Movies and Series (VOD)',
    'Netflix, Amazon Prime, Disney+ et Plus',
    'All sports channels are available',
    'Catch-up and EPG',
    '8K, 4K, UHD, FHD, HD Channels',
    'Fast & Stable',
    'Always Uptime Server',
    'Anti-Freeze™ 9.8 Technology',
    'Privacy Protection and Integrated VPN',
    '24/7 Live Chat Support',
    '7 days money back guarantee',
  ];

  const plans = [
    {
      duration: '6 Months',
      price: '69.99',
      link: 'https://order.modeiptv.ca/step/checkout-6-months-platinum/',
    },
    {
      duration: '12 Months',
      price: '89.99',
      popular: true,
      link: 'https://order.modeiptv.ca/step/checkout-12-months-platinum/',
    },
  ];

  return (
    <section id="platinum" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-christmas-red/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-christmas-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-christmas-red/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-christmas-gold/20 to-christmas-red/20 border border-christmas-gold/30 mb-6">
              <Star className="w-4 h-4 text-christmas-gold fill-christmas-gold" />
              <span className="text-sm font-semibold text-christmas-gold">Exclusive Platinum Offer</span>
              <Star className="w-4 h-4 text-christmas-gold fill-christmas-gold" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4">
              Modeiptv Platinum Account Only{' '}
              <span className="text-christmas-gold">🇨🇦 & 🇺🇸</span> content
            </h2>
            <p className="text-xl md:text-2xl text-christmas-red font-semibold mb-6">
              Available only as part of our Holiday offer.
            </p>
            
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              This package offers <span className="text-foreground font-semibold">a large selection of premium 🇨🇦 Canadian and 🇺🇸 American channels</span>, with advanced features and ultra-high streaming quality.
              It includes <span className="text-foreground font-semibold">4K and even 8K channels</span>, exclusive sports, movies, series, and a powerful VOD library, all optimized for fast, stable performance.
              If you want a package with <span className="text-foreground font-semibold">more options, more quality, and more Platinum channels</span>, this is the perfect choice.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <ScrollReveal animation="fade-up" delay={200} duration={700}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 md:p-8 border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${
                  plan.popular
                    ? 'bg-gradient-to-br from-christmas-gold/15 to-christmas-gold/5 border-christmas-gold/50 shadow-lg shadow-christmas-gold/10'
                    : 'bg-muted/30 border-border/50 hover:border-christmas-gold/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-christmas px-4 py-1 rounded-full text-xs font-bold text-foreground">
                      BEST VALUE
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-display font-black text-christmas-gold mb-2">
                    {plan.duration}
                  </h3>
                  <p className="text-christmas-red text-sm font-medium">Platinum Performance Server</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <span className="text-4xl md:text-5xl font-display font-black">{plan.price}</span>
                  <span className="text-2xl font-bold text-muted-foreground ml-1">$</span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        idx === features.length - 1 ? 'text-christmas-red' : 'text-christmas-gold'
                      }`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href={plan.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant={plan.popular ? 'accent' : 'hero'}
                    size="lg"
                    className="w-full group"
                  >
                    <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Get Platinum Access
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatinumSection;
