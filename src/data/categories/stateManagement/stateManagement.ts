import type { HookData } from '@/types/HookData';
import { useLocalStorage } from './useLocalStorage';
import { useSessionStorage } from './useSessionStorage';
import { usePrevious } from './usePrevious';
import { useToggle } from './useToggle';
import { useCounter } from './useCounter';
import { useArray } from './useArray';
import { useMap } from './useMap';
import { useSet } from './useSet';

export const stateManagementHooks: HookData[] = [
  useLocalStorage,
  useSessionStorage,
  usePrevious,
  useToggle,
  useCounter,
  useArray,
  useMap,
  useSet,
];
