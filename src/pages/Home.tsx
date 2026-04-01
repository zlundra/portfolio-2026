import { Layout } from "@/components/Layout";
import { LuminaCard } from "@/components/LuminaCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, Database, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-bg.jpg"
            alt="Abstract Data Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              Data Scientist • PropTech Specialist • Health Analyst
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 text-white drop-shadow-2xl">
            Turning complex data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-secondary">
              into clear decisions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            I build advanced predictive models and interactive intelligence systems that bridge the gap between
            <span className="text-foreground font-medium"> Real Estate </span> and
            <span className="text-foreground font-medium"> Healthcare</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_-5px_var(--primary)] transition-all hover:scale-105">
                View Selected Works
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Domain Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leveraging 10+ years of experience to deliver high-impact solutions in specialized sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-10 h-10 text-primary" />,
                title: "PropTech AI",
                desc: "Automated Valuation Models (AVM), Investment Risk Analysis, and Market Intelligence Dashboards."
              },
              {
                icon: <Brain className="w-10 h-10 text-secondary" />,
                title: "Health Analytics",
                desc: "Clinical Outcome Prediction, Epidemiology Surveillance, and Patient Risk Stratification using ML."
              },
              {
                icon: <Database className="w-10 h-10 text-accent" />,
                title: "Data Engineering",
                desc: "Scalable ETL Pipelines, Cloud Architecture (AWS/Azure), and Big Data Processing."
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-black/20">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">Selected works showcasing technical depth and business impact.</p>
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="hidden md:flex hover:text-primary group">
                View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              id="clinical-outcomes"
              title="Clinical Outcomes Predictor"
              description="Machine Learning pipeline for predicting stroke risk using logistic regression and advanced feature engineering."
              tags={["Healthcare", "ML", "Python"]}
              imageUrl="/images/health-project.jpg"
              githubUrl="https://github.com/valentina-resner"
            />
            <ProjectCard
              id="proptech-intelligence"
              title="Global Real Estate Intelligence"
              description="Interactive dashboard for worldwide property valuation and market density analysis."
              tags={["PropTech", "Analytics", "Geospatial"]}
              imageUrl="/images/proptech-project.jpg"
              githubUrl="https://github.com/valentina-resner"
            />
            <ProjectCard
              id="public-health"
              title="Public Health Surveillance"
              description="ETL pipeline and analysis system for tracking vitamin deficiency trends across populations."
              tags={["Public Health", "Data Eng", "Python"]}
              imageUrl="/images/hero-bg.jpg"
              githubUrl="https://github.com/valentina-resner"
            />
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/projects">
              <Button variant="outline" className="w-full">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── LUMINA SECTION ────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background differentiation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,oklch(0.65_0.18_285/0.08),transparent)] -z-10" />

        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/8 backdrop-blur-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary tracking-widest uppercase font-mono">
                  Proprietary Tooling · MaLux
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Built by me.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-secondary">
                  For clients like you.
                </span>
              </h2>
              <p className="text-muted-foreground max-w-lg leading-relaxed">
                LUMINA is my proprietary engagement intelligence framework — a live tool I use with every client to track progress, log decisions, and auto-generate a structured leave-behind report. No other analyst gives you this.
              </p>
            </div>
            <a
              href="https://lumina.maluxdata.io"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Button variant="ghost" className="hover:text-primary group whitespace-nowrap">
                Open live app <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Two-column layout: LUMINA card + feature highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left — LUMINA card (matches ProjectCard style) */}
            <LuminaCard />

            {/* Right — 4 feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🔍",
                  title: "Structured Intake",
                  desc: "Systems inventory, data maturity scoring, and scope agreement before any work begins."
                },
                {
                  icon: "⚡",
                  title: "7-Stage Tracker",
                  desc: "Every note, decision, blocker, and deliverable — logged and timestamped as you work."
                },
                {
                  icon: "🔗",
                  title: "Client Read-Only View",
                  desc: "Share a live progress link. Clients see everything, edit nothing, and can comment."
                },
                {
                  icon: "📄",
                  title: "Auto PDF Report",
                  desc: "One click generates a fully branded leave-behind report. The thing that makes me unforgettable."
                }
              ].map((f, i) => (
                <div
                  key={i}
                  className="glass-card p-6 rounded-2xl hover:bg-white/5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <span className="text-2xl mb-4 block">{f.icon}</span>
                  <h4 className="font-display font-bold text-base mb-2 group-hover:text-primary transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4
            p-6 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div>
              <p className="font-display font-bold text-lg text-foreground">
                Every engagement I run uses LUMINA.
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                You walk away with a structured intelligence report that stays with your team forever.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="https://lumina.maluxdata.io" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary/20 hover:bg-primary/40 text-primary-foreground border border-primary/20">
                  Try it live ↗
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" className="border-white/20 hover:border-primary/40">
                  Hire me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ─── END LUMINA SECTION ─────────────────────────────────────── */}

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

        <div className="container text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Whether you need a predictive model for real estate investment or a health analytics platform,
            I bring the expertise to turn complex data into clear strategy.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-black hover:bg-white/90">
              Let's Collaborate
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
