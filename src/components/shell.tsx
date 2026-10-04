import { Link, useRouterState } from "@tanstack/react-router";
import { DoorOpen, Grid3x3, Layers, Receipt, Shuffle } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useShelter } from "@/store";

const NAV = [
  { to: "/", label: "Shelter", icon: DoorOpen },
  { to: "/lattice", label: "Lattice", icon: Layers },
  { to: "/analog", label: "Analog", icon: Grid3x3 },
  { to: "/sieve", label: "Sieve", icon: Shuffle },
  { to: "/receipts", label: "Receipts", icon: Receipt },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const loops = useShelter((s) => s.loops);
  const sheets = useShelter((s) => s.sheets);

  return (
    <div className="min-h-dvh bg-deep text-ink">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-navy/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="min-w-0">
            <p className="font-display text-lg font-semibold tracking-tight">
              DoinBetter <span className="text-sand">· Shelter</span>
            </p>
            <p className="truncate text-xs text-muted">Every Buddy belongs. No invented live state.</p>
          </Link>
          <div className="hidden items-center gap-3 text-xs tabular-nums text-muted sm:flex">
            <span>
              Loops <b className="text-ink">{loops}</b>
            </span>
            <span>
              Paper <b className="text-ink">{sheets}</b>
            </span>
          </div>
        </div>
        <nav className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-2 pb-2">
          {NAV.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-11 min-w-11 items-center gap-1.5 rounded-full px-3 text-sm",
                  active ? "bg-blue text-ink" : "text-muted hover:bg-panel hover:text-ink",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto w-full max-w-5xl px-4 py-6 pb-24">{children}</main>
    </div>
  );
}

export function StateChip({
  state,
}: {
  state: "live" | "staged" | "prototype" | "not-live";
}) {
  const map = {
    live: "bg-moss/20 text-moss",
    staged: "bg-sand/15 text-sand",
    prototype: "bg-blue/20 text-ink",
    "not-live": "bg-warn/15 text-warn",
  } as const;
  const label = {
    live: "Live here",
    staged: "Staged",
    prototype: "Prototype",
    "not-live": "Not yet live",
  } as const;
  return (
    <span className={cn("rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide", map[state])}>
      {label[state]}
    </span>
  );
}
