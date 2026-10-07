import { useState, useEffect, useCallback } from 'react';
import {
  Rocket, Sparkles, GitCompare, ImagePlus, MessageSquare, ArrowLeftRight,
  LayoutGrid, Hammer, FlaskConical, SlidersHorizontal, Layers, Palette,
  RefreshCw, AlertTriangle, BookOpen, ClipboardCheck, Trophy, NotebookPen,
  ChevronLeft, ChevronRight, Menu, X, Check, GraduationCap,
} from 'lucide-react';
import { SECTIONS } from '@/lib/sections';
import { supabase } from '@/lib/supabase';
import { Section1 } from '@/sections/Section1';
import { Section2 } from '@/sections/Section2';
import { Section3 } from '@/sections/Section3';
import { Section4 } from '@/sections/Section4';
import { Section5 } from '@/sections/Section5';
import { Section6 } from '@/sections/Section6';
import { Section7 } from '@/sections/Section7';
import { Section8 } from '@/sections/Section8';
import { Section9 } from '@/sections/Section9';
import { Section10 } from '@/sections/Section10';
import { Section11 } from '@/sections/Section11';
import { Section12 } from '@/sections/Section12';
import { Section13 } from '@/sections/Section13';
import { Section14 } from '@/sections/Section14';
import { Section15 } from '@/sections/Section15';
import { Section16 } from '@/sections/Section16';
import { KnowledgeCheck } from '@/components/KnowledgeCheck';
import { Section18 } from '@/sections/Section18';
import { Section19 } from '@/sections/Section19';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, Sparkles, GitCompare, ImagePlus, MessageSquare, ArrowLeftRight,
  LayoutGrid, Hammer, FlaskConical, SlidersHorizontal, Layers,
  Palette, RefreshCw, AlertTriangle, BookOpen, ClipboardCheck, Trophy, NotebookPen,
};

function renderSection(id: number) {
  switch (id) {
    case 1: return <Section1 />;
    case 2: return <Section2 />;
    case 3: return <Section3 />;
    case 4: return <Section4 />;
    case 5: return <Section5 />;
    case 6: return <Section6 />;
    case 7: return <Section7 />;
    case 8: return <Section8 />;
    case 9: return <Section9 />;
    case 10: return <Section10 />;
    case 11: return <Section11 />;
    case 12: return <Section12 />;
    case 13: return <Section13 />;
    case 14: return <Section14 />;
    case 15: return <Section15 />;
    case 16: return <Section16 />;
    case 17: return <KnowledgeCheck />;
    case 18: return <Section18 />;
    case 19: return <Section19 />;
    default: return null;
  }
}

function App() {
  const [activeSection, setActiveSection] = useState(1);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progressLoaded, setProgressLoaded] = useState(false);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const { data } = await supabase
          .from('lesson_progress')
          .select('current_section, completed_sections')
          .limit(1)
          .maybeSingle();

        if (data) {
          setActiveSection(data.current_section ?? 1);
          if (data.completed_sections) {
            setCompleted(new Set(data.completed_sections));
          }
        }
      } catch {
        // silent fail — start fresh
      }
      setProgressLoaded(true);
    };
    loadProgress();
  }, []);

  const saveProgress = useCallback(
    async (section: number, completedSet: Set<number>) => {
      try {
        await supabase.from('lesson_progress').upsert({
          student_name: 'Michael Oge',
          current_section: section,
          completed_sections: Array.from(completedSet),
          last_visited: new Date().toISOString(),
        }, { onConflict: 'student_name' });
      } catch {
        // silent
      }
    },
    []
  );

  const goToSection = useCallback(
    (id: number) => {
      setActiveSection(id);
      setSidebarOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      saveProgress(id, completed);
    },
    [completed, saveProgress]
  );

  const markComplete = useCallback(() => {
    const next = new Set(completed);
    next.add(activeSection);
    setCompleted(next);
    saveProgress(activeSection, next);
  }, [activeSection, completed, saveProgress]);

  const goNext = useCallback(() => {
    if (activeSection < SECTIONS.length) {
      const next = new Set(completed);
      next.add(activeSection);
      setCompleted(next);
      goToSection(activeSection + 1);
      saveProgress(activeSection + 1, next);
    }
  }, [activeSection, completed, goToSection, saveProgress]);

  const goPrev = useCallback(() => {
    if (activeSection > 1) {
      goToSection(activeSection - 1);
    }
  }, [activeSection, goToSection]);

  const currentSection = SECTIONS.find((s) => s.id === activeSection)!;
  const CurrentIcon = iconMap[currentSection.icon] ?? Sparkles;
  const progressPercent = Math.round((completed.size / SECTIONS.length) * 100);

  return (
    <div className="min-h-screen bg-ink-950 text-gray-200">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-strong px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-accent-400" />
          <span className="text-sm font-display font-semibold text-white">Building With Gen AI</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-white/5">
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 z-40 glass-strong border-r border-white/5 overflow-y-auto transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-5 pt-6 lg:pt-6 pt-20 lg:pt-6">
          {/* Logo */}
          <div className="hidden lg:flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-display font-bold text-white">Building With Gen AI</p>
              <p className="text-xs text-gray-500">Michael Oge · Grade 8</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500">Lesson Progress</span>
              <span className="text-xs font-medium text-accent-400">{progressPercent}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-1.5">{completed.size} of {SECTIONS.length} sections</p>
          </div>

          {/* Section list */}
          <nav className="space-y-0.5">
            {SECTIONS.map((section) => {
              const Icon = iconMap[section.icon] ?? Sparkles;
              const isActive = section.id === activeSection;
              const isDone = completed.has(section.id);

              return (
                <button
                  key={section.id}
                  onClick={() => goToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                    isActive
                      ? 'bg-accent-600/15 border border-accent-500/20'
                      : 'border border-transparent hover:bg-white/5'
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-accent-600 text-white'
                        : isDone
                        ? 'bg-success-500/15 text-success-400'
                        : 'bg-white/5 text-gray-500 group-hover:text-gray-400'
                    }`}
                  >
                    {isDone && !isActive ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xs font-medium truncate ${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                      }`}
                    >
                      {section.shortLabel}
                    </p>
                    <p className="text-[10px] text-gray-600 truncate">{section.id}. {section.title}</p>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Tutor credit */}
          <div className="mt-6 pt-4 border-t border-white/5">
            <p className="text-xs text-gray-600">Tutor: Favour Momodu</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
        />
      )}

      {/* Main content */}
      <main className="lg:ml-72 pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-10">
          {/* Section header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-600/15 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                <CurrentIcon className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  Section {activeSection} of {SECTIONS.length}
                </p>
                <h1 className="text-base md:text-lg font-display font-semibold text-white leading-tight">
                  {currentSection.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="divider-glow mb-8" />

          {/* Section content */}
          <div key={activeSection} className="animate-fade-in">
            {progressLoaded && renderSection(activeSection)}
          </div>

          {/* Navigation footer */}
          <div className="mt-10 pt-6 border-t border-white/5">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={goPrev}
                disabled={activeSection === 1}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {!completed.has(activeSection) && (
                  <button
                    onClick={markComplete}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-success-400 hover:text-success-300 border border-success-500/20 hover:border-success-500/40 transition-all"
                  >
                    <Check className="w-4 h-4" />
                    Mark Complete
                  </button>
                )}
                {activeSection < SECTIONS.length && (
                  <button
                    onClick={goNext}
                    className="btn-primary flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goToSection(s.id)}
                  className={`nav-dot ${
                    s.id === activeSection
                      ? 'bg-accent-500 w-6'
                      : completed.has(s.id)
                      ? 'bg-success-500/60'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  title={s.title}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
