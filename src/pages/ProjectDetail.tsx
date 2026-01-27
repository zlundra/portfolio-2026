import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  NotebookText,
  Download,
  Zap,
} from "lucide-react";
import { Link, useRoute } from "wouter";
import { useEffect } from "react";

const GITHUB_REPO = "https://github.com/zlundra/portfolio-2026";
const COLAB_BASE = "https://colab.research.google.com/github/zlundra/portfolio-2026/blob/main";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  timeline: string;
  impact: string[];
  stack: string[];
  /** downloadable .ipynb inside /public/notebooks */
  notebookPath: string;
  /** viewable .html inside /public/notebooks */
  notebookUrl: string;
  githubUrl: string;
  demoUrl?: string;
  challenge: string;
  solution: string;
  results: string;
};

const projects: Record<string, Project> = {
  "clinical-outcomes": {
    title: "Clinical Outcomes Predictor",
    subtitle: "Stroke risk assessment (analytics + ML prototype)",
    description:
      "A reproducible workflow that cleans and explores clinical data and trains a baseline classifier for stroke risk screening. The focus is on interpretable features, validation, and clear reporting.",
    image: "/images/health-project.jpg",
    tags: ["Healthcare", "Analytics", "Machine Learning", "Python"],
    role: "Analytics Engineer / Data Analyst",
    timeline: "Notebook-based prototype",
    impact: [
      "Built a repeatable pipeline: clean → feature prep → baseline model → evaluation",
      "Surfaced leading risk drivers (age, hypertension, glucose) for stakeholder discussion",
      "Packaged results in an executable notebook for review and iteration",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],

    // IMPORTANT: use parentheses encoding in URLs for reliability
    notebookUrl:
      "/notebooks/Clinical%20Outcomes%20Predictor%20%28Healthcare%20ML%29.html",
    notebookPath:
      "/notebooks/Clinical%20Outcomes%20Predictor%20%28Healthcare%20ML%29.ipynb",

    githubUrl: GITHUB_REPO,
    demoUrl: undefined,

    challenge:
      "Clinical datasets can be imbalanced (fewer positive stroke cases), and decisions need clarity and traceability — not just accuracy.",
    solution:
      "Implemented a simple, auditable baseline (logistic regression) with careful preprocessing, stratified train/test split, and clear evaluation outputs.",
    results:
      "The notebook produces a transparent baseline model and a clean analysis trail that can be expanded with additional features, tuning, and clinical validation.",
  },

  "global-real-estate": {
    title: "Global Real Estate Intelligence",
    subtitle: "Market valuation insights from global housing data",
    description:
      "An analytics notebook that standardizes worldwide housing data, derives comparable price metrics, and highlights market differences with clear visuals.",
    image: "/images/proptech-project.jpg",
    tags: ["PropTech", "Analytics", "Market Insights", "Python"],
    role: "Data Analyst / Analytics Engineer",
    timeline: "Notebook-based prototype",
    impact: [
      "Created comparable metrics (e.g., price per sqm) to support cross-market comparisons",
      "Explored outliers and distribution differences across regions",
      "Produced visual summaries suitable for product/investor narratives",
    ],
    stack: ["Python", "Pandas", "Visualization", "Jupyter"],

    notebookUrl:
      "/notebooks/Global%20Real%20Estate%20Intelligence%20%28PropTech%29.html",
    notebookPath:
      "/notebooks/Global%20Real%20Estate%20Intelligence%20%28PropTech%29.ipynb",

    githubUrl: GITHUB_REPO,
    demoUrl: undefined,

    challenge:
      "Real estate data is fragmented and inconsistent across markets, so meaningful comparison requires consistent units and derived metrics.",
    solution:
      "Built a small valuation/standardization workflow to compute comparable metrics and create market-level summaries.",
    results:
      "The notebook produces market snapshots and highlights variation across regions — a foundation for future geospatial enrichment and automated valuation features.",
  },

  "public-health": {
    title: "Public Health Surveillance",
    subtitle: "ETL pipeline for vitamin deficiency trends",
    description:
      "A lightweight ETL-style notebook that loads health survey data, cleans key fields, and generates trend tables and simple visuals for reporting.",
    image: "/images/hero-bg.jpg",
    tags: ["Data Engineering", "ETL", "Public Health", "Python"],
    role: "Data & Insights (ETL / Reporting)",
    timeline: "Notebook-based prototype",
    impact: [
      "Structured an ETL workflow suitable for scheduled refresh",
      "Generated trend summaries by nutrient and demographic segment",
      "Created a repeatable template for public health reporting",
    ],
    stack: ["Python", "Pandas", "Data Cleaning", "Jupyter"],

    notebookUrl:
      "/notebooks/Public%20Health%20Surveillance%20%28Data%20Engineering%29.html",
    notebookPath:
      "/notebooks/Public%20Health%20Surveillance%20%28Data%20Engineering%29.ipynb",

    githubUrl: GITHUB_REPO,
    demoUrl: undefined,

    challenge:
      "Survey-style public health datasets often have missing values and inconsistent categorization, making trend analysis unreliable without careful cleaning.",
    solution:
      "Implemented repeatable cleaning, standardization, and summary steps; the notebook is designed to be extendable into a scheduled ETL job.",
    results:
      "The notebook outputs clean trend tables and simple visuals that can be lifted into dashboards or automated reporting pipelines.",
  },
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const project = params?.id ? projects[params.id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !project) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-display mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Return to Projects</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Colab needs the repo path to the IPYNB (not the HTML)
  const colabUrl = `${COLAB_BASE}/public${project.notebookPath}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 blur-sm"
          />
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
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                {project.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {project.demoUrl && (
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                    </a>
                  </Button>
                )}

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:bg-white/5"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-5 w-5" /> Repo
                  </a>
                </Button>

                {/* View HTML notebook in browser */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:bg-white/5"
                  asChild
                >
                  <a href={project.notebookUrl} target="_blank" rel="noreferrer">
                    <NotebookText className="mr-2 h-5 w-5" /> Notebook
                  </a>
                </Button>

                {/* Optional: download the raw ipynb */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 hover:bg-white/5"
                  asChild
                >
                  <a href={project.notebookPath} target="_blank" rel="noreferrer">
                    <Download className="mr-2 h-5 w-5" /> .ipynb
                  </a>
                </Button>

                <Button size="lg" className="rounded-full" asChild>
                  <a href={colabUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" /> Run in Colab
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground lg:text-right">
                Tip: Colab opens the notebook directly from your GitHub repo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container -mt-20 relative z-30 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="glass-card p-8 border-t-4 border-t-primary">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Zap className="mr-3 text-primary" /> The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.challenge}
              </p>
            </Card>

            <Card className="glass-card p-8 border-t-4 border-t-secondary">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Layers className="mr-3 text-secondary" /> The Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {project.solution}
              </p>
              <div className="bg-black/20 rounded-lg p-6 border border-white/5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Key Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 border-t-4 border-t-accent">
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center">
                <CheckCircle2 className="mr-3 text-accent" /> Results & Impact
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {project.results}
              </p>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-3 mt-0.5 text-sm">
                      ✓
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h3 className="font-display font-bold mb-4 text-lg">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <p className="font-medium">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-medium">{project.timeline}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-medium">Portfolio Project</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <h3 className="font-display font-bold mb-2 text-lg">Want something similar?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I build analytics pipelines, KPI frameworks, and decision-support reporting — from raw data to stakeholder-ready outputs.
              </p>
              <Link href="/contact">
                <Button className="w-full">Get in Touch</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
