// utils/kopiInfer.ts
import type {
  Milkiness,
  Sweetness,
  Strength,
  State,
  KopiSelection,
} from "@/types/kopi";

// milkiness -> base
export const MILKINESS_TO_BASE = {
  none: "Kopi O",
  condensed: "Kopi",
  evaporated: "Kopi C",
} as const satisfies Record<Milkiness, string>;

// sweetness -> suffix
export const SWEETNESS_TO_SUFFIX = {
  no_sugar: "Kosong",
  less_sweet: "Siew Dai",
  normal: "",
  sweeter: "Gah Dai",
} as const satisfies Record<Sweetness, string>;

// strength -> suffix
export const STRENGTH_TO_SUFFIX = {
  weak: "Po",
  normal: "",
  strong: "Gao",
  stronger_no_water: "Di Lo",
} as const satisfies Record<Strength, string>;

// state -> suffix
export const STATE_TO_SUFFIX = {
  warm: "",
  lukewarm: "Pua Sio",
  iced: "Peng",
} as const satisfies Record<State, string>;

// Build the base name from a KopiSelection
export function buildBaseName(sel: KopiSelection) {
  return MILKINESS_TO_BASE[sel.milkiness];
}

// Build the full order phrase from a KopiSelection
export function buildOrderPhrase(sel: KopiSelection) {
  const base = buildBaseName(sel);

  const parts = [
    base,
    STRENGTH_TO_SUFFIX[sel.strength],
    STATE_TO_SUFFIX[sel.state],
    SWEETNESS_TO_SUFFIX[sel.sweetness],
  ].filter(Boolean);

  return parts.join(" ");
}

// Build a display name (same as base name for now)
export function buildDisplayName(sel: KopiSelection) {
  return buildBaseName(sel);
}