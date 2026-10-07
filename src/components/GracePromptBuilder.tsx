import { useMemo, useState } from 'react';
import { CopyPromptButton } from './CopyPromptButton';
import { Check } from 'lucide-react';

export interface GraceChoice {
  key: string;
  label: string;
  options: string[];
}

export interface GraceConfig {
  goal: string;
  role: string;
  audience: string;
  context: string;
  choices: GraceChoice[];
  challengeKey: string;
  introText?: string;
}

interface GracePromptBuilderProps {
  config: GraceConfig;
  onPromptChange?: (prompt: string) => void;
  showFullGrace?: boolean;
}

export function GracePromptBuilder({ config, onPromptChange, showFullGrace = true }: GracePromptBuilderProps) {
  const [selections, setSelections] = useState<Record<string, string>>(
    Object.fromEntries(config.choices.map((c) => [c.key, c.options[0]]))
  );

  const promptText = useMemo(() => {
    const parts: string[] = [];
    if (showFullGrace) {
      parts.push(`Goal: ${config.goal}.`);
      parts.push(`Role: Act as ${config.role}.`);
      parts.push(`Audience: ${config.audience}.`);
      parts.push(`Context: ${config.context}.`);
    }
    const detailParts = config.choices.map((c) => selections[c.key]).filter(Boolean);
    if (detailParts.length > 0) {
      if (showFullGrace) {
        parts.push(`Specific details: ${detailParts.join(', ')}.`);
      } else {
        parts.push(detailParts.join(', '));
      }
    }
    if (showFullGrace) {
      parts.push('Create a high-quality image based on these instructions.');
    }
    return parts.join(' ');
  }, [selections, config, showFullGrace]);

  const handleSelect = (key: string, value: string) => {
    const next = { ...selections, [key]: value };
    setSelections(next);
    const prompt = buildPrompt(next, config, showFullGrace);
    onPromptChange?.(prompt);
  };

  return (
    <div className="space-y-5">
      {config.introText && (
        <p className="text-sm text-gray-400 leading-relaxed">{config.introText}</p>
      )}

      {/* GRACE Summary */}
      {showFullGrace && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <GraceField letter="G" label="Goal" value={config.goal} />
          <GraceField letter="R" label="Role" value={config.role} />
          <GraceField letter="A" label="Audience" value={config.audience} />
          <GraceField letter="C" label="Context" value={config.context} />
        </div>
      )}

      {/* Choices */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
          Choose Your Specific Details
        </p>
        {config.choices.map((choice) => (
          <div key={choice.key}>
            <label className="block text-sm font-medium text-gray-300 mb-2">{choice.label}</label>
            <div className="flex flex-wrap gap-2">
              {choice.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(choice.key, opt)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    selections[choice.key] === opt
                      ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/20'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                  }`}
                >
                  {selections[choice.key] === opt && <Check className="w-3 h-3 inline mr-1" />}
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Assembled Prompt */}
      <div className="rounded-xl border border-accent-500/20 bg-ink-900/60 p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
            Your Assembled Prompt
          </p>
          <CopyPromptButton promptText={promptText} />
        </div>
        <p className="text-sm text-gray-300 leading-relaxed font-mono">
          {promptText}
        </p>
      </div>
    </div>
  );
}

function GraceField({ letter, label, value }: { letter: string; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-ink-850/60 p-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="w-6 h-6 rounded-md bg-accent-600/30 text-accent-300 text-xs font-bold flex items-center justify-center">
          {letter}
        </span>
        <span className="text-xs font-medium text-gray-400">{label}</span>
      </div>
      <p className="text-sm text-gray-300 ml-8">{value}</p>
    </div>
  );
}

function buildPrompt(
  selections: Record<string, string>,
  config: GraceConfig,
  showFullGrace: boolean
): string {
  const parts: string[] = [];
  if (showFullGrace) {
    parts.push(`Goal: ${config.goal}.`);
    parts.push(`Role: Act as ${config.role}.`);
    parts.push(`Audience: ${config.audience}.`);
    parts.push(`Context: ${config.context}.`);
  }
  const detailParts = config.choices.map((c) => selections[c.key]).filter(Boolean);
  if (detailParts.length > 0) {
    if (showFullGrace) {
      parts.push(`Specific details: ${detailParts.join(', ')}.`);
    } else {
      parts.push(detailParts.join(', '));
    }
  }
  if (showFullGrace) {
    parts.push('Create a high-quality image based on these instructions.');
  }
  return parts.join(' ');
}
