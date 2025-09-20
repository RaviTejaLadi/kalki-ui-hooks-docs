// Import all category hooks
import { stateManagementHooks } from './categories/stateManagement';
import { performanceHooks } from './categories/performance';
import { reactBuiltInHooks } from './categories/reactBuiltIn';
import { domEventsHooks } from './categories/domEvents';
import { responsiveHooks } from './categories/responsive';
import { networkHooks } from './categories/network';
import { timersHooks } from './categories/timers';
import { animationHooks } from './categories/animation';
import { formsHooks } from './categories/forms';
import { utilityHooks } from './categories/utility';
import { browserApisHooks } from './categories/browserApis';
import { storageHooks } from './categories/storage';
import { developmentHooks } from './categories/development';
import type { HookData } from '@/types/HookData';

// Combine all hooks from different categories
export const hooksData: HookData[] = [
  ...stateManagementHooks,
  ...performanceHooks,
  ...reactBuiltInHooks,
  ...domEventsHooks,
  ...responsiveHooks,
  ...networkHooks,
  ...timersHooks,
  ...animationHooks,
  ...formsHooks,
  ...utilityHooks,
  ...browserApisHooks,
  ...storageHooks,
  ...developmentHooks,
];

export const getHookByPath = (path: string): HookData | undefined => {
  return hooksData.find((hook) => hook.path === path);
};

export const getHooksByCategory = (category: string): HookData[] => {
  return hooksData.filter((hook) => hook.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(hooksData.map((hook) => hook.category))];
};
