import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Search } from "lucide-react";
import { useMemo, useState } from "react";

type Project = {
  id: string; title: string; description: string;
  tags: string[]; imageUrl: string; githubUrl?: string;
  demoUrl?: string; notebookUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: "crm-data-quality",
    title: "CRM Data Quality Remediation Engine",
    description: "3-layer resolution framework on 42k healthcare registrant records — raising data maturity from 11/25 to 19/25 and completeness from 61% to 94%.",
    tags: ["Data Quality", "Healthcare", "Python", "SQL", "CRM"],
    imageUrl: "/images/thumb-crm-quality.svg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    demoUrl: "/demos/crm-data-quality.html",
  },
  {
    id: "migration-validation",
    title: "CRM Migration Validation Suite",
    description: "Post-migration SQL validation between legacy SQL Server and Salesforce. 47 automated checks covering row counts, referential integrity, field accuracy, and structured sign-off report.",
    tags: ["SQL Server", "Salesforce", "T-SQL", "Migration", "BA", "Data Validation"],
    imageUrl: "/images/thumb-migration-validation.svg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    demoUrl: "/demos/migration-validation.html",
  },
  {
    id: "kpi-catalogue",
    title: "KPI Definition & Data Lineage Catalogue",
    description: "Structured KPI catalogue for a regulated healthcare body — 24 metrics with SQL logic, source lineage, data quality flags, and ownership. Built to resolve dashboard discrepancies.",
    tags: ["BA", "KPI", "SQL", "Power BI", "Data Lineage", "Healthcare"],
    imageUrl: "/images/thumb-kpi-catalogue.svg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    demoUrl: "/demos/kpi-catalogue.html",
  },
  {
    id: "migration-playbook",
    title: "Data Migration Reconciliation Playbook",
    description: "BA-led methodology for validating a CRM migration — 6-phase process from pre-migration baseline through post-go-live monitoring, with SQL templates, sign-off gates, and interactive checklists.",
    tags: ["BA", "Migration", "SQL", "T-SQL", "Process", "Sign-off"],
    imageUrl: "/images/thumb-migration-playbook.svg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    demoUrl: "/demos/migration-playbook.html",
  },
  {
    id: "clinical-outcomes",
    title: "Clinical Outcomes Predictor",
    description: "Reproducible ML pipeline for stroke risk screening. Logistic regression with SMOTE, stratified validation, ROC-AUC 0.84, and interpretable risk factor analysis.",
    tags: ["Healthcare", "Python", "Machine Learning", "Jupyter"],
    imageUrl: "/images/thumb-clinical-outcomes.svg",
    githubUrl: "https://github.com/zlundra/portfolio-2026",
    demoUrl: "/demos/clinical-outcomes.html",
    notebookUrl: "/notebooks/Clinical%20Outcomes%20Predictor%20%28Healthcare%20ML%29.html",
  },
  {
    id: "retail-sales-dashboard",
    title: "Retail Sales Dashboard",
    description: "Mobile-responsive interactive Dash + Plotly dashboard comparing monthly performance, weekly trends, and top stores/departments. Live on Render.",
    tags: ["Dash", "Plotly", "Python", "Pandas", "Deployment"],
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
              Six projects spanning data quality, migration validation, KPI design, and deployed analytics — across Healthcare and Retail.
            </p>
          </div>
          <div className="flex gap-3 items-center w-full md:w-auto">
            <div className="relative w-full md:w-[360px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects…" className="pl-10" />
            </div>
            <a href="https://github.com/zlundra" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/10 hover:bg-white/5" aria-label="Open GitHub">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((p) => (<ProjectCard key={p.id} {...p} />))}
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
