"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full backdrop-blur transition-colors ${solid ? 'bg-white/90 border-b border-black/5' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-3 mb-3 md:mb-0">
          <Link href="/" aria-label="Scents Boutique Home">
            <Image
              className="rounded-full shadow-sm"
              src="/logo.png"
              alt="Scents Boutique logo"
              width={56}
              height={56}
            />
          </Link>
          <span className="hidden sm:block font-display text-xl tracking-wide text-[color:var(--gold)]">Scents Boutique</span>
        </div>
        <nav>
          <ul className="list-none m-0 p-0 flex items-center gap-6 md:gap-10">
            <li>
              <Link href="/" className="font-medium text-gray-900 hover:text-black gold-underline">Home</Link>
            </li>
            <li>
              <Link href="/products" className="font-medium text-gray-900 hover:text-black gold-underline">Products</Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium text-gray-900 hover:text-black gold-underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}