import React from "react";

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("UI error caught by ErrorBoundary", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="glass-card rounded-2xl p-8 max-w-md text-center">
            <h1 className="text-2xl font-display font-bold mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              Please refresh the page. If the issue persists, let me know.
            </p>
            <a
              className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-primary/20 border border-primary/20 hover:bg-primary/30 transition"
              href="/"
            >
              Back to Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
