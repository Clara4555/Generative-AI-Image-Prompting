import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

interface ExperimentDimension {
  key: string;
  label: string;
  options: string[];
}

const dimensions: ExperimentDimension[] = [
  { key: 'subject', label: 'Subject', options: ['dog', 'astronaut', 'robot', 'alien'] },
  { key: 'setting', label: 'Setting', options: ['Mars', 'the Moon', 'an underwater city', 'a future Earth city'] },
  { key: 'style', label: 'Style', options: ['photorealistic', 'comic-book', '3D animation', 'watercolor', 'concept art'] },
  { key: 'lighting', label: 'Lighting', options: ['sunset', 'neon', 'dramatic', 'soft daylight'] },
  { key: 'camera', label: 'Camera / Composition', options: ['close-up', 'wide shot', 'low angle', 'top-down'] },
];

export function Section10() {
  const [selections, setSelections] = useState<Record<string, string>>(
    Object.fromEntries(dimensions.map((d) => [d.key, d.options[0]]))
  );

  const currentPrompt = `${selections.subject} on ${selections.setting}, ${selections.style} style, ${selections.lighting} lighting, ${selections.camera} composition.`;

  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">Prompt Detail Experiments</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          Now let's see something important: changing <strong className="text-white">one detail</strong>{' '}
          can change the entire visual result. Use the controls below to change one variable at a time
          and watch how the prompt — and the image it would produce — changes.
        </p>
      </div>

      {/* Interactive experiment */}
      <div className="section-card">
        <h3 className="text-sm font-semibold text-accent-300 mb-4">Interactive Experiment</h3>
        <p className="text-xs text-gray-500 mb-5">
          Start with "A dog on Mars." Change one dimension at a time. Think about how each change would
          affect the image.
        </p>

        <div className="space-y-5 mb-6">
          {dimensions.map((dim) => (
            <div key={dim.key}>
              <label className="block text-sm font-medium text-gray-300 mb-2">{dim.label}</label>
              <div className="flex flex-wrap gap-2">
                {dim.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelections((prev) => ({ ...prev, [dim.key]: opt }))}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                      selections[dim.key] === opt
                        ? 'bg-accent-600 text-white shadow-lg shadow-accent-600/20'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current prompt */}
        <div className="rounded-xl border border-accent-500/20 bg-ink-900/60 p-5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">Current Prompt</p>
            <button
              onClick={() => setSelections(Object.fromEntries(dimensions.map((d) => [d.key, d.options[0]])))}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          </div>
          <p className="text-sm text-gray-300 font-mono leading-relaxed">{currentPrompt}</p>
        </div>

        <div className="mt-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
          <p className="text-sm text-cyan-200/90 leading-relaxed">
            <strong>Try this:</strong> Keep everything the same and change only the style from
            "photorealistic" to "watercolor." The subject, setting, lighting, and camera are identical —
            but the image would look completely different. You are not just adding words. You are
            controlling different <strong className="text-white">visual dimensions</strong>.
          </p>
        </div>
      </div>

      {/* Key insight */}
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/20 bg-gradient-to-br from-accent-900/15 to-ink-900 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-400 mb-3">Key Insight</p>
        <p className="text-lg text-white leading-relaxed font-display">
          You are not just giving the AI more words. You are{' '}
          <span className="text-accent-300">controlling different visual dimensions</span> — each one
          independently shapes the final image.
        </p>
      </div>

      <div className="section-card">
        <Disclosure
          label="Why does changing one variable matter so much?"
          icon={<SlidersHorizontal className="w-4 h-4" />}
        >
          <p className="text-sm text-gray-400 leading-relaxed mt-3">
            Each visual dimension is like a separate dial. Style controls how the image looks.
            Lighting controls brightness and mood. Composition controls framing. When you change one
            dial, the AI produces a noticeably different image even though the subject stays the same.
            This is what gives you control — you can adjust individual aspects of the image without
            starting over.
          </p>
        </Disclosure>

        <TeacherGuidance
          ask={[
            'Change only the style. How do you think the image would change?',
            'Now change only the lighting. What would be different this time?',
            'Which dimension do you think has the biggest impact on the "feel" of the image?',
          ]}
          explain={[
            'Each variable is a separate control. Changing one does not require changing everything.',
            'This is how a creative director works: adjust individual aspects until the result matches the vision.',
          ]}
          watchFor={[
            'Michael might change multiple variables at once. Encourage him to change one at a time to see the isolated effect.',
          ]}
          followUp={[
            'If you wanted a scary version of this scene, which dimension would you change first? (Probably lighting or mood.)',
          ]}
        />
      </div>
    </div>
  );
}
