"use client";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Opening Reflection",
    type: "Reflection",
    duration: "2 min",
    content:
      "Take a moment to arrive. Breathe in slowly, breathe out. Let the concerns of the day rest for now. This space is yours — unhurried, quiet, and safe.\n\nAs you begin today's journey, ask yourself: what am I carrying right now? What do I most need today?",
    isJournal: false,
  },
  {
    id: 2,
    title: "Reading: On Finding Stillness",
    type: "Reading",
    duration: "4 min",
    content:
      "In a world that prizes speed and constant output, stillness can feel like an act of defiance. Yet every contemplative tradition — from the desert fathers to the Zen masters to the Sufi poets — places silence and stillness at the centre of the inner life.\n\nStillness is not emptiness. It is a fullness of a different kind: attention without agenda, presence without performance. It is in stillness that we begin to hear the quieter voices — our own deeper knowing, the needs we have been too busy to acknowledge, the beauty we have been too distracted to notice.\n\nToday's invitation: find one small window — even two minutes — and let it be genuinely still.",
    isJournal: false,
  },
  {
    id: 3,
    title: "Brief Practice",
    type: "Practice",
    duration: "3 min",
    content:
      "Sit comfortably. Close your eyes if that feels right.\n\nFor the next two minutes, simply count your breaths. Each exhale is one count. When you reach ten, begin again.\n\nIf your mind wanders — and it will — gently return. There is no failure here, only returning. The practice is the returning.",
    isJournal: false,
  },
  {
    id: 4,
    title: "Private Journal Prompt",
    type: "Journal",
    duration: "Open",
    content:
      "In your private journal, reflect on this question:\n\nWhere in my life right now do I most need stillness? What would it mean to bring even a small amount of quiet into that space?",
    isJournal: true,
  },
];

export default function JourneyPage() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [journalText, setJournalText] = useState("");

  const complete = (idx: number) => {
    if (!completedSteps.includes(idx)) {
      setCompletedSteps((prev) => [...prev, idx]);
    }
    if (idx + 1 < steps.length) setActiveStep(idx + 1);
  };

  const allDone = completedSteps.length === steps.length;
  const streakDays = 7;
  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-stone-400 text-sm">Friday, April 18, 2026</p>
        <h1 className="text-2xl font-bold text-stone-900 mt-1">Good morning ☀️</h1>
        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium px-3 py-1 rounded-full">
            🔥 {allDone ? streakDays + 1 : streakDays}-day streak
          </div>
          <span className="text-stone-400 text-sm">
            {completedSteps.length}/{steps.length} steps today
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-stone-200 rounded-full h-1.5 mb-8">
        <div
          className="bg-violet-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Completion message */}
      {allDone && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6 text-center">
          <p className="text-3xl mb-2">🌿</p>
          <p className="font-semibold text-emerald-800">Today&apos;s journey complete</p>
          <p className="text-sm text-emerald-600 mt-1">
            You&apos;ve kept your {streakDays + 1}-day streak alive. See you tomorrow.
          </p>
        </div>
      )}

      {/* Step list */}
      <div className="space-y-2.5 mb-6">
        {steps.map((step, idx) => {
          const isDone = completedSteps.includes(idx);
          const isCurrent = idx === activeStep && !allDone;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl border text-left transition-all ${
                isDone
                  ? "bg-stone-50 border-stone-200 opacity-60"
                  : isCurrent
                  ? "bg-violet-50 border-violet-300 shadow-sm"
                  : "bg-white border-stone-200 hover:bg-stone-50"
              }`}
            >
              <span className="text-xl flex-shrink-0">
                {isDone ? "✅" : isCurrent ? "→" : "○"}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium text-sm leading-snug ${
                    isCurrent ? "text-violet-800" : "text-stone-700"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  {step.type} · {step.duration}
                </p>
              </div>
              {isDone && <span className="text-xs text-stone-400 flex-shrink-0">Done</span>}
              {isCurrent && (
                <span className="text-xs text-violet-600 font-medium flex-shrink-0">Now</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active step content */}
      {!allDone && (
        <div className="bg-white border border-stone-200 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-violet-100 text-violet-700 text-xs font-medium px-2 py-0.5 rounded-full">
              {steps[activeStep].type}
            </span>
            <span className="text-stone-400 text-xs">{steps[activeStep].duration}</span>
          </div>
          <h2 className="font-semibold text-stone-900 mb-4 text-base">
            {steps[activeStep].title}
          </h2>

          {steps[activeStep].isJournal ? (
            <div>
              <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line mb-4">
                {steps[activeStep].content}
              </p>
              <textarea
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                className="w-full border border-stone-200 rounded-xl p-3 text-sm text-stone-700 resize-none focus:outline-none focus:ring-2 focus:ring-violet-300 placeholder-stone-300"
                rows={5}
                placeholder="Write freely. This is private and encrypted…"
              />
              {journalText.trim().length > 0 && (
                <p className="text-xs text-stone-400 mt-1 text-right">
                  {journalText.trim().split(/\s+/).length} words
                </p>
              )}
            </div>
          ) : (
            <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
              {steps[activeStep].content}
            </p>
          )}

          <button
            onClick={() => complete(activeStep)}
            className="mt-5 w-full py-3 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition-colors text-sm"
          >
            {steps[activeStep].isJournal ? "Save & Complete Step" : "Mark Complete"}
          </button>
        </div>
      )}
    </div>
  );
}
