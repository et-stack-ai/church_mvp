import Link from "next/link";

const features = [
  {
    icon: "🌅",
    title: "Daily Journey",
    desc: "A calm, ordered daily flow of reflection, reading, and practice — designed to take less than 10 minutes.",
  },
  {
    icon: "🔒",
    title: "Private Journal",
    desc: "Write freely. Your entries are encrypted before storage. No one — not even our team — can read them.",
  },
  {
    icon: "📖",
    title: "Rich Content Library",
    desc: "Curated articles, guided practices, and audio content across categories. New content published daily.",
  },
  {
    icon: "🔥",
    title: "Gentle Streaks",
    desc: "Build lasting habits without pressure. Streaks celebrate consistency, not perfection.",
  },
];

const steps = [
  {
    n: "1",
    title: "Sign up in seconds",
    desc: "No credit card required. Start free immediately.",
  },
  {
    n: "2",
    title: "Follow today's journey",
    desc: "A guided daily flow with reading, reflection, and a journaling prompt.",
  },
  {
    n: "3",
    title: "Write privately",
    desc: "Reflect in your encrypted journal. Your words belong only to you.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
          <span>🌿</span> Calm · Private · Daily
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-5">
          Your daily space
          <br className="hidden sm:block" /> for reflection
        </h1>
        <p className="text-lg text-stone-500 max-w-xl mx-auto mb-8">
          Guided spiritual content, private encrypted journaling, and gentle habit streaks — built
          for people who want a more intentional inner life.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/journey"
            className="px-6 py-3 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition-colors"
          >
            Begin Today — Free
          </Link>
          <Link
            href="/pricing"
            className="px-6 py-3 border border-stone-300 text-stone-700 rounded-full font-medium hover:bg-stone-100 transition-colors"
          >
            See Pricing
          </Link>
        </div>

        {/* App preview mockup */}
        <div className="mt-14 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden max-w-sm mx-auto text-left">
          <div className="bg-violet-600 px-4 py-3 text-white">
            <p className="text-xs opacity-75">Friday, April 18</p>
            <p className="font-semibold">Good morning ☀️</p>
          </div>
          <div className="p-4 space-y-2.5">
            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
              <span className="text-emerald-500 text-base">✓</span>
              <div>
                <p className="text-sm font-medium text-stone-700">Opening Reflection</p>
                <p className="text-xs text-stone-400">Completed · 2 min</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-violet-50 border border-violet-200 rounded-xl">
              <span className="text-violet-500 text-base">→</span>
              <div>
                <p className="text-sm font-medium text-stone-800">Reading: On Stillness</p>
                <p className="text-xs text-violet-500 font-medium">Current step · 4 min</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl opacity-40">
              <span className="text-stone-400 text-base">○</span>
              <div>
                <p className="text-sm font-medium text-stone-600">Private Journal Prompt</p>
                <p className="text-xs text-stone-400">Unlocks after step 2</p>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="w-full bg-violet-600 text-white text-sm font-medium py-2.5 rounded-full text-center">
              Mark Step Complete
            </div>
          </div>
          <div className="px-4 pb-3 flex items-center gap-2">
            <div className="flex-1 bg-stone-200 rounded-full h-1">
              <div className="bg-violet-500 h-1 rounded-full w-1/2" />
            </div>
            <span className="text-xs text-stone-400">2 / 4</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-y border-stone-200 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-stone-900 mb-10">
            Everything you need for daily reflection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-5 rounded-2xl border border-stone-200 hover:border-violet-200 hover:bg-violet-50/30 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">{f.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-stone-900 mb-10">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="w-10 h-10 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {s.n}
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">{s.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-violet-600 py-16 text-center text-white">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Start your free journey today</h2>
          <p className="text-violet-200 mb-6 text-sm">
            No credit card required. Basic journaling is always free.
          </p>
          <Link
            href="/journey"
            className="inline-block px-8 py-3 bg-white text-violet-700 font-semibold rounded-full hover:bg-violet-50 transition-colors"
          >
            Begin for Free
          </Link>
        </div>
      </section>
    </div>
  );
}
