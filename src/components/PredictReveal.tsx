import { ChevronDown } from 'lucide-react';
import { useState, type ReactNode } from 'react';

interface PredictRevealProps {
  question: string;
  answer: ReactNode;
  hint?: string;
}

export function PredictReveal({ question, answer, hint }: PredictRevealProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 overflow-hidden">
      <div className="px-4 py-3">
        <p className="text-sm text-cyan-200/90 font-medium">{question}</p>
        {hint && <p className="text-xs text-cyan-400/50 mt-1">{hint}</p>}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2.5 text-left bg-cyan-500/5 hover:bg-cyan-500/10 transition-colors border-t border-cyan-500/10"
      >
        <ChevronDown
          className={`w-4 h-4 text-cyan-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
        <span className="text-xs font-medium text-cyan-300">
          {open ? 'Hide explanation' : 'Reveal the explanation'}
        </span>
      </button>
      {open && (
        <div className="px-4 py-3 text-sm text-gray-300 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}
