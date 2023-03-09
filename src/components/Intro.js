import kubiFoto from "./../images/kubiFoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Intro() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center gap-x-[5vw]">
        <div className="flex flex-col gap-y-[5vh] break-words w-2/3">
          <div className="flex items-center gap-x-[0.78vw]">
            <hr className="border border-solid border-[#3730A3] w-[102px]" />
            <p className="font-medium text-[20px] text-[#4338CA]">
              Kubilay Batuhan Öner
            </p>
          </div>
          <h2 className="font-bold text-[#1F2937] text-[4.5rem] leading-[4.5rem] break-words">
            Business-oriented full stack web developer
          </h2>
          <p className="text-[18px] leading-7">
            Hi, I’m Kubilay, a full-stack developer. If you are looking for a
            Developer to craft solid and scalable frontend products, check out
            some of my work and feel free to get in touch with me.
          </p>
          <div className="linkOuterContainer flex gap-x-[1vw]">
            <div className="hireMeContainer border border-solid border-[#3730A3] rounded-md flex justify-center items-center gap-x-2.5 bg-[#3730A3] cursor-pointer">
              <p className="hireMeText px-8 py-3 text-[#ffffff] text-lg">
                Hire me
              </p>
            </div>
            <div className="linkContainer px-8 py-3 border border-solid border-[#3730A3] rounded-md flex justify-center items-center gap-x-2.5 cursor-pointer">
              <FontAwesomeIcon
                className="fa-xl text-[#3730A3]"
                icon={faGithub}
              />
              <a
                className="text-inherit"
                href="https://github.com/KubiBatuOner"
              >
                Github
              </a>
            </div>
            <div className="linkContainer px-8 py-3 border border-solid border-[#3730A3] rounded-md flex justify-center items-center gap-x-2.5 cursor-pointer">
              <FontAwesomeIcon
                className="fa-xl text-[#3730A3]"
                icon={faLinkedin}
              />
              <a
                className="text-inherit"
                href="https://www.linkedin.com/in/kubilay-batuhan-öner-a45130234/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="kubiFoto flex justify-end">
          <img
            className=" max-w-[85%] rounded-2xl shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)] "
            src={kubiFoto}
            alt="kubiFoto"
          />
        </div>
      </div>
    </div>
  );
}
