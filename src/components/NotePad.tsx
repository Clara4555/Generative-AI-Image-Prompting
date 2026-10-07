import { useRef, useState } from 'react';
import { Plus, X } from 'lucide-react';

interface NotePadProps {
  challengeKey?: string;
  placeholder?: string;
  onSave?: (text: string) => void;
  rows?: number;
  label?: string;
}

export function NotePad({ challengeKey, placeholder, onSave, rows = 3, label = 'Your Notes' }: NotePadProps) {
  const [text, setText] = useState('');
  return (
    <div className="my-3">
      {label && <p className="text-xs font-medium text-gray-400 mb-2">{label}</p>}
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onSave?.(e.target.value);
        }}
        placeholder={placeholder || 'Write your thoughts here...'}
        className="w-full rounded-lg bg-ink-900/60 border border-white/10 px-3 py-2.5 text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-accent-500/40 resize-none"
        rows={rows}
      />
    </div>
  );
}

interface ImageUploadFieldProps {
  label: string;
  onImageSaved?: (url: string) => void;
}

export function ImageUploadField({ label, onImageSaved }: ImageUploadFieldProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);
      onImageSaved?.(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="my-3">
      <p className="text-xs font-medium text-gray-400 mb-2">{label}</p>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      {preview ? (
        <div className="relative rounded-xl overflow-hidden border border-white/10 group">
          <img src={preview} alt="Uploaded" className="w-full" />
          <button
            onClick={() => {
              setPreview(null);
              onImageSaved?.('');
            }}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-ink-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full min-h-[120px] rounded-xl border-2 border-dashed border-white/10 hover:border-accent-500/40 bg-ink-850/40 hover:bg-accent-500/5 transition-all flex flex-col items-center justify-center gap-2 p-4"
        >
          <Plus className="w-5 h-5 text-gray-500" />
          <span className="text-xs text-gray-500">Upload generated image</span>
        </button>
      )}
    </div>
  );
}
