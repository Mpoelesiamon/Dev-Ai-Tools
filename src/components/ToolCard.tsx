import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star, Users, Code, Zap } from "lucide-react";

export type Category = 'AI' | 'Full-stack' | 'WordPress' | 'No-code' | 'Developer' |
  'Research' | 'Image' | 'Copywriting' | 'SEO' | 'Chatbot' | 'Presentation' |
  'Logo' | 'Audio' | 'Marketing' | 'Content Creation' | 'Writing' | 'Website' |
  'Coding' | 'Sales' | 'Art Generators' | 'Productivity' | 'Video' | 'Music';

export interface Tool {
  id: string;
  name: string;
  description: string;
  categories: Category[];
  tags: string[];
  pricing: 'Free' | 'Freemium' | 'Paid';
  url: string;
  logoUrl?: string;
  features: string[];
  limitations?: string[];
  rating: number;
  userCount?: string;
}

interface ToolCardProps {
  tool: Tool;
  onCardClick: (tool: Tool) => void;
}

const categoryColors = {
  'AI': 'bg-purple-100 text-purple-800 border-purple-200',
  'Full-stack': 'bg-blue-100 text-blue-800 border-blue-200',
  'WordPress': 'bg-orange-100 text-orange-800 border-orange-200',
  'No-code': 'bg-green-100 text-green-800 border-green-200',
  'Developer': 'bg-teal-100 text-teal-800 border-teal-200',
  'Research': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'Image': 'bg-pink-100 text-pink-800 border-pink-200',
  'Copywriting': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'SEO': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Chatbot': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  'Presentation': 'bg-violet-100 text-violet-800 border-violet-200',
  'Logo': 'bg-rose-100 text-rose-800 border-rose-200',
  'Audio': 'bg-sky-100 text-sky-800 border-sky-200',
  'Marketing': 'bg-lime-100 text-lime-800 border-lime-200',
  'Content Creation': 'bg-amber-100 text-amber-800 border-amber-200',
  'Writing': 'bg-orange-100 text-orange-800 border-orange-200',
  'Website': 'bg-blue-100 text-blue-800 border-blue-200',
  'Coding': 'bg-slate-100 text-slate-800 border-slate-200',
  'Sales': 'bg-red-100 text-red-800 border-red-200',
  'Art Generators': 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
  'Productivity': 'bg-green-100 text-green-800 border-green-200',
  'Video': 'bg-purple-100 text-purple-800 border-purple-200',
  'Music': 'bg-pink-100 text-pink-800 border-pink-200',
};

const pricingColors = {
  'Free': 'bg-success-light text-success border-success/20',
  'Freemium': 'bg-warning-light text-warning border-warning/20',
  'Paid': 'bg-primary-light text-primary border-primary/20',
};

const ToolCard = ({ tool, onCardClick }: ToolCardProps) => {
  const handleVisitWebsite = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(tool.url, '_blank');
  };

  return (
    <Card 
      className="group cursor-pointer bg-gradient-card border-card-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
      onClick={() => onCardClick(tool)}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {tool.logoUrl ? (
              <img 
                src={tool.logoUrl} 
                alt={`${tool.name} logo`} 
                className="w-10 h-10 rounded-lg object-cover border border-card-border"
              />
            ) : (
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
            )}
            <div>
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {tool.name}
              </CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="outline" className={categoryColors[tool.categories[0]] || 'bg-gray-100 text-gray-800 border-gray-200'}>
                  {tool.categories[0]}
                </Badge>
                {tool.categories.length > 1 && (
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                    +{tool.categories.length - 1}
                  </Badge>
                )}
                <Badge variant="outline" className={pricingColors[tool.pricing]}>
                  {tool.pricing}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-muted-foreground">{tool.rating.toFixed(1)}</span>
            </div>
            {tool.userCount && (
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{tool.userCount}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
          {tool.description}
        </CardDescription>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
              <Zap className="w-4 h-4 mr-1 text-success" />
              Key Features
            </h4>
            <div className="flex flex-wrap gap-1">
              {tool.features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-surface-alt border-card-border">
                  {feature}
                </Badge>
              ))}
              {tool.features.length > 3 && (
                <Badge variant="secondary" className="text-xs bg-surface-alt border-card-border">
                  +{tool.features.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {tool.tags.slice(0, 4).map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex w-full space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onCardClick(tool)}
          >
            Learn More
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1"
            onClick={handleVisitWebsite}
          >
            Visit Site
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;