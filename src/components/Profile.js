export default function Profile() {
  return (
    <div className="flex flex-col mx-auto mt-[42px] gap-y-[5vh] border-y-[0.1rem] border-solid border-[#bab2e7] py-[5vh] px-0">
      <h2 className="font-bold leading-[48px] text-[3rem]">Profile</h2>
      <div className="flex gap-x-[4vw]">
        <div className="w-2/5 flex flex-col gap-y-[2vh]">
          <h4 className="text-[1.87rem] font-medium leading-7 text-[#4338ca]">
            Profile
          </h4>
          <table className="text-left w-[30vw] border-separate">
            <tr>
              <th className="pt-[0.3vw] text-[1.125rem] align-top">
                Date of Birth
              </th>
              <td className="pt-[0.3vw] pl-[1.5rem] text-[1.125rem] align-top">
                07 July 2000
              </td>
            </tr>
            <tr>
              <th className="pt-[0.3vw] text-[1.125rem] align-top">Location</th>
              <td className="pt-[0.3vw] pl-[1.5rem] text-[1.125rem] align-top">
                Bursa
              </td>
            </tr>
            <tr>
              <th className="pt-[0.3vw] text-[1.125rem] align-top">
                Education
              </th>
              <td className="pt-[0.3vw] pl-[1.5rem] text-[1.125rem] align-top">
                Bahçeşehir University/Computer Engineering
              </td>
            </tr>
            <tr>
              <th className="pt-[0.3vw] text-[1.125rem] align-top">
                Preferred Position
              </th>
              <td className="pt-[0.3vw] pl-[1.5rem] text-[1.125rem] align-top">
                Full-Stack Developer
              </td>
            </tr>
          </table>
        </div>
        <div className="flex flex-col gap-y-[1.5rem] w-1/2">
          <h4 className="text-[1.87rem] font-medium leading-7 text-[#4338ca]">
            About Me
          </h4>
          <p className="font-normal text-[1.125rem] leading-[150%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}
