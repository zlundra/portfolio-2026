import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="container py-20">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-30 blur-2xl rounded-full" />
            <img
              src="/images/valentina.jpeg"
              alt="Valentina Resner"
              className="relative rounded-2xl w-full object-cover shadow-2xl border border-white/10 aspect-[4/5]"
            />
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold">About Me</h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a <span className="text-foreground">Senior Data &amp; Business Analyst</span> with 10+ years of experience across startup,
                regulatory, and operational environments.
              </p>
              <p>
                My work sits at the intersection of <span className="text-foreground">product analytics</span>, <span className="text-foreground">analytics engineering</span>, and <span className="text-foreground">data governance</span> — turning
                messy, multilingual, real-world datasets into KPIs, dashboards, and decision-support insights.
              </p>
              <p>
                I’m strongest when partnering with stakeholders: defining metrics, designing clean data models, and communicating results clearly to
                non-technical audiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full" asChild>
                <a href="/Valentina_Resner_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10" asChild>
                <a href="/contact">Contact</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 text-primary" /> Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  role: "Senior Data Analyst / Data Analytics Lead",
                  company: "VendueTech",
                  period: "2025 – Present",
                  desc: "Define product KPIs, build analytics pipelines in Databricks (PySpark/SQL), and deliver investor & product reporting across an AI-driven auction platform.",
                },
                {
                  role: "Data & Insights Officer",
                  company: "Nursing and Midwifery Board of Ireland (NMBI)",
                  period: "2023 – Present",
                  desc: "Automate KPI dashboards and committee reporting; deliver decision-support analysis and governance-ready ETL/validation routines.",
                },
                {
                  role: "Registration Adviser / Staff Officer",
                  company: "NMBI",
                  period: "2019 – 2023",
                  desc: "Supported Dynamics 365 CRM digital transformation, UX testing, and KPI/workflow improvements that increased data quality and reduced operational friction.",
                },
                {
                  role: "Head of Administration / Office Manager",
                  company: "Zdravstvena ustanova Zorica",
                  period: "2016 – 2017",
                  desc: "Led operational analytics and introduced SMS reminder campaigns that reduced cancellations by 60%.",
                },
              ].map((job, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-primary/80 mb-2">{job.company} • {job.period}</p>
                  <p className="text-muted-foreground">{job.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 text-secondary" /> Education & Skills
            </h2>

            <div className="space-y-4 mb-10">
              {[
                { title: "AWS Data Analytics Training", org: "2025 – Ongoing" },
                { title: "Higher Diploma in Science in Data Analytics for Business", org: "CCT College Dublin (2019 – 2020)" },
                { title: "Business Analytics: Decision Making Using Data", org: "Cambridge Judge Business School (2022)" },
                { title: "Bachelor’s Degree in Physiotherapy", org: "University of Applied Health Sciences (2010 – 2013)" },
              ].map((edu) => (
                <div key={edu.title} className="glass-card p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-1">{edu.title}</h3>
                  <p className="text-muted-foreground">{edu.org}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Technical Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "Databricks",
                  "PySpark",
                  "Power BI",
                  "Azure",
                  "AWS (in progress)",
                  "PostgreSQL",
                  "Power Query",
                  "Dynamics 365 CRM",
                  "Data validation",
                  "ETL",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 bg-white/5 hover:bg-white/10 border-white/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
