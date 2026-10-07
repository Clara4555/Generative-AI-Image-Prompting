import { ArrowLeftRight, Check } from 'lucide-react';
import { ComparisonPanel } from '@/components/Diagrams';
import { PredictReveal } from '@/components/PredictReveal';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

const weakBreakdown = [
  { label: 'Subject', value: 'dog', known: true },
  { label: 'Setting', value: 'Mars', known: true },
];

const strongBreakdown = [
  { label: 'Subject', value: 'Golden retriever' },
  { label: 'Appearance', value: 'Golden fur + astronaut suit' },
  { label: 'Setting', value: 'Surface of Mars' },
  { label: 'Background', value: 'Mountains + rover' },
  { label: 'Style', value: 'Realistic cinematic science fiction' },
  { label: 'Lighting', value: 'Cinematic lighting' },
  { label: 'Composition', value: 'Wide composition' },
];

export function Section6() {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <ArrowLeftRight className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">Weak Prompt vs Strong Prompt</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          Let's compare two real prompts for the same basic idea: a dog on Mars.
        </p>

        <ComparisonPanel
          left={{
            label: 'Weak Prompt',
            tone: 'weak',
            content: (
              <div>
                <p className="text-lg font-mono text-gray-300 mb-4">
                  "Make a dog on Mars."
                </p>
                <p className="text-xs text-gray-500 mb-3">This communicates:</p>
                <div className="space-y-1.5">
                  {weakBreakdown.map((d) => (
                    <div key={d.label} className="flex items-center gap-2 text-xs">
                      <span className="text-gray-600 w-24">{d.label}</span>
                      <span className="text-gray-300">{d.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-4 italic">
                  Everything else — breed, appearance, style, lighting, composition, mood — is left open.
                  The AI will decide all of it.
                </p>
              </div>
            ),
          }}
          right={{
            label: 'Stronger Prompt',
            tone: 'strong',
            content: (
              <div>
                <p className="text-sm font-mono text-gray-300 mb-4 leading-relaxed">
                  "Create a realistic golden retriever wearing a futuristic white astronaut suit, standing
                  on the rocky surface of Mars. Show a red-orange Martian landscape with distant mountains
                  and a small rover in the background. Use cinematic lighting and a wide composition, as
                  if the image were from a science-fiction movie."
                </p>
                <p className="text-xs text-gray-500 mb-3">This communicates:</p>
                <div className="space-y-1.5">
                  {strongBreakdown.map((d) => (
                    <div key={d.label} className="flex items-center gap-2 text-xs">
                      <Check className="w-3 h-3 text-success-400 flex-shrink-0" />
                      <span className="text-gray-600 w-28">{d.label}</span>
                      <span className="text-gray-300">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ),
          }}
        />
      </div>

      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-4">
          What Was Added?
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          The stronger prompt is not just "more words." Each addition controls a specific visual
          dimension:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Dimension</th>
                <th className="text-left py-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Weak Prompt</th>
                <th className="text-left py-2 px-3 text-xs font-semibold uppercase tracking-wide text-gray-500">Stronger Prompt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <ComparisonRow dimension="Subject" weak="dog" strong="golden retriever" />
              <ComparisonRow dimension="Appearance" weak="unspecified" strong="golden fur + white astronaut suit" />
              <ComparisonRow dimension="Setting" weak="Mars" strong="rocky surface of Mars" />
              <ComparisonRow dimension="Background" weak="unspecified" strong="mountains + rover" />
              <ComparisonRow dimension="Style" weak="unspecified" strong="realistic cinematic sci-fi" />
              <ComparisonRow dimension="Lighting" weak="unspecified" strong="cinematic lighting" />
              <ComparisonRow dimension="Composition" weak="unspecified" strong="wide composition" />
            </tbody>
          </table>
        </div>
      </div>

      {/* Critical nuance */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-400 mb-3">
          Important Nuance
        </p>
        <p className="text-base text-white leading-relaxed font-display mb-3">
          More detail does <span className="text-amber-300">not</span> automatically mean a better prompt.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed">
          The goal is <strong className="text-white">relevant detail</strong>. A prompt should provide
          useful information that helps the AI understand the intended result. Adding random words that
          do not relate to your vision does not help — it can actually confuse the AI. The stronger
          prompt above is better not because it is longer, but because <strong className="text-white">every
          detail it adds controls a specific visual dimension</strong> that matters for the image.
        </p>
      </div>

      <div className="section-card">
        <PredictReveal
          question="Which prompt gives the image generator more creative direction?"
          answer={
            <p>
              The stronger prompt — but not because it has more words. It gives more direction because
              every detail it adds controls a specific visual dimension: what the dog looks like, what
              it is wearing, what is in the background, what style to use, how to light it, and how to
              frame it. The weak prompt leaves all of those decisions to the AI. The stronger prompt
              makes them intentionally.
            </p>
          }
        />

        <Disclosure
          label="What makes detail 'relevant' vs 'irrelevant'?"
          icon={<ArrowLeftRight className="w-4 h-4" />}
        >
          <p className="text-sm text-gray-400 leading-relaxed mt-3">
            <strong className="text-white">Relevant detail</strong> helps the AI understand what you want
            to see. "Golden fur," "astronaut suit," "red-orange landscape" — each of these describes
            something visible in the intended image. <strong className="text-white">Irrelevant detail</strong>{' '}
            adds words without visual meaning. "Make it really really really amazing and special and
            unique" — none of these tell the AI what to actually draw. They are emotional, not visual.
            Good prompts are visual and specific.
          </p>
        </Disclosure>
      </div>

      <TeacherGuidance
        ask={[
          'Which prompt gives the image generator more control?',
          'Is the weak prompt "wrong"? (No — it communicates subject and setting. It just leaves many decisions open.)',
          'Can you think of a time when a short prompt might be the right choice?',
        ]}
        explain={[
          'The stronger prompt is not better because it is longer. It is better because every detail controls a specific visual dimension.',
          'Relevant detail > length. This distinction is critical for the rest of the unit.',
        ]}
        watchFor={[
          'Michael might start thinking "longer = better." Correct this: relevant detail, not word count.',
          'Michael might think the weak prompt is "bad." It is not bad — it is just less controlled.',
        ]}
        followUp={[
          'Can you write a long prompt that is actually NOT helpful? (Try adding only emotional words with no visual information.)',
        ]}
      />
    </div>
  );
}

function ComparisonRow({ dimension, weak, strong }: { dimension: string; weak: string; strong: string }) {
  return (
    <tr>
      <td className="py-2.5 px-3 text-xs font-medium text-gray-400">{dimension}</td>
      <td className="py-2.5 px-3 text-xs text-gray-600">{weak}</td>
      <td className="py-2.5 px-3 text-xs text-gray-300">{strong}</td>
    </tr>
  );
}
