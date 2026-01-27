import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Open to Senior Data & Business Analytics roles, Product Analytics, BI/Reporting, and Data Quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:valentina.resner@gmail.com"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        valentina.resner@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-medium">Drogheda, Ireland • Remote / Hybrid</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8 bg-gradient-to-br from-primary/20 to-transparent border-primary/20">
                <h2 className="text-2xl font-display font-bold mb-4">What I bring</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    KPI frameworks, dashboards, and decision-support analytics
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    Databricks (PySpark/SQL) + Python ETL & validation for reliable data
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    Stakeholder-ready insights and clear data storytelling
                  </li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass-card p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Jane" className="bg-white/5 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-white/5 border-white/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" className="bg-white/5 border-white/10" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Analytics / Reporting" className="bg-white/5 border-white/10" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me what you’re working on…"
                    className="min-h-[150px] bg-white/5 border-white/10"
                  />
                </div>

                <Button type="submit" className="w-full text-lg h-12">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-muted-foreground">
                  This form is UI-only (no backend). Use the email link on the left to contact me directly.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
