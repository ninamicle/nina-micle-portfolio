"use client";
import HomePage from "@/components/Home";
import Navigation from "../components/Navigation";
import clsx from "clsx";
import { useViewport } from "@/lib/hooks/useViewort";
export default function Home() {
  const viewportWidth = useViewport();
  console.log(viewportWidth > 400);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <div className={clsx({ "desktop-container": viewportWidth > 400 })}>
        <div className="opacity-100 z-50">
          <HomePage />
        </div>
      </div>
    </main>
  );
}
