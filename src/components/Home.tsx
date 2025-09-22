import React from 'react';
import { Code2, Zap, ChevronRight, Sparkles } from 'lucide-react';
import Footer from './Layout/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-cyan-900/20 min-h-screen overflow-auto">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-8">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200 dark:bg-cyan-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-blue-200 dark:bg-blue-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-200 dark:bg-teal-800/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-cyan-800 dark:text-cyan-200">New hooks added weekly</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Kalki UI Hooks
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            A curated collection of custom React hooks that help you build better user interfaces. Each hook is
            thoroughly tested, well-documented, and follows React best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="/hooks"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Hooks
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/docs"
              className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-white dark:hover:bg-slate-600 hover:shadow-md transition-all duration-200 border border-cyan-200 dark:border-cyan-600"
            >
              <Code2 className="w-5 h-5" />
              View Docs
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200">25+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Hooks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200">10k+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200">99%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">TypeScript</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">Why Choose Kalki UI Hooks?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Built by developers, for developers. Each hook solves real-world problems with elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/50 dark:border-slate-700/50 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl hover:shadow-cyan-100/50 dark:hover:shadow-cyan-900/20 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">Easy to Use</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Simple and intuitive API design that makes development faster and more enjoyable. Get started in minutes,
              not hours.
            </p>
          </div>

          <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/50 dark:border-slate-700/50 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl hover:shadow-teal-100/50 dark:hover:shadow-teal-900/20 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">TypeScript Ready</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Full TypeScript support with excellent type inference and IntelliSense. Catch errors before they happen.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 mt-10">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start building better React applications with our comprehensive collection of custom hooks. Each hook
              comes with detailed documentation, examples, and TypeScript support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md">
                Installation Guide
              </button>
              <button className="bg-background text-primary border border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
