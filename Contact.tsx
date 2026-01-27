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
              Available for freelance opportunities, consulting, and full-time roles.
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
                      <a href="mailto:contact@valentina.com" className="text-lg font-medium hover:text-primary transition-colors">
                        contact@valentina.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-medium">
                        Remote / Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-card p-8 bg-gradient-to-br from-primary/20 to-transparent border-primary/20">
                <h2 className="text-2xl font-display font-bold mb-4">Why Hire Me?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span> 
                    10+ Years in Analytics & Digital Transformation
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span> 
                    Specialized in PropTech & Health Analytics
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span> 
                    Proven Track Record of Business Impact
                  </li>
                </ul>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass-card p-8">
              <form className="space-y-6">
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
                  <Input id="subject" placeholder="Project Inquiry" className="bg-white/5 border-white/10" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="min-h-[150px] bg-white/5 border-white/10" 
                  />
                </div>
                
                <Button type="submit" className="w-full text-lg h-12">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
