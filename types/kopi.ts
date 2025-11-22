// Define the option groups for kopi customization
export const optionGroups = {
  milkiness: ["none", "condensed", "evaporated"],
  sweetness: ["no_sugar", "less_sweet", "normal", "sweeter"],
  strength: ["weak", "normal", "strong", "stronger_no_water"],
  state: ["warm", "lukewarm", "iced"],
} as const;

// Define TypeScript types based on the option groups
export type Milkiness = (typeof optionGroups.milkiness)[number];
export type Sweetness = (typeof optionGroups.sweetness)[number];
export type Strength = (typeof optionGroups.strength)[number];
export type State = (typeof optionGroups.state)[number];

// Define a type for a complete kopi selection
export type KopiSelection = {
  milkiness: Milkiness;
  sweetness: Sweetness;
  strength: Strength;
  state: State;
};

// Example default kopi selection
export const DEFAULT_SELECTION: KopiSelection = {
  milkiness: "condensed",
  sweetness: "normal",
  strength: "normal",
  state: "warm",
};

// Define a generic option item type
export type OptionItem<T extends string> = {
  code: T;
  label: string;     // label for UI display
  hint?: string;     // optional, local term or explanation, e.g., "(Gao)"
};

/* 6) Four groups of UI options (directly used for Picker map rendering) */
export const MILKINESS_OPTIONS: OptionItem<Milkiness>[] = [
  { code: "none", label: "No milk", hint: "(O)" },
  { code: "condensed", label: "Condensed milk" },
  { code: "evaporated", label: "Evaporated milk", hint: "(C/Si)" },
];

export const SWEETNESS_OPTIONS: OptionItem<Sweetness>[] = [
  { code: "no_sugar", label: "No sugar", hint: "(Kosong)" },
  { code: "less_sweet", label: "Less sweet", hint: "(Siew Dai)" },
  { code: "normal", label: "Normal" },
  { code: "sweeter", label: "Sweeter", hint: "(Gah Dai)" },
];

export const STRENGTH_OPTIONS: OptionItem<Strength>[] = [
  { code: "weak", label: "Weak", hint: "(Po)" },
  { code: "normal", label: "Normal" },
  { code: "strong", label: "Strong", hint: "(Gao)" },
  { code: "stronger_no_water", label: "Stronger, no water", hint: "(Di Lo)" },
];

export const STATE_OPTIONS: OptionItem<State>[] = [
  { code: "warm", label: "Warm" },
  { code: "lukewarm", label: "Lukewarm", hint: "(Pua Sio)" },
  { code: "iced", label: "Iced", hint: "(Peng)" },
];




