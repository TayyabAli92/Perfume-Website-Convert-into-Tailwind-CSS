"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return (
    <main key={key} className="page-fade mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      {children}
    </main>
  );
}




