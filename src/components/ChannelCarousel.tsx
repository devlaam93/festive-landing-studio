import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

// Import official logos
import netflixLogo from '@/assets/logos/netflix.svg';
import primeVideoLogo from '@/assets/logos/prime-video.svg';
import disneyPlusLogo from '@/assets/logos/disney-plus.svg';
import maxLogo from '@/assets/logos/max.svg';
import huluLogo from '@/assets/logos/hulu.svg';
import appleTvLogo from '@/assets/logos/apple-tv.svg';
import paramountLogo from '@/assets/logos/paramount.svg';
import peacockLogo from '@/assets/logos/peacock.svg';

const platforms = [
  { name: 'Netflix', logo: netflixLogo },
  { name: 'Prime Video', logo: primeVideoLogo },
  { name: 'Disney+', logo: disneyPlusLogo },
  { name: 'Max', logo: maxLogo },
  { name: 'Hulu', logo: huluLogo },
  { name: 'Apple TV+', logo: appleTvLogo },
  { name: 'Paramount+', logo: paramountLogo },
  { name: 'Peacock', logo: peacockLogo },
];

const channels = [
  { name: 'Sports', emoji: '⚽', count: '500+' },
  { name: 'Movies', emoji: '🎬', count: '60K+' },
  { name: 'News', emoji: '📰', count: '200+' },
  { name: 'Kids', emoji: '🧸', count: '300+' },
  { name: 'Documentary', emoji: '🎥', count: '400+' },
  { name: 'Music', emoji: '🎵', count: '150+' },
  { name: 'Comedy', emoji: '😂', count: '250+' },
  { name: 'Drama', emoji: '🎭', count: '1000+' },
];

const ChannelCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Duplicate items for seamless loop
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];
  const duplicatedChannels = [...channels, ...channels, ...channels];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-display font-black mb-4">
              All Your <span className="text-christmas-gold">Favorites</span> In One Place
            </h2>
            <p className="text-muted-foreground">
              🎄 Stream content from all major platforms plus 15,000+ live channels
            </p>
          </div>
        </ScrollReveal>

        {/* Platforms Carousel - moves left */}
        <div className="mb-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div 
            className="flex gap-6 py-4"
            style={{ 
              transform: `translateX(-${offset % (platforms.length * 180)}px)`,
            }}
          >
            {duplicatedPlatforms.map((platform, index) => (
              <div
                key={`platform-${index}`}
                className="flex-shrink-0 w-40 h-20 rounded-xl glass border border-border/50 flex items-center justify-center hover:border-christmas-gold/50 transition-all duration-300 hover:scale-105 group"
              >
                <img 
                  src={platform.logo} 
                  alt={platform.name}
                  className="h-8 w-auto max-w-28 object-contain group-hover:scale-110 transition-transform brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Channels Carousel - moves right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div 
            className="flex gap-6 py-4"
            style={{ 
              transform: `translateX(-${(channels.length * 200) - (offset % (channels.length * 200))}px)`,
            }}
          >
            {duplicatedChannels.map((channel, index) => (
              <div
                key={`channel-${index}`}
                className="flex-shrink-0 w-44 h-24 rounded-xl glass border border-border/50 flex flex-col items-center justify-center hover:border-christmas-red/50 transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-3xl mb-1 group-hover:scale-125 transition-transform">{channel.emoji}</span>
                <span className="font-display font-semibold text-sm text-foreground">{channel.name}</span>
                <span className="text-xs text-christmas-gold">{channel.count} channels</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <ScrollReveal animation="fade-up" delay={200} duration={600}>
          <div className="container mx-auto px-4 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '15,000+', label: 'Live Channels', emoji: '📺' },
                { value: '60,000+', label: 'Movies & Series', emoji: '🎬' },
                { value: '4K', label: 'Ultra HD Quality', emoji: '✨' },
                { value: '99.9%', label: 'Uptime', emoji: '⚡' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl glass border border-border/30"
                >
                  <div className="text-2xl mb-1">{stat.emoji}</div>
                  <div className="text-2xl md:text-3xl font-display font-black text-christmas-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ChannelCarousel;
