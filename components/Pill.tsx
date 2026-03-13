"use client";

import type { ReactNode } from "react";

type PillProps = {
  key: string;
  children: ReactNode;
};

export function Pill({ key, children }: PillProps) {
  return (
    <div
      key={key}
      className="border text-sm rounded-full py-1 px-3 border-gray-900"
      data-testid={key}
    >
      {children}
    </div>
  );
}
