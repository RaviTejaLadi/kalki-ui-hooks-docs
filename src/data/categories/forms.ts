import type { HookData } from "@/types/HookData";

export const formsHooks: HookData[] = [
  {
    name: 'useForm',
    path: 'use-form',
    description: 'Manage form state, validation, and submission with minimal boilerplate.',
    category: 'Forms',
    icon: '📝',
  },
  {
    name: 'useInput',
    path: 'use-input',
    description: 'Manage single input state with onChange handler and reset functionality.',
    category: 'Forms',
    icon: '📥',
  },
  {
    name: 'useFormValidation',
    path: 'use-form-validation',
    description: 'Add validation logic to forms with error tracking and display.',
    category: 'Forms',
    icon: '✅',
  },
  {
    name: 'useClipboard',
    path: 'use-clipboard',
    description: 'Copy text to clipboard and track copy success status.',
    category: 'Forms',
    icon: '📋',
  },
];
