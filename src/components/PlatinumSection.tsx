import { Check, Crown, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
const PlatinumSection = () => {
  const plans = [{
    duration: '6',
    unit: 'Months',
    price: '69.99',
    originalPrice: '139.99',
    perMonth: '11.67',
    link: 'https://order.modeiptv.ca/step/checkout-6-months-iptv-premium-subscriptions-2/'
  }, {
    duration: '12',
    unit: 'Months',
    price: '89.99',
    originalPrice: '199.99',
    perMonth: '7.50',
    popular: true,
    link: 'https://order.modeiptv.ca/step/checkout-12-months-iptv-premium-subscriptions-3/'
  }];
  const allFeatures = ['🇨🇦 & 🇺🇸 Exclusive Content', '+35,000 Live Channels', '+130K Movies & Series', '8K/4K/UHD/FHD Quality', 'Netflix, Prime, Disney+', 'All Sports Channels', 'Free Hotiptv & Ibo Apps', 'Anti-Freeze™ 9.8 Tech', 'VPN Protection', '24/7 Support', 'Instant Activation', '7-Day Money Back'];
  return <section id="platinum" className="py-16 md:py-24 relative pt-[96px]">
      <div className="absolute inset-0 bg-gradient-to-b from-christmas-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-christmas-gold" />
            <Crown className="w-5 h-5 text-christmas-gold" />
            <span className="text-xs font-bold text-christmas-gold uppercase tracking-[0.2em]">Platinum</span>
            <Crown className="w-5 h-5 text-christmas-gold" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-christmas-gold" />
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-display font-black mb-4">
            Canada & USA Only 🇨🇦 🇺🇸
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-3 text-sm md:text-base">
            <span className="text-christmas-gold font-semibold">Available only as part of our Christmas offer.</span> This package offers a large selection of platinum Canadian and American channels, with advanced features and ultra-high streaming quality.
          </p>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10 text-sm md:text-base">
            Includes 4K and even 8K channels, exclusive sports, movies, series, and a powerful VOD library — all optimized for fast, stable performance. If you want more options, more quality, and more Platinum channels, this is the perfect choice.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal animation="fade-up" delay={150} duration={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {plans.map((plan, index) => <div key={index} className={`relative rounded-2xl transition-transform duration-300 hover:-translate-y-1 ${plan.popular ? 'md:-mt-2 md:mb-2' : ''}`}>
                {/* Card */}
                <div className={`h-full rounded-2xl overflow-hidden ${plan.popular ? 'bg-gradient-to-b from-christmas-gold/20 to-christmas-gold/5 border-2 border-christmas-gold shadow-lg shadow-christmas-gold/10' : 'bg-muted/20 border border-border/60'}`}>
                  
                  {/* Header Bar */}
                  <div className={`py-3 px-4 text-center ${plan.popular ? 'bg-gradient-christmas' : 'bg-muted/50'}`}>
                    <span className={`text-sm font-bold flex items-center justify-center gap-2 ${plan.popular ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {plan.popular && <Sparkles className="w-4 h-4" />}
                      {plan.popular ? 'BEST VALUE' : 'STARTER'}
                      {plan.popular && <Sparkles className="w-4 h-4" />}
                    </span>
                  </div>

                  <div className="p-5 md:p-6">
                    {/* Duration & Price Row */}
                    <div className="flex items-center justify-between mb-5 pb-5 border-b border-border/30">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-5xl font-display font-black ${plan.popular ? 'text-christmas-gold' : ''}`}>{plan.duration}</span>
                          <span className="text-lg font-bold text-muted-foreground">{plan.unit}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Platinum Server</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground line-through">${plan.originalPrice}</div>
                        <div className="text-3xl font-display font-black">${plan.price}</div>
                        <div className="text-xs text-christmas-gold font-semibold">${plan.perMonth}/mo</div>
                      </div>
                    </div>

                    {/* Features - 2 columns */}
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
                      {allFeatures.map((feature, idx) => <div key={idx} className="flex items-center gap-1.5">
                          <Check className={`w-3.5 h-3.5 flex-shrink-0 ${plan.popular ? 'text-christmas-gold' : 'text-christmas-green'}`} />
                          <span className="text-xs text-muted-foreground truncate">{feature}</span>
                        </div>)}
                    </div>

                    {/* Guarantee */}
                    <div className="flex items-center justify-center gap-2 py-2.5 mb-4 rounded-lg bg-christmas-red/10 border border-christmas-red/20">
                      <Shield className="w-4 h-4 text-christmas-red" />
                      <span className="text-xs font-semibold text-christmas-red">Money Back Guarantee</span>
                    </div>

                    {/* CTA */}
                    <a href={plan.link} target="_blank" rel="noopener noreferrer">
                      <Button variant={plan.popular ? 'accent' : 'hero'} size="lg" className="w-full font-bold">
                        <Zap className="w-4 h-4 mr-2" />
                        Get Platinum
                      </Button>
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
        </ScrollReveal>

        {/* Bottom Stats */}
        <ScrollReveal animation="fade-up" delay={300} duration={500}>
          <div className="mt-8 flex items-center justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-display font-black text-christmas-gold">50K+</div>
              <div className="text-xs text-muted-foreground">Happy Users</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-display font-black text-christmas-green">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="text-2xl font-display font-black text-christmas-red">4.9★</div>
              <div className="text-xs text-muted-foreground">Rating</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>;
};
export default PlatinumSection;