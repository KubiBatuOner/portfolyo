export default function Skills() {
  return (
    <div
      className="w-[80%] my-0 mx-auto flex flex-col gap-y-[5vh] mt-[19vh] lg:mt-[10vh]"
      id="skills"
    >
      <h2 className="font-bold text-[#1F2937] leading-[48px] text-[3rem] lg:text-center lg:text-[2.5rem]">
        Skills
      </h2>
      <div className="flex flex-wrap justify-between lg:flex-col lg:items-center lg:gap-y-[5vh]">
        <div className="flex flex-col w-[27%] gap-y-[4vh] lg:w-[85%] lg:items-center sm:gap-y-[3vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            JavaScript
          </h4>
          <p className="font-normal text-[#6B7280] text-[1rem] leading-[150%] lg:text-[1.2rem] lg:leading-[1.5rem] lg:text-center">
            JavaScript is easy to understand and learn. The structure is simple
            for the users as well as the developers. I've been using JS and
            compatible libraries for my projects.
          </p>
        </div>
        <div className="flex flex-col w-[27%] gap-y-[4vh] lg:w-[85%] lg:items-center sm:gap-y-[3vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            React.Js
          </h4>
          <p className="font-normal text-[#6B7280] text-[1rem] leading-[150%] lg:text-[1.2rem] lg:leading-[1.5rem] lg:text-center">
            Creating a dynamic web app with HTML strings was difficult,
            especially since it required complex coding, but React.JS solved
            that problem and made it easy. It provides less coding and provides
            more functionality.
          </p>
        </div>
        <div className="flex flex-col w-[27%] gap-y-[4vh] lg:w-[85%] lg:items-center sm:gap-y-[3vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            Tailwind CSS
          </h4>
          <p className="font-normal text-[#6B7280] text-[1rem] leading-[150%] lg:text-[1.2rem] lg:leading-[1.5rem] lg:text-center">
            Using Tailwind CSS, the developer does not have to write custom
            classes and switch files. This speeds up the web development process
            so when I write my codes I use Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
