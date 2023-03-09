import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="py-[10vh] flex justify-between items-center">
      <div className="text-[#7B61FF] font-bold rotate-[24deg]">
        <p className="rounded-full py-2 px-4 bg-[#EEEBFF] text-[1.5rem]">K</p>
      </div>
      <nav className="flex justify-between items-center gap-x-[4vw] w-1/3">
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
            className="flex box-border justify-center items-center border border-solid border-[#3730A3] rounded-md px-8 py-3 text-[18px] leading-7 text-[#3730A3] font-medium cursor-pointer hover:bg-[#3730a3] hover:text-[#ffffff]"
            href="#hire-me"
          >
            Hire me
          </a>
        </HashLink>
      </nav>
    </div>
  );
}
