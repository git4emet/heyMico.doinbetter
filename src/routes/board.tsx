import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/board")({ component: Board });

function Board() {
  return (
    <Shell>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Creator · Pipelex</p>
      <h1 className="mt-2 text-4xl">Keep the maker attached.</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        The 42×18 board is the visualization wall. The working analog (heat,
        paper, burnout) lives on Analog so a phone can poke it. Fulfillment,
        merch, and payouts stay unlabeled until a receipt exists.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link to="/analog" className="rounded-xl border border-line bg-panel p-5">
          <p className="text-sand">Working board</p>
          <p className="mt-2 text-xl">Lite-Brite analog</p>
          <p className="mt-2 text-sm text-muted">Write a peg. Watch it heat. Swap paper.</p>
        </Link>
        <Link to="/receipts" className="rounded-xl border border-line bg-panel p-5">
          <p className="text-sand">Where work goes</p>
          <p className="mt-2 text-xl">TOFAR receipts</p>
          <p className="mt-2 text-sm text-muted">Hashes, counts, local analog events.</p>
        </Link>
      </div>
    </Shell>
  );
}
