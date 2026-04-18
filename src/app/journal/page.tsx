"use client";
import { useState } from "react";

const mockEntries = [
  { id: "1", dayLabel: "Yesterday, Apr 17" },
  { id: "2", dayLabel: "Wednesday, Apr 16" },
  { id: "3", dayLabel: "Tuesday, Apr 15" },
  { id: "4", dayLabel: "Monday, Apr 14" },
  { id: "5", dayLabel: "Saturday, Apr 12" },
];

export default function JournalPage() {
  const [composing, setComposing] = useState(false);
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState(false);
  const [viewingEntry, setViewingEntry] = useState<string | null>(null);

  const handleSave = () => {
    if (!draft.trim()) return;
    setSaved(true);
    setDraft("");
    setComposing(false);
    setTimeout(() => setSaved(false), 4000);
  };

  const wordCount = draft.trim() ? draft.trim().split(/\s+/).length : 0;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-stone-900">Journal</h1>
          <p className="text-stone-400 text-sm mt-0.5">Your private reflection space</p>
        </div>
        {!composing && (
          <button
            onClick={() => setComposing(true)}
            className="flex-shrink-0 px-4 py-2 bg-violet-600 text-white rounded-full text-sm font-medium hover:bg-violet-700 transition-colors"
          >
            + New Entry
          </button>
        )}
      </div>

      {/* Privacy notice */}
      <div className="flex items-start gap-2.5 bg-stone-100 border border-stone-200 rounded-xl p-3 mb-6 text-sm text-stone-500">
        <span className="flex-shrink-0">🔒</span>
        <p>
          Your entries are encrypted before they are saved. No one — including our support team —
          can read them.
        </p>
      </div>

      {/* Save confirmation */}
      {saved && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl px-4 py-2.5 mb-4 flex items-center gap-2">
          <span>✓</span>
          <span>Entry saved privately.</span>
        </div>
      )}

      {/* Compose area */}
      {composing && (
        <div className="bg-white border border-violet-200 rounded-2xl p-4 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-stone-700">Today, April 18, 2026</p>
            <button
              onClick={() => {
                setComposing(false);
                setDraft("");
              }}
              className="text-stone-400 hover:text-stone-600 text-sm transition-colors"
            >
              Cancel
            </button>
          </div>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            autoFocus
            className="w-full border-none outline-none text-stone-800 text-sm leading-relaxed resize-none min-h-[160px] placeholder-stone-300"
            placeholder="Write freely. This space is yours alone…"
          />
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-stone-100">
            <span className="text-xs text-stone-300">{wordCount > 0 ? `${wordCount} words` : ""}</span>
            <button
              onClick={handleSave}
              disabled={!draft.trim()}
              className="px-4 py-1.5 bg-violet-600 text-white rounded-full text-sm font-medium disabled:opacity-40 hover:bg-violet-700 transition-colors"
            >
              Save Privately
            </button>
          </div>
        </div>
      )}

      {/* Entry detail (mock) */}
      {viewingEntry && (
        <div className="bg-white border border-stone-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-stone-700">
              {mockEntries.find((e) => e.id === viewingEntry)?.dayLabel}
            </p>
            <button
              onClick={() => setViewingEntry(null)}
              className="text-stone-400 hover:text-stone-600 text-sm"
            >
              Close
            </button>
          </div>
          <p className="text-sm text-stone-600 leading-relaxed italic">
            [Entry content is private and encrypted — only you can read it]
          </p>
        </div>
      )}

      {/* Entry history */}
      <div>
        <h2 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
          Recent Entries
        </h2>
        <div className="space-y-2">
          {mockEntries.map((entry) => (
            <button
              key={entry.id}
              onClick={() =>
                setViewingEntry(viewingEntry === entry.id ? null : entry.id)
              }
              className="w-full flex items-center gap-3 p-4 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 cursor-pointer transition-colors group text-left"
            >
              <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm">📝</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-stone-700">{entry.dayLabel}</p>
                <p className="text-xs text-stone-400 mt-0.5">Private entry · Click to view</p>
              </div>
              <span className="text-stone-300 group-hover:text-stone-500 text-lg transition-colors">
                →
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <p className="text-sm text-amber-700 font-medium">30-day history on Free plan</p>
          <p className="text-xs text-amber-600 mt-1">
            Upgrade to Premium for unlimited history
          </p>
        </div>
      </div>
    </div>
  );
}
