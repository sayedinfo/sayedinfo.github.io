"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { person } from "../data";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const contacts = person.contact;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    const { name, email, subject, message } = data;
    const formData = {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email,
      subject,
      message,
    };

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    console.log("SERVICE ID", SERVICE_ID);
    console.log("TEMPLATE ID", TEMPLATE_ID);
    console.log("USER ID", USER_ID);
    try {
      setIsLoading(true);
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        USER_ID
      );

      console.log("EmailJs response:", JSON.stringify(result));

      if (result.status === 200) {
        let message = "Message sent successfully";
        toast.success(message, {
          hideProgressBar: true,
          theme: "colored",
        });
      }
    } catch (error) {
      let message = error.text;
      toast.success(message, {
        hideProgressBar: true,
        theme: "colored",
      });
      console.log("Error sending email:", error);
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-20">
      <ToastContainer transition={Slide} />
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-theme dark:text-[#f5f5f5] font-bold capitalize">
          contact
        </div>
        <div className="line bg-[#333333] w-[80px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[40px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto md:flex items-center gap-8 mt-10">
        <div className="text-info lg:flex-[0.3_1_0%]">
          {contacts.map((contact) => (
            <div className="phone flex gap-5 mb-4 last:mb-0" key={contact.name}>
              <div className="icon">{contact.icon}</div>
              <div className="text text-theme dark:text-[#f5f5f5] text-lg">
                {contact.text}
              </div>
            </div>
          ))}
        </div>
        <div className="contact-form lg:flex-[0.6_1_0%] md:flex-[1_1_0%] md:mt-0 mt-5">
          <div className="header mb-5">
            <div className="contact-title text-xl text-theme dark:text-[#f5f5f5] font-bold capitalize">
              how can i help you?
            </div>
            <div className="line bg-[#333333] w-[190px] h-[2px] mt-1">
              <div className="bg-blue-500 w-[40px] h-[2px]"></div>
            </div>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="md:flex gap-5">
                <div className="flex-1">
                  <div className="relative mb-4">
                    <input
                      type="text"
                      className="bg-transparent border-2 border-[#555] h-11 w-full text-[#eee] rounded focus:outline-0 p-2.5"
                      placeholder="Full Name"
                      {...register("name", {
                        required: "Full name is required",
                      })}
                    />

                    {errors.name && (
                      <p className="text-xs text-red-500 absolute top-4 right-4">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      className="bg-transparent border-2 border-[#555] h-11 w-full text-[#eee] rounded focus:outline-0 p-2.5"
                      placeholder="Email Address"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />

                    {errors.email && (
                      <p className="text-xs text-red-500 absolute top-4 right-4">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="relative mb-4">
                    <input
                      type="text"
                      className="bg-transparent border-2 border-[#555] h-11 w-full text-[#eee] rounded focus:outline-0 p-2.5"
                      placeholder="Subject"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    />

                    {errors.subject && (
                      <p className="text-xs text-red-500 absolute top-4 right-4">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative mb-4">
                    <textarea
                      className="bg-transparent border-2 border-[#555] w-full h-[164px] text-[#eee] rounded focus:outline-0 p-2.5"
                      placeholder="Message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>

                    {errors.message && (
                      <p className="text-xs text-red-500 absolute top-4 right-4">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="button">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#333] text-white border-2 border-blue-400 cursor-pointer rounded-3xl px-4 
                  py-2 hover:bg-blue-400 transition duration-300 ease-linear"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-x-2">
                      <svg
                        aria-hidden="true"
                        class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span>sending...</span>
                    </div>
                  ) : (
                    <span>send message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
