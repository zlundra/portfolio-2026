import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xeepkzrv', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <Layout>
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Open to analytics consulting, data strategy, and business intelligence projects.
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
                      
                        href="mailto:valentina@maluxdata.io"
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        valentina@maluxdata.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-medium">Medulin, Istria, Croatia • Remote</p>
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
                    Python ETL, data quality and validation pipelines
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
              {status === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input name="firstName" id="firstName" placeholder="Jane" className="bg-white/5 border-white/10" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input name="lastName" id="lastName" placeholder="Doe" className="bg-white/5 border-white/10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" id="email" type="email" placeholder="jane@example.com" className="bg-white/5 border-white/10" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input name="subject" id="subject" placeholder="Analytics / Consulting" className="bg-white/5 border-white/10" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      name="message"
                      id="message"
                      placeholder="Tell me what you're working on…"
                      className="min-h-[150px] bg-white/5 border-white/10"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg h-12" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'} <Send className="ml-2 h-4 w-4" />
                  </Button>

                  {status === 'error' && (
                    <p className="text-sm text-red-400 text-center">Something went wrong. Please email me directly.</p>
                  )}
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
