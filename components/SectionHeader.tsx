import React from "react";
import { abril } from "@/app/layout";

type SectionHeaderProps = {
  title: string;
  color: string;
};
export default function SectionHeader({ title, color }: SectionHeaderProps) {
  return (
    <section className={abril.className}>
      <div className={`text-3xl w-full text-center p-4 text-${color}`}>
        {title}
      </div>
    </section>
  );
}
