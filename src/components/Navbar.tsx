import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const MaLuxLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="6" stroke="#AFA9EC" strokeWidth="1.3"/>
      <circle cx="16" cy="20" r="4.5" fill="#EEEDFE"/>
      <circle cx="30" cy="28" r="3" fill="#AFA9EC"/>
      <circle cx="20" cy="32" r="3.5" fill="#7F77DD"/>
      <circle cx="34" cy="16" r="2.5" fill="#AFA9EC" opacity="0.7"/>
      <line x1="16" y1="20" x2="30" y2="28" stroke="#AFA9EC" strokeWidth="0.8" opacity="0.35"/>
      <line x1="30" y1="28" x2="20" y2="32" stroke="#7F77DD" strokeWidth="0.8" opacity="0.35"/>
      <line x1="16" y1="20" x2="34" y2="16" stroke="#AFA9EC" strokeWidth="0.8" opacity="0.25"/>
    </svg>
    <span style={{ fontSize: '20px', fontWeight: 700, color: '#EEEDFE', letterSpacing: '1px', fontFamily: 'serif' }}>
      Ma<span style={{ color: '#AFA9EC' }}>Lux</span>
    </span>
  </div>
);

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-20">
        <Link href="/">
          <a className="hover:opacity-80 transition-opacity">
            <MaLuxLogo />
          </a>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn("text-sm font-medium transition-colors hover:text-primary", location === link.href ? "text-primary" : "text-muted-foreground")}>
                {link.label}
              </a>
            </Link>
          ))}
          <Button variant="outline" className="ml-4 border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300" asChild>
            <a href="/contact">Hire Me</a>
          </Button>
        </div>
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn("text-lg font-medium p-2 block rounded-md hover:bg-white/5", location === link.href ? "text-primary" : "text-muted-foreground")} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </Link>
          ))}
          <Button className="w-full mt-2" onClick={() => setIsOpen(false)} asChild>
            <a href="/contact">Hire Me</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
