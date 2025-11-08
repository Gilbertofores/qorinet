// ProductCard component
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  badge?: string;
  icon: LucideIcon;
  iconColor?: string;
}

export function ProductCard({ name, description, features, badge, icon: Icon, iconColor = "hsl(var(--primary))" }: ProductCardProps) {
  const whatsappNumber = "976830280";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría comprar una licencia."
  );
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.3)] hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card to-card/50">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div 
            className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            style={{ boxShadow: `0 4px 20px -4px ${iconColor}40` }}
          >
            <Icon className="w-8 h-8" style={{ color: iconColor }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <CardTitle className="text-xl">{name}</CardTitle>
              {badge && (
                <Badge variant="secondary" className="bg-gradient-to-r from-accent to-primary text-white shadow-lg">
                  {badge}
                </Badge>
              )}
            </div>
            <CardDescription className="text-muted-foreground mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        
      </CardContent>
      <CardFooter>
        <Button
                variant="hero"
                size="sm"
                onClick={() => window.open(`https://wa.me/51${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
                className="gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Comprar
              </Button>
      </CardFooter>
    </Card>
  );
}
