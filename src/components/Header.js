import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="w-[80%] my-0 mx-auto py-[10vh] flex justify-between items-center sm:flex-col sm:gap-y-[3vh] sm:pt-[5vh] sm:pb-[2vh]">
      <div className="text-[#7B61FF] font-bold rotate-[24deg] lg:rounded">
        <div className="rounded-full w-[4rem] h-[4rem] bg-[#EEEBFF] text-[1.5rem]">
          <div className="h-[4rem] flex justify-center items-center">K</div>
        </div>
      </div>
      <nav className="flex justify-between items-center gap-x-[2vw] w-[33.3%] lg:py-[0.5vh] lg:px-[1vw] lg:w-[50vw] sm:justify-center">
        <HashLink smooth to="/#skills">
          <a
            className="text-[1.125rem] font-medium leading-7 text-[#6B7280] cursor-pointer hover:text-[#3730A3]"
            href="#skills"
          >
            Skills
          </a>
        </HashLink>
        <HashLink smooth to="/#projects">
          <a
            className="text-[1.125rem] font-medium leading-7 text-[#6B7280] cursor-pointer hover:text-[#3730A3]"
            href="#projects"
          >
            Projects
          </a>
        </HashLink>
        <HashLink smooth to="/#hire-me">
          <a
            className="flex justify-center items-center truncate w-[10vw] border border-solid border-[#3730A3] rounded-md py-[12px] text-[18px] leading-7 text-[#3730A3] font-medium cursor-pointer hover:bg-[#3730a3] hover:text-[#ffffff] lg:w-[15vw] sm:w-[25vw]"
            href="#hire-me"
          >
            Hire me
          </a>
        </HashLink>
      </nav>
    </div>
  );
}
