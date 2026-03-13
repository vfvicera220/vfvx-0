import type { PortfolioData } from "@/types";

export const mockPortfolioData: PortfolioData = {
  personal: {
    name: "Test User",
    description:
      "Multidisciplinary engineer crafting full-stack experiences for web and mobile.",
  },
  contact: {
    email: "test.user@example.com",
  },
  skills: [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Docker",
  ],
  languages: ["English", "Filipino", "Japanese"],
  socials: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/test-user" },
    { platform: "GitHub", url: "https://github.com/test-user" },
    { platform: "Upwork", url: "https://www.upwork.com/freelancers/~01test" },
  ],
};
