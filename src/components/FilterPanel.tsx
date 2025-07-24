import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Filter, X } from "lucide-react";

export interface FilterState {
  categories: string[];
  pricing: string[];
  tags: string[];
}

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  availableCategories: string[];
  availablePricing: string[];
  availableTags: string[];
}

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  availableCategories, 
  availablePricing, 
  availableTags 
}: FilterPanelProps) => {
  const updateFilter = (type: keyof FilterState, value: string, checked: boolean) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters[type] = [...newFilters[type], value];
    } else {
      newFilters[type] = newFilters[type].filter(item => item !== value);
    }
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      pricing: [],
      tags: [],
    });
  };

  const getActiveFilterCount = () => {
    return filters.categories.length + filters.pricing.length + filters.tags.length;
  };

  const removeFilter = (type: keyof FilterState, value: string) => {
    const newFilters = { ...filters };
    newFilters[type] = newFilters[type].filter(item => item !== value);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          {getActiveFilterCount() > 0 && (
            <Badge variant="secondary" className="bg-primary-light text-primary">
              {getActiveFilterCount()}
            </Badge>
          )}
        </div>
        {getActiveFilterCount() > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear all
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {getActiveFilterCount() > 0 && (
        <Card className="bg-surface-alt border-card-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground">Active Filters</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="bg-surface border-primary/20 text-primary pr-1"
                >
                  {category}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-1 hover:bg-primary/20"
                    onClick={() => removeFilter('categories', category)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
              {filters.pricing.map((price) => (
                <Badge 
                  key={price} 
                  variant="outline" 
                  className="bg-surface border-secondary/20 text-secondary pr-1"
                >
                  {price}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-1 hover:bg-secondary/20"
                    onClick={() => removeFilter('pricing', price)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
              {filters.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline" 
                  className="bg-surface border-success/20 text-success pr-1"
                >
                  #{tag}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 ml-1 hover:bg-success/20"
                    onClick={() => removeFilter('tags', tag)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Category Filter */}
      <Card className="bg-surface border-card-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-foreground">Category</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {availableCategories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => 
                  updateFilter('categories', category, checked as boolean)
                }
              />
              <Label 
                htmlFor={`category-${category}`} 
                className="text-sm text-foreground cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pricing Filter */}
      <Card className="bg-surface border-card-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-foreground">Pricing</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {availablePricing.map((pricing) => (
            <div key={pricing} className="flex items-center space-x-2">
              <Checkbox
                id={`pricing-${pricing}`}
                checked={filters.pricing.includes(pricing)}
                onCheckedChange={(checked) => 
                  updateFilter('pricing', pricing, checked as boolean)
                }
              />
              <Label 
                htmlFor={`pricing-${pricing}`} 
                className="text-sm text-foreground cursor-pointer"
              >
                {pricing}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="bg-surface border-card-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-foreground">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {availableTags.slice(0, 12).map((tag) => (
              <Badge
                key={tag}
                variant={filters.tags.includes(tag) ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  filters.tags.includes(tag) 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-surface-alt"
                }`}
                onClick={() => updateFilter('tags', tag, !filters.tags.includes(tag))}
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterPanel;