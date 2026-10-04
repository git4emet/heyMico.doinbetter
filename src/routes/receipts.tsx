import { createFileRoute } from "@tanstack/react-router";
import receipts from "@/data/receipts.json";
import { Shell } from "@/components/shell";
import { useShelter } from "@/store";

export const Route = createFileRoute("/receipts")({ component: Receipts });

function Receipts() {
  const local = useShelter((s) => s.receipts);
  const loops = useShelter((s) => s.loops);
  const extracted = receipts.filter((r) => r.type === "conversation_extraction");
  const msgs = extracted.reduce((n, r) => n + (r.messages ?? 0), 0);
  const asserts = extracted.reduce((n, r) => n + (r.assertions ?? 0), 0);

  return (
    <Shell>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">TOFAR · provenance</p>
      <h1 className="mt-2 text-4xl">Receipts, not stories.</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Conversation extractions are hashed. Quarantined private account metadata
        is not exported. Session loops completed here:{" "}
        <b className="tabular-nums text-ink">{loops}</b>. Commerce rails remain
        unverified.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat n={extracted.length} l="Conversation receipts" />
        <Stat n={msgs} l="Messages counted" />
        <Stat n={asserts} l="Assertions counted" />
        <Stat n={local.length} l="Local analog receipts" />
      </div>

      {local.length > 0 ? (
        <>
          <h2 className="mt-8 text-xl">This session</h2>
          <ul className="mt-3 grid gap-2">
            {local.slice(0, 10).map((r) => (
              <li key={r.id} className="rounded-xl border border-line bg-panel px-4 py-3 text-sm">
                <div className="flex justify-between text-xs text-sand">
                  <span className="uppercase">{r.kind}</span>
                  <span className="tabular-nums">{r.at.slice(11, 19)}</span>
                </div>
                <p className="mt-1">{r.note}</p>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <h2 className="mt-8 text-xl">Archive digest</h2>
      <div className="mt-3 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[540px] text-left text-sm">
          <thead className="bg-panel text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-3 py-2">Receipt</th>
              <th className="px-3 py-2">Msgs</th>
              <th className="px-3 py-2">Asserts</th>
              <th className="px-3 py-2">Digest</th>
            </tr>
          </thead>
          <tbody>
            {receipts.slice(0, 40).map((r) => (
              <tr key={r.id} className="border-t border-line">
                <td className="px-3 py-2 font-mono text-xs">{r.id.replace("RECEIPT-CONV-", "").slice(0, 18)}</td>
                <td className="px-3 py-2 tabular-nums">{r.messages ?? "—"}</td>
                <td className="px-3 py-2 tabular-nums">{r.assertions ?? "—"}</td>
                <td className="px-3 py-2 font-mono text-xs text-muted">{r.digest || r.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}

function Stat({ n, l }: { n: number; l: string }) {
  return (
    <div className="rounded-xl border border-line bg-panel px-3 py-4">
      <p className="text-2xl font-semibold tabular-nums">{n}</p>
      <p className="text-xs text-muted">{l}</p>
    </div>
  );
}
