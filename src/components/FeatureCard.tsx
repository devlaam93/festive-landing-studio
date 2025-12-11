import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl glass border border-border/50 hover:border-christmas-gold/50 transition-all duration-300 hover:-translate-y-2">
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-christmas-red/5 to-christmas-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Corner decoration */}
      <div className="absolute top-2 right-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">✨</div>
      
      <div className="relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-christmas p-3 mb-4 group-hover:shadow-[0_0_30px_hsl(var(--christmas-red)/0.4)] transition-shadow duration-300">
          <Icon className="w-full h-full text-foreground" />
        </div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
