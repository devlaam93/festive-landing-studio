import { Check, Star, Zap, Shield, Clock, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumSection = () => {
  const features = [
    { text: 'Just for 🇨🇦 & 🇺🇸 content', highlight: true },
    { text: 'Hotiptv app for free' },
    { text: 'Ibo player app for free' },
    { text: 'Instant Activation!' },
    { text: '+35,000 Channels', highlight: true },
    { text: '+130K Movies and Series (VOD)', highlight: true },
    { text: 'Netflix, Amazon Prime, Disney+ et Plus' },
    { text: 'All sports channels are available' },
    { text: 'Catch-up and EPG' },
    { text: '8K, 4K, UHD, FHD, HD Channels' },
    { text: 'Fast & Stable' },
    { text: 'Always Uptime Server' },
    { text: 'Anti-Freeze™ 9.8 Technology' },
    { text: 'Privacy Protection and Integrated VPN' },
    { text: '24/7 Live Chat Support' },
  ];

  const plans = [
    {
      duration: '6 Months',
      price: '69.99',
      originalPrice: '139.99',
      perMonth: '11.67',
      discount: '50%',
      link: 'https://order.modeiptv.ca/step/checkout-6-months-platinum/',
    },
    {
      duration: '12 Months',
      price: '89.99',
      originalPrice: '199.99',
      perMonth: '7.50',
      discount: '55%',
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
      <div className="absolute top-10 right-20 text-4xl opacity-20 animate-float">👑</div>
      <div className="absolute bottom-20 left-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '-2s' }}>⭐</div>

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
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <ScrollReveal animation="fade-up" delay={200} duration={700}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                  plan.popular
                    ? 'ring-2 ring-christmas-gold shadow-2xl shadow-christmas-gold/20'
                    : 'ring-1 ring-border/50 hover:ring-christmas-gold/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-christmas py-2 text-center">
                    <span className="text-xs font-bold text-foreground flex items-center justify-center gap-2">
                      <Sparkles className="w-3 h-3" />
                      MOST POPULAR — BEST VALUE
                      <Sparkles className="w-3 h-3" />
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className={`p-6 md:p-8 ${plan.popular ? 'pt-12 md:pt-14' : ''} bg-gradient-to-br ${
                  plan.popular 
                    ? 'from-christmas-gold/10 via-background to-christmas-red/5' 
                    : 'from-muted/30 to-background'
                }`}>
                  
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.popular 
                        ? 'bg-gradient-christmas shadow-lg shadow-christmas-gold/30' 
                        : 'bg-muted/50 border border-border'
                    }`}>
                      <Star className={`w-8 h-8 ${plan.popular ? 'text-foreground fill-foreground' : 'text-christmas-gold'}`} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-1">
                      {plan.duration}
                    </h3>
                    <p className="text-christmas-gold text-sm font-semibold">Platinum Performance Server</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6 p-4 rounded-2xl bg-muted/30 border border-border/50">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-lg text-muted-foreground line-through">${plan.originalPrice}</span>
                      <span className="px-2 py-0.5 rounded-full bg-christmas-green/20 text-christmas-green text-xs font-bold">
                        {plan.discount} OFF
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl md:text-6xl font-display font-black text-foreground">${plan.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Only <span className="text-christmas-gold font-bold">${plan.perMonth}/month</span>
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          feature.highlight 
                            ? 'bg-christmas-gold/20' 
                            : 'bg-christmas-green/20'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            feature.highlight ? 'text-christmas-gold' : 'text-christmas-green'
                          }`} />
                        </div>
                        <span className={`text-sm ${
                          feature.highlight 
                            ? 'text-foreground font-medium' 
                            : 'text-muted-foreground'
                        }`}>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Guarantee Badge */}
                  <div className="flex items-center justify-center gap-2 mb-6 p-3 rounded-xl bg-christmas-red/10 border border-christmas-red/20">
                    <Shield className="w-4 h-4 text-christmas-red" />
                    <span className="text-sm font-semibold text-christmas-red">7 Days Money Back Guarantee</span>
                  </div>

                  {/* CTA Button */}
                  <a href={plan.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant={plan.popular ? 'accent' : 'hero'}
                      size="lg"
                      className={`w-full group text-base font-bold py-6 ${
                        plan.popular ? 'shadow-lg shadow-christmas-gold/30' : ''
                      }`}
                    >
                      <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Get Platinum Access Now
                    </Button>
                  </a>

                  {/* Trust indicators */}
                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Instant Activation
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> 50K+ Users
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Social Proof */}
        <ScrollReveal animation="fade-up" delay={400} duration={600}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-christmas-gold fill-christmas-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="text-foreground font-semibold">50,000+</span> customers across North America
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatinumSection;
