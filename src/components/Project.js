export default function Project(props) {
  const { project } = props;
  return (
    <div className="flex flex-col w-[28%] gap-y-[5vh] lg:w-[85%] lg:items-center lg:my-0 lg:mx-auto sm:gap-y-[4vh] sm:w-[100%]">
      <a href={project.site} target="_blank" rel="noreferrer">
        <img
          className="max-w-[100%] rounded-[10px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
          src={project.img}
          alt="resim"
        />
      </a>
      <h4 className="text-[1.875rem] font-medium leading-7 text-[#4338CA]">
        {project.title}
      </h4>
      <p className="font-normal text-[1rem] text-[#6B7280] leading-[150%] lg:text-[1.2rem] lg:leading-[1.5rem] lg:text-center sm:w-[85%]">
        {project.description}
      </p>
      <div className="flex gap-x-[0.5vw] lg:gap-x-[2vw]">
        <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
          {project.lang1}
        </p>
        <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
          {project.lang2}
        </p>
        <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
          {project.lang3}
        </p>
      </div>
      <div className="flex justify-between lg:gap-x-[5vw]">
        <a
          className="underline leading-4 font-medium text-[1rem] text-[#3730A3] "
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="underline leading-4 font-medium text-[1rem] text-[#3730A3] "
          href={project.site}
          target="_blank"
          rel="noreferrer"
        >
          View Site
        </a>
      </div>
    </div>
  );
}
