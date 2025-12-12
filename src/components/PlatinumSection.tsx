import { Check, Crown, Zap, Shield, Star, Timer, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumSection = () => {
  const features = [
    '🇨🇦 & 🇺🇸 Exclusive Content',
    'Free Hotiptv & Ibo Apps',
    'Instant Activation',
    '+35,000 Live Channels',
    '+130K Movies & Series',
    'Netflix, Prime, Disney+',
    'All Sports Channels',
    '8K/4K/UHD Quality',
    'Anti-Freeze™ Technology',
    'VPN Protection Included',
    '24/7 Live Support',
  ];

  const plans = [
    {
      duration: '6 Months',
      price: '69.99',
      originalPrice: '139.99',
      perMonth: '11.67',
      link: 'https://order.modeiptv.ca/step/checkout-6-months-platinum/',
    },
    {
      duration: '12 Months',
      price: '89.99',
      originalPrice: '199.99',
      perMonth: '7.50',
      popular: true,
      link: 'https://order.modeiptv.ca/step/checkout-12-months-platinum/',
    },
  ];

  return (
    <section id="platinum" className="py-16 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-christmas-gold/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-christmas-gold" />
              <span className="text-sm font-bold text-christmas-gold uppercase tracking-wider">Platinum Package</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black">
              North America <span className="text-christmas-gold">🇨🇦 🇺🇸</span> Only
            </h2>
          </div>
        </ScrollReveal>

        {/* Main Content - Responsive Grid */}
        <ScrollReveal animation="fade-up" delay={150} duration={600}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-0">
              
              {/* Features Panel */}
              <div className="lg:col-span-2 bg-muted/30 backdrop-blur-sm rounded-2xl lg:rounded-r-none p-6 border border-border/50 lg:border-r-0">
                <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-christmas-gold" />
                  What's Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-christmas-gold/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-christmas-gold" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Guarantee */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 text-christmas-red">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-semibold">7-Day Money Back Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                      plan.popular
                        ? 'bg-gradient-to-br from-christmas-gold/20 via-christmas-gold/10 to-christmas-red/10 border-2 border-christmas-gold ring-4 ring-christmas-gold/10'
                        : 'bg-muted/20 border border-border/50'
                    }`}
                  >
                    {/* Popular Tag */}
                    {plan.popular && (
                      <div className="bg-gradient-christmas text-center py-1.5">
                        <span className="text-xs font-bold">🔥 MOST POPULAR</span>
                      </div>
                    )}

                    <div className={`p-5 ${!plan.popular ? 'pt-6' : ''}`}>
                      {/* Duration */}
                      <div className="text-center mb-4">
                        <h4 className={`text-xl font-display font-black ${
                          plan.popular ? 'text-christmas-gold' : 'text-foreground'
                        }`}>
                          {plan.duration}
                        </h4>
                        <p className="text-xs text-muted-foreground">Platinum Server</p>
                      </div>

                      {/* Price */}
                      <div className="text-center mb-4 p-4 rounded-xl bg-background/50 border border-border/30">
                        <div className="text-sm text-muted-foreground line-through">${plan.originalPrice}</div>
                        <div className="text-4xl font-display font-black">${plan.price}</div>
                        <div className="text-xs text-christmas-gold font-medium mt-1">
                          ${plan.perMonth}/mo
                        </div>
                      </div>

                      {/* CTA */}
                      <a href={plan.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant={plan.popular ? 'accent' : 'hero'}
                          className="w-full font-bold"
                          size="lg"
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Get Access
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Bar */}
        <ScrollReveal animation="fade-up" delay={300} duration={500}>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Timer className="w-3.5 h-3.5 text-christmas-green" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-christmas-gold" />
              <span>50K+ Users</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-christmas-red fill-christmas-red" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatinumSection;
