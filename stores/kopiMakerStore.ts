//store/kopiMakerStore.ts
import { create } from "zustand";
import type {
  KopiSelection,
  Milkiness,
  Sweetness,
  Strength,
  Temperature,
} from "@/types/kopi";
import { DEFAULT_SELECTION } from "@/types/kopi";
import {
  buildBaseName,
  buildOrderPhrase,
  buildDisplayName,
} from "@/utils/kopiInfer";

/**
 * Zustand store shape for Kopi Maker.
 *
 * This store keeps the current kopi selection (4 dimensions),
 * provides setters for each dimension, and exposes derived helpers
 * to build local kopi names and phrases.
 */
type KopiMakerStore = KopiSelection & {
  /**
   * Update milkiness selection.
   * @param v The new milkiness code.
   */
  setMilkiness: (v: Milkiness) => void;

  /**
   * Update sweetness selection.
   * @param v The new sweetness code.
   */
  setSweetness: (v: Sweetness) => void;

  /**
   * Update strength selection.
   * @param v The new strength code.
   */
  setStrength: (v: Strength) => void;

  /**
   * Update temperature selection.
   * @param v The new temperature code.
   */
  setTemperature: (v: Temperature) => void;

  /**
   * Reset all selections back to the default values.
   */
  reset: () => void;

  /**
   * Derived base name computed from current selection.
   * Example: "Kopi", "Kopi O", "Kopi C".
   * @returns The base name string.
   */
  baseName: () => string;

  /**
   * Derived display name for showing in UI.
   * Currently the same as baseName, but reserved for future extensions
   * such as Cham or Size.
   * @returns The display name string.
   */
  displayName: () => string;

  /**
   * Derived full local order phrase.
   * Example: "Kopi O Gao Peng Siew Dai".
   * @returns The full order phrase string.
   */
  phrase: () => string;
};

 /**
  * Hook to access Kopi Maker store.
  *
  * State:
 * - milkiness, sweetness, strength, temperature
  *
  * Actions:
 * - setMilkiness, setSweetness, setStrength, setTemperature, reset
 *
 * Derived helpers:
 * - baseName, displayName, phrase
 */
export const useKopiMakerStore = create<KopiMakerStore>()((set, get) => ({
  /**
   * Initial selection values.
   */
  ...DEFAULT_SELECTION,

  /** @inheritdoc */
  setMilkiness: (v) => set({ milkiness: v }),

  /** @inheritdoc */
  setSweetness: (v) => set({ sweetness: v }),

  /** @inheritdoc */
  setStrength: (v) => set({ strength: v }),

  /** @inheritdoc */
  setTemperature: (v) => set({ temperature: v }),

  /** @inheritdoc */
  reset: () => set(DEFAULT_SELECTION),

  /** @inheritdoc */
  baseName: () => buildBaseName(get()),

  /** @inheritdoc */
  displayName: () => buildDisplayName(get()),

  /** @inheritdoc */
  phrase: () => buildOrderPhrase(get()),
}));
