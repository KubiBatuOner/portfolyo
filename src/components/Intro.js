import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";

export default function Intro() {
  return (
    <div className="w-[80%] my-0 mx-auto flex flex-col">
      <div className="flex justify-between items-center gap-x-[5vw] lg:flex-col lg:gap-y-[5vh]">
        <div className="flex flex-col gap-y-[5vh] break-words w-2/3 lg:w-[100%] lg:text-center sm:text-center sm:w-[90%]">
          <div className="flex items-center gap-x-[0.78vw] lg:justify-center sm:justify-center">
            <hr className="border border-solid border-[#3730A3] w-[7.9vw]" />
            <p className="font-medium text-[1.25rem] text-[#4338CA]">
              Kubilay Batuhan Öner
            </p>
            <hr className="hidden lg:inline lg:border lg:border-solid lg:border-[#3730A3] lg:w-[7.9vw]" />
          </div>
          <h2 className="font-bold text-[#1F2937] text-[4.5rem] leading-[4.5rem] break-words lg:text-[3.2rem] lg:leading-[60px]">
            Business-oriented full stack developer
          </h2>
          <p className="text-[18px] text-[#6B7280] leading-7">
            Hi, I’m Kubilay. I’m a full stack developer. If you are looking for
            a Developer who to craft solid and scalable full stack products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="linkOuterContainer flex gap-x-[1vw] lg:justify-center sm:flex-col sm:items-center sm:gap-y-[1vh]">
            <div className="hireMeContainer px-10 py-3 border border-solid border-[#3730A3] rounded-md flex justify-center items-center gap-x-2.5 bg-[#3730A3] cursor-pointer truncate sm:w-[50%]">
              <HashLink smooth to="/#hire-me">
                <p className="hireMeText text-[#ffffff] text-lg">Hire me</p>
              </HashLink>
            </div>

            <div className="linkContainer px-8 py-3 border border-solid border-[#3730A3] rounded-md flex justify-center items-center gap-x-2.5 cursor-pointer sm:w-[50%]">
              <FontAwesomeIcon
                className="fa-xl text-[#3730A3]"
                icon={faGithub}
              />
              <a
                className="text-[#3730A3]"
                href="https://github.com/KubiBatuOner"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <div className="linkContainer px-8 py-3 border border-solid border-[#3730A3] rounded-md flex justify-center items-center gap-x-2.5 cursor-pointer sm:w-[50%]">
              <FontAwesomeIcon
                className="fa-xl text-[#3730A3]"
                icon={faLinkedin}
              />
              <a
                className="text-[#3730A3]"
                href="https://www.linkedin.com/in/kubilay-batuhan-öner-a45130234/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="kubiFoto bg-cover bg-top bg-no-repeat bg-kubiFoto w-[42vw] h-[28vw] rounded-2xl shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)] lg:w-[60%] lg:h-[45vh] sm:w-[90%]"></div>
      </div>
    </div>
  );
}
