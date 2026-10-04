import { createFileRoute } from "@tanstack/react-router";
import assertions from "@/data/assertions.json";
import { Shell } from "@/components/shell";
import { SIEVE_NAME } from "@/lib/canon";

export const Route = createFileRoute("/sieve")({ component: Sieve });

function Sieve() {
  const awaiting = assertions.filter((a) => a.state === "awaiting_signature").length;

  return (
    <Shell>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
        Index · signature queue
      </p>
      <h1 className="mt-2 text-4xl">Sieve shuffle</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        {SIEVE_NAME} is the recursive quadratic call. Claims from the conversation
        archive are candidates only. Build permission stays{" "}
        <span className="text-warn">no_build</span> until you sign. Hidden
        reasoning and private account files are not public artifacts.
      </p>

      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-line bg-panel px-3 py-4">
          <p className="text-2xl font-semibold tabular-nums">{assertions.length}</p>
          <p className="text-xs text-muted">Sampled claims</p>
        </div>
        <div className="rounded-xl border border-line bg-panel px-3 py-4">
          <p className="text-2xl font-semibold tabular-nums">{awaiting}</p>
          <p className="text-xs text-muted">Awaiting signature</p>
        </div>
        <div className="rounded-xl border border-line bg-panel px-3 py-4">
          <p className="text-2xl font-semibold tabular-nums">0</p>
          <p className="text-xs text-muted">Signed this session</p>
        </div>
      </div>

      <ul className="mt-6 grid gap-2">
        {assertions.map((a) => (
          <li key={a.id} className="rounded-xl border border-line bg-panel p-4">
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wide text-sand">
              <span>{a.id}</span>
              <span className="text-muted">{a.type}</span>
              <span className="text-warn">{a.perm}</span>
            </div>
            <p className="mt-2 text-sm">{a.excerpt}</p>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
