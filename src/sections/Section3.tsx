import { GitCompare, Tag, TrendingUp, Wand2 } from 'lucide-react';
import { PredictReveal } from '@/components/PredictReveal';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { ComparisonPanel } from '@/components/Diagrams';

export function Section3() {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">Generative AI vs Other AI Tasks</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          You already know about different types of AI from previous lessons. Let's bridge from what
          you know to what's new today.
        </p>

        <div className="space-y-3">
          <AITaskCard
            icon={<Tag className="w-5 h-5" />}
            type="Classification"
            question="Is this a cat or a dog?"
            description="Classification looks at existing data and assigns it to a category. The output is a label — not new content."
            color="gray"
          />
          <AITaskCard
            icon={<TrendingUp className="w-5 h-5" />}
            type="Prediction"
            question="What will probably happen next?"
            description="Prediction estimates what is likely to happen based on patterns. The output is a forecast — not new content."
            color="cyan"
          />
          <AITaskCard
            icon={<Wand2 className="w-5 h-5" />}
            type="Generation"
            question="Create an image of a futuristic dog exploring Mars."
            description="Generation produces entirely new content based on your request. The output is something that did not exist before."
            color="accent"
          />
        </div>

        <div className="mt-6">
          <PredictReveal
            question="Which one feels most like a creative building tool?"
            answer={
              <p>
                <strong className="text-white">Generation.</strong> Classification and prediction are
                analytical — they analyze existing data. Generation is creative — it produces something
                new. That's why Generative AI is especially useful for creative production. You are not
                just asking AI to analyze; you are asking it to <em className="text-accent-300 not-italic">create</em>.
              </p>
            }
          />
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-4">Side by Side</h2>
        <ComparisonPanel
          left={{
            label: 'Analytical AI',
            tone: 'neutral',
            content: (
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Classification</p>
                  <p className="text-sm text-gray-300">Input: a photo → Output: "cat"</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Prediction</p>
                  <p className="text-sm text-gray-300">Input: weather data → Output: "rain likely"</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The output is a label or a forecast. Nothing new is created.
                </p>
              </div>
            ),
          }}
          right={{
            label: 'Generative AI',
            tone: 'strong',
            content: (
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Image Generation</p>
                  <p className="text-sm text-gray-300">Input: "a dog on Mars" → Output: a new image</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Text Generation</p>
                  <p className="text-sm text-gray-300">Input: "write a short story about..." → Output: a new story</p>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  The output is new content — an image, a story, a piece of music.
                </p>
              </div>
            ),
          }}
        />
      </div>

      <TeacherGuidance
        ask={[
          'Can you give me an example of classification you learned about before?',
          'Can you give me an example of prediction?',
          'Now can you give me an example of generation?',
          'Which one is most like a creative building tool, and why?',
        ]}
        explain={[
          'The key difference: analytical AI works with existing data. Generative AI creates new data.',
          'This is a quick bridge — do not reteach AI types extensively. Michael already knows these.',
        ]}
        watchFor={[
          'Michael might confuse prediction and generation. Prediction forecasts; generation creates.',
        ]}
        followUp={[
          'Could a single AI system do more than one of these tasks? (Yes — many modern AI systems combine multiple capabilities.)',
        ]}
      />
    </div>
  );
}

function AITaskCard({
  icon,
  type,
  question,
  description,
  color,
}: {
  icon: React.ReactNode;
  type: string;
  question: string;
  description: string;
  color: 'gray' | 'cyan' | 'accent';
}) {
  const colorMap = {
    gray: 'border-white/10 bg-ink-850/60',
    cyan: 'border-cyan-500/20 bg-cyan-500/5',
    accent: 'border-accent-500/30 bg-accent-500/10',
  };
  const iconColor = {
    gray: 'text-gray-400',
    cyan: 'text-cyan-400',
    accent: 'text-accent-400',
  };
  return (
    <div className={`rounded-xl border p-5 ${colorMap[color]}`}>
      <div className="flex items-start gap-4">
        <div className={iconColor[color]}>{icon}</div>
        <div className="flex-1">
          <p className={`text-sm font-semibold mb-1 ${color === 'accent' ? 'text-white' : 'text-gray-300'}`}>{type}</p>
          <p className="text-sm text-gray-200 font-medium italic mb-1">"{question}"</p>
          <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
