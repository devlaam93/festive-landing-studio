import { 
  Tv, 
  Film, 
  Zap, 
  Shield, 
  Globe, 
  Headphones, 
  Clock,
  Smartphone
} from 'lucide-react';
import FeatureCard from './FeatureCard';
import ScrollReveal from './ScrollReveal';

const FeaturesSection = () => {
  const features = [
    {
      icon: Tv,
      title: '15,000+ Live Channels',
      description: 'Access thousands of live TV channels from around the world in HD and 4K quality.'
    },
    {
      icon: Film,
      title: '60,000+ VOD Content',
      description: 'Massive library of movies, series, and exclusive content at your fingertips.'
    },
    {
      icon: Zap,
      title: 'Anti-Freeze™ Technology',
      description: 'Our proprietary 9.8 technology ensures smooth, buffer-free streaming experience.'
    },
    {
      icon: Shield,
      title: 'Privacy & VPN Protection',
      description: 'Built-in VPN protection keeps your streaming activity private and secure.'
    },
    {
      icon: Globe,
      title: 'Multi-Device Support',
      description: 'Watch on any device - Smart TV, phone, tablet, or computer simultaneously.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via live chat to assist you anytime.'
    },
    {
      icon: Clock,
      title: 'Catch-up & EPG',
      description: 'Never miss a show with catch-up TV and full electronic program guide.'
    },
    {
      icon: Smartphone,
      title: 'Free Apps Included',
      description: 'Hotiptv and Ibo player apps included free with your subscription.'
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 text-3xl opacity-20 animate-float">⭐</div>
      <div className="absolute bottom-10 left-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '-2s' }}>❄️</div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Why Choose <span className="text-christmas-gold">MODEIPTV?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              🎅 We're the top IPTV provider in Canada, offering reliable streaming with high-quality video 
              that brings your favorite entertainment to life.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              animation={index % 2 === 0 ? 'fade-up' : 'fade-up'}
              delay={index * 75}
              duration={500}
            >
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
