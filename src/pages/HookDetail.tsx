import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ExternalLink, Code, BookOpen, Zap, Tag } from 'lucide-react';
import { getHookByPath, hooksData } from '../data/hooksData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { SyntaxHighlighter } from '../components/SyntaxHighLighter';
import HookNavigationFooter from '@/components/HooksPageComponents/HookNavigationFooter';
import BreadcrumbNavigation from '@/components/HooksPageComponents/BreadcrumbNavigation';
import HeaderSection from '@/components/HooksPageComponents/HeaderSection';
import APIReference from '@/components/HooksPageComponents/APIReference';

const HookDetail: React.FC = () => {
  const { hookPath } = useParams<{ hookPath: string }>();
  const navigate = useNavigate();

  const hook = getHookByPath(hookPath || '');

  if (!hook) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Hook Not Found</h1>
          <p className="text-muted-foreground">The hook you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/hooks')}>Back to Hooks</Button>
        </div>
      </div>
    );
  }

  // Find next and previous hooks for navigation
  const currentIndex = hooksData.findIndex((h) => h.path === hook.path);
  const prevHook = currentIndex > 0 ? hooksData[currentIndex - 1] : null;
  const nextHook = currentIndex < hooksData.length - 1 ? hooksData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <BreadcrumbNavigation name={hook.name} />

        {/* Header Section */}
        <HeaderSection
          icon={hook.icon}
          name={hook.name}
          category={hook.category}
          description={hook.description}
          tags={hook.tags}
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hook?.features &&
            hook?.features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground">{feature}</p>
              </div>
            ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Installation */}
            <section className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Installation</h2>
              </div>
              {hook.installation && <SyntaxHighlighter code={hook.installation} />}
            </section>

            {/* Basic Usage */}
            <section className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Basic Usage</h2>
              </div>
              <p className="text-muted-foreground mb-4">{hook.usage}</p>
              {hook.code && <SyntaxHighlighter code={hook.code} />}
            </section>

            {/* Examples */}
            <section className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Examples</h2>
              </div>
              {hook.examples && (
                <div className="space-y-6">
                  {hook.examples.map((example, index) => (
                    <div key={index} className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{example.title}</h3>
                        <p className="text-sm text-muted-foreground">{example.description}</p>
                      </div>
                      <SyntaxHighlighter code={example.code} />
                    </div>
                  ))}
                </div>
              )}
            </section>
            <APIReference api={hook.api}/>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">

            {/* Dependencies */}
            {hook.dependencies && hook.dependencies.length > 0 && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Dependencies</h3>
                <div className="space-y-2">
                  {hook.dependencies.map((dep, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <code className="text-sm font-mono">{dep}</code>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Hooks */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Related Hooks</h3>
              <div className="space-y-3">
                {hooksData
                  .filter((h) => h.category === hook.category && h.path !== hook.path)
                  .slice(0, 3)
                  .map((relatedHook) => (
                    <Link
                      key={relatedHook.path}
                      to={`/hooks/${relatedHook.path}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <span className="text-xl">{relatedHook.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {relatedHook.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{relatedHook.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        {prevHook && nextHook && <HookNavigationFooter prevHook={prevHook} nextHook={nextHook} />}
      </div>
    </div>
  );
};

export default HookDetail;
