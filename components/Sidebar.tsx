"use client";
import Image from "next/image";
import { Section } from "./Section";

export function Sidebar() {
  return (
    <div className={`w-1/4 min-h-screen p-5 pt-10 pl-10`}>
      <div className="flex flex-col gap-5">
        <div>
          <Image src="/avatar.svg" alt="verified" width={64} height={64} />
          <div className="flex flex-row py-5">
            <h1 className="text-2xl font-medium pr-2">Victor Francis Vicera</h1>
            <div className="flex items-center">
              <Image
                src="/verified.svg"
                alt="verified"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <Section title="About">
          <p className="text-base text-white/80">
            Philippine based full-stack software engineer with 7+ years of
            experience in building web and mobile apps.
          </p>
        </Section>
        <Section title="Contact">
          <p className="text-base text-white/80">a</p>
        </Section>
      </div>
    </div>
  );
}
