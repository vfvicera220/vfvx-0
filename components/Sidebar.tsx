import Image from "next/image";
import { Section } from "./Section";
import { PortfolioData } from "@/types";
import { TfiEmail, TfiGithub, TfiLinkedin } from "react-icons/tfi";

type SidebarProps = {
  data: PortfolioData;
};

const socialIcons: Record<string, React.ReactNode> = {
  email: <TfiEmail />,
  linkedin: <TfiLinkedin />,
  github: <TfiGithub />,
};

export function Sidebar({ data }: SidebarProps) {
  return (
    <div className={`w-1/4 min-h-screen p-5 pt-10 pl-10`}>
      <div className="flex flex-col gap-5">
        <div>
          <Image src="/avatar.svg" alt="verified" width={64} height={64} />
          <div className="flex flex-row py-5">
            <h1 className="text-2xl font-medium pr-2">{data.personal.name}</h1>
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
          <p className="text-base text-white/80">{data.personal.description}</p>
        </Section>
        <Section title="Contact">
          <div className="flex flex-col gap-2 ">
            {Object.entries(data.contact).map(([key, value]) => (
              <div key={key} className="flex flex-row items-center gap-3">
                {socialIcons[key]}
                <a
                  href={key === "email" ? `mailto:${value}` : value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
