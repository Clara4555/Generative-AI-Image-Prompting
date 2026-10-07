import { LayoutGrid, Target, User, Users, BookText, ListChecks } from 'lucide-react';
import { InfoCard } from '@/components/Diagrams';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

const graceLetters = [
  { letter: 'G', word: 'Goal', icon: <Target className="w-5 h-5" />, question: 'What do you want the AI to create?', color: 'accent' as const },
  { letter: 'R', word: 'Role', icon: <User className="w-5 h-5" />, question: 'What kind of expert or creative perspective should the AI use?', color: 'cyan' as const },
  { letter: 'A', word: 'Audience', icon: <Users className="w-5 h-5" />, question: 'Who is the image for?', color: 'accent' as const },
  { letter: 'C', word: 'Context', icon: <BookText className="w-5 h-5" />, question: 'What does the AI need to know about the situation?', color: 'cyan' as const },
  { letter: 'E', word: 'Examples / Specific Details', icon: <ListChecks className="w-5 h-5" />, question: 'What should the final result include?', color: 'accent' as const },
];

const visualDetails = [
  'subject', 'appearance', 'action', 'setting', 'composition',
  'style', 'lighting', 'mood', 'important details',
];

export function Section7() {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-900/25 via-ink-850 to-ink-900 p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <LayoutGrid className="w-5 h-5 text-accent-400" />
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-400">Major Section</span>
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-3">
            GRACE for Image Generation
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
            You already learned GRACE as a framework for communicating with AI. Now we're going to use
            GRACE to <strong className="text-white">build visual ideas</strong> — not just ask questions,
            but construct prompts that give an image generator the information it needs.
          </p>
        </div>
      </div>

      {/* GRACE letters */}
      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-5">The GRACE Framework</h2>
        <div className="space-y-3">
          {graceLetters.map((g) => (
            <div
              key={g.letter}
              className={`flex items-start gap-4 rounded-xl border p-4 ${
                g.color === 'accent'
                  ? 'border-accent-500/20 bg-accent-500/5'
                  : 'border-cyan-500/20 bg-cyan-500/5'
              }`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-display font-bold ${
                  g.color === 'accent'
                    ? 'bg-accent-600/20 text-accent-300 border border-accent-500/30'
                    : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                }`}
              >
                {g.letter}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {g.icon}
                  <p className={`text-sm font-semibold ${g.color === 'accent' ? 'text-accent-300' : 'text-cyan-300'}`}>
                    {g.word}
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{g.question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important note about not needing every component */}
      <div className="section-card">
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 mb-5">
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-amber-300">Important:</strong> Not every image prompt needs every
            GRACE component in exactly the same way. Some images may not need a role. Some may not need
            an explicit audience. GRACE is a <strong className="text-white">planning framework</strong> —
            it helps you think through what to include, not a rigid formula you must fill out every time.
          </p>
        </div>

        <h2 className="text-lg font-display font-semibold text-white mb-4">
          The Visual Details That Make a Prompt Useful
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          For image generation, the most important practical information often includes these visual
          dimensions. These are the details that fill in the "E — Examples / Specific Details" part of
          GRACE:
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {visualDetails.map((d, i) => (
            <span
              key={d}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-ink-850/80 border border-white/10 text-gray-300 hover:border-accent-500/30 hover:text-accent-300 transition-colors"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {d}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <InfoCard title="GRACE is the planning framework" accent="accent">
            It helps you think: What am I creating? Who is it for? What context does the AI need? It
            organizes your thinking before you write the actual prompt.
          </InfoCard>
          <InfoCard title="Visual details are the content" accent="cyan">
            Subject, appearance, action, setting, style, lighting, composition, mood — these are the
            specific pieces of information that make the prompt useful to the image generator.
          </InfoCard>
        </div>
      </div>

      <div className="section-card">
        <Disclosure
          label="How does GRACE for images differ from GRACE for text?"
          icon={<LayoutGrid className="w-4 h-4" />}
        >
          <div className="space-y-3 mt-3">
            <p className="text-sm text-gray-400 leading-relaxed">
              When you used GRACE for text generation (like asking an AI to write an explanation), your
              "specific details" were usually about content — what information to include, what tone to
              use, what structure to follow.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              For image generation, your "specific details" are <strong className="text-white">visual</strong> —
              what things look like, where they are, how they are lit, how the scene is framed. The
              framework is the same. The type of detail changes because the output is visual, not textual.
            </p>
          </div>
        </Disclosure>

        <TeacherGuidance
          ask={[
            'Can you remember what each letter of GRACE stands for?',
            'Which GRACE component do you think matters most for image generation?',
            'Do you think every image prompt needs all five GRACE components?',
          ]}
          explain={[
            'GRACE is the planning framework. The visual details (subject, style, lighting, etc.) are what make the prompt useful.',
            'Not every component is needed every time. GRACE helps you think, not fill out a form.',
            'The "E" component — specific details — is where most of the visual control comes from for images.',
          ]}
          watchFor={[
            'Michael might think GRACE is a rigid formula. Clarify: it is a planning tool, not a template you must complete.',
            'Michael might forget what a letter stands for. Quick review is fine — do not reteach from scratch.',
          ]}
          followUp={[
            'If you had to skip one GRACE component for an image prompt, which would you skip and why?',
          ]}
        />
      </div>
    </div>
  );
}
