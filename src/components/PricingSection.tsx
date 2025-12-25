import { Check, X, Crown, Zap, Shield, Tv, Film, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import paymentBadges from '@/assets/payment-badges.webp';
const PricingSection = () => {
  const features = [{
    name: 'Live Channels',
    standard: '15,000+',
    premium: '30,000+',
    icon: Tv
  }, {
    name: 'Movies & Series (VOD)',
    standard: '60K+',
    premium: '120K+',
    icon: Film
  }, {
    name: 'Hotiptv App',
    standard: true,
    premium: true
  }, {
    name: 'Ibo Player App',
    standard: true,
    premium: true
  }, {
    name: 'Instant Activation',
    standard: true,
    premium: true
  }, {
    name: 'Netflix, Prime, Disney+',
    standard: true,
    premium: true
  }, {
    name: 'All Sports Channels',
    standard: true,
    premium: true
  }, {
    name: 'Catch-up & EPG',
    standard: true,
    premium: true
  }, {
    name: 'UHD, FHD, HD Quality',
    standard: true,
    premium: true
  }, {
    name: 'Anti-Freeze™ Technology',
    standard: '9.8',
    premium: '10.0'
  }, {
    name: 'Privacy Protection + VPN',
    standard: false,
    premium: true,
    icon: Shield
  }, {
    name: '24/7 Support',
    standard: true,
    premium: true,
    icon: Headphones
  }, {
    name: 'Money Back Guarantee',
    standard: '7 Days',
    premium: '14 Days'
  }];
  const plans = [{
    type: 'standard',
    icon: Zap,
    title: 'Standard',
    subtitle: 'Performance Server',
    color: 'christmas-red',
    options: [{
      duration: '12 Months',
      price: '39.99',
      originalPrice: '119',
      discount: '80%',
      link: 'https://order.modeiptv.ca/step/checkout-12-months-iptv-subscriptions-2/'
    }, {
      duration: '24 Months',
      price: '79.99',
      originalPrice: '199',
      discount: '80%',
      link: 'https://order.modeiptv.ca/step/checkout-24-month-iptv-subscriptions-2/'
    }]
  }, {
    type: 'premium',
    icon: Crown,
    title: 'Premium',
    subtitle: 'Performance Server',
    color: 'christmas-gold',
    popular: true,
    options: [{
      duration: '12 Months',
      price: '59.99',
      originalPrice: '179',
      discount: '80%',
      link: 'https://order.modeiptv.ca/step/checkout-12-months-iptv-premium-subscriptions-2/',
      popular: true
    }, {
      duration: '24 Months',
      price: '99.99',
      originalPrice: '259',
      discount: '80%',
      link: 'https://order.modeiptv.ca/step/checkout-24-months-iptv-premium-subscriptions-2/'
    }]
  }];
  return <section id="pricing" className="py-20 md:py-32 relative overflow-hidden pt-[148px]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float">🎄</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-float" style={{
      animationDelay: '-3s'
    }}>🎁</div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-christmas-red/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-christmas-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-christmas-red/10 text-christmas-red text-sm font-semibold mb-4">
              🎄 Holiday Special - Up to 80% OFF
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
              Choose Your <span className="text-christmas-gold">Perfect Plan</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Compare our plans and find the best fit for your entertainment needs
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Table */}
        <ScrollReveal animation="fade-up" delay={200} duration={700}>
          <div className="max-w-5xl mx-auto">
        {/* Plan Headers - Mobile */}
            <div className="grid grid-cols-[1fr_80px_80px] gap-1 mb-0 md:hidden">
              <div />
              {plans.map(plan => <div key={plan.type} className={`relative text-center py-3 px-2 rounded-t-xl border-t border-x ${plan.popular ? 'bg-christmas-gold/10 border-christmas-gold/50' : 'bg-muted/30 border-border/50'}`}>
                  {plan.popular && <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-gradient-christmas px-2 py-0.5 rounded-full text-[9px] font-bold text-foreground whitespace-nowrap">
                        MOST POPULAR
                      </span>
                    </div>}
                  <plan.icon className={`w-5 h-5 mx-auto mb-1 ${plan.type === 'premium' ? 'text-christmas-gold' : 'text-christmas-red'}`} />
                  <h3 className="font-display font-bold text-xs">{plan.title}</h3>
                  <p className={`text-[9px] leading-tight ${plan.type === 'premium' ? 'text-christmas-gold' : 'text-christmas-red'}`}>{plan.subtitle}</p>
                </div>)}
            </div>

            {/* Plan Headers - Desktop */}
            <div className="hidden md:grid grid-cols-3 gap-4 mb-2">
              <div />
              {plans.map(plan => <div key={plan.type} className={`relative text-center p-6 pt-10 rounded-t-2xl border-t border-x ${plan.popular ? 'bg-christmas-gold/10 border-christmas-gold/50' : 'bg-muted/30 border-border/50'}`}>
                  {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-gradient-christmas px-4 py-1.5 rounded-full text-xs font-bold text-foreground whitespace-nowrap">
                        MOST POPULAR
                      </span>
                    </div>}
                  <plan.icon className={`w-8 h-8 mx-auto mb-2 ${plan.type === 'premium' ? 'text-christmas-gold' : 'text-christmas-red'}`} />
                  <h3 className="font-display font-bold text-xl">{plan.title}</h3>
                  <p className={`text-sm ${plan.type === 'premium' ? 'text-christmas-gold' : 'text-christmas-red'}`}>{plan.subtitle}</p>
                </div>)}
            </div>

            {/* Features Comparison Table - Mobile */}
            <div className="glass-strong rounded-b-xl rounded-t-none border border-t-0 border-border/50 overflow-hidden md:hidden">
              {features.map((feature, index) => <div key={index} className={`grid grid-cols-[1fr_80px_80px] gap-1 px-3 py-2.5 ${index % 2 === 0 ? 'bg-muted/10' : ''} ${index !== features.length - 1 ? 'border-b border-border/30' : ''}`}>
                  <div className="flex items-center">
                    <span className="text-[11px] font-medium leading-tight">{feature.name}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof feature.standard === 'boolean' ? feature.standard ? <Check className="w-4 h-4 text-christmas-green" /> : <X className="w-4 h-4 text-muted-foreground/50" /> : <span className="text-[10px] font-semibold text-christmas-red text-center">{feature.standard}</span>}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof feature.premium === 'boolean' ? feature.premium ? <Check className="w-4 h-4 text-christmas-gold" /> : <X className="w-4 h-4 text-muted-foreground/50" /> : <span className="text-[10px] font-semibold text-christmas-gold text-center">{feature.premium}</span>}
                  </div>
                </div>)}
            </div>

            {/* Features Comparison Table - Desktop */}
            <div className="hidden md:block glass-strong rounded-2xl border border-border/50 overflow-hidden">
              {features.map((feature, index) => <div key={index} className={`grid grid-cols-3 gap-4 px-6 py-4 ${index % 2 === 0 ? 'bg-muted/10' : ''} ${index !== features.length - 1 ? 'border-b border-border/30' : ''}`}>
                  <div className="flex items-center gap-3">
                    {feature.icon && <feature.icon className="w-4 h-4 text-muted-foreground" />}
                    <span className="text-base font-medium">{feature.name}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof feature.standard === 'boolean' ? feature.standard ? <Check className="w-5 h-5 text-christmas-green" /> : <X className="w-5 h-5 text-muted-foreground/50" /> : <span className="text-sm font-semibold text-christmas-red">{feature.standard}</span>}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof feature.premium === 'boolean' ? feature.premium ? <Check className="w-5 h-5 text-christmas-gold" /> : <X className="w-5 h-5 text-muted-foreground/50" /> : <span className="text-sm font-semibold text-christmas-gold">{feature.premium}</span>}
                  </div>
                </div>)}
            </div>

            {/* Pricing Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {plans.map(plan => <div key={plan.type} className={`rounded-2xl p-6 border ${plan.popular ? 'bg-gradient-to-br from-christmas-gold/10 to-christmas-gold/5 border-christmas-gold/50' : 'glass-strong border-border/50'}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <plan.icon className={`w-6 h-6 ${plan.type === 'premium' ? 'text-christmas-gold' : 'text-christmas-red'}`} />
                    <h4 className="font-display font-bold text-lg">{plan.title} Plans</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {plan.options.map((option, idx) => <div key={idx} className={`relative p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${option.popular ? 'bg-christmas-gold/10 border-christmas-gold/50' : 'bg-muted/20 border-border/50 hover:border-border'}`}>
                        {option.popular && <span className="absolute -top-2 right-4 bg-christmas-red px-2 py-0.5 rounded text-[10px] font-bold text-white">
                            BEST VALUE
                          </span>}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="font-display font-bold text-lg">{option.duration}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-2xl md:text-3xl font-display font-black">
                                ${option.price}
                              </span>
                              <div className="flex flex-col">
                                <span className="text-xs text-muted-foreground line-through">${option.originalPrice}</span>
                                <span className={`text-xs font-bold ${plan.type === 'premium' ? 'text-christmas-gold' : 'text-christmas-green'}`}>{option.discount} OFF</span>
                              </div>
                            </div>
                          </div>
                          <a href={option.link} target="_blank" rel="noopener noreferrer">
                            <Button variant={plan.type === 'premium' ? 'accent' : 'hero'} size="lg" className="whitespace-nowrap">
                              🎁 Order
                            </Button>
                          </a>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Only ${(parseFloat(option.price) / parseInt(option.duration)).toFixed(2)}/month
                        </p>
                      </div>)}
                  </div>
                </div>)}
            </div>
          </div>
        </ScrollReveal>

        {/* Trust Badges */}
        <ScrollReveal animation="fade-up" delay={400} duration={600}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">🔒 Secure & Encrypted Payments</p>
            <img src={paymentBadges} alt="Secure payment methods - Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, Google Pay, iDEAL, Klarna, Bancontact" className="max-w-xs md:max-w-md mx-auto h-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>;
};
export default PricingSection;