import type { RankedChunk } from "@/lib/rag/types";
import { cn } from "@/lib/utils";

interface Props {
  hit: RankedChunk;
  rank: number;
  active: boolean;
  onClick: () => void;
}

export function IntentCard({ hit, rank, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left rounded-md border bg-card p-3 transition-all",
        "hover:border-primary/60 hover:bg-card/80",
        active
          ? "border-primary ring-1 ring-primary/40 shadow-[0_0_0_1px_hsl(var(--primary))]"
          : "border-border"
      )}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
            #{rank + 1}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            p.{hit.pageIndex + 1}
          </span>
        </div>
        <span className="font-mono text-[10px] text-accent">
          {hit.score.toFixed(3)}
        </span>
      </div>
      <p className="text-xs leading-relaxed text-foreground/90 line-clamp-4">
        {hit.text}
      </p>
    </button>
  );
}