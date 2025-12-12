import { Check, Crown, Zap, Shield, Flame, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const PlatinumSection = () => {
  const features = [
    'Just for 🇨🇦 & 🇺🇸 content',
    'Hotiptv & Ibo player apps free',
    'Instant Activation',
    '+35,000 Channels',
    '+130K Movies & Series (VOD)',
    'Netflix, Prime, Disney+',
    'All Sports Channels',
    'Catch-up & EPG',
    '8K, 4K, UHD, FHD, HD',
    'Anti-Freeze™ 9.8 Tech',
    'VPN Protection',
    '24/7 Support',
  ];

  const plans = [
    {
      duration: '6',
      label: 'Months',
      price: '69.99',
      originalPrice: '139.99',
      perMonth: '11.67',
      savings: '70',
      link: 'https://order.modeiptv.ca/step/checkout-6-months-platinum/',
    },
    {
      duration: '12',
      label: 'Months',
      price: '89.99',
      originalPrice: '199.99',
      perMonth: '7.50',
      savings: '110',
      popular: true,
      link: 'https://order.modeiptv.ca/step/checkout-12-months-platinum/',
    },
  ];

  return (
    <section id="platinum" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-christmas-gold/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-christmas-red/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-christmas-gold/20 via-christmas-gold/10 to-christmas-red/20 border border-christmas-gold/40 mb-8">
              <Crown className="w-5 h-5 text-christmas-gold" />
              <span className="text-base font-bold bg-gradient-to-r from-christmas-gold to-christmas-red bg-clip-text text-transparent">
                PLATINUM EXCLUSIVE
              </span>
              <Crown className="w-5 h-5 text-christmas-gold" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 leading-tight">
              Premium <span className="bg-gradient-to-r from-christmas-gold via-christmas-red to-christmas-gold bg-clip-text text-transparent">🇨🇦 & 🇺🇸</span> Content
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exclusive North American channels with 4K/8K quality, sports, movies, and VOD library optimized for maximum performance.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Container */}
        <ScrollReveal animation="fade-up" delay={200} duration={700}>
          <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex-1 relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-christmas-gold via-christmas-red to-christmas-gold rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                )}
                
                <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-christmas-gold/15 via-background to-christmas-red/10 border-2 border-christmas-gold/50' 
                    : 'bg-muted/20 border border-border/50 hover:border-christmas-gold/30'
                }`}>
                  
                  {/* Popular Ribbon */}
                  {plan.popular && (
                    <div className="absolute top-4 -right-8 rotate-45 bg-gradient-christmas px-10 py-1">
                      <span className="text-[10px] font-bold text-foreground flex items-center gap-1">
                        <Flame className="w-3 h-3" /> BEST DEAL
                      </span>
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    {/* Duration Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-6xl md:text-7xl font-display font-black ${
                          plan.popular ? 'text-christmas-gold' : 'text-foreground'
                        }`}>
                          {plan.duration}
                        </span>
                        <span className="text-xl font-bold text-muted-foreground">{plan.label}</span>
                      </div>
                      {plan.popular && (
                        <div className="px-3 py-1 rounded-full bg-christmas-green/20 border border-christmas-green/30">
                          <span className="text-xs font-bold text-christmas-green">SAVE ${plan.savings}</span>
                        </div>
                      )}
                    </div>

                    {/* Price Block */}
                    <div className="mb-6 pb-6 border-b border-border/30">
                      <div className="flex items-end gap-3 mb-2">
                        <span className="text-4xl md:text-5xl font-display font-black">${plan.price}</span>
                        <span className="text-lg text-muted-foreground line-through mb-1">${plan.originalPrice}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Just <span className="text-christmas-gold font-bold">${plan.perMonth}</span> per month
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <Check className={`w-4 h-4 flex-shrink-0 ${
                            plan.popular ? 'text-christmas-gold' : 'text-christmas-green'
                          }`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Guarantee */}
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-muted/30 border border-border/30 mb-6">
                      <Shield className="w-5 h-5 text-christmas-red" />
                      <span className="text-sm font-medium">7-Day Money Back Guarantee</span>
                    </div>

                    {/* CTA */}
                    <a href={plan.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        variant={plan.popular ? 'accent' : 'hero'}
                        size="lg"
                        className={`w-full group font-bold py-6 ${
                          plan.popular ? 'shadow-xl shadow-christmas-gold/20' : ''
                        }`}
                      >
                        <Zap className="w-5 h-5 mr-2" />
                        Get Platinum Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom Trust Bar */}
        <ScrollReveal animation="fade-up" delay={400} duration={600}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-christmas-green animate-pulse" />
              <span>Instant Activation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-christmas-gold animate-pulse" />
              <span>50K+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-christmas-red animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlatinumSection;
