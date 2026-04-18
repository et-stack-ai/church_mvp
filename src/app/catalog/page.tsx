"use client";
import { useState } from "react";

const categories = ["All", "Meditation", "Prayer", "Reflection", "Audio"];

const items = [
  {
    id: 1,
    cat: "Reflection",
    title: "On Finding Stillness in a Noisy World",
    duration: "4 min",
    tier: "free",
    type: "Article",
    color: "bg-violet-100",
  },
  {
    id: 2,
    cat: "Meditation",
    title: "A Practice of Breath and Presence",
    duration: "8 min",
    tier: "free",
    type: "Practice",
    color: "bg-emerald-100",
  },
  {
    id: 3,
    cat: "Prayer",
    title: "Morning Prayer for Clarity",
    duration: "3 min",
    tier: "free",
    type: "Article",
    color: "bg-amber-100",
  },
  {
    id: 4,
    cat: "Audio",
    title: "Guided Evening Reflection",
    duration: "12 min",
    tier: "premium",
    type: "Audio",
    color: "bg-blue-100",
  },
  {
    id: 5,
    cat: "Reflection",
    title: "The Practice of Letting Go",
    duration: "6 min",
    tier: "premium",
    type: "Article",
    color: "bg-rose-100",
  },
  {
    id: 6,
    cat: "Meditation",
    title: "Seven-Day Silence Journey",
    duration: "Daily",
    tier: "premium",
    type: "Course",
    color: "bg-indigo-100",
  },
  {
    id: 7,
    cat: "Prayer",
    title: "Evening Prayers Across Traditions",
    duration: "5 min",
    tier: "free",
    type: "Article",
    color: "bg-teal-100",
  },
  {
    id: 8,
    cat: "Audio",
    title: "Contemplative Music for Focus",
    duration: "30 min",
    tier: "premium",
    type: "Audio",
    color: "bg-purple-100",
  },
];

export default function CatalogPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-stone-900 mb-1">Content Library</h1>
      <p className="text-stone-500 text-sm mb-6">
        Curated articles, practices, and audio for your daily reflection.
      </p>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0 ${
              active === c
                ? "bg-violet-600 text-white"
                : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className={`${item.color} h-28 relative`}>
              {item.tier === "premium" && (
                <div className="absolute inset-0 bg-stone-900/20 flex items-center justify-center">
                  <div className="bg-amber-400 text-stone-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    🔒 Premium
                  </div>
                </div>
              )}
              {item.tier === "free" && (
                <div className="absolute top-2 right-2">
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full">
                    Free
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-xs text-stone-400 mb-1">
                {item.type} · {item.cat}
              </p>
              <h3 className="font-semibold text-stone-800 text-sm leading-snug mb-3">
                {item.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-400">⏱ {item.duration}</span>
                {item.tier === "free" ? (
                  <button className="text-xs text-violet-600 font-medium hover:text-violet-800">
                    Read →
                  </button>
                ) : (
                  <button className="text-xs text-amber-600 font-medium hover:text-amber-800">
                    Unlock →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
