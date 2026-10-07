import { Sparkles, Type, Image as ImageIcon, Music, Video, Volume2 } from 'lucide-react';
import { InfoCard } from '@/components/Diagrams';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

export function Section2() {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">What Is Generative AI?</h2>
        </div>

        <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-5 mb-5">
          <p className="text-base text-gray-200 leading-relaxed">
            <strong className="text-white">Generative AI</strong> is a type of AI designed to{' '}
            <strong className="text-accent-300">generate new content</strong> based on patterns it has
            learned from large amounts of training data.
          </p>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          The word <em className="text-white not-italic font-medium">"generate"</em> is the key. Instead of
          simply assigning a label or making a prediction, Generative AI <strong className="text-white">creates
          an output</strong> — something that did not exist before the AI produced it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          <div className="rounded-xl border border-white/10 bg-ink-850/60 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Classification</p>
            <p className="text-sm text-gray-300">"This is a cat."</p>
            <p className="text-xs text-gray-600 mt-2">Assigns a label to existing data</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-ink-850/60 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Prediction</p>
            <p className="text-sm text-gray-300">"It will probably rain tomorrow."</p>
            <p className="text-xs text-gray-600 mt-2">Estimates what is likely to happen</p>
          </div>
          <div className="rounded-xl border border-accent-500/30 bg-accent-500/10 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-400 mb-2">Generation</p>
            <p className="text-sm text-gray-200">"Create an image of a cat on Mars."</p>
            <p className="text-xs text-gray-500 mt-2">Produces entirely new content</p>
          </div>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">
          You already learned about classification and prediction in earlier lessons. Generation is
          different because the output is <strong className="text-white">new content</strong> — not a
          category, not a forecast, but something the AI creates from your instructions.
        </p>
      </div>

      {/* What can Gen AI create */}
      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-4">What Can Generative AI Create?</h2>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          Generative AI can produce content across several different formats. Here are the main ones:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          <ContentTypeCard
            icon={<Type className="w-5 h-5" />}
            title="Text"
            examples={['Stories', 'Explanations', 'Dialogue', 'Poems', 'Scripts', 'Ideas']}
          />
          <ContentTypeCard
            icon={<ImageIcon className="w-5 h-5" />}
            title="Images"
            examples={['Characters', 'Landscapes', 'Objects', 'Illustrations', 'Realistic scenes', 'Comic artwork']}
            highlighted
          />
          <ContentTypeCard
            icon={<Volume2 className="w-5 h-5" />}
            title="Audio"
            examples={['Narration', 'Voices', 'Sound effects']}
          />
          <ContentTypeCard
            icon={<Music className="w-5 h-5" />}
            title="Music"
            examples={['Songs', 'Instrumentals', 'Background music']}
          />
          <ContentTypeCard
            icon={<Video className="w-5 h-5" />}
            title="Video"
            examples={['Clips', 'Animations', 'Visual scenes']}
          />
        </div>

        <div className="mt-5 rounded-xl border border-accent-500/20 bg-accent-500/5 p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-accent-300">Our main focus this unit:</strong> Image Generation.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mt-2">
            We will explore several forms of Generative AI, but most of our time will be spent learning
            how to describe visual ideas clearly enough that an AI image generator can turn them into
            images you can evaluate and improve.
          </p>
        </div>
      </div>

      {/* Tree diagram */}
      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-4">The Generative AI Family</h2>
        <div className="rounded-xl bg-ink-900/60 border border-white/5 p-5 font-mono text-sm">
          <p className="text-accent-300">GENERATIVE AI</p>
          <p className="text-gray-500">├── TEXT</p>
          <p className="text-accent-300">├── IMAGES <span className="text-accent-500">★ MAIN FOCUS</span></p>
          <p className="text-gray-500">├── AUDIO</p>
          <p className="text-gray-500">├── MUSIC</p>
          <p className="text-gray-500">└── VIDEO</p>
        </div>

        <Disclosure
          label="Deep dive: What does 'based on patterns from training data' actually mean?"
          icon={<Sparkles className="w-4 h-4" />}
        >
          <p className="text-sm text-gray-400 leading-relaxed mt-3">
            The AI does not "know" things the way you do. During training, it processed enormous amounts
            of data — millions of images, for example — and learned statistical patterns: what objects
            look like, how light works, how colors relate, what compositions are common. When you give it
            a prompt, it uses those learned patterns to construct a new image that matches your
            description. The output is new, but it is built from patterns the AI discovered in its
            training data.
          </p>
        </Disclosure>

        <TeacherGuidance
          ask={[
            'Can you think of something you have seen that was created by AI? Was it text, an image, music, or video?',
            'Why do you think "generate" is a different kind of task than "classify" or "predict"?',
          ]}
          explain={[
            'The key distinction: classification and prediction work with existing data. Generation creates new data.',
            'Training data provides patterns. The AI uses those patterns to construct new outputs — it does not copy directly.',
          ]}
          watchFor={[
            'Michael might think AI "copies" from training data. Clarify: it learns patterns, then constructs new outputs from those patterns.',
          ]}
          followUp={[
            'If the AI learned patterns from training data, what happens if the training data never included something? (It will struggle to generate it accurately.)',
          ]}
        />
      </div>
    </div>
  );
}

function ContentTypeCard({
  icon,
  title,
  examples,
  highlighted = false,
}: {
  icon: React.ReactNode;
  title: string;
  examples: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlighted
          ? 'border-accent-500/30 bg-accent-500/10'
          : 'border-white/10 bg-ink-850/60'
      }`}
    >
      <div className={`mb-3 ${highlighted ? 'text-accent-400' : 'text-gray-400'}`}>{icon}</div>
      <p className={`text-sm font-semibold mb-2 ${highlighted ? 'text-white' : 'text-gray-300'}`}>{title}</p>
      <ul className="space-y-0.5">
        {examples.map((ex) => (
          <li key={ex} className="text-xs text-gray-500">· {ex}</li>
        ))}
      </ul>
      {highlighted && (
        <span className="inline-block mt-3 text-xs font-bold text-accent-400 uppercase tracking-wide">
          ★ Main Focus
        </span>
      )}
    </div>
  );
}
