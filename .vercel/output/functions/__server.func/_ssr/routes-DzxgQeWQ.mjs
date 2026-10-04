import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowRight, s as Copy } from "../_libs/lucide-react.mjs";
import { c as StateChip, n as DOORS, s as Shell, u as useShelter } from "./shell-8d_9ZBuu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DzxgQeWQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const request = useShelter((s) => s.request);
	const setRequest = useShelter((s) => s.setRequest);
	const completeLoop = useShelter((s) => s.completeLoop);
	const [copied, setCopied] = (0, import_react.useState)("");
	async function copy() {
		const t = request.trim();
		if (!t) {
			setCopied("Type the need or idea first.");
			return;
		}
		try {
			await navigator.clipboard.writeText(t);
			completeLoop("Plain-language request copied. Hand it to the next person.");
			setCopied("Copied. Hand it to the next person or paste it into any platform.");
		} catch {
			setCopied("Select the text and copy it yourself.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-sand",
			children: "A real door first. Bigger system later."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl",
			children: "What do you need or want to make?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: "No résumé, no account, no polished pitch. Pick the closest door. If none fit, use the plain-language box."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "mt-6 rounded-xl border-l-4 border-warn bg-panel px-4 py-3 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-sand",
					children: "Truth state."
				}),
				" This page is a working public front door. Automatic creator payouts, print fulfillment, and national partner routing are ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-warn",
					children: "not yet live"
				}),
				". They will not be labeled live until an actual transaction completes and leaves a receipt."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-8 grid gap-3 sm:grid-cols-2",
			"aria-label": "Four public doors",
			children: DOORS.map((d) => {
				const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold tracking-[0.14em] text-sand",
							children: d.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateChip, { state: d.state })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl",
						children: d.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 flex-1 text-sm text-muted",
						children: d.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-4 inline-flex items-center gap-1 text-sm font-medium",
						children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				] });
				if (d.href.includes("#")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: d.href,
					className: "flex min-h-[210px] flex-col rounded-xl border border-line bg-panel p-5 transition hover:border-blue",
					children: inner
				}, d.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: d.href,
					className: "flex min-h-[210px] flex-col rounded-xl border border-line bg-panel p-5 transition hover:border-blue",
					children: inner
				}, d.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "need",
			className: "mt-10 scroll-mt-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Say it plain."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted",
					children: "Phone, tablet, library computer, shelter computer, borrowed screen — type the need, copy it. No form account."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: request,
					onChange: (e) => setRequest(e.target.value),
					className: "mt-4 min-h-32 w-full rounded-xl border border-line bg-navy p-4 text-ink outline-none ring-blue focus:ring-2",
					placeholder: "I need… / I can make… / I know how to… / I want help with…",
					"aria-label": "Plain-language request"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: copy,
						className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-blue px-4 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), " Copy my request"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm",
						href: "mailto:dglassesguy@gmail.com?subject=DoinBetter%20Shelter%20request",
						children: "Email DoinBetter"
					})]
				}),
				copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-sand",
					role: "status",
					children: copied
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Connected right now"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 grid gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-panel px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-moss",
							children: "● Public front door"
						}), " — this app."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-panel px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sand",
							children: "● Lab / creator / archive"
						}), " — mapped on Lattice. External hosts may still be frames, two-page apps, or someone else answering DNS."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-line bg-panel px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warn",
							children: "● Not yet live"
						}), " — storefronts, creator payout, POD fulfillment, national partner routing."]
					})
				]
			})]
		})
	] });
}
//#endregion
export { Home as component };
