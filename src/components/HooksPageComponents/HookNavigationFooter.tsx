import type { HookData } from '@/types/HookData';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HookNavigationFooter {
  prevHook: HookData;
  nextHook: HookData;
}
const HookNavigationFooter = ({ prevHook, nextHook }: HookNavigationFooter) => {
  return (
    <div className="mt-16 pt-8 border-t border-border">
      <div className="flex items-center justify-between ">
        {prevHook ? (
          <Link
            to={`/hooks/${prevHook.path}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted p-3 rounded-lg transition-colors group"
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
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted p-3 rounded-lg transition-colors group"
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
  );
};

export default HookNavigationFooter;
