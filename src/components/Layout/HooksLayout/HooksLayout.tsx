import { Outlet } from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { HooksSidebar } from "./HooksSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function HooksLayout() {
  return (
    <div className="flex top-14 relative w-full">
      <SidebarProvider>
        <HooksSidebar />
        <SidebarInset className="flex-1 min-w-0">
          <div className="flex flex-1 flex-col">
            <div className="flex items-center gap-2 p-4 border-b">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold">Hooks Documentation</h1>
            </div>
            <ScrollArea className="flex-1 p-4 ">
              <Outlet />
            </ScrollArea>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
