import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import ToolCard, { Tool } from "@/components/ToolCard";
import FilterPanel, { FilterState } from "@/components/FilterPanel";
import ToolModal from "@/components/ToolModal";
import { aiTools, getUniqueCategories, getUniquePricing, getUniqueTags } from "@/data/aiTools";
import { Search, TrendingUp, Users, Zap, ArrowRight, Github, Globe, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    pricing: [],
    tags: [],
  });
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const availableCategories = getUniqueCategories();
  const availablePricing = getUniquePricing();
  const availableTags = getUniqueTags();

  const filteredTools = useMemo(() => {
    return aiTools.filter((tool) => {
      // Search query filter
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = 
        filters.categories.length === 0 || 
        filters.categories.includes(tool.category);

      // Pricing filter
      const matchesPricing = 
        filters.pricing.length === 0 || 
        filters.pricing.includes(tool.pricing);

      // Tags filter
      const matchesTags = 
        filters.tags.length === 0 || 
        filters.tags.some(tag => tool.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesPricing && matchesTags;
    });
  }, [searchQuery, filters]);

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTool(null);
  };

  const stats = [
    {
      label: "AI Tools",
      value: `${aiTools.length}+`,
      description: "Curated development tools",
      icon: Zap,
      color: "text-primary"
    },
    {
      label: "Categories",
      value: availableCategories.length.toString(),
      description: "Tool categories",
      icon: TrendingUp,
      color: "text-secondary"
    },
    {
      label: "Active Users",
      value: "2M+",
      description: "Monthly tool explorers",
      icon: Users,
      color: "text-success"
    },
    {
      label: "Success Rate",
      value: "95%",
      description: "Developer satisfaction",
      icon: Star,
      color: "text-warning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="AI Development Tools" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              The New Development{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Frontier
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover every AI software, platform, and assistant that's transforming how we build. 
              From frontend magic to backend wizardry, find your perfect development companion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" variant="gradient" className="px-8">
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Submit Your Tool
                <Github className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-card-border shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                      <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-foreground mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tool Explorer Section */}
      <section id="explorer" className="py-16 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interactive Tool Explorer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Filter by purpose, platform, or pricing. Find the perfect AI tool for your development needs.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1 mb-8 lg:mb-0">
              <FilterPanel
                filters={filters}
                onFilterChange={setFilters}
                availableCategories={availableCategories}
                availablePricing={availablePricing}
                availableTags={availableTags}
              />
            </div>

            {/* Tools Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {filteredTools.length} tools found
                  </h3>
                  {(searchQuery || filters.categories.length > 0 || filters.pricing.length > 0 || filters.tags.length > 0) && (
                    <Badge variant="outline" className="bg-primary-light text-primary border-primary/20">
                      Filtered
                    </Badge>
                  )}
                </div>
              </div>

              {/* Tools Grid */}
              {filteredTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTools.map((tool) => (
                    <ToolCard
                      key={tool.id}
                      tool={tool}
                      onCardClick={handleToolClick}
                    />
                  ))}
                </div>
              ) : (
                <Card className="bg-surface border-card-border text-center py-12">
                  <CardContent>
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <CardTitle className="text-xl text-foreground mb-2">No tools found</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Try adjusting your search criteria or filters to find more tools.
                    </CardDescription>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Insights & Workflows
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the tools that are shaping AI development today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-card-border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Popular Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availableCategories.slice(0, 5).map((category, index) => {
                    const count = aiTools.filter(tool => tool.category === category).length;
                    const percentage = Math.round((count / aiTools.length) * 100);
                    return (
                      <div key={category} className="flex justify-between items-center">
                        <span className="text-sm text-foreground">{category}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-8">{percentage}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-card-border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Zap className="w-5 h-5 mr-2 text-success" />
                  Pricing Models
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availablePricing.map((pricing, index) => {
                    const count = aiTools.filter(tool => tool.pricing === pricing).length;
                    const percentage = Math.round((count / aiTools.length) * 100);
                    return (
                      <div key={pricing} className="flex justify-between items-center">
                        <span className="text-sm text-foreground">{pricing}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-muted rounded-full h-2">
                            <div 
                              className="bg-secondary h-2 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground w-8">{percentage}%</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-card-border shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Globe className="w-5 h-5 mr-2 text-warning" />
                  Trending Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {availableTags.slice(0, 12).map((tag, index) => {
                    const count = aiTools.filter(tool => tool.tags.includes(tag)).length;
                    return (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="bg-surface-alt border-card-border text-foreground"
                      >
                        #{tag} ({count})
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About AI Explorer
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            AI Explorer is your comprehensive directory for discovering the latest and greatest AI development tools. 
            Whether you're a seasoned developer, a no-code enthusiast, or just starting your journey with AI, 
            we help you find the perfect tools to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gradient" size="lg">
              Submit Your Tool
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Tool Modal */}
      <ToolModal
        tool={selectedTool}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Index;