"use client";

import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col">
      <header className="text-xs font-normal pb-1 text-[#606060] uppercase">
        {title}
      </header>
      <div className="flex-1">{children}</div>
    </section>
  );
}
