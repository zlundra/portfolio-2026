import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Search } from "lucide-react";
import { useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  notebookUrl?: string; // this should point to the HTML notebook
};

const PROJECTS: Project[] = [
  {
    id: "clinical-outcomes",
    title: "Clinical Outcomes Predictor",
    description:
      "An applied analytics + ML notebook exploring stroke risk factors and building a baseline risk model using the public stroke dataset.",
    tags: ["Healthcare", "Python", "ML (baseline)", "Data Cleaning", "Jupyter"],
    imageUrl: "/images/health-project.jpg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    notebookUrl:
      "/notebooks/Clinical%20Outcomes%20Predictor%20%28Healthcare%20ML%29.html",
  },
  {
    id: "global-real-estate",
    title: "Global Real Estate Intelligence",
    description:
      "A market intelligence notebook that cleans global property data and builds comparable valuation metrics for cross-market analysis.",
    tags: ["PropTech", "Python", "Analytics", "Feature Engineering", "Jupyter"],
    imageUrl: "/images/proptech-project.jpg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    notebookUrl:
      "/notebooks/Global%20Real%20Estate%20Intelligence%20%28PropTech%29.html",
  },
  {
    id: "public-health",
    title: "Public Health Surveillance",
    description:
      "An ETL-style notebook that profiles vitamin deficiency data and produces trend-ready tables for dashboards and reporting.",
    tags: ["Data Engineering", "ETL", "Python", "Quality Checks", "Jupyter"],
    imageUrl: "/images/hero-bg.jpg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    notebookUrl:
      "/notebooks/Public%20Health%20Surveillance%20%28Data%20Engineering%29.html",
  },
  {
  id: "retail-sales-dashboard",
  title: "Retail Sales Dashboard (Dash + Plotly)",
  description:
    "Mobile-responsive interactive dashboard to compare monthly performance, weekly trends, and top stores/departments.",
  tags: ["Dash", "Plotly", "Python", "Pandas", "Deployment", "Responsive UI"],
  imageUrl: "/images/retail-dashboard.png",
  githubUrl: "https://github.com/zlundra/dash-retail-sales-dashboard",
  demoUrl: "https://dash-retail-sales-dashboard.onrender.com/",
  category: "Data Apps"
},
];

export default function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PROJECTS;
    return PROJECTS.filter((p) =>
      [p.title, p.description, p.tags.join(" ")].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <Layout>
      <div className="container py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Three portfolio projects that showcase analytics engineering, BI-ready thinking, and applied modelling.
            </p>
          </div>

          <div className="flex gap-3 items-center w-full md:w-auto">
            <div className="relative w-full md:w-[360px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="pl-10"
              />
            </div>
            <a href="https://github.com/zlundra" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/10 hover:bg-white/5" aria-label="Open GitHub">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects match “{query}”.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
