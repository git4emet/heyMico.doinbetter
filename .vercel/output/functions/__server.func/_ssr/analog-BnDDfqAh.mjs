import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Shell, u as useShelter } from "./shell-8d_9ZBuu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analog-BnDDfqAh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Analog() {
	const pegs = useShelter((s) => s.pegs);
	const sheets = useShelter((s) => s.sheets);
	const writePeg = useShelter((s) => s.writePeg);
	const newSheet = useShelter((s) => s.newSheet);
	const tickHeat = useShelter((s) => s.tickHeat);
	const receipts = useShelter((s) => s.receipts);
	(0, import_react.useEffect)(() => {
		const t = window.setInterval(tickHeat, 400);
		return () => window.clearInterval(t);
	}, [tickHeat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-sand",
			children: "Lite-Brite analog · no digital buffer"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 text-4xl",
			children: "Heat writes. Paper holds."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 max-w-2xl text-sm text-muted",
			children: [
				"Ports have no software buffer. Continuous flux heats a peg until it burns out. Pattern substrate is construction paper. Stock is limited by the physical volume of the room — here, remaining reams:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
					className: "tabular-nums text-ink",
					children: sheets
				}),
				"."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: newSheet,
				disabled: sheets <= 0,
				className: "min-h-11 rounded-full bg-sand px-4 text-sm font-semibold text-navy disabled:opacity-40",
				children: "Swap paper"
			}), sheets <= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "self-center text-sm text-warn",
				children: "Halt. Restock the palette before another write."
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 overflow-x-auto rounded-xl border border-line bg-navy p-3",
			role: "grid",
			"aria-label": "Lite-Brite peg board",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-[3px]",
				style: { gridTemplateColumns: `repeat(21, minmax(0, 1fr))` },
				children: pegs.map((p, i) => {
					const bg = p.burned ? "bg-deep" : p.lit ? "bg-warn" : p.heat > .2 ? "bg-sand/60" : "bg-line";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Peg ${i}${p.burned ? " burned out" : ""}`,
						disabled: sheets <= 0 || p.burned,
						onClick: () => writePeg(i),
						className: `aspect-square min-h-4 rounded-full ${bg} disabled:cursor-not-allowed`,
						style: { boxShadow: p.lit ? `0 0 ${8 + p.heat * 14}px #e7b86d` : void 0 }
					}, i);
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-center text-[11px] text-muted",
				children: [
					21,
					"×",
					9,
					" (half of 42×18 Pipelex, so a phone can still poke it)"
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 text-xl",
			children: "Thermal / substrate receipts"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-2",
			children: receipts.filter((r) => r.kind !== "loop").length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "text-sm text-muted",
				children: "No burnout or paper-swap receipts yet."
			}) : receipts.filter((r) => r.kind !== "loop").slice(0, 12).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-line bg-panel px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between gap-2 text-xs text-sand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "uppercase",
						children: r.kind
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: r.at.slice(11, 19)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: r.note
				})]
			}, r.id))
		})
	] });
}
//#endregion
export { Analog as component };
