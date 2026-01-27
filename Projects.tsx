import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const allProjects = [
  {
    id: "clinical-outcomes",
    title: "Clinical Outcomes Predictor",
    description: "Machine Learning pipeline for predicting stroke risk using logistic regression and advanced feature engineering.",
    tags: ["Healthcare", "ML", "Python", "Scikit-Learn"],
    imageUrl: "/images/health-project.jpg",
    githubUrl: "https://github.com/valentina-resner",
    category: "Healthcare"
  },
  {
    id: "proptech-intelligence",
    title: "Global Real Estate Intelligence",
    description: "Interactive dashboard for worldwide property valuation and market density analysis.",
    tags: ["PropTech", "Analytics", "Geospatial", "Pandas"],
    imageUrl: "/images/proptech-project.jpg",
    githubUrl: "https://github.com/valentina-resner",
    category: "PropTech"
  },
  {
    id: "public-health",
    title: "Public Health Surveillance",
    description: "ETL pipeline and analysis system for tracking vitamin deficiency trends across populations.",
    tags: ["Public Health", "Data Eng", "Python", "ETL"],
    imageUrl: "/images/hero-bg.jpg",
    githubUrl: "https://github.com/valentina-resner",
    category: "Healthcare"
  },
  {
    id: "investment-risk",
    title: "Property Investment Risk Analyzer",
    description: "Predictive model assessing investment risk based on market volatility and economic indicators.",
    tags: ["PropTech", "Finance", "ML", "Forecasting"],
    imageUrl: "/images/proptech-project.jpg",
    githubUrl: "https://github.com/valentina-resner",
    category: "PropTech"
  }
];

const categories = ["All", "PropTech", "Healthcare", "Data Engineering"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory || (activeCategory === "Data Engineering" && project.tags.includes("Data Eng"));
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="container py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Selected Projects</h1>
          <p className="text-xl text-muted-foreground">
            A collection of technical case studies demonstrating expertise in predictive modeling, 
            data engineering, and specialized domain analytics.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search projects..." 
              className="pl-10 bg-white/5 border-white/10 rounded-full focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            <Button variant="link" onClick={() => {setActiveCategory("All"); setSearchQuery("");}}>Clear Filters</Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
