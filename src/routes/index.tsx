import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Copy } from "lucide-react";
import { useState } from "react";
import { Shell, StateChip } from "@/components/shell";
import { DOORS } from "@/lib/canon";
import { useShelter } from "@/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const request = useShelter((s) => s.request);
  const setRequest = useShelter((s) => s.setRequest);
  const completeLoop = useShelter((s) => s.completeLoop);
  const [copied, setCopied] = useState("");

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

  return (
    <Shell>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
        A real door first. Bigger system later.
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
        What do you need or want to make?
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        No résumé, no account, no polished pitch. Pick the closest door. If none
        fit, use the plain-language box.
      </p>

      <aside className="mt-6 rounded-xl border-l-4 border-warn bg-panel px-4 py-3 text-sm">
        <strong className="text-sand">Truth state.</strong> This page is a working
        public front door. Automatic creator payouts, print fulfillment, and
        national partner routing are <strong className="text-warn">not yet live</strong>.
        They will not be labeled live until an actual transaction completes and
        leaves a receipt.
      </aside>

      <section className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Four public doors">
        {DOORS.map((d) => {
          const inner = (
            <>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold tracking-[0.14em] text-sand">{d.n}</span>
                <StateChip state={d.state} />
              </div>
              <h2 className="mt-3 text-2xl">{d.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{d.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                Continue <ArrowRight className="size-4" />
              </span>
            </>
          );
          if (d.href.includes("#")) {
            return (
              <a
                key={d.id}
                href={d.href}
                className="flex min-h-[210px] flex-col rounded-xl border border-line bg-panel p-5 transition hover:border-blue"
              >
                {inner}
              </a>
            );
          }
          return (
            <Link
              key={d.id}
              to={d.href}
              className="flex min-h-[210px] flex-col rounded-xl border border-line bg-panel p-5 transition hover:border-blue"
            >
              {inner}
            </Link>
          );
        })}
      </section>

      <section id="need" className="mt-10 scroll-mt-28">
        <h2 className="text-2xl">Say it plain.</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Phone, tablet, library computer, shelter computer, borrowed screen — type
          the need, copy it. No form account.
        </p>
        <textarea
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          className="mt-4 min-h-32 w-full rounded-xl border border-line bg-navy p-4 text-ink outline-none ring-blue focus:ring-2"
          placeholder="I need… / I can make… / I know how to… / I want help with…"
          aria-label="Plain-language request"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-blue px-4 text-sm font-semibold"
          >
            <Copy className="size-4" /> Copy my request
          </button>
          <a
            className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm"
            href="mailto:dglassesguy@gmail.com?subject=DoinBetter%20Shelter%20request"
          >
            Email DoinBetter
          </a>
        </div>
        {copied ? (
          <p className="mt-2 text-sm text-sand" role="status">
            {copied}
          </p>
        ) : null}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl">Connected right now</h2>
        <ul className="mt-4 grid gap-2 text-sm">
          <li className="rounded-xl border border-line bg-panel px-4 py-3">
            <span className="text-moss">● Public front door</span> — this app.
          </li>
          <li className="rounded-xl border border-line bg-panel px-4 py-3">
            <span className="text-sand">● Lab / creator / archive</span> — mapped on
            Lattice. External hosts may still be frames, two-page apps, or someone
            else answering DNS.
          </li>
          <li className="rounded-xl border border-line bg-panel px-4 py-3">
            <span className="text-warn">● Not yet live</span> — storefronts, creator
            payout, POD fulfillment, national partner routing.
          </li>
        </ul>
      </section>
    </Shell>
  );
}
