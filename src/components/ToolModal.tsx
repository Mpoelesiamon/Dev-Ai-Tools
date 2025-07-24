import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ExternalLink, 
  Star, 
  Users, 
  Code, 
  Zap, 
  AlertTriangle,
  DollarSign,
  Calendar,
  Github,
  Globe
} from "lucide-react";
import { Tool } from "./ToolCard";

interface ToolModalProps {
  tool: Tool | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryColors = {
  'AI': 'bg-purple-100 text-purple-800 border-purple-200',
  'Full-stack': 'bg-blue-100 text-blue-800 border-blue-200',
  'WordPress': 'bg-orange-100 text-orange-800 border-orange-200',
  'No-code': 'bg-green-100 text-green-800 border-green-200',
  'Developer': 'bg-teal-100 text-teal-800 border-teal-200',
};

const pricingColors = {
  'Free': 'bg-success-light text-success border-success/20',
  'Freemium': 'bg-warning-light text-warning border-warning/20',
  'Paid': 'bg-primary-light text-primary border-primary/20',
};

const ToolModal = ({ tool, isOpen, onClose }: ToolModalProps) => {
  if (!tool) return null;

  const handleVisitWebsite = () => {
    window.open(tool.url, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-surface border-card-border">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              {tool.logoUrl ? (
                <img 
                  src={tool.logoUrl} 
                  alt={`${tool.name} logo`} 
                  className="w-16 h-16 rounded-xl object-cover border border-card-border shadow-md"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center shadow-md">
                  <Code className="w-8 h-8 text-white" />
                </div>
              )}
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                  {tool.name}
                </DialogTitle>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={categoryColors[tool.category]}>
                    {tool.category}
                  </Badge>
                  <Badge variant="outline" className={pricingColors[tool.pricing]}>
                    <DollarSign className="w-3 h-3 mr-1" />
                    {tool.pricing}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-muted-foreground">{tool.rating.toFixed(1)}</span>
                  </div>
                  {tool.userCount && (
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{tool.userCount}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </div>

            <Separator className="bg-card-border" />

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-success" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitations */}
            {tool.limitations && tool.limitations.length > 0 && (
              <>
                <Separator className="bg-card-border" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
                    Limitations
                  </h3>
                  <div className="space-y-2">
                    {tool.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-warning rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <Separator className="bg-card-border" />

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-surface-alt border-card-border">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-card-border">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button variant="gradient" onClick={handleVisitWebsite}>
            Visit Website
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ToolModal;