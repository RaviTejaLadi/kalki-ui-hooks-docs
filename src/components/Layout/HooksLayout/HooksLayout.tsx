import { Outlet } from 'react-router-dom';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { HooksSidebar } from './HooksSidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function HooksLayout() {
  return (
    <div className="flex top-14 relative w-full">
      <SidebarProvider>
        <HooksSidebar />
        <SidebarInset className="flex-1 min-w-0">
          <div className="flex flex-1 flex-col">
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarTrigger className="border m-2" />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Toggle sidebar</p>
              </TooltipContent>
            </Tooltip>
            <ScrollArea className="flex-1">
              <Outlet />
            </ScrollArea>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
