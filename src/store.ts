import { create } from "zustand";
import { persist } from "zustand/middleware";
import { BOARD_H, BOARD_W } from "@/lib/canon";

export type Peg = {
  heat: number;
  burned: boolean;
  lit: boolean;
};

export type ReceiptKind = "request" | "substrate" | "burnout" | "loop" | "flower";

export type LocalReceipt = {
  id: string;
  at: string;
  kind: ReceiptKind;
  note: string;
};

type State = {
  request: string;
  loops: number;
  sheets: number;
  pegs: Peg[];
  receipts: LocalReceipt[];
  blossomed: number[];
  sieveSeed: number;
  setRequest: (v: string) => void;
  completeLoop: (note: string) => void;
  writePeg: (i: number) => void;
  newSheet: () => void;
  tickHeat: () => void;
  blossom: (id: number, note: string) => void;
  shuffleSieve: () => void;
};

function emptyPegs(): Peg[] {
  return Array.from({ length: BOARD_W * BOARD_H }, () => ({
    heat: 0,
    burned: false,
    lit: false,
  }));
}

function rid(kind: string) {
  return `${kind}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function rec(kind: ReceiptKind, note: string): LocalReceipt {
  return { id: rid(kind), at: new Date().toISOString(), kind, note };
}

export const useShelter = create<State>()(
  persist(
    (set, get) => ({
      request: "",
      loops: 0,
      sheets: 12,
      pegs: emptyPegs(),
      receipts: [],
      blossomed: [],
      sieveSeed: 0,
      setRequest: (v) => set({ request: v }),
      completeLoop: (note) =>
        set((s) => ({
          loops: s.loops + 1,
          receipts: [rec("loop", note), ...s.receipts].slice(0, 80),
        })),
      writePeg: (i) => {
        const s = get();
        if (s.sheets <= 0) return;
        const pegs = s.pegs.map((p) => ({ ...p }));
        const p = pegs[i];
        if (!p || p.burned) return;
        p.lit = true;
        p.heat = Math.min(1, p.heat + 0.22);
        if (p.heat >= 1) {
          p.burned = true;
          p.lit = false;
          set({
            pegs,
            receipts: [
              rec("burnout", `Peg ${i} burned out. No buffer. Thermal failure.`),
              ...s.receipts,
            ].slice(0, 80),
          });
          return;
        }
        set({ pegs });
      },
      newSheet: () => {
        const s = get();
        if (s.sheets <= 0) return;
        set({
          sheets: s.sheets - 1,
          pegs: emptyPegs(),
          receipts: [
            rec(
              "substrate",
              `Paper swapped. Remaining reams: ${s.sheets - 1}. Room volume still the limit.`,
            ),
            ...s.receipts,
          ].slice(0, 80),
        });
      },
      tickHeat: () =>
        set((s) => ({
          pegs: s.pegs.map((p) => {
            if (p.burned) return p;
            if (!p.lit) return { ...p, heat: Math.max(0, p.heat - 0.015) };
            const heat = Math.min(1, p.heat + 0.018);
            if (heat >= 1) return { ...p, heat: 1, burned: true, lit: false };
            return { ...p, heat };
          }),
        })),
      blossom: (id, note) =>
        set((s) => {
          if (s.blossomed.includes(id)) return s;
          return {
            blossomed: [...s.blossomed, id],
            loops: s.loops + 1,
            receipts: [rec("flower", note), ...s.receipts].slice(0, 80),
          };
        }),
      shuffleSieve: () => set((s) => ({ sieveSeed: s.sieveSeed + 1 })),
    }),
    { name: "doinbetter-shelter-v1" },
  ),
);
