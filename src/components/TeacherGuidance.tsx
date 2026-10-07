import { useState, type ReactNode } from 'react';
import { ChevronDown, GraduationCap, HelpCircle, Lightbulb, AlertCircle, MessageCircleQuestion } from 'lucide-react';

interface TeacherGuidanceProps {
  ask?: string[];
  explain?: string[];
  watchFor?: string[];
  followUp?: string[];
  children?: ReactNode;
}

export function TeacherGuidance({ ask, explain, watchFor, followUp, children }: TeacherGuidanceProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 rounded-xl border border-amber-500/20 bg-amber-500/5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-amber-500/10 transition-colors"
      >
        <GraduationCap className="w-4 h-4 text-amber-400 flex-shrink-0" />
        <span className="text-sm font-medium text-amber-300/90">
          Teacher Guidance — for Favour
        </span>
        <ChevronDown
          className={`w-4 h-4 text-amber-400/60 ml-auto transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 space-y-3 animate-fade-in">
          {ask && ask.length > 0 && (
            <GuidanceBlock icon={<MessageCircleQuestion className="w-3.5 h-3.5" />} label="Ask" items={ask} color="text-cyan-300" />
          )}
          {explain && explain.length > 0 && (
            <GuidanceBlock icon={<Lightbulb className="w-3.5 h-3.5" />} label="Explain" items={explain} color="text-amber-300" />
          )}
          {watchFor && watchFor.length > 0 && (
            <GuidanceBlock icon={<AlertCircle className="w-3.5 h-3.5" />} label="Watch for" items={watchFor} color="text-error-400" />
          )}
          {followUp && followUp.length > 0 && (
            <GuidanceBlock icon={<HelpCircle className="w-3.5 h-3.5" />} label="Follow-up" items={followUp} color="text-success-400" />
          )}
          {children}
        </div>
      )}
    </div>
  );
}

function GuidanceBlock({
  icon,
  label,
  items,
  color,
}: {
  icon: ReactNode;
  label: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="space-y-1">
      <div className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${color}`}>
        {icon}
        {label}
      </div>
      <ul className="space-y-1 ml-5">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-gray-400 leading-relaxed list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
