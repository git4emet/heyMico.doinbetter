export type LiveState = "live" | "staged" | "prototype" | "not-live";

export type Door = {
  id: string;
  n: string;
  title: string;
  body: string;
  href: string;
  state: LiveState;
};

export const DOORS: Door[] = [
  {
    id: "shelter",
    n: "01 · SHELTER",
    title: "I need something",
    body: "A connection, a device problem, a document, a place to start, or something else. No account required.",
    href: "/#need",
    state: "live",
  },
  {
    id: "lab",
    n: "02 · LAB",
    title: "I want to make something",
    body: "An idea, joke, drawing, repair, story, shirt, tool, page, or unnamed thing. Lab route: ahig.xyz.",
    href: "/lattice",
    state: "staged",
  },
  {
    id: "creator",
    n: "03 · CREATOR",
    title: "I made something",
    body: "Keep the creator attached. Show, package, prepare — without claiming fulfillment is connected.",
    href: "/board",
    state: "prototype",
  },
  {
    id: "receipts",
    n: "04 · RECEIPTS",
    title: "Where does the work go?",
    body: "Governance and TOFAR receipts. Transaction reporting stays unverified until a real rail exists.",
    href: "/receipts",
    state: "live",
  },
];

export const DOMAINS = [
  {
    host: "doinbetter.com",
    role: "Public front door",
    state: "live" as LiveState,
    note: "This Shelter + Lab surface.",
  },
  {
    host: "doinbetter.org",
    role: "Community archive",
    state: "staged" as LiveState,
    note: "Receipt and governance route. No live payouts.",
  },
  {
    host: "heymico.com",
    role: "Voice interface",
    state: "prototype" as LiveState,
    note: "Mico observe layer. Not a live phone product.",
  },
  {
    host: "heymico.org",
    role: "Consent + review",
    state: "prototype" as LiveState,
    note: "Developer / consent gate. Staged copy only.",
  },
  {
    host: "timmyu.in",
    role: "Learning + workbook",
    state: "staged" as LiveState,
    note: "Attached to Source Research. SSL pending in the field audit.",
  },
  {
    host: "ahig.xyz",
    role: "Research bench / Lab",
    state: "staged" as LiveState,
    note: "Sorting Bench attachment. Lab door.",
  },
  {
    host: "winxm.art",
    role: "Creative projection",
    state: "staged" as LiveState,
    note: "Creator surface. No POD fulfillment.",
  },
  {
    host: "tailly.cc",
    role: "Registry + telemetry",
    state: "prototype" as LiveState,
    note: "CRED / TOFAR ledger face. Local receipts only here.",
  },
];

export const ORGANS = [
  {
    name: "One42 Trailhead",
    role: "Onboarding",
    state: "live" as LiveState,
    note: "This app is the trailhead, not a generic starter.",
  },
  {
    name: "Maker Sorting Bench",
    role: "Classification and routing",
    state: "staged" as LiveState,
    note: "v9 exists; v8 was previously live elsewhere.",
  },
  {
    name: "Source Research",
    role: "Evidence",
    state: "staged" as LiveState,
    note: "v3 exists; v1 was previously live elsewhere.",
  },
  {
    name: "Text Goes Boom Mall",
    role: "Transformation / play",
    state: "prototype" as LiveState,
    note: "One shared library, eight concurrent products — recovered as intent, not as DNS.",
  },
];

export const GATES = [
  { id: "no_unnecessary_harm", label: "No unnecessary harm", threshold: 0.987 },
  { id: "honor_agreements", label: "Honor agreements", threshold: 0.921 },
  { id: "respect_property", label: "Respect property", threshold: 0.856 },
  { id: "maintain_justice", label: "Maintain justice", threshold: 0.892 },
  { id: "preserve_dignity", label: "Preserve dignity", threshold: 0.934 },
  { id: "avoid_commons_pollution", label: "Avoid commons pollution", threshold: 0.877 },
  { id: "establish_fair_systems", label: "Establish fair systems", threshold: 0.965 },
];

export const TRUST_FLOOR = 0.743;

export const SIEVE_NAME =
  "C-R-E-D-T-O-F-A-R-T-O-P-H-D-A-R-C T-O-F-A-R-K-L-E";

export const LOOP = [
  "FOLD",
  "ASK",
  "ROUTE",
  "EXECUTE",
  "WITNESS",
  "LOG",
] as const;

export const BOARD_W = 21;
export const BOARD_H = 9;
export const FLOWER_COUNT = 42;
export const PAGE_SLOTS = 6;
export const SIEVE_STEP = 13;
export const SIEVE_HARMONIC = 12;

export function sieveShuffle<T>(items: T[], seed: number): T[] {
  const out = items.slice();
  const n = out.length;
  for (let i = n - 1; i > 0; i--) {
    const j = (i * SIEVE_STEP + seed * SIEVE_HARMONIC) % (i + 1);
    const a = out[i];
    const b = out[j];
    if (a !== undefined && b !== undefined) {
      out[i] = b;
      out[j] = a;
    }
  }
  return out;
}

export function stateLabel(s: LiveState) {
  if (s === "live") return "Live here";
  if (s === "staged") return "Staged";
  if (s === "prototype") return "Prototype";
  return "Not yet live";
}
