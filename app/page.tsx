"use client";
import Contact from "@/components/Contact";
import HomePage from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Project from "@/components/Project";
import Timeline from "@/components/Timeline";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-centerp-6 lg:p-16 relative min-h-screen">
      <div className="bg-container">
        <div className="opacity-100 z-50  gap-y-12 my-4">
          <HomePage />
          <Portfolio />
          <Timeline />
          <Contact />
        </div>
      </div>
    </main>
  );
}
