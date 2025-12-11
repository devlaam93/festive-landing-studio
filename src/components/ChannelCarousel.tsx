import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

// Platform icons as simple SVG components
const NetflixIcon = () => (
  <svg viewBox="0 0 111 30" className="w-20 h-8" fill="#E50914">
    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 0v21.875c2.75.156 5.5.343 8.25.594v4.5L26.156 26V0h4.594zm-16.406 4.687V10.5h-6.25v4.5h6.25v4.5h-6.25v6.094c-1.562.156-3.125.312-4.687.5V0h14.968v4.687h-4.031z"/>
  </svg>
);

const PrimeIcon = () => (
  <div className="flex flex-col items-center">
    <span className="text-[#00A8E1] font-bold text-lg tracking-tight">prime</span>
    <span className="text-[#00A8E1] text-xs -mt-1">video</span>
  </div>
);

const DisneyIcon = () => (
  <div className="flex items-center gap-0.5">
    <span className="text-[#113CCF] font-display font-black text-xl tracking-tight">Disney</span>
    <span className="text-[#113CCF] font-bold text-xl">+</span>
  </div>
);

const HBOIcon = () => (
  <div className="flex flex-col items-center">
    <span className="text-[#B535F6] font-black text-lg tracking-widest">HBO</span>
    <span className="text-[#B535F6] text-xs font-medium -mt-1">max</span>
  </div>
);

const HuluIcon = () => (
  <span className="text-[#1CE783] font-black text-2xl tracking-tight lowercase">hulu</span>
);

const AppleTVIcon = () => (
  <div className="flex items-center gap-1">
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#A2AAAD">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
    <span className="text-[#A2AAAD] font-medium text-sm">tv+</span>
  </div>
);

const ParamountIcon = () => (
  <div className="flex flex-col items-center">
    <svg viewBox="0 0 24 24" className="w-6 h-6 mb-0.5" fill="#0064FF">
      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3l7 7-7 7-7-7 7-7z"/>
    </svg>
    <span className="text-[#0064FF] font-bold text-xs">Paramount+</span>
  </div>
);

const PeacockIcon = () => (
  <div className="flex items-center gap-1">
    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 via-green-400 to-blue-500" />
    <span className="text-foreground font-bold text-sm">Peacock</span>
  </div>
);

const platforms = [
  { name: 'Netflix', Icon: NetflixIcon },
  { name: 'Prime Video', Icon: PrimeIcon },
  { name: 'Disney+', Icon: DisneyIcon },
  { name: 'HBO Max', Icon: HBOIcon },
  { name: 'Hulu', Icon: HuluIcon },
  { name: 'Apple TV+', Icon: AppleTVIcon },
  { name: 'Paramount+', Icon: ParamountIcon },
  { name: 'Peacock', Icon: PeacockIcon },
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
                <div className="group-hover:scale-110 transition-transform">
                  <platform.Icon />
                </div>
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
