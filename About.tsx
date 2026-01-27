import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
               src="/images/about-bg.jpg" 
               alt="Valentina Resner" 
               className="relative rounded-2xl w-full object-cover shadow-2xl border border-white/10 aspect-[4/5]"
             />
          </div>
          
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold">
              About Me
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Data Analytics Lead and PropTech Specialist with over 10 years of experience bridging the gap between complex datasets and actionable business strategy.
              </p>
              <p>
                My unique background spans high-growth tech environments like VendueTech and healthcare analytics. I specialize in building end-to-end machine learning pipelines, from raw data engineering to deploying predictive models that drive revenue and operational efficiency.
              </p>
              <p>
                I don't just write code; I solve business problems. Whether it's predicting stroke risk to save lives or valuing real estate portfolios to maximize returns, I focus on the "why" behind the data.
              </p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="rounded-full">
                <Download className="mr-2 h-4 w-4" /> Download CV
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
                  role: "Data Analytics Lead",
                  company: "VendueTech",
                  period: "2021 - Present",
                  desc: "Leading predictive modeling for real estate valuation. Reduced cancellation rates by 60% through churn prediction models."
                },
                {
                  role: "Data Analyst",
                  company: "HealthMetrics Inc.",
                  period: "2018 - 2021",
                  desc: "Developed public health surveillance dashboards and clinical outcome predictors for hospital networks."
                },
                 {
                  role: "Technical Lead",
                  company: "Digital Solutions",
                  period: "2015 - 2018",
                  desc: "Spearheaded digital transformation projects and implemented cloud-native data architectures."
                }
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
            
            <div className="space-y-8 mb-12">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">AWS Data Analytics Training (2025–ongoing)</h3>
                
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Business Analytics</h3>
                <p className="text-muted-foreground">Cambridge Judge Business School (2022)</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Higher Diploma in Data Analytics for Business</h3>
                <p className="text-muted-foreground">CCT College Dublin</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Technical Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "R", "Pandas", "Scikit-Learn", "TensorFlow", "Tableau", "PowerBI", "AWS", "Azure", "Git", "Docker"].map(skill => (
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
