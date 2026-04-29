import { NavLink, Outlet } from 'react-router-dom';
import { BookOpen, FileText, Search, Brain, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const nav = [
  { to: '/',         label: 'Home',     icon: Sparkles },
  { to: '/library',  label: 'Library',  icon: BookOpen },
  { to: '/pdf',      label: 'PDF',      icon: FileText },
  { to: '/rag',      label: 'RAG',      icon: Brain },
  { to: '/extract',  label: 'Extract',  icon: Search },
];

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-6">
          <div className="flex items-center gap-2 font-semibold">
            <Brain className="w-5 h-5 text-brand-600" />
            <span>Highlight Mind</span>
            <span className="text-xs text-slate-400 ml-1">/ integrated</span>
          </div>
          <nav className="flex items-center gap-1">
            {nav.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors',
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  )
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
        <Outlet />
      </main>
      <footer className="border-t py-4 text-center text-xs text-slate-400">
        Built on top of <span className="font-mono">highlight-mind</span> • inspired by
        Stirling-PDF, Unstructured-IO, semantra, RAGFlow & MinerU
      </footer>
    </div>
  );
}
