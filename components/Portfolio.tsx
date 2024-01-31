"use client";
import React, { useState, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";
import Image from "next/image";
import Project from "./Project";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>();
  const [showProjectDetail, setShowProjectDetail] = useState<boolean>();
  const dialogRef = useRef<HTMLDialogElement>();

  const handleOpenDialog = (project: any) => {
    setSelectedProject(project);
    dialogRef.current && dialogRef.current.showModal();
  };
  return (
    <section id="portfolio">
      <SectionHeader color="accent" title="Portfolio" />
      <div className="grid grid-cols-4 gap-4">
        <Project ref={dialogRef} project={selectedProject} />
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="card card-bordered border-secondary  w-full bg-primary"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="h-3/6 object-cover rounded-t-lg"
            ></Image>
            <div className="card-body ">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="flex gap-3">
                {project.tags.map((tag) => (
                  <div key={tag} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
              <button onClick={() => handleOpenDialog(project)}>
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
