import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import el from "../images/el.svg";

export default function Footer(props) {
  const { formSuccess } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const cx = !isValid
    ? "cursor-not-allowed bg-[#cfd2cf]"
    : "cursor-pointer bg-[#3730a3]";

  const onSubmit = (data) => {
    console.log(data);
    formSuccess();
    reset();
  };
  const sendEmail = (formData) => {
    onSubmit(formData);
    emailjs.send("service_xtb14ei", "template_5z3refi", formData).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    reset();
  };

  return (
    <div
      className="outerContainer bg-[#f9f9f9] py-[12vh] flex items-start lg:flex lg:flex-col lg:items-center lg:gap-y-[5vh]"
      id="hire-me"
    >
      <div className="innerContainer w-[80%] flex flex-col gap-y-[8vh] ml-[10%] lg:w-[85%] lg:items-center lg:m-0">
        <h2 className="text-[2.625rem] font-bold w-[80%] leading-[52.5px] text-[#1F2937] lg:w-[100%] lg:m-0 lg:text-center lg:text-[2.5rem]">
          Let's work together on your next product
        </h2>
        <div className="emailContainer flex justify-between items-center w-[85%] gap-x-[2vw] lg:flex-col lg:gap-y-[3vh] lg:items-center">
          <a
            className="text-[#af0c48] underline font-medium text-[1.25rem] flex"
            href="mailto:kbatuhanoner@yahoo.com"
          >
            <img className="pr-2" src={el} alt="el" />
            kbatuhanoner@yahoo.com
          </a>
          <div className="linksContainer flex justify-end gap-x-[3vw] w-[70%] lg:justify-center">
            <a
              className="githubLink text-[#00ab6b] font-medium leading-[27px] text-[1.125rem]"
              href="https://github.com/KubiBatuOner"
            >
              Github
            </a>
            <a
              className="linkedinlink text-[#0077b5] font-medium leading-[27px] text-[1.1rem]"
              href="https://www.linkedin.com/in/kubilay-batuhan-öner-a45130234/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <form
        className="flex flex-col w-[40%] gap-y-[2vh] mr-[10%] lg:m-0 lg:gap-y-[4vh] sm:w-[70%]"
        onSubmit={handleSubmit(sendEmail)}
        href="mailto:kbatuhanoner@yahoo.com"
      >
        <h2 className="text-[#1f2937] text-[1.5rem] font-bold lg:text-center">
          Contact me
        </h2>
        <label
          className="label flex flex-col font-medium lg:text-center"
          htmlFor="name"
        >
          Full Name
          <input
            className="input border border-solid border-[#3730a3] rounded-md py-[1vh] px-[8px] text-[#6b7280] text-[0.85rem]"
            type="text"
            name="name"
            id="name"
            {...register("name", {
              required: "Please enter your name",
              maxLength: {
                value: 25,
                message: "Maximum 25 characters allowed",
              },
            })}
          />
        </label>
        {errors.name && (
          <p className="formErrorMessage text-[#af0c48] text-[0.75rem]">
            {errors.name.message}
          </p>
        )}
        <label
          className="label flex flex-col font-medium lg:text-center"
          htmlFor="email"
        >
          E-mail
          <input
            className="input border border-solid border-[#3730a3] rounded-md py-[1vh] px-[8px] text-[#6b7280] text-[0.85rem]"
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "E-mail address is required",
            })}
          />
        </label>
        {errors.email && (
          <p className="formErrorMessage text-[#af0c48] text-[0.75rem]">
            {errors.email.message}
          </p>
        )}
        <label
          className="label flex flex-col font-medium lg:text-center"
          htmlFor="message"
        >
          Message
          <textarea
            className="textArea border border-solid border-[#3730a3] rounded-md py-[1vh] px-[8px] text-[#6b7280]"
            name="message"
            id="message"
            {...register("message", {
              required: "This is required field",
              maxLength: {
                value: 200,
                message: "Maximum 200 characters allowed",
              },
            })}
          />
        </label>
        {errors.message && (
          <p className="formErrorMessage text-[#af0c48] text-[0.75rem]">
            {errors.message.message}
          </p>
        )}
        <button
          className={`${cx} border border-solid bg-[#3730a3] w-[50%] mx-auto rounded-md py-[1vh] text-[#ffffff] font-medium`}
          type="submit"
          disabled={!isValid}
        >
          Send
        </button>
      </form>
    </div>
  );
}
