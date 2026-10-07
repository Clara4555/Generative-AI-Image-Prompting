import { Palette, Crown, Sparkles } from 'lucide-react';
import { NotePad, ImageUploadField } from '@/components/NotePad';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

const reflectionItems = [
  'What was your original idea?',
  'Did the image match your idea?',
  'What surprised you?',
  'What would you change?',
  'Which part of your prompt mattered most?',
];

export function Section13() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [idea, setIdea] = useState('');

  const saveWork = async () => {
    try {
      await supabase.from('challenge_work').upsert({
        challenge_key: 'creative_freedom',
        prompt_text: prompt,
        evaluation_notes: idea,
        image_url: imageUrl,
      }, { onConflict: 'challenge_key' });
    } catch {
      // silent
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-900/20 via-ink-850 to-ink-900 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent-600/20 border border-accent-500/30 flex items-center justify-center">
            <Crown className="w-6 h-6 text-accent-400" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">Challenge 3 — Creative Freedom</p>
            <h2 className="text-xl font-display font-bold text-white">You Are Now the Creative Director</h2>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          This time, most of the scaffolding is removed. There is no pre-built builder. No preset choices.
          You decide everything.
        </p>
      </div>

      <div className="section-card">
        <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-5 mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-400 mb-2">Your Challenge</p>
          <p className="text-lg font-display text-white leading-snug mb-3">
            Create an image of: <span className="text-accent-300">"A place where something impossible is happening."</span>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            That is the entire prompt. The rest is up to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-5">
          <div className="rounded-xl border border-white/10 bg-ink-850/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">You Must Decide:</p>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>· Subject — who or what is in the image?</li>
              <li>· Setting — where does it happen?</li>
              <li>· Action — what is the "impossible" thing?</li>
              <li>· Style — how should it look?</li>
              <li>· Lighting — what kind of light?</li>
              <li>· Composition — how is it framed?</li>
              <li>· Mood — what should it feel like?</li>
              <li>· Important details — what must appear?</li>
            </ul>
          </div>
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400 mb-3">Then:</p>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li>· Write your own GRACE-inspired prompt</li>
              <li>· Generate the image in your real AI tool</li>
              <li>· Evaluate the result</li>
              <li>· Identify what you would improve</li>
            </ul>
          </div>
        </div>

        <NotePad
          label="Write your GRACE-inspired prompt here"
          placeholder="Goal: ... Role: ... Audience: ... Context: ... Specific details: ..."
          rows={5}
          onSave={setPrompt}
        />

        {prompt && (
          <div className="rounded-xl border border-accent-500/20 bg-ink-900/60 p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">Your Prompt</p>
              <CopyPromptButton promptText={prompt} />
            </div>
            <p className="text-sm text-gray-300 font-mono leading-relaxed">{prompt}</p>
          </div>
        )}

        <button
          onClick={saveWork}
          className="btn-primary mb-5"
        >
          Save My Work
        </button>

        <ImageUploadField label="Upload your generated image" onImageSaved={setImageUrl} />
      </div>

      {/* Reflection questions */}
      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-4">After Generating — Reflect</h3>
        <div className="space-y-3">
          {reflectionItems.map((item, i) => (
            <div key={i} className="rounded-lg border border-white/5 bg-ink-850/60 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-accent-400" />
                <p className="text-sm text-gray-300 font-medium">{item}</p>
              </div>
              <NotePad placeholder="Your answer..." rows={2} onSave={() => {}} />
            </div>
          ))}
        </div>
      </div>

      <TeacherGuidance
        ask={[
          'What is the "impossible" thing happening in your image?',
          'Walk me through your GRACE choices — why did you pick each one?',
          'Which part of your prompt mattered most to the final image?',
        ]}
        explain={[
          'This challenge tests independent application. Michael should be able to construct a prompt without scaffolding.',
          'The open-ended nature is intentional. There is no "right" answer — the skill is in the process.',
        ]}
        watchFor={[
          'Michael might freeze without structure. If so, ask: "What is the first thing you see in your mind?" Start from there.',
          'Michael might write a very short prompt. Ask him to identify which visual components he has not specified.',
        ]}
        followUp={[
          'If you had to describe this image to someone who cannot see it, what would you say? That description is basically a prompt.',
        ]}
      />
    </div>
  );
}
