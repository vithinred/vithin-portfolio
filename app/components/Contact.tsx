"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { useState } from "react";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:vithinreddy0@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-[#00d4ff]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="font-mono text-[#00d4ff] text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Let&apos;s <span className="text-[#00d4ff]">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Open to AI/ML engineering roles, research collaborations, and consulting opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div {...fadeUp(0.1)} className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-5">Get in touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:vithinreddy0@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl hover:border-[#00d4ff]/30 hover:bg-[#0d1926] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-colors">
                    <Mail size={18} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Email</p>
                    <p className="text-slate-200 font-medium">vithinreddy0@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                    <MapPin size={18} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Location</p>
                    <p className="text-slate-200 font-medium">Dallas, Texas, USA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                    <MessageCircle size={18} className="text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Response Time</p>
                    <p className="text-slate-200 font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-4">Find me on</h3>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl hover:border-[#00d4ff]/30 transition-all text-slate-300 hover:text-white"
                >
                  <GithubIcon size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 bg-[#0a1220] border border-[#00d4ff]/10 rounded-xl hover:border-[#00d4ff]/30 transition-all text-slate-300 hover:text-white"
                >
                  <LinkedinIcon size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 bg-[#0a1220] border border-[#00d4ff]/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for work</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently open to full-time AI/ML engineering roles, research positions, and select consulting projects.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.2)}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 bg-[#0a1220] border border-[#00d4ff]/20 rounded-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                  <Send size={28} className="text-[#00d4ff]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-400">Your email client should open. I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-5 py-2 border border-[#00d4ff]/30 text-[#00d4ff] rounded-lg text-sm hover:bg-[#00d4ff]/10 transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0a1220] border border-[#00d4ff]/10 rounded-2xl p-7 space-y-5"
              >
                <h3 className="text-white font-semibold text-lg">Send a message</h3>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#050a0f] border border-[#1a2535] text-slate-200 rounded-lg text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-[#050a0f] border border-[#1a2535] text-slate-200 rounded-lg text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-3 bg-[#050a0f] border border-[#1a2535] text-slate-200 rounded-lg text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00d4ff] text-[#050a0f] font-bold rounded-lg hover:bg-[#00b4d8] transition-colors hover:shadow-[0_0_25px_rgba(0,212,255,0.35)]"
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
