import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { hooksData } from '../../data/hooksData';
import ReactSvg from '@/assets/ReactSvg';

const HooksIndex: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const hooks = hooksData;

  // Filter hooks based on search query
  const filteredHooks = useMemo(() => {
    if (!searchQuery.trim()) return hooks;

    const query = searchQuery.toLowerCase();
    return hooks.filter(
      (hook) =>
        hook.name.toLowerCase().includes(query) ||
        hook.description.toLowerCase().includes(query) ||
        hook.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Group hooks by category
  const groupedHooks = useMemo(() => {
    const groups: { [key: string]: typeof hooks } = {};

    filteredHooks.forEach((hook) => {
      if (!groups[hook.category]) {
        groups[hook.category] = [];
      }
      groups[hook.category].push(hook);
    });

    return groups;
  }, [filteredHooks]);

  // Highlight search text in a string
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-cyan-200 dark:bg-cyan-800 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'React Built-in':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400';
      case 'State Management':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Performance':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400';
      case 'DOM Events':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400';
      case 'Responsive':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400';
      case 'Network':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400';
      case 'Timers':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Animation':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400';
      case 'Forms':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400';
      case 'Utility':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
      case 'Browser APIs':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400';
      case 'Storage':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Development':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mb-6">
            <span className="text-2xl">
              <ReactSvg className="w-10 h-10" />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            React Hooks Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of custom React hooks that help you build better user interfaces. Each hook is
            thoroughly tested, well-documented, and follows React best practices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search hooks by name, description, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
          {searchQuery && (
            <div className="mt-3 text-sm text-muted-foreground">
              Found {filteredHooks.length} of {hooks.length} hooks
            </div>
          )}
        </div>

        {/* Hooks by Category */}
        <div className="space-y-8">
          {Object.entries(groupedHooks).map(([category, categoryHooks]) => (
            <div key={category} className="space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                    category
                  )}`}
                >
                  {category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {categoryHooks.length} hook{categoryHooks.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryHooks.map((hook) => (
                  <div
                    key={hook.path}
                    className="group bg-card border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{hook.icon}</span>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {highlightText(hook.name, searchQuery)}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {highlightText(hook.description, searchQuery)}
                      </p>

                      <div className="flex items-center justify-between">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                            hook.category
                          )}`}
                        >
                          {hook.category}
                        </span>
                        <Link
                          to={`/hooks/${hook.path}`}
                          className="text-primary hover:text-primary/80 text-sm font-medium transition-colors flex items-center group/link"
                        >
                          Learn More
                          <span className="ml-1 group-hover/link:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HooksIndex;
