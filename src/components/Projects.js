import Project from "./Project";
import { projects } from "./data";

export default function Projects() {
  return (
    <div
      className="w-[80%] my-0 mx-auto flex flex-col gap-y-[5vh] pt-[42px] pb-[100px] sm:w-[100%] lg:pb-[30px]"
      id="projects"
    >
      <h2 className="font-bold leading-[3rem] text-[3rem] lg:text-center lg:text-[2.5rem]">
        Projects
      </h2>
      <div className="flex flex-wrap justify-between items-start lg:flex-col lg:items-center lg:gap-y-[10vh]">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
