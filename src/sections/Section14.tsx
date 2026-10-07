import { RefreshCw, ArrowRight, AlertCircle } from 'lucide-react';
import { PipelineDiagram, ComparisonPanel } from '@/components/Diagrams';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

export function Section14() {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-900/20 via-ink-850 to-ink-900 p-6">
        <div className="flex items-center gap-2 mb-4">
          <RefreshCw className="w-5 h-5 text-accent-400" />
          <h2 className="text-2xl font-display font-bold text-white">Generate → Evaluate → Improve</h2>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
          This is one of the most important concepts in the entire unit. Your first image does not have
          to be perfect. The skill is not simply getting an image — it is learning how to{' '}
          <strong className="text-white">iterate</strong>.
        </p>
      </div>

      {/* Iteration cycle */}
      <div className="section-card">
        <h3 className="text-sm font-semibold text-accent-300 mb-4">The Iteration Cycle</h3>
        <PipelineDiagram
          steps={[
            { label: 'Generate', description: 'Create your first image from your prompt' },
            { label: 'Evaluate', description: 'Look carefully — does it match your idea?', highlight: true },
            { label: 'Identify Problems', description: 'What is wrong? What is missing?' },
            { label: 'Improve Prompt', description: 'Revise based on what you found' },
            { label: 'Generate Again', description: 'Create a new image with the improved prompt' },
          ]}
        />
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>This cycle repeats until the result matches your vision</span>
        </div>
      </div>

      {/* Skills breakdown */}
      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-4">The Skill Is Not Getting an Image — It Is the Process</h3>
        <div className="grid md:grid-cols-3 gap-3">
          <ProcessStep number="1" title="Describe" desc="Translate your idea into a clear, specific prompt" />
          <ProcessStep number="2" title="Generate" desc="Let the AI produce an image from your prompt" />
          <ProcessStep number="3" title="Inspect" desc="Look carefully at what the AI actually produced" />
          <ProcessStep number="4" title="Identify" desc="What is wrong? What is missing? What is unexpected?" />
          <ProcessStep number="5" title="Change" desc="Revise your prompt to address the problems you found" />
          <ProcessStep number="6" title="Regenerate" desc="Generate again with the improved prompt" />
        </div>
      </div>

      {/* Example comparison */}
      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-4">Example: Improving a City Prompt</h3>
        <ComparisonPanel
          left={{
            label: 'Version 1',
            tone: 'weak',
            content: (
              <div>
                <p className="text-sm font-mono text-gray-300 mb-3">"A futuristic city."</p>
                <p className="text-xs text-gray-500 mb-2">Possible result:</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  A generic futuristic city. The AI picks the buildings, the time of day, the style, the
                  angle, everything. It might look impressive — but it probably does not match any
                  specific idea you had.
                </p>
              </div>
            ),
          }}
          right={{
            label: 'Version 2',
            tone: 'strong',
            content: (
              <div>
                <p className="text-sm font-mono text-gray-300 mb-3 leading-relaxed">
                  "A futuristic city at night with elevated trains, enormous glass skyscrapers,
                  holographic advertisements, pedestrians wearing advanced clothing, flying vehicles
                  between buildings, cinematic lighting, viewed from street level."
                </p>
                <p className="text-xs text-gray-500 mb-2">Why this is better:</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Each addition controls a specific visual dimension: time (night), transport (elevated
                  trains + flying vehicles), architecture (glass skyscrapers), details (holographic ads,
                  advanced clothing), lighting (cinematic), and composition (street level). The AI now
                  has real direction.
                </p>
              </div>
            ),
          }}
        />
      </div>

      {/* Iteration example */}
      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-4">A Full Iteration Example</h3>
        <div className="space-y-3">
          <IterationStep
            version="1"
            prompt='"A futuristic city at night with flying cars."'
            evaluation="The city looked generic. No holographic ads. The flying cars looked like blurry dots. No pedestrians visible."
            change="Added: holographic advertisements, pedestrians wearing advanced clothing, viewed from street level."
          />
          <IterationStep
            version="2"
            prompt='"A futuristic city at night with flying cars, holographic advertisements, pedestrians wearing advanced clothing, viewed from street level."'
            evaluation="Better. Holographic ads appeared. But the flying cars are still unclear. The lighting is flat."
            change="Changed: flying vehicles between buildings (more specific), cinematic lighting (instead of unspecified)."
          />
          <IterationStep
            version="3"
            prompt='"A futuristic city at night with elevated trains, enormous glass skyscrapers, holographic advertisements, pedestrians wearing advanced clothing, flying vehicles between buildings, cinematic lighting, viewed from street level."'
            evaluation="Much closer to the vision. The scene has depth, detail, and mood. Maybe adjust the composition next."
            change="This is the version from the comparison above. It may still need iteration — and that is normal."
          />
        </div>
      </div>

      <div className="section-card">
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-300 mb-1">Iteration is not failure</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Generating three versions does not mean your first two prompts were "bad." It means you
                are doing exactly what a creative director does: seeing the result, identifying what to
                improve, and trying again. Every professional who uses AI iterates. The first result is
                a starting point, not a finish line.
              </p>
            </div>
          </div>
        </div>

        <Disclosure
          label="How many times should I iterate?"
          icon={<RefreshCw className="w-4 h-4" />}
        >
          <p className="text-sm text-gray-400 leading-relaxed mt-3">
            There is no fixed number. You iterate until the image matches your vision well enough — or
            until you decide your vision should change based on what you have seen. Sometimes two
            versions is enough. Sometimes you might iterate five or six times. The point is that you are
            <strong className="text-white"> evaluating</strong> each result and making intentional
            changes, not just clicking "generate" repeatedly and hoping for the best.
          </p>
        </Disclosure>
      </div>

      <TeacherGuidance
        ask={[
          'Why is the first generated image not the final image?',
          'What do you do after generating an image?',
          'Is iterating the same as giving up on your first prompt?',
        ]}
        explain={[
          'Iteration is the core skill of this unit. Generating an image is easy; iterating effectively is the real skill.',
          'Each iteration should be intentional — identify a specific problem, make a specific change. Do not just click "regenerate."',
        ]}
        watchFor={[
          'Michael might just click "generate" repeatedly without changing the prompt. Explain: random regeneration is not iteration.',
          'Michael might feel discouraged after version 1. Normalize: the first version is a draft, not a failure.',
        ]}
        followUp={[
          'Can you think of something in everyday life that works the same way? (Writing an essay — draft, revise, draft again.)',
        ]}
      />
    </div>
  );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-850/60 p-4">
      <span className="inline-flex w-7 h-7 rounded-lg bg-accent-600/20 text-accent-300 text-sm font-bold items-center justify-center mb-2">
        {number}
      </span>
      <p className="text-sm font-semibold text-white mb-1">{title}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function IterationStep({
  version,
  prompt,
  evaluation,
  change,
}: {
  version: string;
  prompt: string;
  evaluation: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-850/60 p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2.5 py-1 rounded-md bg-accent-600/20 text-accent-300 text-xs font-bold">
          V{version}
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-gray-600" />
      </div>
      <p className="text-sm font-mono text-gray-300 mb-3 leading-relaxed">{prompt}</p>
      <div className="space-y-2 text-xs">
        <div>
          <span className="text-amber-400 font-medium">Evaluation: </span>
          <span className="text-gray-400">{evaluation}</span>
        </div>
        <div>
          <span className="text-cyan-400 font-medium">Change: </span>
          <span className="text-gray-400">{change}</span>
        </div>
      </div>
    </div>
  );
}
