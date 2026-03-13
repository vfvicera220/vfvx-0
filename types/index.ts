export type PortfolioData = {
  personal: {
    name: string;
    description: string;
  };
  contact: {
    email: string;
  };
  skills: string[];
  languages: string[];
  socials: {
    platform: string;
    url: string;
  }[];
};
