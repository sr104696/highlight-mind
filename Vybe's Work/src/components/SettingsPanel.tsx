import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Settings2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";

export interface RagSettings {
  targetTokens: number;
  overlapRatio: number;
  retrievalK: number;
  topK: number;
  useCache: boolean;
  useWebGPU: boolean;
}

export const DEFAULT_SETTINGS: RagSettings = {
  targetTokens: 180,
  overlapRatio: 0.15,
  retrievalK: 20,
  topK: 6,
  useCache: false,
  useWebGPU: false,
};

interface Props {
  settings: RagSettings;
  onChange: (s: RagSettings) => void;
  onReindex: () => void;
  canReindex: boolean;
  webgpuAvailable: boolean;
}

export function SettingsPanel({ settings, onChange, onReindex, canReindex, webgpuAvailable }: Props) {
  const [local, setLocal] = useState(settings);
  const update = (patch: Partial<RagSettings>) => {
    const next = { ...local, ...patch };
    setLocal(next);
    onChange(next);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings2 className="w-3.5 h-3.5 mr-1.5" />
          Settings
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Retrieval settings</SheetTitle>
          <SheetDescription>Tune chunking and search behavior. Re-index to apply changes.</SheetDescription>
        </SheetHeader>
        <div className="space-y-6 mt-6">
          <div>
            <Label className="text-xs">Target tokens per chunk: {local.targetTokens}</Label>
            <Slider min={80} max={300} step={10} value={[local.targetTokens]}
              onValueChange={([v]) => update({ targetTokens: v })} />
          </div>
          <div>
            <Label className="text-xs">Chunk overlap: {Math.round(local.overlapRatio * 100)}%</Label>
            <Slider min={0} max={40} step={5} value={[local.overlapRatio * 100]}
              onValueChange={([v]) => update({ overlapRatio: v / 100 })} />
          </div>
          <div>
            <Label className="text-xs">Retrieval pool: {local.retrievalK}</Label>
            <Slider min={20} max={100} step={10} value={[local.retrievalK]}
              onValueChange={([v]) => update({ retrievalK: v })} />
          </div>
          <div>
            <Label className="text-xs">Top-K results: {local.topK}</Label>
            <Slider min={3} max={10} step={1} value={[local.topK]}
              onValueChange={([v]) => update({ topK: v })} />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-xs">Remember this document (IndexedDB cache)</Label>
            <Switch checked={local.useCache} onCheckedChange={(v) => update({ useCache: v })} />
          </div>
          {webgpuAvailable && (
            <div className="flex items-center justify-between">
              <Label className="text-xs">Use WebGPU (experimental)</Label>
              <Switch checked={local.useWebGPU} onCheckedChange={(v) => update({ useWebGPU: v })} />
            </div>
          )}
          <Button onClick={onReindex} disabled={!canReindex} className="w-full">
            Re-index with current settings
          </Button>
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            🔒 PDFs are processed entirely client-side. Model weights cache locally after first download. Nothing leaves your browser.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
