import PricingCard from './PricingCard';
import ScrollReveal from './ScrollReveal';

const PricingSection = () => {
  const standardFeatures = [
    'Hotiptv app for free',
    'Ibo player app for free',
    'Instant Activation!',
    '+15,000 Channels',
    '+60K Movies and Series (VOD)',
    'Netflix, Amazon Prime, Disney+ et Plus',
    'All sports channels available',
    'Catch-up and EPG',
    'UHD, FHD, HD Channels',
    'Anti-Freeze™ 9.8 Technology',
    '24/7 Live Chat Support',
    '7 days money back guarantee',
  ];

  const premiumFeatures = [
    'Hotiptv app for free',
    'Ibo player app for free',
    'Instant Activation!',
    '+30,000 Channels',
    '+120K Movies and Series (VOD)',
    'Netflix, Amazon Prime, Disney+ et Plus',
    'All sports channels available',
    'Catch-up and EPG',
    'UHD, FHD, HD Channels',
    'Anti-Freeze™ 9.8 Technology',
    'Privacy Protection + Integrated VPN',
    '24/7 Live Chat Support',
  ];

  const pricingPlans = [
    {
      title: '12 Months',
      serverType: 'Standard Performance Server',
      price: '39.99',
      originalPrice: '119',
      discount: '80% OFF',
      features: standardFeatures,
      orderLink: 'https://order.modeiptv.ca/step/checkout-12-months-iptv-subscriptions-2/',
    },
    {
      title: '24 Months',
      serverType: 'Standard Performance Server',
      price: '79.99',
      originalPrice: '199',
      discount: '80% OFF',
      features: standardFeatures,
      orderLink: 'https://order.modeiptv.ca/step/checkout-24-month-iptv-subscriptions-2/',
    },
    {
      title: '12 Months',
      serverType: 'Premium Performance Server',
      price: '59.99',
      originalPrice: '179',
      discount: '80% OFF',
      features: premiumFeatures,
      premium: true,
      popular: true,
      orderLink: 'https://order.modeiptv.ca/step/checkout-12-months-iptv-premium-subscriptions-2/',
    },
    {
      title: '24 Months',
      serverType: 'Premium Performance Server',
      price: '99.99',
      originalPrice: '259',
      discount: '80% OFF',
      features: premiumFeatures,
      premium: true,
      orderLink: 'https://order.modeiptv.ca/step/checkout-24-months-iptv-premium-subscriptions-2/',
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float">🎄</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '-3s' }}>🎁</div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
              Unwrap Your <span className="text-christmas-red">Perfect Plan</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              🎄 12-month and 24-month IPTV subscriptions in Canada, all including 4K streaming, 
              catch-up TV, VOD, and a wide selection of live channels.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up" 
              delay={index * 100}
              duration={600}
            >
              <PricingCard {...plan} />
            </ScrollReveal>
          ))}
        </div>

        {/* Trust Badges */}
        <ScrollReveal animation="fade-up" delay={400} duration={600}>
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">🔒 Secure & Encrypted Payments</p>
            <div className="flex items-center justify-center gap-6 opacity-60">
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">VISA</div>
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">MC</div>
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">AMEX</div>
              <div className="w-12 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">SSL</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingSection;
