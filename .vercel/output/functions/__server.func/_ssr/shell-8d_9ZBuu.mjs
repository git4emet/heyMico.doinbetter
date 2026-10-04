import { S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Grid3x3, i as Layers, n as Shuffle, o as DoorOpen, r as Receipt } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-8d_9ZBuu.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var DOORS = [
	{
		id: "shelter",
		n: "01 · SHELTER",
		title: "I need something",
		body: "A connection, a device problem, a document, a place to start, or something else. No account required.",
		href: "/#need",
		state: "live"
	},
	{
		id: "lab",
		n: "02 · LAB",
		title: "I want to make something",
		body: "An idea, joke, drawing, repair, story, shirt, tool, page, or unnamed thing. Lab route: ahig.xyz.",
		href: "/lattice",
		state: "staged"
	},
	{
		id: "creator",
		n: "03 · CREATOR",
		title: "I made something",
		body: "Keep the creator attached. Show, package, prepare — without claiming fulfillment is connected.",
		href: "/board",
		state: "prototype"
	},
	{
		id: "receipts",
		n: "04 · RECEIPTS",
		title: "Where does the work go?",
		body: "Governance and TOFAR receipts. Transaction reporting stays unverified until a real rail exists.",
		href: "/receipts",
		state: "live"
	}
];
var DOMAINS = [
	{
		host: "doinbetter.com",
		role: "Public front door",
		state: "live",
		note: "This Shelter + Lab surface."
	},
	{
		host: "doinbetter.org",
		role: "Community archive",
		state: "staged",
		note: "Receipt and governance route. No live payouts."
	},
	{
		host: "heymico.com",
		role: "Voice interface",
		state: "prototype",
		note: "Mico observe layer. Not a live phone product."
	},
	{
		host: "heymico.org",
		role: "Consent + review",
		state: "prototype",
		note: "Developer / consent gate. Staged copy only."
	},
	{
		host: "timmyu.in",
		role: "Learning + workbook",
		state: "staged",
		note: "Attached to Source Research. SSL pending in the field audit."
	},
	{
		host: "ahig.xyz",
		role: "Research bench / Lab",
		state: "staged",
		note: "Sorting Bench attachment. Lab door."
	},
	{
		host: "winxm.art",
		role: "Creative projection",
		state: "staged",
		note: "Creator surface. No POD fulfillment."
	},
	{
		host: "tailly.cc",
		role: "Registry + telemetry",
		state: "prototype",
		note: "CRED / TOFAR ledger face. Local receipts only here."
	}
];
var ORGANS = [
	{
		name: "One42 Trailhead",
		role: "Onboarding",
		state: "live",
		note: "This app is the trailhead, not a generic starter."
	},
	{
		name: "Maker Sorting Bench",
		role: "Classification and routing",
		state: "staged",
		note: "v9 exists; v8 was previously live elsewhere."
	},
	{
		name: "Source Research",
		role: "Evidence",
		state: "staged",
		note: "v3 exists; v1 was previously live elsewhere."
	},
	{
		name: "Text Goes Boom Mall",
		role: "Transformation / play",
		state: "prototype",
		note: "One shared library, eight concurrent products — recovered as intent, not as DNS."
	}
];
var GATES = [
	{
		id: "no_unnecessary_harm",
		label: "No unnecessary harm",
		threshold: .987
	},
	{
		id: "honor_agreements",
		label: "Honor agreements",
		threshold: .921
	},
	{
		id: "respect_property",
		label: "Respect property",
		threshold: .856
	},
	{
		id: "maintain_justice",
		label: "Maintain justice",
		threshold: .892
	},
	{
		id: "preserve_dignity",
		label: "Preserve dignity",
		threshold: .934
	},
	{
		id: "avoid_commons_pollution",
		label: "Avoid commons pollution",
		threshold: .877
	},
	{
		id: "establish_fair_systems",
		label: "Establish fair systems",
		threshold: .965
	}
];
var TRUST_FLOOR = .743;
var SIEVE_NAME = "C-R-E-D-T-O-F-A-R-T-O-P-H-D-A-R-C T-O-F-A-R-K-L-E";
var LOOP = [
	"FOLD",
	"ASK",
	"ROUTE",
	"EXECUTE",
	"WITNESS",
	"LOG"
];
function emptyPegs() {
	return Array.from({ length: 189 }, () => ({
		heat: 0,
		burned: false,
		lit: false
	}));
}
function rid(kind) {
	return `${kind}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
var useShelter = create()(persist((set, get) => ({
	request: "",
	loops: 0,
	sheets: 12,
	pegs: emptyPegs(),
	receipts: [],
	setRequest: (v) => set({ request: v }),
	completeLoop: (note) => set((s) => ({
		loops: s.loops + 1,
		receipts: [{
			id: rid("loop"),
			at: (/* @__PURE__ */ new Date()).toISOString(),
			kind: "loop",
			note
		}, ...s.receipts].slice(0, 80)
	})),
	writePeg: (i) => {
		const s = get();
		if (s.sheets <= 0) return;
		const pegs = s.pegs.map((p) => ({ ...p }));
		const p = pegs[i];
		if (!p || p.burned) return;
		p.lit = true;
		p.heat = Math.min(1, p.heat + .22);
		if (p.heat >= 1) {
			p.burned = true;
			p.lit = false;
			set({
				pegs,
				receipts: [{
					id: rid("burn"),
					at: (/* @__PURE__ */ new Date()).toISOString(),
					kind: "burnout",
					note: `Peg ${i} burned out. No buffer. Thermal failure.`
				}, ...s.receipts].slice(0, 80)
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
			receipts: [{
				id: rid("sheet"),
				at: (/* @__PURE__ */ new Date()).toISOString(),
				kind: "substrate",
				note: `Paper swapped. Remaining reams: ${s.sheets - 1}. Room volume still the limit.`
			}, ...s.receipts].slice(0, 80)
		});
	},
	tickHeat: () => set((s) => ({ pegs: s.pegs.map((p) => {
		if (p.burned) return p;
		if (!p.lit) return {
			...p,
			heat: Math.max(0, p.heat - .015)
		};
		const heat = Math.min(1, p.heat + .018);
		if (heat >= 1) return {
			...p,
			heat: 1,
			burned: true,
			lit: false
		};
		return {
			...p,
			heat
		};
	}) }))
}), { name: "doinbetter-shelter-v1" }));
var NAV = [
	{
		to: "/",
		label: "Shelter",
		icon: DoorOpen
	},
	{
		to: "/lattice",
		label: "Lattice",
		icon: Layers
	},
	{
		to: "/analog",
		label: "Analog",
		icon: Grid3x3
	},
	{
		to: "/sieve",
		label: "Sieve",
		icon: Shuffle
	},
	{
		to: "/receipts",
		label: "Receipts",
		icon: Receipt
	}
];
function Shell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const loops = useShelter((s) => s.loops);
	const sheets = useShelter((s) => s.sheets);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-deep text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-20 border-b border-line/80 bg-navy/90 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: ["DoinBetter ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sand",
							children: "· Shelter"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-muted",
						children: "Every Buddy belongs. No invented live state."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 text-xs tabular-nums text-muted sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Loops ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "text-ink",
						children: loops
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Paper ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "text-ink",
						children: sheets
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-5xl gap-1 overflow-x-auto px-2 pb-2",
				children: NAV.map((item) => {
					const active = pathname === item.to;
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: cn("flex min-h-11 min-w-11 items-center gap-1.5 rounded-full px-3 text-sm", active ? "bg-blue text-ink" : "text-muted hover:bg-panel hover:text-ink"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
					}, item.to);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-5xl px-4 py-6 pb-24",
			children
		})]
	});
}
function StateChip({ state }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide", {
			live: "bg-moss/20 text-moss",
			staged: "bg-sand/15 text-sand",
			prototype: "bg-blue/20 text-ink",
			"not-live": "bg-warn/15 text-warn"
		}[state]),
		children: {
			live: "Live here",
			staged: "Staged",
			prototype: "Prototype",
			"not-live": "Not yet live"
		}[state]
	});
}
//#endregion
export { ORGANS as a, StateChip as c, LOOP as i, TRUST_FLOOR as l, DOORS as n, SIEVE_NAME as o, GATES as r, Shell as s, DOMAINS as t, useShelter as u };
