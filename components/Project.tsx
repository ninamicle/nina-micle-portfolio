import { forwardRef } from "react";
import Image from "next/image";
import { abril } from "@/app/layout";

const Project = forwardRef(function Project(
  { project }: { project: any },
  ref: any
) {
  return (
    <dialog
      ref={ref}
      className="flex gap-8 bg-primary rounded-2xl p-6 border border-secondary"
    >
      {project && (
        <>
          <div className="w-1/3">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover rounded-lg"
            ></Image>
          </div>
          <div className="w-full">
            <p className={abril.className}>{project.title}</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              distinctio voluptatibus earum. Pariatur numquam cumque corporis
              ratione praesentium, porro, iste necessitatibus quas deleniti
              quaerat fugiat reiciendis perspiciatis sunt, voluptatum molestias!
            </p>
          </div>

          <form
            method="dialog"
            className="flex flex-grow w-4 items-start justify-end text-white"
          >
            <button className="text-2xl -mt-6">x</button>
          </form>
        </>
      )}
    </dialog>
    // <section
    //   id="project"
    //   className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-10"
    // >

    // </section>
  );
});

export default Project;
