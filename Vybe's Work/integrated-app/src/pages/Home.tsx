import { Link } from 'react-router-dom';
import { BookOpen, FileText, Brain, Search } from 'lucide-react';

const cards = [
  {
    to: '/library',
    icon: BookOpen,
    title: 'Reference Library',
    desc: 'Search across the 5 ingested OSS corpora (Stirling-PDF, Unstructured, semantra, RAGFlow, MinerU) with highlighted snippets and a section tree.',
    inspiration: 'gitingest outputs/*',
  },
  {
    to: '/pdf',
    icon: FileText,
    title: 'PDF Highlighter',
    desc: 'Drop a PDF, render it locally with pdfjs, and drag to add multi-color highlights that persist in your browser.',
    inspiration: 'Stirling-PDF',
  },
  {
    to: '/rag',
    icon: Brain,
    title: 'RAG Search',
    desc: 'BM25-ranked retrieval over the reference corpus and any PDF you load. Top chunks are stitched into an answer-style snippet.',
    inspiration: 'semantra + RAGFlow',
  },
  {
    to: '/extract',
    icon: Search,
    title: 'Doc Extractor',
    desc: 'Pull headings, lists, code-like and paragraph elements out of a PDF — a small homage to Unstructured-IO and MinerU.',
    inspiration: 'Unstructured-IO + MinerU',
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="py-8">
        <h1 className="text-3xl font-bold tracking-tight">Highlight Mind — Integrated</h1>
        <p className="text-slate-600 mt-2 max-w-2xl">
          A small, self-contained Vite + React app that turns the 5 gitingest reference dumps in this
          repo into a working <em>study & reading</em> tool: an in-app searchable docs library plus
          PDF/highlight/RAG/extraction features inspired by each project.
        </p>
      </section>
      <section className="grid sm:grid-cols-2 gap-4">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="block border rounded-lg p-5 bg-white hover:border-brand-500 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <c.icon className="w-5 h-5 text-brand-600" />
              <h2 className="font-semibold">{c.title}</h2>
            </div>
            <p className="text-sm text-slate-600">{c.desc}</p>
            <p className="text-xs text-slate-400 mt-3">Inspired by: {c.inspiration}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
