import { BookOpen, ArrowDown, Lock, Sparkles } from 'lucide-react';
import { PipelineDiagram } from '@/components/Diagrams';
import { TeacherGuidance } from '@/components/TeacherGuidance';

const comicSteps = [
  { label: 'Idea', description: 'The story you want to tell' },
  { label: 'Characters', description: 'Who is in your story' },
  { label: 'Character Descriptions', description: 'Detailed descriptions for consistent generation' },
  { label: 'Story', description: 'The plot, scene by scene' },
  { label: 'Scenes', description: 'Breaking the story into visual moments' },
  { label: 'Image Prompts', description: 'GRACE-inspired prompts for each scene' },
  { label: 'Generated Images', description: 'AI produces visuals from your prompts' },
  { label: 'Evaluation', description: 'Check each image — does it match your vision?' },
  { label: 'Revision', description: 'Iterate: improve prompts, regenerate' },
  { label: 'Canva', description: 'Assemble everything into a comic layout' },
  { label: 'Dialogue + Speech Bubbles + Panels', description: 'Add text and structure' },
  { label: 'Final Comic', description: 'Your completed AI-assisted comic', highlight: true },
];

const comicElements = [
  'characters', 'environments', 'individual scenes', 'action moments', 'backgrounds',
];

export function Section16() {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-900/20 via-ink-850 to-ink-900 p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-accent-400" />
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-400">Coming Later</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-3">
            Build Your Own AI-Assisted Comic
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
            Everything you have practiced today will eventually become part of a larger project. But
            not today.
          </p>
        </div>
      </div>

      <div className="section-card">
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 mb-5">
          <p className="text-sm text-cyan-200/90 leading-relaxed">
            <strong className="text-white">We are NOT building the comic today.</strong>{' '}
            Today is about learning the skills that will make the comic possible. The comic project
            will use everything you learned here — GRACE, visual prompting, iteration, and evaluation —
            applied to a larger creative goal.
          </p>
        </div>

        <h3 className="text-lg font-display font-semibold text-white mb-4">The Comic Creation Pipeline</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-2">
          Here is what the future project will look like — from idea to finished comic:
        </p>
        <PipelineDiagram steps={comicSteps} />
      </div>

      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-4">What You Will Need to Generate</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          When the comic project begins, you will need to create images for:
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {comicElements.map((el) => (
            <span
              key={el}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-ink-850/80 border border-white/10 text-gray-300"
            >
              {el}
            </span>
          ))}
        </div>

        <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-5">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white mb-2">How today's lesson connects</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                GRACE and visual prompting will help you communicate what each image needs to look like.
                Iteration will help you improve images that do not match your vision. Evaluation will
                help you catch mistakes before they end up in your comic. Everything you practiced
                today is the foundation for the comic project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-xl border border-white/10 bg-ink-850/60 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Today</p>
            <p className="text-sm text-gray-300">Learn to generate and control individual images</p>
          </div>
          <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-4 text-center">
            <ArrowDown className="w-4 h-4 text-accent-400 mx-auto mb-1" />
            <p className="text-xs text-accent-300">Skills you build now</p>
          </div>
          <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-400 mb-2">Later</p>
            <p className="text-sm text-gray-300">Combine images into a visual story — your comic</p>
          </div>
        </div>
      </div>

      <TeacherGuidance
        ask={[
          'Now that you see the comic pipeline, which skill from today do you think will matter most for the comic?',
          'Which part of the comic pipeline feels most challenging to you?',
        ]}
        explain={[
          'Do not teach the comic project now. The purpose is motivation — Michael should see why today\'s skills matter.',
          'Character consistency is the biggest challenge for AI comics. Plant the seed but do not solve it yet.',
        ]}
        watchFor={[
          'Michael might want to start the comic now. Gently redirect: "We need to master individual images first. That\'s what today is about."',
        ]}
        followUp={[
          'What kind of comic would you want to create? Start thinking about it — we will get there soon.',
        ]}
      />
    </div>
  );
}
