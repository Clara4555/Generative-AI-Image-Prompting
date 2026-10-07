import { useState } from 'react';
import { Brain, Lightbulb, NotebookPen, ArrowRight, Sparkles, Upload, Repeat } from 'lucide-react';
import { NotePad, ImageUploadField } from '@/components/NotePad';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { PipelineDiagram } from '@/components/Diagrams';
import { supabase } from '@/lib/supabase';

const reflectionQuestions = [
  { key: 'q1', question: 'What is the biggest difference between asking AI a question and building something with AI?' },
  { key: 'q2', question: 'Why does prompting matter?' },
  { key: 'q3', question: 'Which image-generation detail gave you the most control?' },
  { key: 'q4', question: 'What did the AI do that you did not expect?' },
  { key: 'q5', question: 'What would you do differently in your next prompt?' },
];

const sentenceStarters = [
  {
    key: 's1',
    start: 'I used to think image generation was',
    end: 'but now I understand that',
    placeholder: '_______',
  },
  {
    key: 's2',
    start: 'A good image prompt is not just',
    end: 'it is',
    placeholder: '_______',
  },
];

const assignmentCategories = [
  {
    num: 1,
    title: 'Realistic',
    desc: 'A realistic animal, person, place, or object in an unusual environment.',
    example: 'Example: A realistic tiger sitting in a modern library.',
    color: 'cyan',
  },
  {
    num: 2,
    title: 'Fantasy / Science Fiction',
    desc: 'Create something impossible or futuristic.',
    example: 'Example: A floating city above a storm-covered ocean.',
    color: 'accent',
  },
  {
    num: 3,
    title: 'Completely Original',
    desc: 'You choose the concept. Anything you can imagine.',
    example: 'Example: Whatever inspires you — this is your idea.',
    color: 'amber',
  },
];

export function Section19() {
  const [reflections, setReflections] = useState<Record<string, string>>({});
  const [sentences, setSentences] = useState<Record<string, string>>({});

  const saveReflection = async (key: string, text: string) => {
    try {
      await supabase.from('reflection_answers').insert({
        prompt_key: key,
        answer_text: text,
      });
    } catch {
      // silent
    }
  };

  return (
    <div className="space-y-6">
      {/* Reflection */}
      <div className="section-card">
        <div className="flex items-center gap-2 mb-4">
          <NotebookPen className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-display font-semibold text-white">Reflection</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          Take a moment to think about what you learned today. Write your honest reflections — there
          are no wrong answers here.
        </p>

        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-4 h-4 text-cyan-400" />
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400">Think</p>
        </div>
        <div className="space-y-3 mb-6">
          {reflectionQuestions.map((rq) => (
            <div key={rq.key} className="rounded-lg border border-white/5 bg-ink-850/60 p-4">
              <p className="text-sm text-gray-300 font-medium mb-2">{rq.question}</p>
              <NotePad
                challengeKey={rq.key}
                placeholder="Your reflection..."
                rows={2}
                label=""
                onSave={(text) => {
                  setReflections((prev) => ({ ...prev, [rq.key]: text }));
                  saveReflection(rq.key, text);
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">Complete the Sentence</p>
        </div>
        <div className="space-y-4">
          {sentenceStarters.map((s) => (
            <div key={s.key} className="rounded-lg border border-amber-500/15 bg-amber-500/5 p-4">
              <p className="text-sm text-gray-300 leading-relaxed mb-2">
                <span className="text-amber-300">{s.start}</span>{' '}
                <input
                  type="text"
                  value={sentences[s.key] || ''}
                  onChange={(e) => {
                    setSentences((prev) => ({ ...prev, [s.key]: e.target.value }));
                  }}
                  onBlur={() => sentences[s.key] && saveReflection(s.key, sentences[s.key])}
                  placeholder={s.placeholder}
                  className="inline-block bg-ink-900/60 border-b border-amber-500/30 px-2 py-0.5 text-gray-200 focus:outline-none focus:border-amber-400 min-w-[120px]"
                />
                {' '}
                <span className="text-amber-300">{s.end}</span>{' '}
                <input
                  type="text"
                  value={sentences[s.key + '_end'] || ''}
                  onChange={(e) => {
                    setSentences((prev) => ({ ...prev, [s.key + '_end']: e.target.value }));
                  }}
                  onBlur={() => sentences[s.key + '_end'] && saveReflection(s.key + '_end', sentences[s.key + '_end'])}
                  placeholder={s.placeholder}
                  className="inline-block bg-ink-900/60 border-b border-amber-500/30 px-2 py-0.5 text-gray-200 focus:outline-none focus:border-amber-400 min-w-[120px]"
                />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Take-Home Assignment */}
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-900/20 via-ink-850 to-ink-900 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent-600/20 border border-accent-500/30 flex items-center justify-center">
            <Repeat className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">Take-Home Assignment</p>
            <h2 className="text-xl font-display font-bold text-white">Prompt → Create → Improve</h2>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-3">
          Create <strong className="text-white">three</strong> different AI-generated images. They
          should <strong className="text-white">not</strong> be comic images yet.
        </p>
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <p className="text-sm text-amber-300/90">
            <strong>The goal is NOT to make three nice pictures.</strong> The goal is to show that you
            can communicate an idea, evaluate the AI's output, and improve your instructions.
          </p>
        </div>
      </div>

      {/* Three assignment cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {assignmentCategories.map((cat) => (
          <div
            key={cat.num}
            className={`rounded-2xl border p-5 ${
              cat.color === 'cyan'
                ? 'border-cyan-500/20 bg-cyan-500/5'
                : cat.color === 'accent'
                ? 'border-accent-500/20 bg-accent-500/5'
                : 'border-amber-500/20 bg-amber-500/5'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                  cat.color === 'cyan'
                    ? 'bg-cyan-500/20 text-cyan-300'
                    : cat.color === 'accent'
                    ? 'bg-accent-600/20 text-accent-300'
                    : 'bg-amber-500/20 text-amber-300'
                }`}
              >
                {cat.num}
              </span>
              <p className="text-sm font-semibold text-white">{cat.title}</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">{cat.desc}</p>
            <p className="text-xs text-gray-600 italic">{cat.example}</p>
          </div>
        ))}
      </div>

      {/* Submission template */}
      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-2">For Each Image, Submit</h3>
        <p className="text-sm text-gray-500 mb-5">
          Use this template for each of the three images. The purpose is to show your{' '}
          <strong className="text-white">iteration process</strong>, not just the final result.
        </p>

        <PipelineDiagram
          steps={[
            { label: 'First idea', description: 'What you imagined' },
            { label: 'GRACE-inspired prompt', description: 'Your initial prompt' },
            { label: 'Generated image (version 1)', description: 'Paste or upload', highlight: true },
            { label: 'One thing the AI did well', description: 'What worked' },
            { label: 'One thing to improve', description: 'What did not match' },
            { label: 'Revised prompt', description: 'Your improved prompt' },
            { label: 'Improved image (version 2)', description: 'The result after iteration', highlight: true },
          ]}
        />

        <p className="text-sm text-gray-400 leading-relaxed mt-4">
          You will submit all of this for each of the three images. Your tutor, Favour, will review
          your process — not just your pictures.
        </p>
      </div>

      {/* Interactive submission workspace */}
      <div className="section-card">
        <h3 className="text-sm font-semibold text-accent-300 mb-4">Submission Workspace</h3>
        <p className="text-xs text-gray-500 mb-5">
          You can use this workspace to draft your submissions. Your work saves automatically.
        </p>
        <div className="space-y-6">
          {assignmentCategories.map((cat) => (
            <AssignmentWorkspace key={cat.num} category={cat} />
          ))}
        </div>
      </div>

      {/* Future project teaser */}
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/20 bg-gradient-to-br from-accent-900/15 to-ink-900 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-400 mb-3">Next Phase</p>
        <p className="text-lg font-display text-white leading-snug mb-4">
          "Soon, you'll stop making individual AI images and start connecting them together into a
          <span className="text-accent-300"> visual story</span>."
        </p>
        <div className="rounded-xl border border-white/10 bg-ink-850/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Your Future Project</p>
          <p className="text-sm text-gray-300 leading-relaxed mb-3">
            Create an AI-assisted comic and assemble it in Canva.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['story development', 'character design', 'character consistency', 'scene generation', 'visual storytelling', 'dialogue', 'speech bubbles', 'comic panels', 'Canva layout', 'prompt iteration', 'image evaluation'].map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-white/5 text-gray-400 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Final message */}
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/15 via-ink-900 to-ink-950 p-8 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative">
          <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-display text-white leading-snug max-w-2xl mx-auto mb-6">
            "Generative AI doesn't replace your imagination. It gives you a way to turn your ideas into
            something you can <span className="text-cyan-300">see</span>,{' '}
            <span className="text-cyan-300">test</span>,{' '}
            <span className="text-cyan-300">change</span>, and{' '}
            <span className="text-cyan-300">build</span>."
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-0">
              {['Your Idea', 'Your Prompt', 'AI Generates', 'You Evaluate', 'You Improve', 'You Build'].map((step, i, arr) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`rounded-xl px-5 py-3 border ${
                      i === arr.length - 1
                        ? 'bg-accent-600/20 border-accent-500/40 text-white'
                        : 'bg-ink-850/60 border-white/5 text-gray-300'
                    }`}
                  >
                    <p className="text-sm font-display font-medium">{step}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-accent-500/40 rotate-90 my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TeacherGuidance
        ask={[
          'What was the most surprising thing you learned today?',
          'What do you want to practice more before the comic project?',
          'Are you excited about the comic? What kind of story might you want to tell?',
        ]}
        explain={[
          'The take-home assignment is about iteration, not just producing images. Make sure Michael understands he needs to show the full process for each image.',
          'The sentence completion exercises help Michael articulate his mental shift from "AI does magic" to "I direct the AI."',
        ]}
        watchFor={[
          'Michael might rush through the reflection. Encourage honest, specific answers.',
          'Michael might try to submit three images without showing the iteration process. Remind him: the process is what is being evaluated.',
        ]}
        followUp={[
          'Between now and next class, try generating images for your assignment. Bring your prompts and both versions of each image.',
        ]}
      />
    </div>
  );
}

function AssignmentWorkspace({ category }: { category: { num: number; title: string; desc: string; color: string } }) {
  const [data, setData] = useState({
    firstIdea: '',
    initialPrompt: '',
    aiDidWell: '',
    aiGotWrong: '',
    revisedPrompt: '',
  });
  const [v1Image, setV1Image] = useState('');
  const [v2Image, setV2Image] = useState('');

  const save = async (field: string, value: string) => {
    try {
      await supabase.from('takehome_assignments').upsert({
        image_number: category.num,
        category: category.title.toLowerCase(),
        [field]: value,
      }, { onConflict: 'image_number' });
    } catch {
      // silent
    }
  };

  const colorClass = category.color === 'cyan' ? 'text-cyan-400' : category.color === 'accent' ? 'text-accent-400' : 'text-amber-400';

  return (
    <div className="rounded-xl border border-white/10 bg-ink-850/40 p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-sm font-bold ${colorClass}`}>Image {category.num}</span>
        <span className="text-gray-600">·</span>
        <span className="text-sm font-medium text-gray-300">{category.title}</span>
      </div>

      <div className="space-y-3">
        <NotePad
          challengeKey={`takehome_${category.num}`}
          label="First idea"
          placeholder="What did you imagine?"
          rows={2}
          onSave={(v) => { setData((p) => ({ ...p, firstIdea: v })); save('first_idea', v); }}
        />
        <NotePad
          challengeKey={`takehome_${category.num}`}
          label="GRACE-inspired prompt (version 1)"
          placeholder="Goal: ... Role: ... Context: ... Details: ..."
          rows={3}
          onSave={(v) => { setData((p) => ({ ...p, initialPrompt: v })); save('initial_prompt', v); }}
        />
        <ImageUploadField
          label="Generated image (version 1)"
          onImageSaved={setV1Image}
        />
        <NotePad
          challengeKey={`takehome_${category.num}`}
          label="One thing the AI did well"
          placeholder="What worked?"
          rows={1}
          onSave={(v) => { setData((p) => ({ ...p, aiDidWell: v })); save('ai_did_well', v); }}
        />
        <NotePad
          challengeKey={`takehome_${category.num}`}
          label="One thing the AI got wrong or could improve"
          placeholder="What did not match your idea?"
          rows={1}
          onSave={(v) => { setData((p) => ({ ...p, aiGotWrong: v })); save('ai_got_wrong', v); }}
        />
        <NotePad
          challengeKey={`takehome_${category.num}`}
          label="Revised prompt (version 2)"
          placeholder="Your improved prompt after evaluation..."
          rows={3}
          onSave={(v) => { setData((p) => ({ ...p, revisedPrompt: v })); save('revised_prompt', v); }}
        />
        <ImageUploadField
          label="Improved image (version 2)"
          onImageSaved={setV2Image}
        />
      </div>
    </div>
  );
}
