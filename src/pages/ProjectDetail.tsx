import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft, CheckCircle2, ExternalLink, Github,
  Layers, NotebookText, Download, Zap,
} from "lucide-react";
import { Link, useRoute } from "wouter";
import { useEffect } from "react";

const GITHUB_REPO = "https://github.com/zlundra/portfolio-2026";

type Project = {
  title: string; subtitle: string; description: string; image: string;
  tags: string[]; role: string; timeline: string; impact: string[];
  stack: string[]; notebookUrl?: string; notebookPath?: string;
  githubUrl: string; demoUrl?: string; challenge: string;
  solution: string; results: string;
};

const projects: Record<string, Project> = {
  "crm-data-quality": {
    title: "CRM Data Quality Remediation Engine",
    subtitle: "Healthcare registrant records · 3-layer resolution framework",
    description: "A systematic data quality remediation framework applied to 42,847 healthcare registrant records — combining deterministic matching, fuzzy logic, and application status sequencing to resolve duplicates, inconsistencies, and missing identifiers.",
    image: "/images/health-project.jpeg",
    tags: ["Data Quality", "Healthcare", "Python", "CRM", "SQL", "Analytics"],
    role: "Data & Insights Officer / BA Lead",
    timeline: "8-week engagement",
    impact: [
      "Overall data completeness improved from 61% to 94% post-remediation",
      "Unique PIN match rate raised from 54% to 97% — eliminating the primary duplicate risk",
      "Data maturity score advanced from 11/25 (Aware) to 19/25 (Managed)",
      "709 records routed to structured manual review queue, reducing analyst time by ~60% vs unstructured review",
      "Name standardisation coverage raised from 43% to 98% via Levenshtein fuzzy matching",
    ],
    stack: ["Python", "Pandas", "Levenshtein distance", "PostgreSQL", "Apache Airflow", "Power BI", "SQL"],
    githubUrl: GITHUB_REPO,
    demoUrl: "/demos/crm-data-quality.html",
    challenge: "42,847 registrant records held across a legacy CRM contained duplicate entries, missing professional identification numbers (PINs), inconsistent name formats (hyphenated surnames, Irish language variants, middle initials), and date of birth transcription errors — making accurate headcount and regulatory reporting unreliable.",
    solution: "Designed a three-layer resolution framework: Layer 1 performs deterministic exact matching on PIN + normalised surname + DOB (72.8% resolved). Layer 2a applies application status sequence logic for pre-2019 records. Layer 2b uses Levenshtein fuzzy matching on surname (threshold ≥0.88) combined with DOB within a 365-day window. Layer 3 routes unresolvable records to a structured manual review template with pre-populated candidate matches.",
    results: "89.4% of records resolved automatically with no analyst intervention. Data maturity score increased by 8 points. The manual queue of 709 records (1.7%) was delivered with full context, reducing review time by an estimated 60%. Power BI scorecard tracks quality delta before/after close.",
  },

  "clinical-outcomes": {
    title: "Clinical Outcomes Predictor",
    subtitle: "Stroke risk assessment · analytics + ML baseline",
    description: "A reproducible ML pipeline for stroke risk screening. Baseline logistic regression trained on clinical survey data with SMOTE for class imbalance, stratified validation, and interpretable feature analysis.",
    image: "/images/health-project.jpeg",
    tags: ["Healthcare", "Analytics", "Machine Learning", "Python"],
    role: "Analytics Engineer / Data Analyst",
    timeline: "Notebook-based prototype",
    impact: [
      "Built a repeatable pipeline: clean → encode → balance → train → evaluate",
      "ROC-AUC of 0.84 on held-out test set using baseline logistic regression",
      "Surfaced leading risk drivers (age, hypertension, glucose) for clinical interpretation",
      "Threshold optimised at 0.3 to maximise recall — prioritising sensitivity in a screening context",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "imbalanced-learn (SMOTE)", "Matplotlib", "Jupyter"],
    notebookUrl: "/notebooks/Clinical%20Outcomes%20Predictor%20%28Healthcare%20ML%29.html",
    notebookPath: "/notebooks/Clinical%20Outcomes%20Predictor%20%28Healthcare%20ML%29.ipynb",
    githubUrl: GITHUB_REPO,
    demoUrl: "/demos/clinical-outcomes.html",
    challenge: "Clinical datasets are typically imbalanced — fewer positive stroke cases — which naive models exploit by predicting the majority class. Decisions in a clinical screening context also require interpretability and traceability, not just accuracy.",
    solution: "Implemented a stratified 80/20 train/test split with SMOTE applied only to the training set to avoid data leakage. Baseline logistic regression selected for interpretability. Classification threshold tuned to 0.3 to prioritise recall, reducing missed cases at the cost of more false positives — appropriate for a screening tool.",
    results: "AUC of 0.84 on held-out test data. Recall of 0.81 at threshold 0.3 — capturing 81% of true stroke cases. Feature importance analysis clearly identifies age, hypertension, and average glucose as the dominant risk factors, providing clinically actionable insight.",
  },

  "retail-sales-dashboard": {
    title: "Retail Sales Dashboard",
    subtitle: "Dash v2+ Interactive Analytics App · Deployed",
    description: "A mobile-responsive dashboard built with Dash + Plotly to compare sales periods, weekly trends, and performance by store/department.",
    image: "/images/retail-dashboard.png",
    tags: ["Dash", "Plotly", "Python", "Pandas", "Data Visualization", "Deployment"],
    role: "End-to-end build",
    timeline: "1–2 days",
    impact: [
      "Interactive period comparison with KPI deltas (sales, holiday sales, store count)",
      "Weekly trend comparison view for fast performance diagnosis",
      "Top stores + department delta ranking to surface drivers",
    ],
    stack: ["Python", "Dash", "Plotly", "Pandas", "Gunicorn", "Render"],
    githubUrl: "https://github.com/zlundra/dash-retail-sales-dashboard",
    demoUrl: "https://dash-retail-sales-dashboard.onrender.com/",
    challenge: "Turn a static dataset into a shareable, interactive dashboard that non-technical users can explore on desktop and mobile.",
    solution: "Implemented responsive layout with Dash Bootstrap Components, clean KPI cards, and interactive charts with dropdown-driven comparisons.",
    results: "A production-ready Dash app deployed from GitHub to Render, linked directly from the portfolio as a live demo.",
  },
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const project = params?.id ? projects[params.id] : null;
  useEffect(() => { window.scrollTo(0, 0); }, [params?.id]);

  if (!match || !project) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-display mb-4">Project Not Found</h1>
          <Link href="/projects"><Button>Return to Projects</Button></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-10" />
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40 blur-sm" />
        </div>
        <div className="container relative z-20">
          <Link href="/projects">
            <Button variant="ghost" className="mb-8 hover:text-primary pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">{project.title}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">{project.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex flex-wrap gap-4 lg:justify-end">
                {project.demoUrl && (
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                    </a>
                  </Button>
                )}
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-5 w-5" /> Repo
                  </a>
                </Button>
                {project.notebookUrl && (
                  <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
                    <a href={project.notebookUrl} target="_blank" rel="noreferrer">
                      <NotebookText className="mr-2 h-5 w-5" /> Notebook
                    </a>
                  </Button>
                )}
                {project.notebookPath && (
                  <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
                    <a href={project.notebookPath} target="_blank" rel="noreferrer">
                      <Download className="mr-2 h-5 w-5" /> .ipynb
                    </a>
                  </Button>
                )}
              </div>
              {(project.notebookUrl || project.notebookPath) && (
                <p className="text-sm text-muted-foreground lg:text-right">
                  Tip: "Notebook" opens the HTML version. ".ipynb" downloads the source file.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container -mt-20 relative z-30 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card p-8 border-t-4 border-t-primary">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Zap className="mr-3 text-primary" /> The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
            </Card>
            <Card className="glass-card p-8 border-t-4 border-t-secondary">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Layers className="mr-3 text-secondary" /> The Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">{project.solution}</p>
              <div className="bg-black/20 rounded-lg p-6 border border-white/5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-white/10">{tech}</Badge>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="glass-card p-8 border-t-4 border-t-accent">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center">
                <CheckCircle2 className="mr-3 text-accent" /> Results & Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">{project.results}</p>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-3 mt-0.5 text-sm">✓</span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="font-display font-bold mb-4 text-lg">Project Details</h3>
              <div className="space-y-4">
                <div><p className="text-sm text-muted-foreground">Role</p><p className="font-medium">{project.role}</p></div>
                <div><p className="text-sm text-muted-foreground">Timeline</p><p className="font-medium">{project.timeline}</p></div>
                <div><p className="text-sm text-muted-foreground">Type</p><p className="font-medium">Portfolio Project</p></div>
              </div>
            </Card>
            <Card className="glass-card p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <h3 className="font-display font-bold mb-2 text-lg">Want something similar?</h3>
              <p className="text-sm text-muted-foreground mb-4">I build analytics pipelines, KPI frameworks, and decision-support reporting — from raw data to stakeholder-ready outputs.</p>
              <Link href="/contact"><Button className="w-full">Get in Touch</Button></Link>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
