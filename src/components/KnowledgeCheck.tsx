import { useState } from 'react';
import { Check, X, ClipboardCheck, RotateCcw } from 'lucide-react';
import { quizQuestions, type QuizQuestion } from '@/lib/quizData';
import { supabase } from '@/lib/supabase';

export function KnowledgeCheck() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<number, boolean | null>>({});
  const [shortAnswers, setShortAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<Set<number>>(new Set());

  const handleSelect = (qid: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: answer }));
  };

  const handleSubmit = async (q: QuizQuestion) => {
    const selected = q.type === 'short-answer' ? shortAnswers[q.id] || '' : answers[q.id] || '';
    if (!selected.trim()) return;

    let isCorrect = false;
    if (q.type === 'short-answer') {
      isCorrect = selected.toLowerCase().includes('evaluat') || selected.toLowerCase().includes('improv') || selected.toLowerCase().includes('prompt') && selected.toLowerCase().includes('chang') || selected.toLowerCase().includes('revis');
    } else {
      isCorrect = selected === q.correctAnswer;
    }

    setResults((prev) => ({ ...prev, [q.id]: isCorrect }));
    setSubmitted((prev) => new Set(prev).add(q.id));

    try {
      await supabase.from('quiz_answers').insert({
        question_id: q.id,
        selected_answer: selected,
        is_correct: isCorrect,
      });
    } catch {
      // Silent fail — quiz still works locally
    }
  };

  const handleReset = (qid: number) => {
    setResults((prev) => {
      const next = { ...prev };
      delete next[qid];
      return next;
    });
    setSubmitted((prev) => {
      const next = new Set(prev);
      next.delete(qid);
      return next;
    });
  };

  const correctCount = Object.values(results).filter((v) => v === true).length;
  const totalAnswered = submitted.size;

  return (
    <div className="space-y-6">
      {/* Score Banner */}
      {totalAnswered > 0 && (
        <div className="glass rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-600/20 flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Knowledge Check Progress</p>
              <p className="text-xs text-gray-500">{totalAnswered} of {quizQuestions.length} answered</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-display font-bold text-white">{correctCount}<span className="text-gray-600 text-base">/{totalAnswered}</span></p>
            <p className="text-xs text-success-400">correct so far</p>
          </div>
        </div>
      )}

      {quizQuestions.map((q, idx) => {
        const result = results[q.id];
        const isSubmitted = submitted.has(q.id);

        return (
          <div
            key={q.id}
            className={`glass rounded-2xl p-5 transition-all duration-300 ${
              result === true
                ? 'border-success-500/30'
                : result === false
                ? 'border-error-500/30'
                : ''
            }`}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 text-gray-400 text-xs font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <div className="flex-1">
                <span className="text-xs font-medium text-accent-400 uppercase tracking-wide">
                  {q.type === 'short-answer' ? 'Short Answer' : q.type === 'scenario' ? 'Scenario' : 'Multiple Choice'}
                </span>
                <p className="text-sm text-gray-200 leading-relaxed mt-1 whitespace-pre-line">{q.question}</p>
              </div>
            </div>

            {q.type === 'short-answer' ? (
              <div className="space-y-3">
                <textarea
                  value={shortAnswers[q.id] || ''}
                  onChange={(e) => setShortAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                  disabled={isSubmitted}
                  placeholder="Type your answer here..."
                  className="w-full rounded-lg bg-ink-900/60 border border-white/10 px-3 py-2.5 text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-accent-500/40 resize-none disabled:opacity-50"
                  rows={2}
                />
                {!isSubmitted ? (
                  <button
                    onClick={() => handleSubmit(q)}
                    disabled={!shortAnswers[q.id]?.trim()}
                    className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <FeedbackBlock result={result} explanation={q.explanation} onReset={() => handleReset(q.id)} />
                )}
              </div>
            ) : (
              <div className="space-y-2">
                {q.options?.map((opt) => {
                  const isSelected = answers[q.id] === opt;
                  const isCorrectOpt = opt === q.correctAnswer;
                  const showCorrect = isSubmitted && isCorrectOpt;
                  const showWrong = isSubmitted && isSelected && !isCorrectOpt;

                  return (
                    <button
                      key={opt}
                      onClick={() => !isSubmitted && handleSelect(q.id, opt)}
                      disabled={isSubmitted}
                      className={`w-full text-left rounded-lg px-4 py-3 text-sm transition-all duration-200 border ${
                        showCorrect
                          ? 'bg-success-500/10 border-success-500/40 text-success-300'
                          : showWrong
                          ? 'bg-error-500/10 border-error-500/40 text-error-300'
                          : isSelected
                          ? 'bg-accent-600/15 border-accent-500/40 text-white'
                          : 'bg-ink-900/40 border-white/5 text-gray-400 hover:bg-white/5 hover:border-white/10'
                      } ${isSubmitted ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span>{opt}</span>
                        {showCorrect && <Check className="w-4 h-4 flex-shrink-0 text-success-400" />}
                        {showWrong && <X className="w-4 h-4 flex-shrink-0 text-error-400" />}
                      </div>
                    </button>
                  );
                })}
                {!isSubmitted && answers[q.id] && (
                  <button onClick={() => handleSubmit(q)} className="btn-primary mt-2">
                    Submit Answer
                  </button>
                )}
                {isSubmitted && <FeedbackBlock result={result} explanation={q.explanation} onReset={() => handleReset(q.id)} />}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function FeedbackBlock({
  result,
  explanation,
  onReset,
}: {
  result: boolean | null;
  explanation: string;
  onReset: () => void;
}) {
  return (
    <div
      className={`mt-3 rounded-lg p-4 border ${
        result ? 'border-success-500/20 bg-success-500/5' : 'border-amber-500/20 bg-amber-500/5'
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        {result ? (
          <Check className="w-4 h-4 text-success-400" />
        ) : (
          <RotateCcw className="w-4 h-4 text-amber-400" />
        )}
        <p className={`text-sm font-medium ${result ? 'text-success-300' : 'text-amber-300'}`}>
          {result ? 'Correct!' : 'Not quite \u2014 let us understand why'}
        </p>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{explanation}</p>
      <button
        onClick={onReset}
        className="mt-3 text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1.5"
      >
        <RotateCcw className="w-3 h-3" />
        Try again
      </button>
    </div>
  );
}
