import React from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <SectionHeader color="accent" title="Portfolio" />
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project) => (
          <div className="card w-full bg-primary shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              className="h-3/6 object-cover"
            ></Image>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <button>
                <span className="underline underline-offset-2 hover:underline-offset-4 hover:opacity-75 text-accent opacity-35 font-extralight">
                  Vedi di più
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
