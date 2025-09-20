import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { hooksData, getAllCategories } from '../../../data/hooksData';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import ReactSvg from '@/assets/ReactSvg';

// Generate hooks data organized by category dynamically
const generateHooksByCategory = () => {
  const categories = getAllCategories();
  return categories.map((category) => {
    const categoryHooks = hooksData.filter((hook) => hook.category === category);
    return {
      category,
      emoji: categoryHooks[0]?.icon || '🔧',
      hooks: categoryHooks.map((hook) => ({
        title: hook.name,
        url: `/hooks/${hook.path}`,
      })),
    };
  });
};

const hooksByCategory = generateHooksByCategory();

// Category color function with ocean blue theme
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

export function HooksSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = React.useState<Set<string>>(
    new Set(['React Built-in', 'State Management', 'Performance'])
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const totalHooks = hooksByCategory.reduce((sum, cat) => sum + cat.hooks.length, 0);

  return (
    <Sidebar {...props} className="h-full top-14 overflow-hidden" collapsible="offcanvas" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <div className="flex items-center gap-3 px-2 py-2">
              <div className=" text-sidebar-primary-foreground flex aspect-square size-10 items-center justify-center rounded-lg">
                <span className="text-2xl">
                  <ReactSvg className='w-10 h-10'/>
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-sidebar-foreground">Hooks</h2>
                <p className="text-xs text-sidebar-foreground/70">{totalHooks} available</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarMenu>
            {hooksByCategory.map((categoryData) => {
              const isExpanded = expandedCategories.has(categoryData.category);

              return (
                <SidebarMenuItem key={categoryData.category} className="mb-2">
                  <SidebarMenuButton
                    onClick={() => toggleCategory(categoryData.category)}
                    className="w-full justify-between"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{categoryData.emoji}</span>
                        <span className="font-medium text-sidebar-foreground">{categoryData.category}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium min-w-[1.5rem] ${getCategoryColor(
                          categoryData.category
                        )}`}
                      >
                        {categoryData.hooks.length}
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-sidebar-foreground/70" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-sidebar-foreground/70" />
                      )}
                    </div>
                  </SidebarMenuButton>

                  {isExpanded && (
                    <div className="ml-4 space-y-1">
                      {categoryData.hooks.map((hook) => {
                        const isActive = location.pathname === hook.url;

                        return (
                          <SidebarMenuItem key={hook.title}>
                            <SidebarMenuButton asChild isActive={isActive} size="sm" tooltip={hook.title}>
                              <Link to={hook.url}>
                                <span className="font-medium text-sidebar-foreground text-sm">{hook.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </div>
                  )}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
