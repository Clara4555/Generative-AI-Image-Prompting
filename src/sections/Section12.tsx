import { FlaskConical, ExternalLink } from 'lucide-react';
import { GracePromptBuilder, type GraceConfig } from '@/components/GracePromptBuilder';
import { EvaluationChecklist } from '@/components/ImageLab';
import { ImageDropzone } from '@/components/ImageDropzone';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { useState } from 'react';
import { TeacherGuidance } from '@/components/TeacherGuidance';

const underwaterConfig: GraceConfig = {
  goal: 'Create an image of a futuristic underwater classroom',
  role: 'a futuristic concept artist',
  audience: 'a Grade 8 technology magazine',
  context: 'Students are learning inside a transparent underwater research facility',
  challengeKey: 'underwater_classroom',
  introText:
    'New scenario. This time you are building a prompt for a completely different image. Use the GRACE builder to choose your details, then generate the image in your real AI tool.',
  choices: [
    {
      key: 'structure',
      label: 'Building Structure',
      options: ['large glass walls', 'dome-shaped facility', 'cylindrical pods'],
    },
    {
      key: 'ocean_life',
      label: 'Ocean Life Outside',
      options: ['fish swimming past', 'a whale in the distance', 'coral reef visible', 'jellyfish floating by'],
    },
    {
      key: 'furniture',
      label: 'Classroom Furniture',
      options: ['futuristic desks', 'floating holographic workstations', 'circular seating arrangement'],
    },
    {
      key: 'technology',
      label: 'Technology',
      options: ['holographic screens', 'transparent display panels', 'projection tables'],
    },
    {
      key: 'teacher',
      label: 'Teacher',
      options: ['teacher at the front', 'AI hologram instructor', 'no visible teacher'],
    },
    {
      key: 'lighting',
      label: 'Lighting',
      options: ['blue underwater lighting', 'warm interior lighting', 'mixed blue and warm light'],
    },
    {
      key: 'style',
      label: 'Style',
      options: ['realistic', 'cinematic', 'illustrated', 'concept art'],
    },
  ],
};

const evalItems = [
  'What did the AI get right about the classroom?',
  'Did the underwater environment come through clearly?',
  'What details appeared that you did not expect?',
  'What is missing from what you imagined?',
  'What would you change in your prompt?',
];

export function Section12() {
  const [promptText, setPromptText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-ccent-500/30 bg-gradient-to-br from-cyan-900/20 via-ink-850 to-ink-900 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
            <FlaskConical className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400">AI Image Lab — Challenge 2</p>
            <h2 className="text-xl font-display font-bold text-white">A Futuristic Classroom Underwater</h2>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          A completely different scenario. This time, <strong className="text-white">you</strong> construct
          the prompt first. Do not rush — think about each detail.
        </p>
      </div>

      <div className="section-card">
        <h3 className="text-sm font-semibold text-cyan-300 mb-4">Build Your Prompt</h3>
        <GracePromptBuilder config={underwaterConfig} onPromptChange={setPromptText} />
      </div>

      {/* Generation section */}
      <div className="section-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-display font-semibold text-white">Generate and Evaluate</h3>
          {promptText && <CopyPromptButton promptText={promptText} />}
        </div>

        <a
          href="https://www.google.com/search?q=ai+image+generator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm transition-all duration-200 active:scale-95 mb-5"
        >
          <ExternalLink className="w-4 h-4" />
          Open Image Generator
        </a>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 mb-5">
          <p className="text-sm text-amber-300/90">
            Copy your prompt, paste it into your real AI image generator, and create the image. Then
            come back and paste the result below.
          </p>
        </div>

        <ImageDropzone challengeKey="underwater_classroom" onImageSaved={setImageUrl} />

        <EvaluationChecklist items={evalItems} challengeKey="underwater_classroom" />
      </div>

      <TeacherGuidance
        ask={[
          'Before you generate: what do you think the AI will struggle with?',
          'After generating: what surprised you?',
          'Did the underwater environment come through the way you expected?',
        ]}
        explain={[
          'This challenge tests whether Michael can independently apply GRACE to a new scenario.',
          'The underwater setting introduces new challenges — transparency, water effects, marine life. These are good for evaluating AI limitations.',
        ]}
        watchFor={[
          'Michael might copy the structure of the Mars prompt without thinking about what is different. Encourage him to consider what an underwater classroom specifically needs.',
        ]}
        followUp={[
          'How would this prompt change if the classroom was in space instead of underwater? What stays the same and what changes?',
        ]}
      />
    </div>
  );
}
