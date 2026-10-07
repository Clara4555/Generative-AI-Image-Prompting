import { MessageSquare, Dog } from 'lucide-react';
import { PredictReveal } from '@/components/PredictReveal';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

const dogPossibilities = [
  'small puppy', 'golden retriever', 'German shepherd', 'cartoon dog', 'realistic dog',
  'dog running', 'dog sleeping', 'dog in a park', 'dog in space', 'dog underwater',
];

const openDecisions = [
  'breed', 'size', 'colour', 'pose', 'environment', 'camera angle',
  'art style', 'lighting', 'mood', 'realism', 'action',
];

export function Section5() {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">Why Your Description Matters</h2>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          Let's run the first mental experiment. Imagine you open an image generator and type just two
          words:
        </p>

        <div className="rounded-xl border border-error-500/20 bg-error-500/5 p-6 text-center my-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-error-400 mb-2">The Prompt</p>
          <p className="text-2xl font-display font-medium text-white">"Make a dog."</p>
        </div>

        <PredictReveal
          question="What might the AI create from just 'Make a dog'?"
          hint="Think about all the different dogs that exist. Now think about all the different ways to draw or photograph a dog."
          answer={
            <div>
              <p className="mb-3">
                <strong className="text-white">"Dog"</strong> gives the AI almost no information beyond the
                subject. The AI has to make dozens of decisions on its own:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {openDecisions.map((d) => (
                  <span key={d} className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-400 border border-white/10">
                    {d}
                  </span>
                ))}
              </div>
              <p>
                Each of these is a <strong className="text-white">visual dimension</strong> the AI must
                fill in. With no guidance from you, the AI guesses. The result could be anything:
              </p>
            </div>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 my-5">
          {dogPossibilities.map((d) => (
            <div
              key={d}
              className="rounded-lg border border-white/5 bg-ink-850/60 px-3 py-2.5 text-center"
            >
              <Dog className="w-4 h-4 text-gray-600 mx-auto mb-1" />
              <p className="text-xs text-gray-500">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key teaching point */}
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/20 bg-gradient-to-br from-accent-900/15 to-ink-900 p-6">
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent-500/8 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-400 mb-3">
            Key Teaching Point
          </p>
          <p className="text-lg text-white leading-relaxed font-display">
            A prompt does not just tell AI <em className="text-accent-300 not-italic">what</em> the subject is.
            It can communicate what the subject should <em className="text-accent-300 not-italic">look like</em>,
            what it should be <em className="text-accent-300 not-italic">doing</em>, where it should{' '}
            <em className="text-accent-300 not-italic">be</em>, and how the image should{' '}
            <em className="text-accent-300 not-italic">feel</em>.
          </p>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-4">Every Unspecified Detail Is a Decision the AI Makes for You</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-ink-850/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">When your prompt is vague</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>· The AI fills in every detail with its own choice</li>
              <li>· Each generation may look completely different</li>
              <li>· You have very little control over the result</li>
              <li>· The output is unpredictable</li>
            </ul>
          </div>
          <div className="rounded-xl border border-success-500/20 bg-success-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-success-400 mb-3">When your prompt is specific</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>· You guide each visual dimension intentionally</li>
              <li>· Results are more consistent and predictable</li>
              <li>· You have real control over the output</li>
              <li>· The output is closer to your idea</li>
            </ul>
          </div>
        </div>

        <Disclosure
          label="Is a vague prompt ever the right choice?"
          icon={<MessageSquare className="w-4 h-4" />}
        >
          <p className="text-sm text-gray-400 leading-relaxed mt-3">
            Sometimes — if you genuinely want to be surprised, or if you are brainstorming and want the
            AI to explore freely. But when you have a specific idea in mind, vagueness works against
            you. The goal is not always maximum specificity — it is <strong className="text-white">relevant</strong>{' '}
            specificity. We will come back to this distinction.
          </p>
        </Disclosure>
      </div>

      <TeacherGuidance
        ask={[
          'If I say "make a dog," what color dog do you picture?',
          'What breed? What is it doing? Where is it?',
          'Now — did I tell you any of those things? Who decided them?',
        ]}
        explain={[
          'Every unspecified detail is a decision the AI makes instead of you.',
          'This is why vague prompts feel unpredictable — not because AI is random, but because you left too many choices open.',
        ]}
        watchFor={[
          'Michael might say "the AI should just know." Gently redirect: the AI only has your words.',
        ]}
        followUp={[
          'If you could control only ONE of those decisions, which would you choose first? Why?',
        ]}
      />
    </div>
  );
}
