import { AlertTriangle, Eye, Hand, Type, Shuffle, Users, Scissors, Ban } from 'lucide-react';
import { PredictReveal } from '@/components/PredictReveal';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

const limitations = [
  { icon: <Hand className="w-5 h-5" />, title: 'Strange hands & fingers', desc: 'AI often generates hands with the wrong number of fingers, extra joints, or distorted shapes.' },
  { icon: <Type className="w-5 h-5" />, title: 'Unreadable text', desc: 'AI image generators frequently produce garbled or nonsensical text within images — signs, labels, and documents may look like writing but say nothing real.' },
  { icon: <Users className="w-5 h-5" />, title: 'Inconsistent characters', desc: 'If you generate the same character in two separate prompts, the results may not look like the same person. This is a major challenge for visual storytelling.' },
  { icon: <Shuffle className="w-5 h-5" />, title: 'Objects in unexpected places', desc: 'Items may appear where they should not — floating objects, things merged together, or elements that make no physical sense.' },
  { icon: <Scissors className="w-5 h-5" />, title: 'Distorted objects', desc: 'Background elements, vehicles, architecture, or tools may be warped, asymmetric, or structurally impossible.' },
  { icon: <Ban className="w-5 h-5" />, title: 'Details being ignored', desc: 'The AI may simply skip details you included in your prompt, especially if there are many competing instructions.' },
];

export function Section15() {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg font-display font-semibold text-white">Important Limitations of AI Image Generation</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          Let's be honest about what AI image generators get wrong. This is not to discourage you — it
          is to make you a <strong className="text-white">smarter user</strong>. Knowing the
          limitations helps you evaluate results critically instead of just accepting whatever looks
          impressive.
        </p>
      </div>

      <div className="section-card">
        <h3 className="text-sm font-semibold text-amber-300 mb-4">Common Mistakes AI Image Generators Make</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {limitations.map((l, i) => (
            <div key={i} className="rounded-xl border border-amber-500/15 bg-amber-500/5 p-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-400 flex-shrink-0 mt-0.5">{l.icon}</span>
                <div>
                  <p className="text-sm font-medium text-white mb-1">{l.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{l.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <div className="flex items-start gap-3">
            <Eye className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-300 mb-2">Looking impressive is not the same as being correct</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                An AI-generated image can be visually stunning — beautiful colors, dramatic lighting,
                striking composition — and still be <strong className="text-white">wrong</strong>. A
                gorgeous image of a dog on Mars might have six toes on one paw. A beautiful city scene
                might have signs with meaningless gibberish. The image looks good, but it fails
                inspection.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <PredictReveal
            question="If AI generates an impressive-looking image, does that automatically mean the image is correct?"
            answer={
              <p>
                No. An impressive-looking image can still have incorrect anatomy, garbled text,
                inconsistent characters, or details that do not match your instructions. Visual appeal
                and accuracy are separate things. You must <strong className="text-white">evaluate</strong>{' '}
                every generated image — check the details, not just the overall impression.
              </p>
            }
          />
        </div>
      </div>

      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-4">Connecting to What You Already Know</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          You learned about AI assessment and evaluation in a previous lesson. Everything you learned
          there applies here:
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-ink-850/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">What you learned before</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI can be biased, can make mistakes, and should be evaluated rather than blindly trusted.
              You assess AI outputs for accuracy, relevance, and quality.
            </p>
          </div>
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400 mb-2">How it applies now</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI-generated images should be evaluated the same way — check for accuracy, check for
              details you asked for, check for distortions or mistakes. Do not accept an image just
              because it looks good.
            </p>
          </div>
        </div>

        <Disclosure
          label="Why do AI image generators make these specific mistakes?"
          icon={<AlertTriangle className="w-4 h-4" />}
        >
          <p className="text-sm text-gray-400 leading-relaxed mt-3">
            AI image generators do not "see" the way humans do. They learn statistical patterns from
            training data — which means they learn what things <em>usually</em> look like, not how
            things <em>actually work</em>. Hands are complex and vary a lot, so the patterns are harder
            to get right. Text in images requires precise spelling, which pattern-matching does not
            guarantee. Characters change because each generation is independent — the AI does not
            "remember" what it drew last time. Understanding <em>why</em> these mistakes happen makes
            you better at catching them.
          </p>
        </Disclosure>
      </div>

      <TeacherGuidance
        ask={[
          'Have you ever seen an AI image that looked good but had something wrong with it?',
          'Why do you think AI struggles with hands specifically?',
          'If you were making a comic and the AI kept changing what your character looked like, what would you do?',
        ]}
        explain={[
          'Connect this to previous evaluation lessons. The skill of evaluating AI outputs transfers from text to images.',
          'Character consistency will become a major topic in the comic project. Plant the seed now.',
        ]}
        watchFor={[
          'Michael might think "AI is bad" after seeing limitations. Reframe: AI is a tool with specific weaknesses. Knowing them makes you a better director.',
        ]}
        followUp={[
          'Which of these limitations do you think would be the biggest problem for a comic project? (Character consistency — it is critical for visual storytelling.)',
        ]}
      />
    </div>
  );
}
