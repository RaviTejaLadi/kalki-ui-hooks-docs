import React from 'react';

const Home: React.FC = () => {
  return (
    <div className=" bg-background p-8 overflow-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Kalki UI Hooks
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A collection of React hooks for building modern, accessible, and performant user interfaces.
          </p>
        </div>
        
        <div className="grid gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">Easy to Use</h3>
            <p className="text-muted-foreground">Simple and intuitive API design that makes development faster and more enjoyable.</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">TypeScript Ready</h3>
            <p className="text-muted-foreground">Full TypeScript support with excellent type inference and IntelliSense.</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-card-foreground mb-3">Accessible</h3>
            <p className="text-muted-foreground">Built with accessibility in mind, following WCAG guidelines.</p>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/hooks" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Hooks
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
