"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PerfumeTypeProps {
  image: string;
  name: string;
  price: string;
}

export default function PerfumeType({ image, name, price }: PerfumeTypeProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4 }} className="lux-card p-4 text-center transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative w-full overflow-hidden rounded-xl aspect-[3/4]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        />
      </div>
      <h2 className="mt-3 font-display text-2xl">{name}</h2>
      <p className="text-base text-gray-700">{price}</p>
      <button className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-black bg-white border border-[color:var(--gold)] shadow-sm hover:shadow-[0_0_0_3px_rgba(212,175,55,0.25)] transition">Add to Cart</button>
    </motion.div>
  );
}