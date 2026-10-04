import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ORGANS, c as StateChip, i as LOOP, l as TRUST_FLOOR, o as SIEVE_NAME, r as GATES, s as Shell, t as DOMAINS } from "./shell-8d_9ZBuu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lattice-DKbz_Iyx.js
var import_jsx_runtime = require_jsx_runtime();
function Lattice() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-sand",
			children: "Eight entrances · four organs"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 text-4xl",
			children: "One body. Eight hats."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm text-muted",
			children: "Names are frozen. Status is honest. This trailhead does not change Namecheap DNS, does not claim a fishy doinbetter.com is yours, and does not invent live commerce."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 text-xl",
			children: "Domains"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-2 sm:grid-cols-2",
			children: DOMAINS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-panel p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: d.host
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateChip, { state: d.state })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-sand",
						children: d.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: d.note
					})
				]
			}, d.host))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 text-xl",
			children: "Organs"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-2 sm:grid-cols-2",
			children: ORGANS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-line bg-panel p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: o.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateChip, { state: o.state })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-sand",
						children: o.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: o.note
					})
				]
			}, o.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-8 text-xl",
			children: "Analog API loop"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-3 flex flex-wrap gap-2",
			children: LOOP.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-full border border-line bg-navy px-3 py-2 text-sm tabular-nums",
				children: [
					i + 1,
					". ",
					step
				]
			}, step))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "Carrier can change. Event keeps its lineage. Smallest human loop: NOTICE → DO → WITNESS."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-8 text-xl",
			children: ["Seven gates · trust floor ", TRUST_FLOOR]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-2 sm:grid-cols-2",
			children: GATES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between rounded-xl border border-line bg-panel px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: g.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-sand",
					children: g.threshold.toFixed(3)
				})]
			}, g.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 text-xs leading-relaxed text-muted",
			children: [
				"Deprecated label FAST/FART is not used. Canonical recursive call:",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sand",
					children: SIEVE_NAME
				}),
				" — the sieve shuffle."
			]
		})
	] });
}
//#endregion
export { Lattice as component };
