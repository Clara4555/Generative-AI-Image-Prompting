import { useState, type ReactNode } from 'react';
import { ClipboardList, Check, ChevronDown } from 'lucide-react';

interface EvaluationChecklistProps {
  title?: string;
  items: string[];
  challengeKey: string;
  onNotesChange?: (notes: string) => void;
}

export function EvaluationChecklist({
  title = 'Look — Think — Explain',
  items,
  challengeKey,
  onNotesChange,
}: EvaluationChecklistProps) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [notes, setNotes] = useState('');
  const [showNotes, setShowNotes] = useState(false);

  const toggle = (i: number) => {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 my-4">
      <div className="flex items-center gap-2 mb-4">
        <ClipboardList className="w-4 h-4 text-cyan-400" />
        <p className="text-sm font-semibold text-cyan-200">{title}</p>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-start gap-3 text-left group"
            >
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 transition-all ${
                  checked[i]
                    ? 'bg-success-500 border-success-500'
                    : 'border-white/20 group-hover:border-cyan-400/50'
                }`}
              >
                {checked[i] && <Check className="w-3 h-3 text-white" />}
              </span>
              <span
                className={`text-sm leading-relaxed ${
                  checked[i] ? 'text-gray-500 line-through' : 'text-gray-300'
                }`}
              >
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setShowNotes(!showNotes)}
        className="mt-4 flex items-center gap-1.5 text-xs text-cyan-400/70 hover:text-cyan-300 transition-colors"
      >
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showNotes ? 'rotate-180' : ''}`} />
        Add evaluation notes
      </button>
      {showNotes && (
        <textarea
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
            onNotesChange?.(e.target.value);
          }}
          placeholder="Write down what the AI got right, what it misunderstood, and what you would change..."
          className="w-full mt-3 rounded-lg bg-ink-900/60 border border-white/10 px-3 py-2.5 text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/40 resize-none"
          rows={3}
        />
      )}
    </div>
  );
}

interface ImageLabProps {
  challengeKey: string;
  challengeTitle: string;
  challengeDescription: ReactNode;
  promptText: string;
  evaluationItems: string[];
  onImageSaved?: (url: string) => void;
  onNotesChange?: (notes: string) => void;
  children?: ReactNode;
}

export function ImageLab({
  challengeKey,
  challengeTitle,
  challengeDescription,
  promptText,
  evaluationItems,
  onImageSaved,
  onNotesChange,
  children,
}: ImageLabProps) {
  return (
    <div className="rounded-2xl border border-accent-500/20 bg-gradient-to-b from-accent-500/5 to-transparent p-6 my-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent-600/20 border border-accent-500/30 flex items-center justify-center">
          <span className="text-xs font-bold text-accent-300">AI</span>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">AI Image Lab</p>
          <h3 className="text-lg font-display font-semibold text-white">{challengeTitle}</h3>
        </div>
      </div>
      <div className="text-sm text-gray-400 leading-relaxed mb-4">{challengeDescription}</div>
      {children}
      <EvaluationChecklist items={evaluationItems} challengeKey={challengeKey} onNotesChange={onNotesChange} />
    </div>
  );
}
