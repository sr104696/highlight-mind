import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export default function SearchBar({ value, onChange, placeholder, className, autoFocus }: Props) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 border rounded-md px-3 py-2 bg-white focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20',
        className
      )}
    >
      <Search className="w-4 h-4 text-slate-400" />
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Search…'}
        className="flex-1 outline-none bg-transparent text-sm"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="text-xs text-slate-400 hover:text-slate-700"
          aria-label="Clear"
        >
          clear
        </button>
      )}
    </div>
  );
}
