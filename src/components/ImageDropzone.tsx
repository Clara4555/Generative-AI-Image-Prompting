import { Upload, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { useRef, useState } from 'react';

interface ImageDropzoneProps {
  challengeKey: string;
  onImageSaved?: (url: string) => void;
}

export function ImageDropzone({ challengeKey, onImageSaved }: ImageDropzoneProps) {
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

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) handleFile(file);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="relative"
    >
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
        <div className="relative rounded-xl overflow-hidden border border-accent-500/30 group">
          <img src={preview} alt={`Generated result for ${challengeKey}`} className="w-full" />
          <button
            onClick={() => {
              setPreview(null);
              onImageSaved?.('');
            }}
            className="absolute top-2 right-2 px-3 py-1.5 rounded-lg bg-ink-900/80 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Replace
          </button>
        </div>
      ) : (
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full min-h-[200px] rounded-xl border-2 border-dashed border-white/10 hover:border-accent-500/40 bg-ink-850/40 hover:bg-accent-500/5 transition-all duration-200 flex flex-col items-center justify-center gap-3 p-6"
        >
          <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-accent-400" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-300 font-medium">Paste or upload your generated image here</p>
            <p className="text-xs text-gray-500 mt-1">Drag and drop, or click to browse</p>
          </div>
        </button>
      )}
      <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
        <ExternalLink className="w-3.5 h-3.5" />
        <span>
          Generate the image in your real AI image tool first, then drag the result here for discussion.
        </span>
      </div>
    </div>
  );
}
