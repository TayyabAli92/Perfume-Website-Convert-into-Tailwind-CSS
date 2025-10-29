"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mt-12 relative">
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[url('/perfume.png')] bg-no-repeat bg-right-bottom bg-contain" />
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl lux-card p-6 md:p-8">
        <h1 className="font-display text-center text-3xl mb-1">Get in Touch</h1>
        <p className="text-center mb-6 text-gray-700">We’d love to hear from you.</p>
        {sent && (
          <div className="mb-4 rounded-xl border border-pink-200 bg-pink-50 text-pink-800 px-4 py-3 animate-[fadeIn_.4s_ease_both]">
            Message sent successfully!
          </div>
        )}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const email = (form.querySelector('#email') as HTMLInputElement).value;
            const name = (form.querySelector('#name') as HTMLInputElement).value;
            const message = (form.querySelector('#message') as HTMLTextAreaElement).value;
            const emailOk = /\S+@\S+\.\S+/.test(email);
            if (!name || !emailOk || !message) {
              alert('Please enter a valid name, email, and message.');
              return;
            }
            setSent(true);
            setTimeout(() => setSent(false), 3000);
            form.reset();
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" name="name" required className="mt-1 block w-full rounded-md border border-black/10 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border border-black/10 bg-white/70 p-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" required className="mt-1 block w-full rounded-md border border-black/10 bg-white/70 p-2 min-h-32 focus:outline-none focus:ring-2 focus:ring-pink-300" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-pink-300 to-[color:var(--gold)] text-black font-medium py-2.5 rounded-full shadow-sm hover:brightness-105 active:brightness-95 transition">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
