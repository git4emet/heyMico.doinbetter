import { createFileRoute } from "@tanstack/react-router";
import { Shell, StateChip } from "@/components/shell";
import { DOMAINS, GATES, LOOP, ORGANS, SIEVE_NAME, TRUST_FLOOR } from "@/lib/canon";

export const Route = createFileRoute("/lattice")({ component: Lattice });

function Lattice() {
  return (
    <Shell>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Eight entrances · four organs</p>
      <h1 className="mt-2 text-4xl">One body. Eight hats.</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Names are frozen. Status is honest. This trailhead does not change
        Namecheap DNS, does not claim a fishy doinbetter.com is yours, and does
        not invent live commerce.
      </p>

      <h2 className="mt-8 text-xl">Domains</h2>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {DOMAINS.map((d) => (
          <article key={d.host} className="rounded-xl border border-line bg-panel p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold">{d.host}</p>
              <StateChip state={d.state} />
            </div>
            <p className="mt-1 text-sm text-sand">{d.role}</p>
            <p className="mt-2 text-sm text-muted">{d.note}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-8 text-xl">Organs</h2>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {ORGANS.map((o) => (
          <article key={o.name} className="rounded-xl border border-line bg-panel p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold">{o.name}</p>
              <StateChip state={o.state} />
            </div>
            <p className="mt-1 text-sm text-sand">{o.role}</p>
            <p className="mt-2 text-sm text-muted">{o.note}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-8 text-xl">Analog API loop</h2>
      <ol className="mt-3 flex flex-wrap gap-2">
        {LOOP.map((step, i) => (
          <li
            key={step}
            className="rounded-full border border-line bg-navy px-3 py-2 text-sm tabular-nums"
          >
            {i + 1}. {step}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-muted">
        Carrier can change. Event keeps its lineage. Smallest human loop: NOTICE →
        DO → WITNESS.
      </p>

      <h2 className="mt-8 text-xl">Seven gates · trust floor {TRUST_FLOOR}</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {GATES.map((g) => (
          <li key={g.id} className="flex items-center justify-between rounded-xl border border-line bg-panel px-4 py-3 text-sm">
            <span>{g.label}</span>
            <span className="tabular-nums text-sand">{g.threshold.toFixed(3)}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs leading-relaxed text-muted">
        Deprecated label FAST/FART is not used. Canonical recursive call:{" "}
        <span className="text-sand">{SIEVE_NAME}</span> — the sieve shuffle.
      </p>
    </Shell>
  );
}
