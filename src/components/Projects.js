import diary from "../images/diary.png";
import watchlist from "../images/watchlist.png";
import shoppingCart from "../images/shopping.png";

export default function Projects() {
  return (
    <div
      className="w-[80%] my-0 mx-auto flex flex-col gap-y-[5vh] pt-[42px] pb-[36px] sm:w-[100%]"
      id="projects"
    >
      <h2 className="font-bold leading-[3rem] text-[3rem] lg:text-center lg:text-[2.5rem]">
        Projects
      </h2>
      <div className="flex flex-wrap justify-between items-end lg:flex-col lg:items-center lg:gap-y-[10vh]">
        <div className="flex flex-col w-[28%] gap-y-[3vh] lg:w-[85%] lg:items-center lg:gap-y-[5vh] lg:my-0 lg:mx-auto sm:gap-y-[2vh] sm:w-[100%]">
          <a
            href="https://fsweb-s11g1-shopping-cart-git-main-kubibatuoner.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-w-[100%] rounded-[18px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
              src={shoppingCart}
              alt="shoppingCart"
            />
          </a>
          <h4 className="text-[1.875rem] font-medium leading-7 text-[#4338CA]">
            Shopping Cart
          </h4>
          <p className="font-normal text-[1rem] leading-[150%] lg:text-[1rem] lg:leading-[1.5rem] lg:text-center sm:w-[85%]">
            {" "}
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="flex gap-x-[0.5vw] lg:gap-x-[2vw]">
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              react
            </p>
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              styled
            </p>
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              context
            </p>
          </div>
          <div className="flex justify-between lg:gap-x-[5vw]">
            <a
              className="underline leading-4 font-medium text-[1rem] text-[#3730A3] "
              href="https://github.com/KubiBatuOner/fsweb-s11g1-shopping-cart"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="underline leading-4 font-medium text-[1rem] text-[#3730A3] "
              href="https://fsweb-s11g1-shopping-cart-git-main-kubibatuoner.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[28%] gap-y-[3vh] lg:w-[85%] lg:items-center lg:gap-y-[5vh] lg:my-0 lg:mx-auto sm:gap-y-[2vh] sm:w-[100%]">
          <a
            href="https://fsweb-s10g3-redux-watchlist-git-main-kubibatuoner.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-w-[100%] rounded-[18px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
              src={watchlist}
              alt="watchlist"
            />
          </a>
          <h4 className="text-[1.875rem] font-medium leading-7 text-[#4338CA]">
            Watchlist
          </h4>
          <p className="font-normal text-[1rem] leading-[150%] lg:text-[1rem] lg:leading-[1.5rem] lg:text-center sm:w-[85%]">
            {" "}
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="flex gap-x-[0.5vw] lg:gap-x-[2vw]">
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              react
            </p>
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              tailwind
            </p>
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              redux
            </p>
          </div>
          <div className="flex justify-between lg:gap-x-[5vw]">
            <a
              className="underline leading-4 font-medium text-[1rem] text-[#3730A3] "
              href="https://github.com/KubiBatuOner/fsweb-s10g3-redux-watchlist"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="underline leading-4 font-medium text-[1rem] text-[#3730A3] "
              href="https://fsweb-s10g3-redux-watchlist-git-main-kubibatuoner.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[28%] gap-y-[3vh] lg:w-[85%] lg:items-center lg:gap-y-[5vh] lg:my-0 lg:mx-auto sm:gap-y-[2vh] sm:w-[100%]">
          <a
            href="https://fsweb-s10-challenge-chi.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="max-w-[100%] rounded-[18px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
              src={diary}
              alt="diary"
            />
          </a>
          <h4 className="text-[1.875rem] font-medium leading-7 text-[#4338CA]">
            Diary
          </h4>
          <p className="font-normal text-[1rem] leading-[150%] lg:text-[1rem] lg:leading-[1.5rem] lg:text-center sm:w-[85%]">
            {" "}
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="flex gap-x-[0.5vw] lg:gap-x-[2vw]">
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              react
            </p>
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              tailwind
            </p>
            <p className="border border-solid border-[#3730A3] text-[#3730A3] py-[6px] px-[18px] text-[0.875rem] rounded font-medium">
              axios
            </p>
          </div>
          <div className="flex justify-between lg:gap-x-[5vw]">
            <a
              className="underline leading-4 font-medium text-[1rem] text-[#3730A3] "
              href="https://github.com/KubiBatuOner/fsweb-s10-challenge"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className="underline leading-4 font-medium text-[1rem] text-[#3730A3] "
              href="https://fsweb-s10-challenge-chi.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
