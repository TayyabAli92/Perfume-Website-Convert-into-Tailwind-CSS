"use client";

import PerfumeType from "@/components/perfume";
import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <div className="mt-10">
      <div className="text-center mb-8">
        <h1 className="font-display text-4xl inline-block">Our Exclusive Collection</h1>
        <div className="h-[2px] w-32 bg-[color:var(--gold)] mx-auto mt-2" />
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PerfumeType image="/perf-1.png" name="Aura" price="Rs: 3999" />
        <PerfumeType image="/perf-2.png" name="Luxe" price="Rs: 2499" />
        <PerfumeType image="/perf-3.png" name="Vibe" price="Rs: 2199" />
        <PerfumeType image="/perf-4.png" name="Enigma" price="Rs: 4999" />
        <PerfumeType image="/perf-5.png" name="Essence" price="Rs: 2799" />
        <PerfumeType image="/perfume-6.png" name="Solace" price="Rs: 4499" />
      </motion.div>
    </div>
  );
}


