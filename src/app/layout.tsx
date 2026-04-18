import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Solace — Daily Spiritual Companion",
  description:
    "Guided daily reflection, private encrypted journaling, and spiritual content — a calm space for your inner life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-800 antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-200 py-8 mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center text-stone-400 text-sm space-y-1">
            <p className="font-medium text-stone-500">Solace</p>
            <p>Showcase MVP · All journal entries are private and encrypted</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
