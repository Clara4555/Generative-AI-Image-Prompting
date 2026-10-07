import { FlaskConical, ExternalLink, Upload } from 'lucide-react';
import { useState } from 'react';
import { CopyPromptButton } from '@/components/CopyPromptButton';
import { ImageDropzone } from '@/components/ImageDropzone';
import { EvaluationChecklist } from '@/components/ImageLab';
import { TeacherGuidance } from '@/components/TeacherGuidance';
import { supabase } from '@/lib/supabase';

const evalItems = [
  'What did the AI get right?',
  'What did it misunderstand?',
  'What details appeared that you did not expect?',
  'What details are missing?',
  'What would you change?',
];

export function Section9() {
  const [promptText, setPromptText] = useState(
    'Goal: An image of a dog exploring Mars. Role: Act as a cinematic science-fiction concept artist. Audience: a Grade 8 science magazine. Context: The dog is part of a future Mars exploration mission. Specific details: golden retriever, astronaut suit, rocky Mars surface, rover in the distance, realistic, cinematic lighting, wide shot. Create a high-quality image based on these instructions.'
  );
  const [imageUrl, setImageUrl] = useState('');
  const [notes, setNotes] = useState('');

  const saveWork = async () => {
    try {
      await supabase.from('challenge_work').upsert({
        challenge_key: 'mars_dog',
        prompt_text: promptText,
        evaluation_notes: notes,
        image_url: imageUrl,
      }, { onConflict: 'challenge_key' });
    } catch {
      // Silent fail
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-900/20 via-ink-850 to-ink-900 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent-600/20 border border-accent-500/30 flex items-center justify-center">
            <FlaskConical className="w-6 h-6 text-accent-400" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">AI Image Lab</p>
            <h2 className="text-xl font-display font-bold text-white">First Mini Generation Challenge</h2>
          </div>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          We've learned enough. Let's actually build something.
        </p>
      </div>

      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-3">Challenge: A Dog Exploring Mars</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          Use the prompt you built in the previous section. Copy it, paste it into your real AI image
          generator, and see what comes out.
        </p>

        {/* Prompt display with copy */}
        <div className="rounded-xl border border-accent-500/20 bg-ink-900/60 p-5 mb-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">Your Prompt</p>
            <CopyPromptButton promptText={promptText} />
          </div>
          <textarea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            className="w-full bg-transparent text-sm text-gray-300 font-mono leading-relaxed resize-none focus:outline-none"
            rows={4}
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-5">
          <a
            href="https://www.google.com/search?q=ai+image+generator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm transition-all duration-200 active:scale-95"
          >
            <ExternalLink className="w-4 h-4" />
            Open Image Generator
          </a>
          <button
            onClick={saveWork}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-sm transition-all duration-200 active:scale-95"
          >
            <Upload className="w-4 h-4" />
            Save My Work
          </button>
        </div>

        <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 mb-5">
          <p className="text-sm text-amber-300/90">
            <strong>Important:</strong> This website does not generate images. Use your real AI
            image-generation tool to create the image. Then come back here to evaluate it.
          </p>
        </div>

        {/* Image dropzone */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
            Paste Your Generated Image Here
          </p>
          <ImageDropzone challengeKey="mars_dog" onImageSaved={setImageUrl} />
        </div>
      </div>

      {/* Evaluation */}
      <div className="section-card">
        <h3 className="text-lg font-display font-semibold text-white mb-2">Look — Think — Explain</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          Now that you have generated an image, evaluate it. This is not about celebrating the output —
          it is about understanding it.
        </p>
        <EvaluationChecklist
          items={evalItems}
          challengeKey="mars_dog"
          onNotesChange={setNotes}
        />
      </div>

      <TeacherGuidance
        ask={[
          'What did the AI get right?',
          'What did it misunderstand?',
          'What details appeared that you did not expect?',
          'What details are missing from what you imagined?',
          'What would you change in your prompt?',
        ]}
        explain={[
          'This is the first real generation. The goal is not a perfect image — it is the experience of generating and evaluating.',
          'Evaluation is a skill. Michael should practice identifying specific strengths and weaknesses, not just saying "it looks good."',
        ]}
        watchFor={[
          'Michael might be impressed by the image and skip critical evaluation. Encourage specific observations.',
          'Michael might blame himself for imperfections. Redirect: the AI interprets your prompt; it does not copy your mind.',
        ]}
        followUp={[
          'If you could regenerate this image with one change to your prompt, what would you change?',
        ]}
      />
    </div>
  );
}
