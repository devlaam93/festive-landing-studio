import { Sparkles, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
const HeroSection = () => {
  // Set countdown to 8 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 8);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-christmas-red/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-christmas-green/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '-3s'
    }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-christmas-gold/5 rounded-full blur-3xl" />
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 text-4xl animate-float" style={{
      animationDelay: '-2s'
    }}>🎄</div>
      <div className="absolute top-48 right-20 text-3xl animate-float" style={{
      animationDelay: '-1s'
    }}>⭐</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{
      animationDelay: '-4s'
    }}>🎁</div>
      <div className="absolute bottom-32 right-10 text-4xl animate-float" style={{
      animationDelay: '-5s'
    }}>❄️</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mt-[20px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-christmas-red/20 border border-christmas-red/40 rounded-full px-4 py-2 mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-christmas-gold" />
            <span className="text-sm font-medium text-christmas-gold">CHRISTMAS SPECIAL</span>
            <Sparkles className="w-4 h-4 text-christmas-gold" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight animate-slide-up">
            <span className="text-christmas-red">Merry</span>
            <br />
            <span className="text-christmas-green">Streaming!</span>
          </h1>

          {/* Discount Badge */}
          <div className="inline-block mb-8 animate-scale-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative">
              <div className="text-7xl md:text-9xl font-display font-black text-gradient-gold">
                80%
              </div>
              <div className="absolute -right-4 -top-4 bg-christmas-red text-foreground font-display font-bold text-xl px-3 py-1 rounded-lg rotate-12 shadow-lg">
                OFF
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: '0.3s'
        }}>Get 1 Month FREE with any subscription! Premium 4K streaming, 30,000+ channels, and unlimited entertainment.<Gift className="inline w-5 h-5 text-christmas-gold mr-2" />
            Get <span className="text-christmas-gold font-semibold">1 Month FREE</span> with any subscription!
            Premium 4K streaming, 15,000+ channels, and unlimited entertainment.
          </p>

          {/* Countdown Timer */}
          <div className="mb-10 animate-scale-in" style={{
          animationDelay: '0.4s'
        }}>
            <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider flex items-center justify-center gap-2">
              <span>🎅</span> Offer ends in: <span>🎅</span>
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{
          animationDelay: '0.5s'
        }}>
            <a href="#pricing">
              <Button variant="hero" size="xl">
                🎁 Claim Your Gift
              </Button>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=15594826660&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="xl">
                ❄️ 24H Free Trial
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;