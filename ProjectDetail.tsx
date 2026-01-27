import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, ExternalLink, Github, Layers, Zap } from "lucide-react";
import { Link, useRoute } from "wouter";
import { useEffect } from "react";

// Project Data (In a real app, this would be fetched from a CMS or API)
const projects = {
  "clinical-outcomes": {
    title: "Clinical Outcomes Predictor",
    subtitle: "Machine Learning for Stroke Risk Assessment",
    description: "A comprehensive machine learning pipeline that predicts stroke probability based on patient demographics and clinical biomarkers. Utilizing Logistic Regression and advanced feature engineering, this tool aids clinicians in early risk stratification.",
    image: "/images/health-project.jpg",
    tags: ["Healthcare AI", "Machine Learning", "Python", "Scikit-Learn", "Predictive Analytics"],
    role: "Data Analytics Lead",
    timeline: "4 Weeks",
    impact: [
      "Achieved 94% accuracy in stroke prediction",
      "Identified key risk factors: Age, Hypertension, Glucose Levels",
      "Reduced false negatives by 15% through class balancing"
    ],
    stack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
    notebook: "/notebooks/clinical_outcomes_predictor.ipynb",
    challenge: "Medical datasets are often imbalanced, with far fewer positive stroke cases than negative ones. Standard models tend to be biased towards the majority class, missing critical high-risk patients.",
    solution: "Implemented SMOTE (Synthetic Minority Over-sampling Technique) to balance the dataset. Engineered new features like 'BMI Risk Category' and 'Glucose-Age Interaction' to capture non-linear relationships.",
    results: "The final model demonstrates robust performance with a high ROC-AUC score, making it a viable candidate for clinical decision support systems."
  },
  "proptech-intelligence": {
    title: "Global Real Estate Intelligence",
    subtitle: "Market Analysis & Price Valuation Engine",
    description: "An interactive analytics engine that processes worldwide housing data to identify investment hotspots and valuation anomalies. This project combines geospatial analysis with statistical modeling to provide actionable market intelligence.",
    image: "/images/proptech-project.jpg",
    tags: ["PropTech", "Data Analytics", "Geospatial Analysis", "Python", "Visualization"],
    role: "Data Engineer & Analyst",
    timeline: "3 Weeks",
    impact: [
      "Analyzed over 100,000 property records globally",
      "Developed 'Price per SqM' valuation metric for cross-market comparison",
      "Visualized market density and pricing tiers"
    ],
    stack: ["Python", "Pandas", "Seaborn", "Geopandas", "Jupyter"],
    notebook: "/notebooks/real_estate_market_intelligence.ipynb",
    challenge: "Real estate data is notoriously fragmented and unstructured across different regions. Comparing value across markets requires normalizing currency, unit measurements, and purchasing power parity.",
    solution: "Built a robust ETL pipeline to standardize data formats. Created a derived metric 'Price Efficiency Ratio' to compare properties regardless of location. utilized box plots and heatmaps to detect outliers.",
    results: "Identified 3 under-valued markets with high growth potential. The dashboard allows investors to filter properties based on yield potential and risk profile."
  },
  "public-health": {
    title: "Public Health Surveillance System",
    subtitle: "Vitamin Deficiency Tracking & Analysis",
    description: "A data-driven surveillance system designed to track and analyze vitamin deficiency trends across populations. This tool helps public health officials allocate resources and design targeted intervention programs.",
    image: "/images/hero-bg.jpg", // Fallback or specific image
    tags: ["Public Health", "Epidemiology", "Data Engineering", "ETL", "Python"],
    role: "Health Data Analyst",
    timeline: "3 Weeks",
    impact: [
      "Processed complex health survey data",
      "Mapped deficiency correlations with demographic factors",
      "Generated automated reporting for health officials"
    ],
    stack: ["Python", "Pandas", "Numpy", "Data Cleaning", "Jupyter"],
    notebook: "/notebooks/public_health_surveillance.ipynb",
    challenge: "Public health data often contains missing values and inconsistent categorization. Accurate surveillance requires rigorous data cleaning without introducing bias.",
    solution: "Developed a multi-stage data cleaning pipeline. Used domain knowledge to impute missing nutritional values based on related health indicators. Created categorical encoders for demographic analysis.",
    results: "The system successfully identified high-risk demographic groups for Vitamin D and B12 deficiency, enabling more targeted public health messaging."
  }
};

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const project = params?.id ? projects[params.id as keyof typeof projects] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!project) {
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

  return (
    <Layout>
      {/* Hero Section */}
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
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
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
            
            <div className="flex flex-col gap-4 lg:items-end">
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
                  <Github className="mr-2 h-5 w-5" /> View Code
                </Button>
              </div>
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
                <Layers className="mr-3 text-secondary" /> The Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {project.solution}
              </p>
              <div className="bg-black/20 rounded-lg p-6 border border-white/5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Key Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
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
                    <span className="h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-3 mt-0.5 text-sm">✓</span>
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
                  <p className="font-medium">Personal Project</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <h3 className="font-display font-bold mb-2 text-lg">Interested in this?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I can build similar predictive models and analytics dashboards for your business.
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
