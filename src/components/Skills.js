export default function Skills() {
  return (
    <div
      className="w-[80%] my-0 mx-auto flex flex-col gap-y-[5vh] mt-[19vh] lg:mt-[10vh]"
      id="skills"
    >
      <h2 className="font-bold leading-[48px] text-[3rem] lg:text-center lg:text-[2.5rem]">
        Skills
      </h2>
      <div className="flex flex-wrap justify-between pb-5 lg:flex-col lg:items-center lg:gap-y-[5vh]">
        <div className="flex flex-col w-[27%] gap-y-[5vh] lg:w-[85%] lg:items-center sm:gap-y-[2vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            JavaScript
          </h4>
          <p className="font-normal text-[1rem] leading-[150%] lg:text-[1.2rem] lg:leading-[1.5rem] lg:text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col w-[27%] gap-y-[5vh] lg:w-[85%] lg:items-center sm:gap-y-[2vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            React.Js
          </h4>
          <p className="font-normal text-[1rem] leading-[150%] lg:text-[1.2rem] lg:leading-[1.5rem] lg:text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col w-[27%] gap-y-[5vh] lg:w-[85%] lg:items-center sm:gap-y-[2vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            Node.Js
          </h4>
          <p className="font-normal text-[1rem] leading-[150%] lg:text-[1.2rem] lg:leading-[1.5rem] lg:text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
