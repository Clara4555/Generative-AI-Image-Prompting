export interface SectionMeta {
  id: number;
  title: string;
  shortLabel: string;
  icon: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: 1, title: 'From Learning About AI to Building With AI', shortLabel: 'Opening', icon: 'Rocket' },
  { id: 2, title: 'What Is Generative AI?', shortLabel: 'Generative AI', icon: 'Sparkles' },
  { id: 3, title: 'Generative AI vs Other AI Tasks', shortLabel: 'AI Comparison', icon: 'GitCompare' },
  { id: 4, title: 'What Is Image Generation?', shortLabel: 'Image Generation', icon: 'ImagePlus' },
  { id: 5, title: 'Why Your Description Matters', shortLabel: 'Prompts Matter', icon: 'MessageSquare' },
  { id: 6, title: 'Weak Prompt vs Strong Prompt', shortLabel: 'Weak vs Strong', icon: 'ArrowLeftRight' },
  { id: 7, title: 'GRACE for Image Generation', shortLabel: 'GRACE', icon: 'LayoutGrid' },
  { id: 8, title: 'Build a Prompt Step by Step', shortLabel: 'Prompt Builder', icon: 'Hammer' },
  { id: 9, title: 'First Mini Generation Challenge', shortLabel: 'Mars Dog Lab', icon: 'FlaskConical' },
  { id: 10, title: 'Prompt Detail Experiments', shortLabel: 'Experiments', icon: 'SlidersHorizontal' },
  { id: 11, title: 'Controlling Different Parts of an Image', shortLabel: 'Visual Components', icon: 'Layers' },
  { id: 12, title: 'Second Mini Challenge', shortLabel: 'Underwater Lab', icon: 'FlaskConical' },
  { id: 13, title: 'Third Mini Challenge: Creative Freedom', shortLabel: 'Creative Freedom', icon: 'Palette' },
  { id: 14, title: 'Generate → Evaluate → Improve', shortLabel: 'Iteration Cycle', icon: 'RefreshCw' },
  { id: 15, title: 'Important Limitations', shortLabel: 'Limitations', icon: 'AlertTriangle' },
  { id: 16, title: 'Connection to the Future Comic Project', shortLabel: 'Comic Preview', icon: 'BookOpen' },
  { id: 17, title: 'Knowledge Check', shortLabel: 'Knowledge Check', icon: 'ClipboardCheck' },
  { id: 18, title: 'The AI Creative Director Challenge', shortLabel: 'Final Challenge', icon: 'Trophy' },
  { id: 19, title: 'Reflection & Take-Home Assignment', shortLabel: 'Reflection', icon: 'NotebookPen' },
];
