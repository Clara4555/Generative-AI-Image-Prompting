import { Hammer, Rocket } from 'lucide-react';
import { GracePromptBuilder, type GraceConfig } from '@/components/GracePromptBuilder';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { useState } from 'react';

const marsDogConfig: GraceConfig = {
  goal: 'An image of a dog exploring Mars',
  role: 'a cinematic science-fiction concept artist',
  audience: 'a Grade 8 science magazine',
  context: 'The dog is part of a future Mars exploration mission',
  challengeKey: 'mars_dog_builder',
  introText:
    'Let\'s build a GRACE-inspired prompt together, step by step. The Goal, Role, Audience, and Context are already set. Your job is to choose the specific details that will give the image generator clear visual direction.',
  choices: [
    {
      key: 'breed',
      label: 'Breed',
      options: ['golden retriever', 'husky', 'German shepherd', 'border collie'],
    },
    {
      key: 'clothing',
      label: 'Clothing / Gear',
      options: ['astronaut suit', 'exploration gear', 'futuristic suit'],
    },
    {
      key: 'environment',
      label: 'Environment',
      options: ['rocky Mars surface', 'Mars research base', 'Mars canyon'],
    },
    {
      key: 'background',
      label: 'Background Elements',
      options: ['rover in the distance', 'mountains on the horizon', 'research station', 'Earth visible in the sky'],
    },
    {
      key: 'style',
      label: 'Art Style',
      options: ['realistic', 'cinematic', 'illustrated', 'comic-book style', 'futuristic concept art'],
    },
    {
      key: 'lighting',
      label: 'Lighting',
      options: ['sunset glow', 'bright daylight', 'dramatic lighting', 'soft ambient light'],
    },
    {
      key: 'composition',
      label: 'Composition / Camera',
      options: ['close-up', 'medium shot', 'wide shot', 'low angle looking up'],
    },
  ],
};

export function Section8() {
  const [promptText, setPromptText] = useState('');

  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <Hammer className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">Build the Dog-on-Mars Prompt With GRACE</h2>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-2">
          We are not going to just show you a finished prompt. We are going to{' '}
          <strong className="text-white">build one together</strong>, step by step, using GRACE.
        </p>
      </div>

      {/* Step-by-step explanation */}
      <div className="section-card">
        <h3 className="text-sm font-semibold text-accent-300 mb-4">How We Got Here</h3>
        <div className="space-y-3">
          <StepBlock
            step="1"
            letter="G"
            title="Goal"
            question="What do we want to create?"
            answer="An image of a dog exploring Mars."
          />
          <StepBlock
            step="2"
            letter="R"
            title="Role"
            question="What kind of visual specialist should help us create this?"
            answer="A cinematic science-fiction concept artist. This role tells the AI to approach the image like someone who designs visuals for sci-fi films — which influences the style and quality of the output."
          />
          <StepBlock
            step="3"
            letter="A"
            title="Audience"
            question="Who is the image for?"
            answer="A Grade 8 science magazine. This tells the AI the image should be appropriate, engaging, and not overly abstract — it should make sense to a 13-year-old reader."
          />
          <StepBlock
            step="4"
            letter="C"
            title="Context"
            question="What does the AI need to know about the situation?"
            answer="The dog is part of a future Mars exploration mission. This gives the AI a narrative context — it's not just a dog standing on red dirt, it's an explorer on a mission."
          />
          <StepBlock
            step="5"
            letter="E"
            title="Examples / Specific Details"
            question="What should the final result include?"
            answer="This is where you come in. Choose the details below — breed, clothing, environment, background, style, lighting, and composition — and watch the prompt assemble itself."
            isLast
          />
        </div>
      </div>

      {/* Interactive Builder */}
      <div className="section-card">
        <div className="flex items-center gap-2 mb-5">
          <Rocket className="w-5 h-5 text-accent-400" />
          <h3 className="text-lg font-display font-semibold text-white">Interactive Prompt Builder</h3>
        </div>
        <GracePromptBuilder config={marsDogConfig} onPromptChange={setPromptText} />
      </div>

      <TeacherGuidance
        ask={[
          'Why did we choose "cinematic science-fiction concept artist" as the role? What would change if the role was "children\'s book illustrator"?',
          'How does the audience (Grade 8 science magazine) affect the kind of image the AI should produce?',
          'Which detail choice do you think will have the biggest impact on the final image?',
        ]}
        explain={[
          'Walk Michael through each GRACE step. Do not rush — the point is understanding the process, not just the output.',
          'The role influences style. The audience influences appropriateness. The context gives narrative meaning. The details give visual control.',
        ]}
        watchFor={[
          'Michael might just click through without thinking. Pause and ask him to explain why he chose each option.',
          'Michael might want to change the Goal or Role — that is fine. Let him experiment.',
        ]}
        followUp={[
          'What happens if you change just the style from "realistic" to "comic-book"? How do you think the image would change?',
        ]}
      />
    </div>
  );
}

function StepBlock({
  step,
  letter,
  title,
  question,
  answer,
  isLast = false,
}: {
  step: string;
  letter: string;
  title: string;
  question: string;
  answer: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative pl-12">
      {!isLast && (
        <div className="absolute left-[18px] top-10 bottom-0 w-px bg-gradient-to-b from-accent-500/30 to-transparent" />
      )}
      <div className="absolute left-0 top-0 w-9 h-9 rounded-xl bg-accent-600/20 border border-accent-500/30 flex items-center justify-center">
        <span className="text-sm font-bold text-accent-300">{letter}</span>
      </div>
      <div className="pb-4">
        <p className="text-xs text-gray-500 mb-0.5">Step {step} — {title}</p>
        <p className="text-sm text-cyan-300 font-medium mb-1.5">{question}</p>
        <p className="text-sm text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
