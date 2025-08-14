import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Hooks data organized by category with emojis
const hooksByCategory = [
  {
    category: "React Built-in",
    emoji: "⚛️",
    hooks: [
      { title: "useState", url: "/hooks/use-state" },
      { title: "useEffect", url: "/hooks/use-effect" },
      { title: "useContext", url: "/hooks/use-context" },
      { title: "useReducer", url: "/hooks/use-reducer" },
      { title: "useCallback", url: "/hooks/use-callback" },
      { title: "useMemo", url: "/hooks/use-memo" },
      { title: "useRef", url: "/hooks/use-ref" },
      { title: "useImperativeHandle", url: "/hooks/use-imperative-handle" },
      { title: "useLayoutEffect", url: "/hooks/use-layout-effect" },
      { title: "useDebugValue", url: "/hooks/use-debug-value" },
      { title: "useId", url: "/hooks/use-id" },
      { title: "useTransition", url: "/hooks/use-transition" },
      { title: "useDeferredValue", url: "/hooks/use-deferred-value" },
      { title: "useSyncExternalStore", url: "/hooks/use-sync-external-store" },
      { title: "useInsertionEffect", url: "/hooks/use-insertion-effect" },
    ],
  },
  {
    category: "State Management",
    emoji: "💾",
    hooks: [
      { title: "useLocalStorage", url: "/hooks/use-local-storage" },
      { title: "useSessionStorage", url: "/hooks/use-session-storage" },
      { title: "usePrevious", url: "/hooks/use-previous" },
      { title: "useToggle", url: "/hooks/use-toggle" },
      { title: "useCounter", url: "/hooks/use-counter" },
      { title: "useArray", url: "/hooks/use-array" },
      { title: "useMap", url: "/hooks/use-map" },
      { title: "useSet", url: "/hooks/use-set" },
    ],
  },
  {
    category: "Performance",
    emoji: "⚡",
    hooks: [
      { title: "useDebounce", url: "/hooks/use-debounce" },
      { title: "useThrottle", url: "/hooks/use-throttle" },
      { title: "useWhyDidYouUpdate", url: "/hooks/use-why-did-you-update" },
      { title: "useMemoOne", url: "/hooks/use-memo-one" },
    ],
  },
  {
    category: "DOM Events",
    emoji: "🖱️",
    hooks: [
      { title: "useClickOutside", url: "/hooks/use-click-outside" },
      { title: "useEventListener", url: "/hooks/use-event-listener" },
      { title: "useKeyPress", url: "/hooks/use-key-press" },
      { title: "useHover", url: "/hooks/use-hover" },
      { title: "useFocus", url: "/hooks/use-focus" },
      { title: "useLongPress", url: "/hooks/use-long-press" },
      { title: "useDrag", url: "/hooks/use-drag" },
      {
        title: "useIntersectionObserver",
        url: "/hooks/use-intersection-observer",
      },
      { title: "useResizeObserver", url: "/hooks/use-resize-observer" },
      { title: "useMutationObserver", url: "/hooks/use-mutation-observer" },
    ],
  },
  {
    category: "Responsive",
    emoji: "📱",
    hooks: [
      { title: "useMediaQuery", url: "/hooks/use-media-query" },
      { title: "useWindowSize", url: "/hooks/use-window-size" },
      { title: "useBreakpoint", url: "/hooks/use-breakpoint" },
      { title: "useOrientation", url: "/hooks/use-orientation" },
    ],
  },
  {
    category: "Network",
    emoji: "🌐",
    hooks: [
      { title: "useFetch", url: "/hooks/use-fetch" },
      { title: "useAsync", url: "/hooks/use-async" },
      { title: "useSWR", url: "/hooks/use-swr" },
      { title: "useQuery", url: "/hooks/use-query" },
      { title: "useWebSocket", url: "/hooks/use-web-socket" },
      { title: "useOnlineStatus", url: "/hooks/use-online-status" },
    ],
  },
  {
    category: "Timers",
    emoji: "⏰",
    hooks: [
      { title: "useTimeout", url: "/hooks/use-timeout" },
      { title: "useInterval", url: "/hooks/use-interval" },
      { title: "useCountdown", url: "/hooks/use-countdown" },
    ],
  },
  {
    category: "Animation",
    emoji: "🎬",
    hooks: [
      { title: "useAnimation", url: "/hooks/use-animation" },
      { title: "useSpring", url: "/hooks/use-spring" },
    ],
  },
  {
    category: "Forms",
    emoji: "📝",
    hooks: [
      { title: "useForm", url: "/hooks/use-form" },
      { title: "useInput", url: "/hooks/use-input" },
      { title: "useFormValidation", url: "/hooks/use-form-validation" },
      { title: "useClipboard", url: "/hooks/use-clipboard" },
    ],
  },
  {
    category: "Utility",
    emoji: "🔧",
    hooks: [
      { title: "useIsMounted", url: "/hooks/use-is-mounted" },
      { title: "useUpdateEffect", url: "/hooks/use-update-effect" },
      { title: "useMount", url: "/hooks/use-mount" },
      { title: "useUnmount", url: "/hooks/use-unmount" },
      { title: "useDeepCompareEffect", url: "/hooks/use-deep-compare-effect" },
      { title: "useIsFirstRender", url: "/hooks/use-is-first-render" },
      { title: "useRenderCount", url: "/hooks/use-render-count" },
      { title: "useLatest", url: "/hooks/use-latest" },
    ],
  },
  {
    category: "Browser APIs",
    emoji: "🔌",
    hooks: [
      { title: "useGeolocation", url: "/hooks/use-geolocation" },
      { title: "useBattery", url: "/hooks/use-battery" },
      { title: "usePermission", url: "/hooks/use-permission" },
      { title: "usePageVisibility", url: "/hooks/use-page-visibility" },
      { title: "useIdle", url: "/hooks/use-idle" },
      { title: "useFullscreen", url: "/hooks/use-fullscreen" },
      { title: "useNotification", url: "/hooks/use-notification" },
      { title: "useShare", url: "/hooks/use-share" },
    ],
  },
  {
    category: "Storage",
    emoji: "🗄️",
    hooks: [
      { title: "useIndexedDB", url: "/hooks/use-indexed-db" },
      { title: "useCookie", url: "/hooks/use-cookie" },
      { title: "useHistoryState", url: "/hooks/use-history-state" },
    ],
  },
  {
    category: "Development",
    emoji: "🐛",
    hooks: [
      { title: "useLogger", url: "/hooks/use-logger" },
      { title: "useTrace", url: "/hooks/use-trace" },
    ],
  },
];

// Category color function matching HooksIndex
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

export function HooksSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = React.useState<
    Set<string>
  >(new Set(["React Built-in", "State Management", "Performance"]));

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const totalHooks = hooksByCategory.reduce(
    (sum, cat) => sum + cat.hooks.length,
    0
  );

  return (
    <Sidebar
      {...props}
      className="h-full top-14 overflow-hidden"
      collapsible="offcanvas"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <div className="flex items-center gap-3 px-2 py-2">
              <div className=" text-sidebar-primary-foreground flex aspect-square size-10 items-center justify-center rounded-lg">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-sidebar-foreground">Hooks</h2>
                <p className="text-xs text-sidebar-foreground/70">
                  {totalHooks} available
                </p>
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
                        <span className="font-medium text-sidebar-foreground">
                          {categoryData.category}
                        </span>
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
                            <SidebarMenuButton
                              asChild
                              isActive={isActive}
                              size="sm"
                              tooltip={hook.title}
                            >
                              <Link to={hook.url}>
                                <span className="font-medium text-sidebar-foreground text-sm">
                                  {hook.title}
                                </span>
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
