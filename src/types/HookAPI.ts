export interface HookAPI {
  parameters: {
    name: string;
    type: string;
    description: string;
    required: boolean;
    default?: string;
  }[];
  returns: {
    name: string;
    type: string;
    description: string;
  }[];
}
