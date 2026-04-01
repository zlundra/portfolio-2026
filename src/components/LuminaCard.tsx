import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

export function LuminaCard() {
  return (
    <Card className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 h-full flex flex-col">

      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-background to-accent/20 flex-shrink-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-28 bg-primary/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse [animation-delay:1.5s] pointer-events-none" />

        <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 400 192" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {[48, 96, 144].map((y) => (<line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#AFA9EC" strokeWidth="0.4" strokeOpacity="0.12" />))}
          {[80, 160, 240, 320].map((x) => (<line key={x} x1={x} y1="0" x2={x} y2="192" stroke="#AFA9EC" strokeWidth="0.4" strokeOpacity="0.12" />))}
          <line x1="110" y1="55"  x2="215" y2="105" stroke="#AFA9EC" strokeWidth="0.9" strokeOpacity="0.45"/>
          <line x1="215" y1="105" x2="155" y2="148" stroke="#7F77DD" strokeWidth="0.9" strokeOpacity="0.4"/>
          <line x1="110" y1="55"  x2="285" y2="44"  stroke="#AFA9EC" strokeWidth="0.9" strokeOpacity="0.28"/>
          <line x1="215" y1="105" x2="295" y2="138" stroke="#AFA9EC" strokeWidth="0.9" strokeOpacity="0.32"/>
          <line x1="55"  y1="118" x2="110" y2="55"  stroke="#AFA9EC" strokeWidth="0.9" strokeOpacity="0.22"/>
          <line x1="155" y1="148" x2="55"  y2="118" stroke="#7F77DD" strokeWidth="0.9" strokeOpacity="0.32"/>
          <circle cx="110" cy="55"  r="7.5" fill="#EEEDFE" opacity="0.9"/>
          <circle cx="110" cy="55"  r="14"  fill="#7c5cfc" opacity="0.12"/>
          <circle cx="215" cy="105" r="5.5" fill="#AFA9EC" opacity="0.9"/>
          <circle cx="215" cy="105" r="10"  fill="#7c5cfc" opacity="0.1"/>
          <circle cx="155" cy="148" r="6.5" fill="#7F77DD" opacity="0.9"/>
          <circle cx="155" cy="148" r="11"  fill="#7F77DD" opacity="0.1"/>
          <circle cx="285" cy="44"  r="4.5" fill="#AFA9EC" opacity="0.7"/>
          <circle cx="295" cy="138" r="4"   fill="#AFA9EC" opacity="0.6"/>
          <circle cx="55"  cy="118" r="4.5" fill="#AFA9EC" opacity="0.5"/>
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />

        <div className="absolute bottom-4 left-4 z-20">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-primary/60 mb-0.5">Proprietary Framework · MaLux</p>
          <h3 className="font-display text-xl font-bold text-white drop-shadow-lg tracking-tight leading-none">LUMINA</h3>
        </div>

        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-white/10 text-xs">BA Tool</Badge>
          <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-primary/20 text-xs text-primary">Client-Only</Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          Engagement Intelligence Framework
        </CardTitle>
        <CardDescription className="line-clamp-2">
          My proprietary BA consultancy tool — tracks every stage, decision, and deliverable across a client engagement, then auto-generates a branded leave-behind report every client keeps forever.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {["7-Stage Tracker", "Client Portal", "Auto PDF Report", "Data Maturity Score"].map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-white/10 text-muted-foreground">{tag}</Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 pt-0 mt-auto">
        <a href="https://lumina.maluxdata.io" target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="default" className="w-full bg-primary/20 hover:bg-primary/40 text-primary-foreground border border-primary/20">
            Find Out More <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </a>
        <a href="https://lumina.maluxdata.io#inquiry" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" title="Request a demo" className="hover:text-primary hover:bg-primary/10">
            <Sparkles className="w-5 h-5" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
