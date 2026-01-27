import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/20 backdrop-blur-sm py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Link href="/">
              <a className="text-2xl font-display font-bold tracking-tighter text-foreground">
                Valentina<span className="text-primary">.</span>
              </a>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Bridging the gap between Real Estate Intelligence and Healthcare Analytics through advanced modern analytics, trusted data, and decision-ready insights.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/projects"><a className="text-muted-foreground hover:text-primary transition-colors">Projects</a></Link></li>
              <li><Link href="/about"><a className="text-muted-foreground hover:text-primary transition-colors">About</a></Link></li>
              <li><Link href="/contact"><a className="text-muted-foreground hover:text-primary transition-colors">Contact</a></Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com/zlundra" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/valentina-resner/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:valentina.resner@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Valentina Resner. All rights reserved.</p>
          <p>Designed with <span className="text-primary">♥</span> for Data Analytics</p>
        </div>
      </div>
    </footer>
  );
}
