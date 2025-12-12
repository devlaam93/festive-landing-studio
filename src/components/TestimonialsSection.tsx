import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Michael T.',
      location: 'Toronto, ON',
      rating: 5,
      text: "Best IPTV service I've used in Canada. Crystal clear 4K quality on all my sports channels. No buffering during NHL games!",
      date: 'November 2024',
      avatar: 'MT'
    },
    {
      name: 'Sarah L.',
      location: 'Vancouver, BC',
      rating: 5,
      text: "Finally cut the cord! 15,000+ channels for a fraction of cable cost. Setup was instant and support replied within minutes.",
      date: 'December 2024',
      avatar: 'SL'
    },
    {
      name: 'David R.',
      location: 'Montreal, QC',
      rating: 5,
      text: "The Platinum package is incredible. All Canadian and US channels plus every streaming service. My whole family loves it!",
      date: 'October 2024',
      avatar: 'DR'
    },
    {
      name: 'Jennifer K.',
      location: 'Calgary, AB',
      rating: 5,
      text: "Switched from cable 6 months ago. Never looked back. The VOD library alone is worth it. Great Christmas deal too!",
      date: 'December 2024',
      avatar: 'JK'
    },
    {
      name: 'Robert M.',
      location: 'Ottawa, ON',
      rating: 5,
      text: "Anti-freeze technology actually works! Zero buffering even during peak hours. Customer service is excellent and quick.",
      date: 'November 2024',
      avatar: 'RM'
    },
    {
      name: 'Lisa W.',
      location: 'Edmonton, AB',
      rating: 5,
      text: "Works perfectly on all my devices - Smart TV, phone, tablet. The app is so easy to use. Highly recommend MODE IPTV!",
      date: 'October 2024',
      avatar: 'LW'
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-4xl opacity-20 animate-float">⭐</div>
      <div className="absolute bottom-20 left-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '-2s' }}>💬</div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-christmas-gold/10 text-christmas-gold text-sm font-semibold mb-4">
              ⭐ Trusted by 50,000+ Canadians
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4">
              What Our <span className="text-christmas-gold">Customers Say</span>
            </h2>
            <p className="text-muted-foreground">
              Real reviews from satisfied MODE IPTV subscribers across Canada
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100} duration={600}>
              <div className="h-full glass rounded-2xl p-6 border border-border/50 hover:border-christmas-gold/30 transition-all duration-300 hover:-translate-y-1">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-christmas-gold/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-christmas-gold text-christmas-gold" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-christmas flex items-center justify-center text-sm font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location} • {testimonial.date}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Rating Badge */}
        <ScrollReveal animation="fade-up" delay={400} duration={600}>
          <div className="mt-12 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-christmas-gold text-christmas-gold" />
                ))}
              </div>
              <span className="font-display font-bold text-2xl">4.9</span>
            </div>
            <p className="text-sm text-muted-foreground">Based on 500+ verified reviews</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
