import { useState, type ReactNode } from 'react';

interface PipelineStep {
  label: string;
  description?: string;
  highlight?: boolean;
}

interface PipelineDiagramProps {
  steps: PipelineStep[];
  title?: string;
  vertical?: boolean;
  children?: ReactNode;
}

export function PipelineDiagram({ steps, title, vertical = true, children }: PipelineDiagramProps) {
  return (
    <div className="my-6">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-400 mb-4">{title}</p>
      )}
      <div className={`flex ${vertical ? 'flex-col' : 'flex-row items-stretch'} gap-0`}>
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col">
            <div
              className={`relative rounded-xl px-5 py-4 transition-all duration-300 ${
                step.highlight
                  ? 'bg-accent-600/20 border border-accent-500/40'
                  : 'bg-ink-850/60 border border-white/5'
              } ${!vertical && i > 0 ? 'ml-2' : ''}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                    step.highlight ? 'bg-accent-500 text-white' : 'bg-white/5 text-gray-400'
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <p className={`text-sm font-medium ${step.highlight ? 'text-white' : 'text-gray-300'}`}>
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
                  )}
                </div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex ${vertical ? 'justify-center py-1.5' : 'items-center px-1'}`}>
                {vertical ? (
                  <div className="w-px h-6 bg-gradient-to-b from-accent-500/40 to-accent-500/10" />
                ) : (
                  <div className="h-px flex-1 bg-gradient-to-r from-accent-500/40 to-accent-500/10" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

interface ComparisonPanelProps {
  left: { label: string; content: ReactNode; tone?: 'weak' | 'neutral' };
  right: { label: string; content: ReactNode; tone?: 'strong' | 'neutral' };
}

export function ComparisonPanel({ left, right }: ComparisonPanelProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      <div
        className={`rounded-xl border p-5 ${
          left.tone === 'weak'
            ? 'border-error-500/20 bg-error-500/5'
            : 'border-white/10 bg-ink-850/60'
        }`}
      >
        <p
          className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
            left.tone === 'weak' ? 'text-error-400' : 'text-gray-400'
          }`}
        >
          {left.label}
        </p>
        {left.content}
      </div>
      <div
        className={`rounded-xl border p-5 ${
          right.tone === 'strong'
            ? 'border-success-500/20 bg-success-500/5'
            : 'border-white/10 bg-ink-850/60'
        }`}
      >
        <p
          className={`text-xs font-semibold uppercase tracking-wide mb-3 ${
            right.tone === 'strong' ? 'text-success-400' : 'text-gray-400'
          }`}
        >
          {right.label}
        </p>
        {right.content}
      </div>
    </div>
  );
}

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  accent?: 'default' | 'accent' | 'cyan' | 'warning' | 'success';
  className?: string;
}

export function InfoCard({ icon, title, children, accent = 'default', className = '' }: InfoCardProps) {
  const accentMap = {
    default: 'border-white/10 bg-ink-850/60',
    accent: 'border-accent-500/20 bg-accent-500/5',
    cyan: 'border-cyan-500/20 bg-cyan-500/5',
    warning: 'border-amber-500/20 bg-amber-500/5',
    success: 'border-success-500/20 bg-success-500/5',
  };
  const iconColor = {
    default: 'text-gray-400',
    accent: 'text-accent-400',
    cyan: 'text-cyan-400',
    warning: 'text-amber-400',
    success: 'text-success-400',
  };

  return (
    <div className={`rounded-xl border p-5 ${accentMap[accent]} ${className}`}>
      {icon && (
        <div className={`mb-3 ${iconColor[accent]}`}>
          {icon}
        </div>
      )}
      <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
      <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}

interface TabSwitcherProps {
  tabs: { label: string; content: ReactNode }[];
}

export function TabSwitcher({ tabs }: TabSwitcherProps) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              active === i
                ? 'bg-accent-600 text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">{tabs[active].content}</div>
    </div>
  );
}
