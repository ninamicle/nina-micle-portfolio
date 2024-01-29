import { forwardRef } from "react";
import Image from "next/image";
import { abril } from "@/app/layout";

const Project = forwardRef(function Project(
  { project }: { project: any },
  ref: any
) {
  return (
    <dialog ref={ref}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fuga
        minima. Rem pariatur ducimus quisquam saepe eligendi corporis. Pariatur,
        alias? At consectetur animi quam quas incidunt similique cupiditate
        delectus voluptates?
      </p>
      <form method="dialog">
        <button>x</button>
      </form>
    </dialog>
    // <section
    //   id="project"
    //   className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-10"
    // >
    //   <div className="w-2/3 h-1/6 grid grid-cols-5 gap-8 bg-primary rounded-2xl p-6 border border-secondary">
    //     <div className="col-span-2">
    //       <Image
    //         src={project.image}
    //         alt={project.title}
    //         className="h-[100%] object-cover rounded-lg"
    //       ></Image>
    //     </div>
    //     <div className="col-span-2">
    //       <p className={abril.className}>{project.title}</p>
    //       <p>
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
    //         distinctio voluptatibus earum. Pariatur numquam cumque corporis
    //         ratione praesentium, porro, iste necessitatibus quas deleniti
    //         quaerat fugiat reiciendis perspiciatis sunt, voluptatum molestias!
    //       </p>
    //     </div>
    //     <div className="w-4  justify-self-end ">
    //       <button
    //         onClick={() => upadateStatus(false)}
    //         className="text-2xl -mt-6"
    //       >
    //         x
    //       </button>
    //     </div>
    //   </div>
    // </section>
  );
});

export default Project;
