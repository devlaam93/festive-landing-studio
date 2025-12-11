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
  <svg viewBox="0 0 100 30" className="w-24 h-7">
    <text x="0" y="22" className="font-bold" style={{ fontSize: '18px', fill: '#00A8E1', fontFamily: 'Arial' }}>prime</text>
    <text x="52" y="22" style={{ fontSize: '18px', fill: '#00A8E1', fontFamily: 'Arial' }}>video</text>
    <path d="M82 24c8-3 14-8 18-14" stroke="#00A8E1" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const DisneyIcon = () => (
  <svg viewBox="0 0 150 50" className="w-24 h-8">
    <text x="5" y="35" style={{ fontSize: '32px', fill: '#0057A6', fontFamily: 'serif', fontStyle: 'italic', fontWeight: 'bold' }}>Disney</text>
    <text x="115" y="35" style={{ fontSize: '32px', fill: '#0057A6', fontFamily: 'Arial', fontWeight: 'bold' }}>+</text>
  </svg>
);

const HBOIcon = () => (
  <svg viewBox="0 0 80 40" className="w-20 h-10">
    <text x="5" y="22" style={{ fontSize: '20px', fill: '#FFFFFF', fontFamily: 'Arial', fontWeight: 'bold', letterSpacing: '2px' }}>HBO</text>
    <text x="5" y="36" style={{ fontSize: '14px', fill: '#B535F6', fontFamily: 'Arial', fontWeight: '500' }}>max</text>
  </svg>
);

const HuluIcon = () => (
  <svg viewBox="0 0 80 30" className="w-16 h-6">
    <rect x="0" y="0" width="80" height="30" rx="4" fill="#1CE783"/>
    <text x="10" y="22" style={{ fontSize: '18px', fill: '#FFFFFF', fontFamily: 'Arial', fontWeight: 'bold', letterSpacing: '1px' }}>hulu</text>
  </svg>
);

const AppleTVIcon = () => (
  <svg viewBox="0 0 100 30" className="w-20 h-7">
    <path d="M15 6c-1.5-1.8-3.5-2-4.2-2-.1 0-.2 0-.3 0-1.6.1-3.1 1-4 2.5C5.5 8.2 5 10.5 5 12.5c0 4 2.5 8.5 5 11 1.2 1.2 2.5 2 3.8 2 .7 0 1.3-.2 2-.5.8-.3 1.5-.5 2.2-.5.8 0 1.5.2 2.2.5.7.3 1.3.5 2 .5 1.5 0 2.8-1 4-2.2.7-.8 1.3-1.6 1.8-2.5-2-.9-3.3-3-3.3-5.3 0-2.2 1.2-4.2 3-5.2-.8-1.2-2.3-2.3-4.2-2.3-.7 0-1.5.2-2.2.5-.7.3-1.4.5-2.1.5-.7 0-1.4-.2-2-.5-.5-.2-1.2-.5-2.2-.5z" fill="#A2AAAD"/>
    <path d="M18 2c-1 1.2-2.5 2-4 2 0-1.5.5-3 1.5-4C16.5.8 17.8.2 19 0c0 .8-.3 1.6-1 2z" fill="#A2AAAD"/>
    <text x="28" y="20" style={{ fontSize: '14px', fill: '#A2AAAD', fontFamily: 'Arial', fontWeight: '500' }}>tv+</text>
  </svg>
);

const ParamountIcon = () => (
  <svg viewBox="0 0 120 40" className="w-24 h-8">
    <path d="M20 35L35 5h10L60 35" fill="none" stroke="#0064FF" strokeWidth="3"/>
    <path d="M25 25h20" stroke="#0064FF" strokeWidth="3"/>
    <text x="45" y="28" style={{ fontSize: '12px', fill: '#0064FF', fontFamily: 'Arial', fontWeight: 'bold' }}>Paramount+</text>
  </svg>
);

const PeacockIcon = () => (
  <svg viewBox="0 0 100 35" className="w-24 h-8">
    <defs>
      <linearGradient id="peacockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700"/>
        <stop offset="25%" stopColor="#FF6B35"/>
        <stop offset="50%" stopColor="#E91E63"/>
        <stop offset="75%" stopColor="#4CAF50"/>
        <stop offset="100%" stopColor="#2196F3"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="17" r="10" fill="url(#peacockGrad)"/>
    <text x="26" y="23" style={{ fontSize: '16px', fill: '#FFFFFF', fontFamily: 'Arial', fontWeight: 'bold' }}>Peacock</text>
  </svg>
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
