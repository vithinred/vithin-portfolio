"use client";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#00d4ff]/8 py-8 px-6 bg-[#070d16]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#00d4ff]" />
          <span className="font-mono text-[#00d4ff]/70">vithin.dev</span>
          <span>— Sandadi Vithin Reddy</span>
        </div>
        <p className="font-mono text-xs">
          Built with Next.js + Framer Motion &nbsp;·&nbsp; Dallas, TX
        </p>
      </div>
    </footer>
  );
}
