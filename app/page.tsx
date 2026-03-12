import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-row items-center justify-between bg-white dark:bg-black sm:items-start">
        <Sidebar />
        <div className="bg-red-500 w-3/4">dsa</div>
      </main>
    </div>
  );
}
