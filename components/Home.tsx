import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";
import { abril } from "@/app/layout";

export default function HomePage() {
  return (
    <section id="home">
      <SectionHeader color="accent" title="Front End Developer" />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex justify-center py-3 mb-3">
          <Image
            src={
              "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Elena"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-48 w-48 md:w-[40rem] lg:w-[20rem] rounded-full border-[0.35rem] border-secondary object-cover shadow-xl"
          ></Image>
        </div>
        <div className="flex flex-col justify-center py-3 text-center md:text-left text-white font-medium">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            adipisci nulla inventore incidunt?
            <span
              className={`text-accent font-semibold ${abril.className} p-1`}
            >
              Vel dolores accusantium
            </span>
            Vel dolores accusantium aspernatur blanditiis voluptas cupiditate
            voluptatum ad, est hic deleniti deserunt,{" "}
            <span
              className={`text-accent font-semibold ${abril.className} p-1`}
            >
              sunt dolore similique
            </span>
            delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa
            corrupti, facere veritatis maxime,
            <span
              className={`text-accent font-semibold ${abril.className} p-1`}
            >
              omnis explicabo
            </span>
            ratione magnam doloribus a dolorum soluta. Accusamus tempore cum
            voluptatem ullam explicabo quibusdam ratione?
          </p>
        </div>
      </div>
    </section>
  );
}
