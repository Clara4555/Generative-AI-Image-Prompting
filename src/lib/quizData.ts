export interface QuizQuestion {
  id: number;
  type: 'multiple-choice' | 'scenario' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Generative AI mean?',
    options: [
      'AI that sorts data into categories',
      'AI that predicts what will happen next',
      'AI that creates new content based on patterns it learned from training data',
      'AI that controls robots in factories',
    ],
    correctAnswer: 'AI that creates new content based on patterns it learned from training data',
    explanation:
      'Generative AI is designed to GENERATE new outputs — text, images, audio, music, or video — rather than just labeling or predicting. The key word is "generate": it produces something new.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What makes image generation different from classification?',
    options: [
      'Image generation is faster',
      'Classification assigns a category to existing data; image generation creates entirely new visual content',
      'Image generation uses more data',
      'Classification only works on text',
    ],
    correctAnswer:
      'Classification assigns a category to existing data; image generation creates entirely new visual content',
    explanation:
      'Classification answers "what is this?" by choosing a label. Image generation answers "can you create this?" by producing a brand-new image from a text description. One sorts, the other creates.',
  },
  {
    id: 3,
    type: 'scenario',
    question:
      'You type "Make a dog" into an image generator. Why might the result be unpredictable?',
    options: [
      'Because AI cannot generate dogs',
      'Because "dog" leaves breed, colour, pose, setting, style, lighting, and mood completely open',
      'Because the AI is broken',
      'Because dogs are too complex for AI',
    ],
    correctAnswer:
      'Because "dog" leaves breed, colour, pose, setting, style, lighting, and mood completely open',
    explanation:
      'A single word tells the AI the subject but nothing about what the subject should look like, where it should be, or how the image should feel. The AI fills in all those gaps with its own choices — which may not match what you imagined.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the purpose of a prompt?',
    options: [
      'To make the AI run faster',
      'To communicate your idea clearly enough that the AI can produce a result close to what you want',
      'To test whether the AI is working',
      'To give the AI a password',
    ],
    correctAnswer:
      'To communicate your idea clearly enough that the AI can produce a result close to what you want',
    explanation:
      'A prompt is your instructions to the AI. The AI only knows what you tell it through the prompt — it cannot read your mind. A clear, specific prompt gives the AI the information it needs to match your vision.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does the G in GRACE represent?',
    options: ['Generate', 'Goal', 'Graphics', 'Gradient'],
    correctAnswer: 'Goal',
    explanation:
      'G stands for Goal — "What do you want the AI to create?" Every good prompt starts with a clear goal. The rest of GRACE (Role, Audience, Context, Examples/Specific Details) helps you build toward that goal.',
  },
  {
    id: 6,
    type: 'scenario',
    question:
      'You want an image for a children\'s science magazine. Why does context matter when generating the image?',
    options: [
      'It does not matter — the AI decides everything',
      'Context tells the AI about the situation, which helps it choose appropriate content, tone, and visual style for the audience',
      'Context only matters for text generation',
      'Context makes the image more colourful',
    ],
    correctAnswer:
      'Context tells the AI about the situation, which helps it choose appropriate content, tone, and visual style for the audience',
    explanation:
      'Context gives the AI background information about your situation — who the image is for, what it will be used for, what tone is appropriate. Without context, the AI guesses, and its guess may not fit your needs.',
  },
  {
    id: 7,
    type: 'scenario',
    question:
      'Which prompt gives an image generator more control and why?\n\nA: "A city"\nB: "A futuristic city at night with elevated trains, glass skyscrapers, holographic advertisements, and flying vehicles, cinematic lighting, viewed from street level"',
    options: [
      'A — because it is shorter and simpler',
      'B — because it provides relevant detail about subject, setting, style, lighting, and composition',
      'They are equal — the AI figures it out either way',
      'A — because fewer words always produce better images',
    ],
    correctAnswer:
      'B — because it provides relevant detail about subject, setting, style, lighting, and composition',
    explanation:
      'Prompt B does not just add random words. Each detail controls a specific visual dimension — what is in the scene, when it happens, what style to use, how it is lit, and how it is framed. That is relevant detail, not just length.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why is the first generated image not necessarily the final image?',
    options: [
      'Because AI images always expire',
      'Because generating an image is an iterative process: you generate, evaluate, identify problems, improve the prompt, and generate again',
      'Because the AI changes its mind',
      'Because you can only generate one image at a time',
    ],
    correctAnswer:
      'Because generating an image is an iterative process: you generate, evaluate, identify problems, improve the prompt, and generate again',
    explanation:
      'Image generation is a cycle: GENERATE → EVALUATE → IDENTIFY PROBLEMS → IMPROVE PROMPT → GENERATE AGAIN. Your first result is a starting point, not the finish line. The skill is in the iteration.',
  },
  {
    id: 9,
    type: 'short-answer',
    question:
      'What should you do if the generated image does not match your idea?',
    correctAnswer:
      'evaluate',
    explanation:
      'Identify specifically what is wrong or missing, then revise your prompt to address those problems and generate again. The cycle is: evaluate → identify problems → improve the prompt → generate again. You are the creative director who iterates until the result matches your vision.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'Who is the creative decision-maker in an AI-assisted project?',
    options: [
      'The AI — it generates the content',
      'The human — the AI is a tool; the human decides what to create, evaluates results, and improves instructions',
      'The tutor — they approve every image',
      'Both equally — the AI and human share creative control',
    ],
    correctAnswer:
      'The human — the AI is a tool; the human decides what to create, evaluates results, and improves instructions',
    explanation:
      'The AI is a production tool, not the creative director. You decide what to create, you evaluate whether the result matches your idea, and you improve the instructions. The AI executes — you direct.',
  },
];
