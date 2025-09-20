import type { HookAPI } from "./HookAPI";
import type { HookExample } from "./HookExample";

export interface HookData {
    name: string;
    path: string;
    description: string;
    category: string;
    icon: string;
    installation?: string;
    code?: string;
    usage?: string;
    examples?: HookExample[];
    api?: HookAPI;
    features?: string[];
    dependencies?: string[];
    tags?: string[];
  }