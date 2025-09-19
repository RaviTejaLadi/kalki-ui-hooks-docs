import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Copy,
  Check,
  ExternalLink,
  Code,
  BookOpen,
  Zap,
  Tag,
} from "lucide-react";
import { getHookByPath, hooksData } from "../../data/hooksData";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HookDetail: React.FC = () => {
  const { hookPath } = useParams<{ hookPath: string }>();
  const navigate = useNavigate();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const hook = getHookByPath(hookPath || "");

  if (!hook) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Hook Not Found</h1>
          <p className="text-muted-foreground">
            The hook you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/hooks")}>Back to Hooks</Button>
        </div>
      </div>
    );
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(type);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "React Built-in":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "State Management":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Performance":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "DOM Events":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "Responsive":
        return "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400";
      case "Network":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "Timers":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400";
      case "Animation":
        return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400";
      case "Forms":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400";
      case "Utility":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case "Browser APIs":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "Storage":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "Development":
        return "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  // Find next and previous hooks for navigation
  const currentIndex = hooksData.findIndex((h) => h.path === hook.path);
  const prevHook = currentIndex > 0 ? hooksData[currentIndex - 1] : null;
  const nextHook =
    currentIndex < hooksData.length - 1 ? hooksData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/hooks" className="hover:text-foreground transition-colors">
            Hooks
          </Link>
          <span>/</span>
          <span className="text-foreground">{hook.name}</span>
        </nav>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">{hook.icon}</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold text-foreground">
                  {hook.name}
                </h1>
                <Badge className={getCategoryColor(hook.category)}>
                  {hook.category}
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                {hook.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {hook?.tags &&
              hook?.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hook?.features &&
            hook?.features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4"
              >
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
              <div className="bg-muted rounded-lg p-4 relative">
                <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
                  {hook.installation}
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() =>
                    copyToClipboard(hook?.installation, "installation")
                  }
                >
                  {copiedCode === "installation" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </section>

            {/* Basic Usage */}
            <section className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Basic Usage</h2>
              </div>
              <p className="text-muted-foreground mb-4">{hook.usage}</p>
              <div className="bg-muted rounded-lg p-4 relative">
                <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
                  {hook.code}
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard(hook.code, "code")}
                >
                  {copiedCode === "code" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </section>

            {/* Examples */}
            <section className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Examples</h2>
              </div>
              <div className="space-y-6">
                {hook.examples.map((example, index) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {example.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {example.description}
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 relative">
                      <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
                        {example.code}
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2"
                        onClick={() =>
                          copyToClipboard(example.code, `example-${index}`)
                        }
                      >
                        {copiedCode === `example-${index}` ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* API Reference */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">API Reference</h3>

              {/* Parameters */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Parameters</h4>
                <div className="space-y-3">
                  {hook.api.parameters.map((param, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                          {param.name}
                        </code>
                        <Badge
                          variant={param.required ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {param.required ? "required" : "optional"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {param.description}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        Type: {param.type}
                        {param.default && ` (default: ${param.default})`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Returns */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Returns</h4>
                <div className="space-y-3">
                  {hook.api.returns.map((ret, index) => (
                    <div key={index} className="space-y-1">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                        {ret.name}
                      </code>
                      <p className="text-xs text-muted-foreground">
                        {ret.description}
                      </p>
                      <p className="text-xs font-mono text-muted-foreground">
                        Type: {ret.type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                  .filter(
                    (h) => h.category === hook.category && h.path !== hook.path
                  )
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
                        <p className="text-xs text-muted-foreground truncate">
                          {relatedHook.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            {prevHook ? (
              <Link
                to={`/hooks/${prevHook.path}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Previous</p>
                  <p className="font-medium">{prevHook.name}</p>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextHook ? (
              <Link
                to={`/hooks/${nextHook.path}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Next</p>
                  <p className="font-medium">{nextHook.name}</p>
                </div>
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HookDetail;
