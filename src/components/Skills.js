export default function Skills() {
  return (
    <div className="flex flex-col gap-y-[5vh] mt-[19vh] mx-auto" id="skills">
      <h2 className="font-bold leading-[48px] text-[3rem]">Skills</h2>
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col w-[27%] gap-y-[5vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            JavaScript
          </h4>
          <p className="font-normal text-[1rem] leading-[150%]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col w-[27%] gap-y-[5vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            React.Js
          </h4>
          <p className="font-normal text-[1rem] leading-[150%]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col w-[27%] gap-y-[5vh]">
          <h4 className="text-[30px] font-medium leading-7 text-[#4338ca]">
            Node.Js
          </h4>
          <p className="font-normal text-[1rem] leading-[150%]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
