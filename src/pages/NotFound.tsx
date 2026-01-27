import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <div className="container py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">404</h1>
        <p className="text-muted-foreground text-lg mb-10">
          That page doesn’t exist.
        </p>
        <Link href="/">
          <Button size="lg" className="rounded-full">Go Home</Button>
        </Link>
      </div>
    </Layout>
  );
}
