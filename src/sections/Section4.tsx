import { ImagePlus, Eye, Brain, Lightbulb } from 'lucide-react';
import { PipelineDiagram } from '@/components/Diagrams';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

export function Section4() {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <ImagePlus className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">What Is Image Generation?</h2>
        </div>

        <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-5 mb-5">
          <p className="text-sm text-gray-200 leading-relaxed">
            <strong className="text-white">Image generation</strong> (also called text-to-image
            generation) allows you to describe a desired visual using text, and a Generative AI system
            produces an image based on that description.
          </p>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-2">The full pipeline looks like this:</p>

        <PipelineDiagram
          steps={[
            { label: 'Human Idea', description: 'Something you imagine in your mind' },
            { label: 'Text Prompt', description: 'You translate your idea into words' },
            { label: 'Generative AI Image System', description: 'The AI processes your prompt', highlight: true },
            { label: 'Generated Image', description: 'The AI produces a visual output' },
            { label: 'Human Evaluation', description: 'You inspect: does this match my idea?' },
            { label: 'Improved Prompt', description: 'You revise based on what was wrong or missing' },
            { label: 'New Image', description: 'You generate again — closer to your vision' },
          ]}
        />
      </div>

      {/* Critical concept */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center">
            <Brain className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-base font-display font-semibold text-white mb-2">
              The AI cannot see inside your mind
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              This is one of the most important concepts in this entire unit. The AI is not looking
              inside your head. It only receives the information you provide through the{' '}
              <strong className="text-white">prompt</strong> and other available inputs.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              If your idea is rich and detailed but your prompt is just three words, the AI will fill in
              the gaps with its own choices. Those choices may not match what you imagined. The quality
              and specificity of your description <strong className="text-white">directly affects</strong>{' '}
              how closely the output matches your idea.
            </p>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-4">The Gap Between Mind and Machine</h2>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-xl border border-white/10 bg-ink-850/60 p-5 text-center">
            <Eye className="w-6 h-6 text-gray-400 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-300 mb-1">Your Mind</p>
            <p className="text-xs text-gray-500">
              A rich, detailed, complete picture of what you want
            </p>
          </div>
          <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-5 text-center">
            <Lightbulb className="w-6 h-6 text-accent-400 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-300 mb-1">Your Prompt</p>
            <p className="text-xs text-gray-500">
              The words you write — this is all the AI receives
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-ink-850/60 p-5 text-center">
            <ImagePlus className="w-6 h-6 text-gray-400 mx-auto mb-3" />
            <p className="text-sm font-medium text-gray-300 mb-1">Generated Image</p>
            <p className="text-xs text-gray-500">
              The AI's interpretation of your words — not your mind
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mt-4">
          The gap between your mind and the generated image is filled by one thing:{' '}
          <strong className="text-white">your prompt</strong>. The better your prompt, the smaller the gap.
        </p>

        <Disclosure
          label="What are 'other available inputs'?"
          icon={<Brain className="w-4 h-4" />}
        >
          <p className="text-sm text-gray-400 leading-relaxed mt-3">
            Some image generators accept more than just text. They might let you upload a reference
            image, specify a style preset, set a negative prompt (what to avoid), or adjust settings
            like aspect ratio. But the text prompt is almost always the primary way you communicate
            your idea. In this lesson, we focus on the prompt because it is the skill you will use
            most.
          </p>
        </Disclosure>
      </div>

      <TeacherGuidance
        ask={[
          'When you imagine something in your head, how much detail do you see?',
          'If the AI cannot read your mind, what is the only way it knows what you want?',
          'What happens to the parts of your idea that you do not describe in the prompt?',
        ]}
        explain={[
          'The AI fills in unspecified details with its own choices. This is why vague prompts produce unpredictable results.',
          'The prompt is the bridge between your imagination and the AI output. A better bridge = a better match.',
        ]}
        watchFor={[
          'Michael may think the AI "knows" what he means. It does not — it only has the words.',
          'This is the single most important conceptual point of the lesson. Make sure Michael truly understands it.',
        ]}
        followUp={[
          'If you could only write 5 words to describe your idea, which 5 would carry the most information?',
        ]}
      />
    </div>
  );
}
