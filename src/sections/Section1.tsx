import { Rocket, ArrowDown, Brain, MessageSquare, Sparkles, Wand2 } from 'lucide-react';
import { PipelineDiagram, InfoCard } from '@/components/Diagrams';
import { PredictReveal } from '@/components/PredictReveal';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { Disclosure } from '@/components/Disclosure';

export function Section1() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/20 bg-gradient-to-br from-accent-900/20 via-ink-850 to-ink-900 p-8 md:p-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="tag bg-accent-500/15 text-accent-300 border border-accent-500/20">
              <Sparkles className="w-3 h-3" /> New Phase
            </span>
            <span className="text-xs text-gray-500">Student: Michael Oge · Grade 8 · Tutor: Favour Momodu</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-3">
            You've Learned How AI Works.
            <br />
            <span className="gradient-text">Now Let's Build With It.</span>
          </h1>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
            Until now, you've been studying AI as a technology — how it learns, what models are, and
            how to communicate with it effectively. Today, the question changes from "how does AI work?"
            to "what can <em className="text-accent-300 not-italic font-medium">you</em> actually create with AI?"
          </p>
        </div>
      </div>

      {/* Core Question */}
      <div className="relative rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 md:p-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Core Learning Question
          </p>
          <p className="text-xl md:text-2xl font-display text-white leading-snug max-w-3xl mx-auto">
            "If AI can generate almost anything I can describe, how do I communicate my idea
            <span className="text-cyan-300"> clearly enough</span> to get the result I
            <span className="text-cyan-300"> actually want</span>?"
          </p>
        </div>
      </div>

      {/* Progression Diagram */}
      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-2">Your Learning Journey So Far</h2>
        <p className="text-sm text-gray-400 mb-4">
          You've already completed the first three stages. Today you enter the fourth.
        </p>
        <PipelineDiagram
          steps={[
            { label: 'Learn About AI', description: 'What AI is and how it works' },
            { label: 'Understand AI', description: 'Models, training data, behavior, evaluation' },
            { label: 'Communicate With AI', description: 'Prompting, GRACE, structured prompts' },
            { label: 'Build With AI', description: 'Use AI as a creative production tool', highlight: true },
          ]}
        />
      </div>

      {/* Transition explanation */}
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <Wand2 className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">A New Kind of Question</h2>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          In previous lessons, you asked AI questions and studied its answers. You learned how to
          communicate with it using the GRACE framework and structured prompting.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          Generative AI lets you do something different. Instead of only <em>asking</em> AI for
          information, you can use AI as a <strong className="text-white">creative and production tool</strong> —
          to generate images, stories, music, and more. You move from being a student of AI to being a
          <strong className="text-accent-300"> director</strong> who uses AI to build things.
        </p>

        <div className="my-4">
          <PredictReveal
            question="What do you think 'building with AI' means?"
            hint="Take a moment to think before revealing."
            answer={
              <p>
                Building with AI means using AI as a tool to <strong className="text-white">produce</strong> something —
                an image, a story, a piece of music — rather than just asking it questions. You are the
                creative director. You decide what to make, you give the instructions, you evaluate the
                result, and you improve until it matches your vision.
              </p>
            }
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3 mt-5">
          <InfoCard title="You are the decision-maker">
            AI is a powerful tool, but it does not replace your imagination or your judgment.
            <strong className="text-white"> You</strong> decide what to create. AI helps you produce it.
          </InfoCard>
          <InfoCard title="AI is the production tool" accent="cyan">
            Think of AI like a very fast, very capable assistant. It can create almost anything you
            describe — but it needs <strong className="text-white">clear instructions</strong> from you.
          </InfoCard>
        </div>
      </div>

      {/* Discussion Questions */}
      <div className="section-card">
        <h2 className="text-lg font-display font-semibold text-white mb-4">Discussion Questions</h2>
        <p className="text-sm text-gray-500 mb-4">
          Favour will ask these questions. Think about your answer before the explanation is revealed.
        </p>
        <div className="space-y-3">
          <PredictReveal
            question="Does building with AI mean AI does everything for you?"
            answer={
              <p>No. AI is the tool, not the director. You decide what to create, you write the instructions (prompts), you evaluate the result, and you decide what to change. AI executes — you direct.</p>
            }
          />
          <PredictReveal
            question="Who should make the creative decisions: the human or the AI?"
            answer={
              <p>The human. AI can generate options, but the creative decisions — what to make, whether it's good enough, what to change — belong to you. You are the creative director.</p>
            }
          />
          <PredictReveal
            question="What would happen if you had a great idea but explained it badly to an AI?"
            answer={
              <p>The AI would produce something — but it probably wouldn't match your idea. AI only receives the information you give it through the prompt. A great idea with a vague description often produces a disappointing result. This is why <strong className="text-white">how you communicate</strong> matters as much as <strong className="text-white">what you imagine</strong>.</p>
            }
          />
        </div>

        <TeacherGuidance
          ask={[
            'What do you think "building with AI" means?',
            'Does building with AI mean AI does everything for you?',
            'Who should make the creative decisions: the human or the AI?',
            'What would happen if you had a great idea but explained it badly to an AI?',
          ]}
          explain={[
            'Emphasize the shift from studying AI to using AI as a creative production tool.',
            'The human is always the creative director. AI is the production tool.',
            'A great idea communicated poorly will produce a poor result — this is the bridge to why prompting matters.',
          ]}
          watchFor={[
            'Michael might think AI "knows what he means" — correct this early. AI only has the prompt.',
            'Michael might think more words = better prompt — introduce the idea of relevant detail vs. just length.',
          ]}
          followUp={[
            'Can you think of a situation where someone has a great idea but struggles to explain it? What happens?',
          ]}
        />
      </div>
    </div>
  );
}
