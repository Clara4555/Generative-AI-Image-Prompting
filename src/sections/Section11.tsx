import { Layers } from 'lucide-react';
import { TabSwitcher } from '@/components/Diagrams';
import { TeacherGuidance } from '@/components/TeacherGuidance';

const components = [
  {
    label: '1. Subject',
    question: 'What is in the image?',
    examples: ['astronaut', 'dog', 'scientist', 'spaceship', 'dragon', 'student'],
    description: 'The subject is the main thing (or things) the image is about. Without a clear subject, the AI does not know what to focus on.',
  },
  {
    label: '2. Appearance',
    question: 'What does it look like?',
    examples: ['clothing', 'colour', 'age', 'material', 'physical characteristics', 'expression'],
    description: 'Appearance describes the visual qualities of your subject — what it is wearing, what color it is, what texture it has, how old or worn it looks.',
  },
  {
    label: '3. Action',
    question: 'What is happening?',
    examples: ['running', 'exploring', 'flying', 'reading', 'fighting', 'building', 'standing still'],
    description: 'Action tells the AI what the subject is doing. A subject doing something creates a more dynamic, interesting image than a subject just existing.',
  },
  {
    label: '4. Environment',
    question: 'Where is it happening?',
    examples: ['Mars', 'classroom', 'forest', 'futuristic city', 'underwater lab', 'mountaintop'],
    description: 'Environment is the setting — the place where the image takes place. It provides context and atmosphere.',
  },
  {
    label: '5. Style',
    question: 'How should the image look?',
    examples: ['realistic', 'cinematic', 'comic-book', 'watercolor', '3D', 'anime-inspired', 'oil painting'],
    description: 'Style controls the overall visual approach. The same subject in the same setting can look completely different depending on the art style.',
  },
  {
    label: '6. Lighting',
    question: 'What kind of lighting?',
    examples: ['sunset', 'dramatic', 'soft', 'neon', 'moonlight', 'bright daylight', 'backlit'],
    description: 'Lighting affects mood, depth, and visual interest. The same scene with different lighting feels completely different.',
  },
  {
    label: '7. Composition',
    question: 'How should the scene be framed?',
    examples: ['close-up', 'wide shot', 'portrait', 'landscape', 'low-angle', 'top-down', 'over-the-shoulder'],
    description: 'Composition controls how the scene is framed — how close the camera is, what angle it uses, what is included or excluded from the frame.',
  },
  {
    label: '8. Mood',
    question: 'What should the image feel like?',
    examples: ['mysterious', 'exciting', 'peaceful', 'dramatic', 'adventurous', 'lonely', 'hopeful'],
    description: 'Mood is the emotional quality of the image. It is influenced by lighting, color, composition, and subject — but you can also state it directly.',
  },
  {
    label: '9. Important Details',
    question: 'What must appear?',
    examples: ['rover', 'backpack', 'glowing object', 'spaceship in background', 'specific sign or symbol'],
    description: 'Important details are specific elements that must be visible in the image. These are the things you would point to and say "that needs to be there."',
  },
];

export function Section11() {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">
            Controlling Different Parts of an Image
          </h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-2">
          Now let's learn the specific visual prompt components that give you control over an image.
          These are the dimensions you can adjust independently. Click through each one to learn what
          it controls and see examples.
        </p>
      </div>

      <div className="section-card">
        <TabSwitcher
          tabs={components.map((c) => ({
            label: c.label,
            content: (
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-400 mb-1">
                    {c.question}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">{c.description}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {c.examples.map((ex) => (
                      <span
                        key={ex}
                        className="px-3 py-1.5 rounded-lg text-sm bg-ink-850/80 border border-white/10 text-gray-300"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ),
          }))}
        />
      </div>

      {/* Summary grid */}
      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-4">All Nine Components at a Glance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {components.map((c, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-ink-850/60 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-md bg-accent-600/20 text-accent-300 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-white">{c.label.replace(/^\d+\.\s/, '')}</p>
              </div>
              <p className="text-xs text-gray-500">{c.question}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mt-4">
          These nine components give you much more control over the generated image. You do not need to
          use all nine in every prompt — but knowing they exist means you can choose which ones matter
          for each image you create.
        </p>
      </div>

      <TeacherGuidance
        ask={[
          'Which of these nine components do you think you already used in the Mars dog prompt?',
          'Which component would you use to make an image feel scary? (Mood + Lighting)',
          'Can you think of a component we have not talked about yet that might be important?',
        ]}
        explain={[
          'These nine components map to the "E — Examples / Specific Details" part of GRACE.',
          'Not every prompt needs all nine. The skill is knowing which ones matter for the image you want.',
          'Style and lighting tend to have the biggest visual impact. Mood and composition affect how the image feels.',
        ]}
        watchFor={[
          'Michael might feel overwhelmed by nine components. Reassure: you do not need all nine every time.',
        ]}
        followUp={[
          'If you were generating an image for a comic, which components would matter most? (Subject, action, style, composition.)',
        ]}
      />
    </div>
  );
}
