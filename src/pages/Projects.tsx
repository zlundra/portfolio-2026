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
  notebookUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: "crm-data-quality",
    title: "CRM Data Quality Remediation Engine",
    description:
      "3-layer resolution framework applied to 42k healthcare registrant records — raising data maturity from 11/25 to 19/25 and completeness from 61% to 94%.",
    tags: ["Data Quality", "Healthcare", "Python", "SQL", "CRM", "Fuzzy Matching"],
    imageUrl: "/images/health-project.jpeg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    demoUrl: "/demos/crm-data-quality.html",
  },
  {
    id: "clinical-outcomes",
    title: "Clinical Outcomes Predictor",
    description:
      "Reproducible ML pipeline for stroke risk screening. Baseline logistic regression with SMOTE, stratified validation, and interpretable risk factor analysis.",
    tags: ["Healthcare", "Python", "Machine Learning", "Data Cleaning", "Jupyter"],
    imageUrl: "/images/health-project.jpeg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    demoUrl: "/demos/clinical-outcomes.html",
    notebookUrl:
      "/notebooks/Clinical%20Outcomes%20Predictor%20%28Healthcare%20ML%29.html",
  },
  {
    id: "retail-sales-dashboard",
    title: "Retail Sales Dashboard",
    description:
      "Mobile-responsive interactive dashboard to compare monthly performance, weekly trends, and top stores/departments. Live on Render.",
    tags: ["Dash", "Plotly", "Python", "Pandas", "Deployment", "Responsive UI"],
    imageUrl: "/images/retail-dashboard.png",
    githubUrl: "https://github.com/zlundra/dash-retail-sales-dashboard",
    demoUrl: "https://dash-retail-sales-dashboard.onrender.com/",
  },
];

export default function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PROJECTS;
    return PROJECTS.filter((p) =>
      [p.title, p.description, p.tags.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <Layout>
      <div className="container py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Three projects spanning data quality engineering, clinical ML, and deployed analytics — across Healthcare and Retail.
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
            <p className="text-muted-foreground">No projects match "{query}".</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
