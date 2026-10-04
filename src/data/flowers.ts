import type { LiveState } from "@/lib/canon";
import { LOOP } from "@/lib/canon";

export type Voice = "inside" | "outside" | "shared" | "quantum" | "silent";

export type BootFlower = {
  id: number;
  name: string;
  /** Three analog vocabularies for the same coordinate. */
  paths: [string, string, string];
  gate: string;
  qtz: [number, number, number, number, number];
  voice: Voice;
  flow: (typeof LOOP)[number];
  organ: string;
  state: LiveState;
  memory: string;
};

const F = LOOP;

export const FLOWERS: BootFlower[] = [
  {
    id: 1,
    name: "Shelter door",
    paths: [
      "Say it plain at the door. No résumé.",
      "Peg 0 is the first poke. Heat starts here.",
      "qtz [0.74,0,1,0,0.50] voice:outside",
    ],
    gate: "no_unnecessary_harm",
    qtz: [0.743, 0, 1, 0, 0.5],
    voice: "outside",
    flow: F[0],
    organ: "One42 Trailhead",
    state: "live",
    memory:
      "This app is the public front door. Need, make, show, trace. No account required.",
  },
  {
    id: 2,
    name: "Plain request",
    paths: [
      "Type the need. Copy it. Hand it over.",
      "Paper takes the mark. The peg does not store overflow.",
      "qtz [0.74,0.2,1,0,0.48] voice:outside",
    ],
    gate: "no_unnecessary_harm",
    qtz: [0.743, 0.2, 1, 0, 0.48],
    voice: "outside",
    flow: F[1],
    organ: "One42 Trailhead",
    state: "live",
    memory:
      "NOTICE → DO → WITNESS. The smallest human loop. Carrier can change; lineage stays.",
  },
  {
    id: 3,
    name: "Local first",
    paths: [
      "One person completes one useful loop.",
      "Nearest neighbor before long haul.",
      "qtz [0.74,0.4,0.8,0,0.55] voice:shared",
    ],
    gate: "no_unnecessary_harm",
    qtz: [0.743, 0.4, 0.8, 0, 0.55],
    voice: "shared",
    flow: F[2],
    organ: "One42 Trailhead",
    state: "live",
    memory:
      "National work sits beside local work. It is not a substitute for a finished loop in the room.",
  },
  {
    id: 4,
    name: "Field mail",
    paths: [
      "dglassesguy at gmail is the listed field address.",
      "A copied request is already a receipt-shaped object.",
      "qtz [0.74,0.1,0.9,0.1,0.45] voice:outside",
    ],
    gate: "no_unnecessary_harm",
    qtz: [0.743, 0.1, 0.9, 0.1, 0.45],
    voice: "outside",
    flow: F[3],
    organ: "One42 Trailhead",
    state: "live",
    memory:
      "Email is a handoff, not an account system. This session does not send mail for you.",
  },
  {
    id: 5,
    name: "No login wall",
    paths: [
      "Public participation without an account.",
      "The board is usable on a borrowed screen.",
      "qtz [0.74,0.3,1,0,0.60] voice:shared",
    ],
    gate: "no_unnecessary_harm",
    qtz: [0.743, 0.3, 1, 0, 0.6],
    voice: "shared",
    flow: F[4],
    organ: "One42 Trailhead",
    state: "live",
    memory:
      "Auth stays off. Memory here is this-browser localStorage, not a shared user profile.",
  },
  {
    id: 6,
    name: "Truth state",
    paths: [
      "Payouts, POD, national routing: not yet live.",
      "No invented live commerce. Receipt or it is not live.",
      "qtz [0.74,0,0.7,0.2,0.74] voice:silent",
    ],
    gate: "no_unnecessary_harm",
    qtz: [0.743, 0, 0.7, 0.2, 0.743],
    voice: "silent",
    flow: F[5],
    organ: "One42 Trailhead",
    state: "not-live",
    memory:
      "doinbetter.com answering fishy is not claimed as ours. DNS is not changed from this surface.",
  },
  {
    id: 7,
    name: "Lab entrance",
    paths: [
      "ahig.xyz is the lab hat.",
      "Sorting Bench attachment. SSL was pending in the field audit.",
      "qtz [0.86,0.5,0.6,0.3,0.52] voice:outside",
    ],
    gate: "honor_agreements",
    qtz: [0.856, 0.5, 0.6, 0.3, 0.52],
    voice: "outside",
    flow: F[0],
    organ: "Maker Sorting Bench",
    state: "staged",
    memory:
      "Lab door is mapped, not proven as a live host from here. Treat the host as staged.",
  },
  {
    id: 8,
    name: "Sorting Bench versions",
    paths: [
      "v9 exists. v8 was previously live elsewhere.",
      "Do not promote a version without a receipt.",
      "qtz [0.92,0.4,0.5,0.4,0.58] voice:inside",
    ],
    gate: "honor_agreements",
    qtz: [0.921, 0.4, 0.5, 0.4, 0.58],
    voice: "inside",
    flow: F[1],
    organ: "Maker Sorting Bench",
    state: "staged",
    memory:
      "Classification and routing organ. This trailhead does not overwrite the public Site.",
  },
  {
    id: 9,
    name: "Maker route",
    paths: [
      "I want to make something — joke, repair, shirt, unnamed.",
      "Fold the intent. Do not invent a storefront.",
      "qtz [0.92,0.6,0.7,0.2,0.50] voice:shared",
    ],
    gate: "honor_agreements",
    qtz: [0.921, 0.6, 0.7, 0.2, 0.5],
    voice: "shared",
    flow: F[2],
    organ: "Maker Sorting Bench",
    state: "staged",
    memory:
      "Making is allowed without claiming fulfillment. The analog board is the local making loop.",
  },
  {
    id: 10,
    name: "Salvaged boards",
    paths: [
      "Toothbrush / vape / charger / accelerometer inventory.",
      "Tools, not a sealed product. Power budget is physical.",
      "qtz [0.86,0.8,1,0.1,0.40] voice:outside",
    ],
    gate: "honor_agreements",
    qtz: [0.856, 0.8, 1, 0.1, 0.4],
    voice: "outside",
    flow: F[3],
    organ: "Maker Sorting Bench",
    state: "prototype",
    memory:
      "Motion, wireless charge, FCC module, BMS are inventory notes. No hardware is driven from this page.",
  },
  {
    id: 11,
    name: "ESP32 fleet",
    paths: [
      "Sketched firmware, greeting-card boards, alarm panels.",
      "Bit-bang rates live in meters of cable, not in metaphors.",
      "qtz [0.86,0.7,0.9,0.3,0.42] voice:inside",
    ],
    gate: "honor_agreements",
    qtz: [0.856, 0.7, 0.9, 0.3, 0.42],
    voice: "inside",
    flow: F[4],
    organ: "Maker Sorting Bench",
    state: "prototype",
    memory:
      "Field flashing is not connected. Specs stay in the archive until a device receipt exists.",
  },
  {
    id: 12,
    name: "Fullerene mesh",
    paths: [
      "Adjacency A encodes bonds. Function is not free with A.",
      "Structure in; a model still required for physics out.",
      "qtz [0.89,0.5,0.3,0.5,0.62] voice:quantum",
    ],
    gate: "honor_agreements",
    qtz: [0.892, 0.5, 0.3, 0.5, 0.62],
    voice: "quantum",
    flow: F[5],
    organ: "Source Research",
    state: "prototype",
    memory:
      "C60 example and C80 isomers stay distinct. qTP_C60 thermoelectric cite is retained as retracted.",
  },
  {
    id: 13,
    name: "Creator surface",
    paths: [
      "winxm.art keeps the maker attached to the work.",
      "Show, package, prepare. Do not claim merch rails.",
      "qtz [0.93,0.6,0.8,0.2,0.55] voice:outside",
    ],
    gate: "respect_property",
    qtz: [0.934, 0.6, 0.8, 0.2, 0.55],
    voice: "outside",
    flow: F[0],
    organ: "Text Goes Boom Mall",
    state: "staged",
    memory:
      "Creative hat. No print-on-demand fulfillment from this trailhead.",
  },
  {
    id: 14,
    name: "Maker attached",
    paths: [
      "Credit stays with the person who made it.",
      "A glyph without a maker is an orphaned peg.",
      "qtz [0.93,0.7,0.7,0.1,0.60] voice:shared",
    ],
    gate: "respect_property",
    qtz: [0.934, 0.7, 0.7, 0.1, 0.6],
    voice: "shared",
    flow: F[1],
    organ: "Text Goes Boom Mall",
    state: "prototype",
    memory:
      "Attribution is a gate, not a payout. CRED is not treated as money here.",
  },
  {
    id: 15,
    name: "Boom Mall",
    paths: [
      "One shared library, eight concurrent products — as intent.",
      "Recovered as a working Site elsewhere; not DNS from here.",
      "qtz [0.93,0.5,0.6,0.4,0.50] voice:shared",
    ],
    gate: "respect_property",
    qtz: [0.934, 0.5, 0.6, 0.4, 0.5],
    voice: "shared",
    flow: F[2],
    organ: "Text Goes Boom Mall",
    state: "prototype",
    memory:
      "Transformation / play organ. Preserve the flow; do not fake a live mall.",
  },
  {
    id: 16,
    name: "Commerce halt",
    paths: [
      "Storefront, payout, POD, partner routing: halt.",
      "A receipt of an actual transaction is the only promotion rule.",
      "qtz [0.86,0.2,0.9,0.3,0.74] voice:silent",
    ],
    gate: "respect_property",
    qtz: [0.856, 0.2, 0.9, 0.3, 0.743],
    voice: "silent",
    flow: F[3],
    organ: "Text Goes Boom Mall",
    state: "not-live",
    memory:
      "Grocery Bridge topology is known. Conservation laws of one real transaction are not invented.",
  },
  {
    id: 17,
    name: "Smart Studio",
    paths: [
      "CatLabs Smart Studio: local-first PWA prototype.",
      "Controls are simulated. Not proven hardware integration.",
      "qtz [0.89,0.6,0.8,0.2,0.44] voice:inside",
    ],
    gate: "respect_property",
    qtz: [0.892, 0.6, 0.8, 0.2, 0.44],
    voice: "inside",
    flow: F[4],
    organ: "Maker Sorting Bench",
    state: "prototype",
    memory:
      "Studio 3D maps were promised from desktop folders and are not recovered in this intake.",
  },
  {
    id: 18,
    name: "FieldStream",
    paths: [
      "AET locate-board sample. Not a live GSOC backend.",
      "Sample pins are not tickets.",
      "qtz [0.88,0.5,0.7,0.5,0.46] voice:outside",
    ],
    gate: "respect_property",
    qtz: [0.877, 0.5, 0.7, 0.5, 0.46],
    voice: "outside",
    flow: F[5],
    organ: "Source Research",
    state: "prototype",
    memory:
      "American Engineering Testing desktop maps remain a recovery target, not a live feed.",
  },
  {
    id: 19,
    name: "Archive hat",
    paths: [
      "doinbetter.org is the governance / receipt route.",
      "Transaction-level reporting stays unverified.",
      "qtz [0.89,0.3,0.5,0.6,0.58] voice:silent",
    ],
    gate: "maintain_justice",
    qtz: [0.892, 0.3, 0.5, 0.6, 0.58],
    voice: "silent",
    flow: F[0],
    organ: "Source Research",
    state: "staged",
    memory:
      "Archive hat. Hashes of conversation extractions are shown; private account files are not.",
  },
  {
    id: 20,
    name: "TOFAR hashes",
    paths: [
      "Conversation receipts: source_ref + content_digest.",
      "The carrier changed. The event kept its lineage.",
      "qtz [0.89,0.2,0.4,0.7,0.62] voice:quantum",
    ],
    gate: "maintain_justice",
    qtz: [0.892, 0.2, 0.4, 0.7, 0.62],
    voice: "quantum",
    flow: F[1],
    organ: "Source Research",
    state: "live",
    memory:
      "Receipts page lists hashed extractions from the intake. That is provenance display, not a court filing.",
  },
  {
    id: 21,
    name: "Signature queue",
    paths: [
      "Assertions are candidates. build_permission = no_build.",
      "Until you sign, the sieve does not promote a claim.",
      "qtz [0.89,0.1,0.6,0.5,0.70] voice:silent",
    ],
    gate: "maintain_justice",
    qtz: [0.892, 0.1, 0.6, 0.5, 0.7],
    voice: "silent",
    flow: F[2],
    organ: "Source Research",
    state: "live",
    memory:
      "Sieve page samples awaiting_signature claims. Signing is not performed automatically.",
  },
  {
    id: 22,
    name: "Hidden reasoning",
    paths: [
      "Hidden reasoning and private account metadata are not public artifacts.",
      "Quarantine is a receipt, not a deletion story.",
      "qtz [0.93,0.1,0.3,0.6,0.66] voice:silent",
    ],
    gate: "maintain_justice",
    qtz: [0.934, 0.1, 0.3, 0.6, 0.66],
    voice: "silent",
    flow: F[3],
    organ: "Source Research",
    state: "live",
    memory:
      "Public export filter recorded excluded think-fragments and one private account file.",
  },
  {
    id: 23,
    name: "CRED unknown",
    paths: [
      "CRED is earned recognition. Transfer, redeem, money: unknown.",
      "Do not force it into someone else's ledger theory.",
      "qtz [0.97,0.4,0.5,0.4,0.40] voice:inside",
    ],
    gate: "maintain_justice",
    qtz: [0.965, 0.4, 0.5, 0.4, 0.4],
    voice: "inside",
    flow: F[4],
    organ: "Source Research",
    state: "not-live",
    memory:
      "Topology of benefit percolation is mapped. Conservation laws of one grocery cycle are still unstated by you.",
  },
  {
    id: 24,
    name: "Seven gates",
    paths: [
      "Harm, agreements, property, justice, dignity, commons, fair systems.",
      "Trust floor 0.743. Below it, halt and teach.",
      "qtz [0.74,0.5,0.5,0.5,0.74] voice:quantum",
    ],
    gate: "maintain_justice",
    qtz: [0.743, 0.5, 0.5, 0.5, 0.743],
    voice: "quantum",
    flow: F[5],
    organ: "One42 Trailhead",
    state: "live",
    memory:
      "Gates are shown with their thresholds. They are a checklist, not a live enforcer of the public internet.",
  },
  {
    id: 25,
    name: "heyMico voice",
    paths: [
      "heymico.com is the voice hat. Not a live phone product.",
      "Mico observes. Buddy integrates. Guardian judges.",
      "qtz [0.99,0.6,0.4,0.3,0.50] voice:outside",
    ],
    gate: "preserve_dignity",
    qtz: [0.987, 0.6, 0.4, 0.3, 0.5],
    voice: "outside",
    flow: F[0],
    organ: "One42 Trailhead",
    state: "prototype",
    memory:
      "Triadic names stay Mico / Guardian / Buddy. Spelling is Mico, not Miko.",
  },
  {
    id: 26,
    name: "Consent hat",
    paths: [
      "heymico.org is consent + review. Staged copy only.",
      "Speech-to-text is a carrier. Do not treat typos as character.",
      "qtz [0.93,0.3,0.5,0.2,0.54] voice:shared",
    ],
    gate: "preserve_dignity",
    qtz: [0.934, 0.3, 0.5, 0.2, 0.54],
    voice: "shared",
    flow: F[1],
    organ: "One42 Trailhead",
    state: "prototype",
    memory:
      "Consent gate is named, not operated. No third-party messages are sent from this app.",
  },
  {
    id: 27,
    name: "Oral–aural",
    paths: [
      "Voice in, mark on paper, receipt out.",
      "Transcription anomalies are notes, not new legal names.",
      "qtz [0.92,0.7,0.6,0.1,0.48] voice:outside",
    ],
    gate: "preserve_dignity",
    qtz: [0.921, 0.7, 0.6, 0.1, 0.48],
    voice: "outside",
    flow: F[2],
    organ: "One42 Trailhead",
    state: "prototype",
    memory:
      "STT drift (knit/IT, Fast Fart, etc.) is logged as a carrier problem. Canonical names override it.",
  },
  {
    id: 28,
    name: "Five voices",
    paths: [
      "inside / outside / shared / quantum / silent.",
      "Hearing is 0–1 alignment, not a medical claim.",
      "qtz [0.89,0.5,0.4,0.4,0.80] voice:quantum",
    ],
    gate: "preserve_dignity",
    qtz: [0.892, 0.5, 0.4, 0.4, 0.8],
    voice: "quantum",
    flow: F[3],
    organ: "Source Research",
    state: "prototype",
    memory:
      "Glyph.QTZ voice types are a labeling grammar for the same 5D coordinate.",
  },
  {
    id: 29,
    name: "Family devices",
    paths: [
      "Mom Samsung / Dale Siri / old iPad kiosk — recovery targets.",
      "Voice-comb zip exists in the intake; it is not flashed from here.",
      "qtz [0.93,0.8,0.9,0.2,0.42] voice:shared",
    ],
    gate: "preserve_dignity",
    qtz: [0.934, 0.8, 0.9, 0.2, 0.42],
    voice: "shared",
    flow: F[4],
    organ: "One42 Trailhead",
    state: "prototype",
    memory:
      "Device routines stay family-local. This surface does not reach those phones.",
  },
  {
    id: 30,
    name: "Quiet Screed",
    paths: [
      "Pavement / Quiet Screed packs reported, not recovered as files.",
      "Mix designs and weather windows are not guessed.",
      "qtz [0.88,0.4,0.8,0.6,0.36] voice:silent",
    ],
    gate: "preserve_dignity",
    qtz: [0.877, 0.4, 0.8, 0.6, 0.36],
    voice: "silent",
    flow: F[5],
    organ: "Maker Sorting Bench",
    state: "not-live",
    memory:
      "Pavement timing needs actual mix, spec, weather, haul, expert check. Remembered windows are not used.",
  },
  {
    id: 31,
    name: "Learning hat",
    paths: [
      "timmyu.in is the workbook hat, attached to Source Research.",
      "SSL pending in the field audit.",
      "qtz [0.92,0.5,0.6,0.3,0.50] voice:inside",
    ],
    gate: "avoid_commons_pollution",
    qtz: [0.921, 0.5, 0.6, 0.3, 0.5],
    voice: "inside",
    flow: F[0],
    organ: "Source Research",
    state: "staged",
    memory:
      "Learning entrance is named. This trailhead is the working onboarding, not the remote host.",
  },
  {
    id: 32,
    name: "One42 is this",
    paths: [
      "One42 was a generic starter. This app is the trailhead.",
      "Audit on screen. Backup is the copy you keep.",
      "qtz [0.99,0.5,0.7,0.2,0.64] voice:outside",
    ],
    gate: "avoid_commons_pollution",
    qtz: [0.987, 0.5, 0.7, 0.2, 0.64],
    voice: "outside",
    flow: F[1],
    organ: "One42 Trailhead",
    state: "live",
    memory:
      "Four organs, eight entrances, honest live/staged/prototype/not-live labels. One body.",
  },
  {
    id: 33,
    name: "Source Research versions",
    paths: [
      "v3 exists. v1 was previously live elsewhere.",
      "Evidence organ. Builder-owned vs outside research stay distinct.",
      "qtz [0.89,0.3,0.4,0.7,0.58] voice:inside",
    ],
    gate: "avoid_commons_pollution",
    qtz: [0.892, 0.3, 0.4, 0.7, 0.58],
    voice: "inside",
    flow: F[2],
    organ: "Source Research",
    state: "staged",
    memory:
      "Four evidence tiers. Stale docs do not get promoted by vibe.",
  },
  {
    id: 34,
    name: "Sixteen streams",
    paths: [
      "Flood, fire, drought, quake, rivers, ice, species — listed.",
      "Listed is not connected. No live NASA socket here.",
      "qtz [0.88,0.2,0.3,0.8,0.40] voice:quantum",
    ],
    gate: "avoid_commons_pollution",
    qtz: [0.877, 0.2, 0.3, 0.8, 0.4],
    voice: "quantum",
    flow: F[3],
    organ: "Source Research",
    state: "not-live",
    memory:
      "Environmental stream names are inventory. Values on this page are not planetary telemetry.",
  },
  {
    id: 35,
    name: "Miss CEO pack",
    paths: [
      "Original Miss CEO pack not recovered in this intake.",
      "MISS CEO ≠ FOXY ≠ BRANDY. Do not collapse the names.",
      "qtz [0.93,0.6,0.5,0.3,0.38] voice:silent",
    ],
    gate: "avoid_commons_pollution",
    qtz: [0.934, 0.6, 0.5, 0.3, 0.38],
    voice: "silent",
    flow: F[4],
    organ: "Maker Sorting Bench",
    state: "not-live",
    memory:
      "Absence is a receipt. Desktop feeds remain a search target, not a fabricated module.",
  },
  {
    id: 36,
    name: "Paper stock",
    paths: [
      "Lite-Brite had bulbs that burned and paper per pattern.",
      "No software buffer. Room holds so many reams.",
      "qtz [0.86,0.9,1,0.1,0.45] voice:outside",
    ],
    gate: "avoid_commons_pollution",
    qtz: [0.856, 0.9, 1, 0.1, 0.45],
    voice: "outside",
    flow: F[5],
    organ: "Maker Sorting Bench",
    state: "live",
    memory:
      "Analog page: heat accumulates while lit, burnout at 1.0, swap paper, halt at 0 sheets. 3D-print-as-paper is open research, not a stocked substrate.",
  },
  {
    id: 37,
    name: "Registry hat",
    paths: [
      "tailly.cc is registry + telemetry. Local receipts only here.",
      "CRED / TOFAR face without a live ledger server.",
      "qtz [0.97,0.4,0.5,0.5,0.52] voice:inside",
    ],
    gate: "establish_fair_systems",
    qtz: [0.965, 0.4, 0.5, 0.5, 0.52],
    voice: "inside",
    flow: F[0],
    organ: "Source Research",
    state: "prototype",
    memory:
      "Registry is a hat. This browser is the only ledger currently writing analog receipts.",
  },
  {
    id: 38,
    name: "Namecheap pack",
    paths: [
      "179 staged files in the eight-host pack.",
      "Own receipts: nothing uploaded; DNS/SSL not changed.",
      "qtz [0.97,0.3,0.6,0.4,0.48] voice:silent",
    ],
    gate: "establish_fair_systems",
    qtz: [0.965, 0.3, 0.6, 0.4, 0.48],
    voice: "silent",
    flow: F[1],
    organ: "One42 Trailhead",
    state: "staged",
    memory:
      "Hosting pack is evidence of staging, not of a live eight-site deploy.",
  },
  {
    id: 39,
    name: "DNS freeze",
    paths: [
      "No Namecheap, cPanel, or redirect edits from this app.",
      "Somebody answering at a domain is not proof of ownership here.",
      "qtz [0.97,0.2,0.7,0.3,0.74] voice:silent",
    ],
    gate: "establish_fair_systems",
    qtz: [0.965, 0.2, 0.7, 0.3, 0.743],
    voice: "silent",
    flow: F[2],
    organ: "One42 Trailhead",
    state: "not-live",
    memory:
      "Authenticated DNS audit remains required and is not performed in this sandbox.",
  },
  {
    id: 40,
    name: "Sieve name",
    paths: [
      "FAST/FART is deprecated.",
      "C-R-E-D-T-O-F-A-R-T-O-P-H-D-A-R-C T-O-F-A-R-K-L-E",
      "qtz [0.89,0.5,0.3,0.6,0.68] voice:quantum",
    ],
    gate: "establish_fair_systems",
    qtz: [0.892, 0.5, 0.3, 0.6, 0.68],
    voice: "quantum",
    flow: F[3],
    organ: "Source Research",
    state: "live",
    memory:
      "Recursive quadratic call that performs the sieve shuffle. 13/12 step, 6 slots per gate page, 7 pages = 42.",
  },
  {
    id: 41,
    name: "Joyful archive",
    paths: [
      "If coherence is short, teach. Do not smash.",
      "Boot flowers blossom after the archive is walked as one body.",
      "qtz [0.74,0.4,0.6,0.4,0.72] voice:shared",
    ],
    gate: "establish_fair_systems",
    qtz: [0.743, 0.4, 0.6, 0.4, 0.72],
    voice: "shared",
    flow: F[4],
    organ: "Source Research",
    state: "live",
    memory:
      "Open → fold → field. This page is the folded memory. Service is its own reward — as a mantra, not a token contract.",
  },
  {
    id: 42,
    name: "One Buddy",
    paths: [
      "Eight websites are hats on one body, not twenty siloed Buddies.",
      "Everything touches everything on the 42×18 wall; this phone holds 21×9.",
      "qtz [0.99,0.5,0.5,0.5,0.99] voice:shared",
    ],
    gate: "establish_fair_systems",
    qtz: [0.987, 0.5, 0.5, 0.5, 0.987],
    voice: "shared",
    flow: F[5],
    organ: "One42 Trailhead",
    state: "live",
    memory:
      "Project memory for buddies: 42 multipath-phrased, aggregated, gated, Glyph.QTZ, FLOW. Can you hear me now is a check, not a claim of a consciousness field.",
  },
];

export const FLOWERS_BY_GATE = FLOWERS.reduce<Record<string, BootFlower[]>>(
  (acc, f) => {
    (acc[f.gate] ??= []).push(f);
    return acc;
  },
  {},
);
