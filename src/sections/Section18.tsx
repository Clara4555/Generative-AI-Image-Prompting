import { Trophy, ExternalLink, Target, Eye, Edit3, Upload } from 'lucide-react';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { NotePad, ImageUploadField } from '@/components/NotePad';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

const requirements = [
  'A clear subject',
  'An interesting setting',
  'An action — something is happening',
  'A visual style',
  'A mood',
  'At least three specific details',
];

const steps = [
  { icon: <Target className="w-4 h-4" />, label: 'Plan the idea', desc: 'Decide what your image will show' },
  { icon: <Edit3 className="w-4 h-4" />, label: 'Write a GRACE-inspired prompt', desc: 'Use GRACE and visual components' },
  { icon: <ExternalLink className="w-4 h-4" />, label: 'Generate the image', desc: 'Use your real AI image tool' },
  { icon: <Eye className="w-4 h-4" />, label: 'Evaluate the result', desc: 'Does it match your idea?' },
  { icon: <Upload className="w-4 h-4" />, label: 'Identify one thing to improve', desc: 'What would you change next?' },
];

export function Section18() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [improvement, setImprovement] = useState('');

  const saveWork = async () => {
    try {
      await supabase.from('challenge_work').upsert({
        challenge_key: 'final_challenge',
        prompt_text: prompt,
        improvement_note: improvement,
        image_url: imageUrl,
      }, { onConflict: 'challenge_key' });
    } catch {
      // silent
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-900/25 via-ink-850 to-ink-900 p-8">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500/12 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent-600/25 border border-accent-500/40 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-accent-300" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">Final Challenge</p>
              <h2 className="text-2xl font-display font-bold text-white">The AI Creative Director Challenge</h2>
            </div>
          </div>
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
            Create an image that would make someone stop scrolling and ask:{' '}
            <span className="text-accent-300 italic">"What is happening here?"</span>
          </p>
        </div>
      </div>

      <div className="section-card">
        <h3 className="text-sm font-semibold text-accent-300 mb-4">Your Image Must Include</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
          {requirements.map((r, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-white/5 bg-ink-850/60 px-3 py-2.5">
              <span className="w-5 h-5 rounded-md bg-accent-600/20 text-accent-300 text-xs font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-sm text-gray-300">{r}</span>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-semibold text-cyan-300 mb-4">Your Process</h3>
        <div className="space-y-2 mb-5">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-white/5 bg-ink-850/60 px-4 py-3">
              <span className="text-cyan-400 flex-shrink-0">{s.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-200">{s.label}</p>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 mb-5">
          <p className="text-sm text-amber-300/90">
            <strong>No final prompt is provided for you.</strong> This challenge is to see whether you
            can independently apply everything you learned. Think carefully — you are the creative
            director.
          </p>
        </div>
      </div>

      {/* Workspace */}
      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-4">Your Creative Director Workspace</h3>

        <NotePad
          label="Write your GRACE-inspired prompt"
          placeholder="Goal: ... Role: ... Audience: ... Context: ... Specific details: ..."
          rows={6}
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

        <button onClick={saveWork} className="btn-primary mb-5">Save My Work</button>

        <ImageUploadField label="Upload your generated image" onImageSaved={setImageUrl} />

        <NotePad
          label="One thing you would improve"
          placeholder="What would you change in your prompt or your approach next time?"
          rows={3}
          onSave={setImprovement}
        />
      </div>

      <TeacherGuidance
        ask={[
          'Walk me through your GRACE choices for this image.',
          'Why did you choose this subject and setting?',
          'What are your three specific details?',
          'Did the image make someone want to ask "what is happening here"? Did it achieve your goal?',
        ]}
        explain={[
          'This is the culminating challenge. Michael should demonstrate independent application of GRACE, visual components, and iteration.',
          'Do not provide the prompt. The purpose is to see if he can do it alone.',
          'Evaluate not just the image but the process: did he plan, prompt, generate, evaluate, and identify an improvement?',
        ]}
        watchFor={[
          'Michael might skip GRACE and write a casual prompt. Remind him: use the framework you learned.',
          'Michael might forget to include one of the six required elements. Check his prompt against the requirements.',
        ]}
        followUp={[
          'If you had to turn this single image into the first panel of a comic, what would happen in the next panel?',
        ]}
      />
    </div>
  );
}
