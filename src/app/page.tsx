"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);

  return (
    <div className="flex flex-col">
      {/* Hero with parallax */}
      <motion.section ref={heroRef} style={{ y }} className="hero-gradient rounded-3xl mt-8 p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 text-center md:text-left">
          <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-4 text-[color:var(--gold)]">Scents Boutique</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">Your destination for luxurious fragrances.</p>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Link href="/products" className="btn-primary">Explore Collection</Link>
            <Link href="#signature" className="btn-outline">Discover Signature</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex-1">
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem] overflow-hidden rounded-3xl lux-card flex items-center justify-center">
            <Image src="/perfume.png" alt="Perfume bottle" fill className="object-contain" />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="order-2 md:order-1">
          <h2 className="font-display text-3xl md:text-4xl mb-3">About Us</h2>
          <div className="h-[2px] w-16 bg-[color:var(--gold)] mb-4" />
          <p className="text-lg leading-relaxed text-gray-800">
            “Signature” perfume is a symbol of sophistication and class, reflecting modern elegance and timeless charm. Inspired by Creed Aventus, it blends vibrant pineapple and apple with enduring oakmoss and vanilla for a captivating trail.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="order-1 md:order-2">
          <div className="lux-card p-6 flex items-center justify-center">
            <div className="relative h-64 w-full max-w-md">
              <Image src="/perfume.png" alt="Signature Perfume" fill className="object-contain" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Perfume */}
      <section id="signature" className="mt-14">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="lux-card p-6 order-1">
            <div className="relative h-64 w-full max-w-md mx-auto">
              <Image src="/perfume.png" alt="Featured Premium Perfume" fill className="object-contain" />
            </div>
          </div>
          <div className="order-2">
            <h3 className="font-display text-3xl mb-3">Featured Premium</h3>
            <p className="text-lg text-gray-800 mb-4">An elegant blend presented in a refined box, perfect for discerning tastes.</p>
            <Link href="/products" className="btn-primary">View Details</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}