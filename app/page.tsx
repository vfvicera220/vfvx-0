import { Sidebar } from "@/components/Sidebar";
import { PortfolioData } from "@/types";

export default async function Home() {
  const data = await fetch(
    "https://raw.githubusercontent.com/vfvicera220/vfvx-0/refs/heads/main/public/data.json",
  );
  const portfolioData = (await data.json()) as PortfolioData;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-row items-center justify-between bg-white dark:bg-black sm:items-start">
        <Sidebar data={portfolioData} />
        <div className="bg-red-500 w-3/4">test</div>
      </main>
    </div>
  );
}
