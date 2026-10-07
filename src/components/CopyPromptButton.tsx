import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface CopyPromptButtonProps {
  promptText: string;
}

export function CopyPromptButton({ promptText }: CopyPromptButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = promptText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 active:scale-95 ${
        copied
          ? 'bg-success-500/20 text-success-400 border border-success-500/30'
          : 'bg-accent-600 hover:bg-accent-500 text-white'
      }`}
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      {copied ? 'Copied!' : 'Copy Prompt'}
    </button>
  );
}
