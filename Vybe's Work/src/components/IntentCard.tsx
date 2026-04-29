import type { RankedChunk } from "@/lib/rag/types";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { toast } from "sonner";

interface Props {
  hit: RankedChunk;
  rank: number;
  active: boolean;
  onClick: () => void;
}

export function IntentCard({ hit, rank, active, onClick }: Props) {
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`\"${hit.text}\" (p.${hit.pageIndex + 1})`);
    toast.success("Copied with citation");
  };
  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      role="button"
      tabIndex={0}
      className={cn(
        "w-full text-left rounded-md border bg-card p-3 transition-all cursor-pointer group",
        "hover:border-primary/60 hover:bg-card/80",
        active
          ? "border-primary ring-1 ring-primary/40 shadow-[0_0_0_1px_hsl(var(--primary))]"
          : "border-border"
      )}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-primary">#{rank + 1}</span>
          <span className="font-mono text-[10px] text-muted-foreground">p.{hit.pageIndex + 1}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-accent">{hit.score.toFixed(3)}</span>
          <button
            onClick={handleCopy}
            aria-label="Copy passage with citation"
            className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-secondary"
          >
            <Copy className="w-3 h-3 text-muted-foreground" />
          </button>
        </div>
      </div>
      <p className="text-xs leading-relaxed text-foreground/90 line-clamp-4">{hit.text}</p>
    </div>
  );
}
