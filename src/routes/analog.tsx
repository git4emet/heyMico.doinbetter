import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Shell } from "@/components/shell";
import { BOARD_H, BOARD_W } from "@/lib/canon";
import { useShelter } from "@/store";

export const Route = createFileRoute("/analog")({ component: Analog });

function Analog() {
  const pegs = useShelter((s) => s.pegs);
  const sheets = useShelter((s) => s.sheets);
  const writePeg = useShelter((s) => s.writePeg);
  const newSheet = useShelter((s) => s.newSheet);
  const tickHeat = useShelter((s) => s.tickHeat);
  const receipts = useShelter((s) => s.receipts);

  useEffect(() => {
    const t = window.setInterval(tickHeat, 400);
    return () => window.clearInterval(t);
  }, [tickHeat]);

  return (
    <Shell>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">
        Lite-Brite analog · no digital buffer
      </p>
      <h1 className="mt-2 text-4xl">Heat writes. Paper holds.</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Ports have no software buffer. Continuous flux heats a peg until it burns
        out. Pattern substrate is construction paper. Stock is limited by the
        physical volume of the room — here, remaining reams:{" "}
        <b className="tabular-nums text-ink">{sheets}</b>.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={newSheet}
          disabled={sheets <= 0}
          className="min-h-11 rounded-full bg-sand px-4 text-sm font-semibold text-navy disabled:opacity-40"
        >
          Swap paper
        </button>
        {sheets <= 0 ? (
          <span className="self-center text-sm text-warn">
            Halt. Restock the palette before another write.
          </span>
        ) : null}
      </div>

      <div
        className="mt-6 overflow-x-auto rounded-xl border border-line bg-navy p-3"
        role="grid"
        aria-label="Lite-Brite peg board"
      >
        <div
          className="grid gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${BOARD_W}, minmax(0, 1fr))` }}
        >
          {pegs.map((p, i) => {
            const bg = p.burned
              ? "bg-deep"
              : p.lit
                ? "bg-warn"
                : p.heat > 0.2
                  ? "bg-sand/60"
                  : "bg-line";
            return (
              <button
                key={i}
                type="button"
                aria-label={`Peg ${i}${p.burned ? " burned out" : ""}`}
                disabled={sheets <= 0 || p.burned}
                onClick={() => writePeg(i)}
                className={`aspect-square min-h-4 rounded-full ${bg} disabled:cursor-not-allowed`}
                style={{ boxShadow: p.lit ? `0 0 ${8 + p.heat * 14}px #e7b86d` : undefined }}
              />
            );
          })}
        </div>
        <p className="mt-2 text-center text-[11px] text-muted">
          {BOARD_W}×{BOARD_H} (half of 42×18 Pipelex, so a phone can still poke it)
        </p>
      </div>

      <h2 className="mt-8 text-xl">Thermal / substrate receipts</h2>
      <ul className="mt-3 grid gap-2">
        {receipts.filter((r) => r.kind !== "loop").length === 0 ? (
          <li className="text-sm text-muted">No burnout or paper-swap receipts yet.</li>
        ) : (
          receipts
            .filter((r) => r.kind !== "loop")
            .slice(0, 12)
            .map((r) => (
              <li key={r.id} className="rounded-xl border border-line bg-panel px-4 py-3 text-sm">
                <div className="flex justify-between gap-2 text-xs text-sand">
                  <span className="uppercase">{r.kind}</span>
                  <span className="tabular-nums">{r.at.slice(11, 19)}</span>
                </div>
                <p className="mt-1">{r.note}</p>
              </li>
            ))
        )}
      </ul>
    </Shell>
  );
}
