import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  notebookUrl?: string;
}

export function ProjectCard({ id, title, description, tags, imageUrl, githubUrl, demoUrl, notebookUrl }: ProjectCardProps) {
  return (
    <Card className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
           {tags.slice(0, 2).map(tag => (
             <Badge key={tag} variant="secondary" className="bg-black/50 backdrop-blur-md border-white/10 text-xs">
               {tag}
             </Badge>
           ))}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.slice(2).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs border-white/10 text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-3 pt-0 mt-auto">
        <Link href={`/project/${id}`}>
          <Button variant="default" className="flex-1 bg-primary/20 hover:bg-primary/40 text-primary-foreground border border-primary/20">
            View Case Study <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <Github className="w-5 h-5" />
            </Button>
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
              <ExternalLink className="w-5 h-5" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
