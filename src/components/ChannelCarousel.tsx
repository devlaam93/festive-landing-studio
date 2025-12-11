import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

// Platform icons as simple SVG components
const NetflixIcon = () => (
  <svg viewBox="0 0 1024 276.742" className="w-24 h-7">
    <path 
      d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z" 
      fill="#E50914"
    />
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
