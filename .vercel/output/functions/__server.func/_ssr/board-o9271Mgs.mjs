import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Shell } from "./shell-8d_9ZBuu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/board-o9271Mgs.js
var import_jsx_runtime = require_jsx_runtime();
function Board() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-sand",
			children: "Creator · Pipelex"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 text-4xl",
			children: "Keep the maker attached."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm text-muted",
			children: "The 42×18 board is the visualization wall. The working analog (heat, paper, burnout) lives on Analog so a phone can poke it. Fulfillment, merch, and payouts stay unlabeled until a receipt exists."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/analog",
				className: "rounded-xl border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sand",
						children: "Working board"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xl",
						children: "Lite-Brite analog"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Write a peg. Watch it heat. Swap paper."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/receipts",
				className: "rounded-xl border border-line bg-panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sand",
						children: "Where work goes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xl",
						children: "TOFAR receipts"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Hashes, counts, local analog events."
					})
				]
			})]
		})
	] });
}
//#endregion
export { Board as component };
