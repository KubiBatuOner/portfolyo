export default function Profile() {
  return (
    <div className="w-[80%] mx-auto flex flex-col mt-[42px] gap-y-[5vh] border-y-[0.1rem] border-solid border-[#bab2e7] py-[42px] px-0">
      <h2 className="font-bold leading-[48px] text-[3rem] lg:text-center lg:text-[2.5rem]">
        Profile
      </h2>
      <div className="flex gap-x-[4vw] lg:flex-col lg:items-center lg:gap-y-[5vh]">
        <div className="w-2/5 flex flex-col gap-y-[2vh] lg:w-[80%] lg:items-center">
          <h4 className="text-[1.87rem] font-medium leading-7 text-[#4338ca] ">
            Profile
          </h4>
          <table className="text-left w-[30vw] border-separate lg:w-[100%] lg:items-center lg:pl-[7vw] sm:w-[70vw]">
            <tr>
              <th className="pt-[0.3vw] text-[1.125rem] align-top lg:pt-[3vh] lg:text-[1.2rem]">
                Date of Birth
              </th>
              <td className="pt-[0.3vw] pl-[1.5rem] text-[1.125rem] align-top lg:pt-[3vh] lg:text-[1.2rem]">
                07 July 2000
              </td>
            </tr>
            <tr>
              <th className="pt-[0.3vw] text-[1.125rem] align-top lg:pt-[3vh] lg:text-[1.2rem]">
                Location
              </th>
              <td className="pt-[0.3vw] pl-[1.5rem] text-[1.125rem] align-top lg:pt-[3vh] lg:text-[1.2rem]">
                Bursa
              </td>
            </tr>
            <tr>
              <th className="pt-[0.3vw] text-[1.125rem] align-top lg:pt-[3vh] lg:text-[1.2rem]">
                Education
              </th>
              <td className="pt-[0.3vw] pl-[1.5rem] text-[1.125rem] align-top lg:pt-[3vh] lg:text-[1.2rem]">
                Bahçeşehir University/Computer Engineering
              </td>
            </tr>
            <tr>
              <th className="pt-[0.3vw] text-[1.125rem] align-top lg:pt-[3vh] lg:text-[1.2rem]">
                Preferred Position
              </th>
              <td className="pt-[0.3vw] pl-[1.5rem] text-[1.125rem] align-top lg:pt-[3vh] lg:text-[1.2rem]">
                Full-Stack Developer
              </td>
            </tr>
          </table>
        </div>
        <div className="flex flex-col gap-y-[1.5rem] w-1/2 lg:items-center lg:w-[70%] sm:w-[80%]">
          <h4 className="text-[1.87rem] font-medium leading-7 text-[#4338ca]">
            About Me
          </h4>
          <p className="font-normal text-[1.125rem] leading-[150%] lg:items-center lg:text-center lg:text-[1.2rem]">
            My name is Kubilay Batuhan Öner. I am 23 years old. I studied
            computer engineering at Bahçeşehir University and I graduated in
            2022.
          </p>
          <p className="font-normal text-[1.125rem] leading-[150%] lg:items-center lg:text-center lg:text-[1.2rem]">
            I've always had a passion for software. I always do research while
            doing a project. I am very curious about learning new information. I
            have the competence to create great products with these features.
          </p>
        </div>
      </div>
    </div>
  );
}
