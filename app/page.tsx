"use client";
import Contact from "@/components/Contact";
import HomePage from "@/components/Home";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-6 lg:p-16 relative min-h-screen">
      <div className="bg-container">
        <div className="opacity-100 z-50">
          <HomePage />
          <Contact />
        </div>
      </div>
    </main>
  );
}
