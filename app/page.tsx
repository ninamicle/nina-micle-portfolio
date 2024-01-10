import HomePage from "@/components/Home";
import Navigation from "../components/Navigation";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-[80vh] w-full overflow-auto no-scrollbar bg-slate-200/20  text-white rounded-xl p-8 border border-transparent">
        <div className="opacity-100 z-50">
          <Navigation />
          <HomePage />
        </div>
      </div>
    </main>
  );
}
