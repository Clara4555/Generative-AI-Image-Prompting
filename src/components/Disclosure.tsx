import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface DisclosureProps {
  label: string;
  children: ReactNode;
  icon?: ReactNode;
  defaultOpen?: boolean;
}

export function Disclosure({ label, children, icon, defaultOpen = false }: DisclosureProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-white/10 bg-ink-850/60 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/5 transition-colors"
      >
        {icon && <span className="text-accent-400 flex-shrink-0">{icon}</span>}
        <span className="text-sm font-medium text-gray-300">{label}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 ml-auto transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="px-4 pb-4 animate-fade-in">{children}</div>}
    </div>
  );
}
