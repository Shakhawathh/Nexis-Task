import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = ({ switchAuth }) => {
  const [isStep, setIsStep] = useState("name");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log("update", data);
    const url = `https://test.nexisltd.com/signup`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast("Login done");
        }
      });
  };
  const handleStep = () => {
    isStep === "name" && setIsStep("contacts");
    isStep === "contacts" && setIsStep("password");
  };
  const handleBack = () => {
    isStep === "contacts" && setIsStep("name");
    isStep === "password" && setIsStep("contacts");
  };
  return (
    <div class="w-full shadow-2xl h-full flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p class="text-[20px] mb-[100px] font-medium text-center">
          SignUp Form
        </p>
        {isStep === "name" && (
          <div>
            <div className="w-full">
              <label className="label"></label>
              <input
                type="text"
                placeholder="Write First Name"
                className="mb-[65px] border-b-[1px] w-[368px] border-[##A4A4A4] outline-none ring-0 focus:border-[#3B8BEA]"
                {...register("first_name", {
                  required: {
                    value: true,
                    message: "First Name is require",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full">
              <label className="label"></label>
              <input
                type="text"
                placeholder="Write Last Name"
                className="mb-[65px] border-b-[1px] w-[368px] border-[##A4A4A4] outline-none ring-0 focus:border-[#3B8BEA]"
                {...register("last_name", {
                  required: {
                    value: true,
                    message: "Last Name is require",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
          </div>
        )}
        {isStep === "contacts" && (
          <div>
            <div className="w-full">
              <label className="label"></label>
              <input
                type="text"
                placeholder="Enter Your Number"
                className="mb-[65px] border-b-[1px] w-[368px] border-[##A4A4A4] outline-none ring-0 focus:border-[#3B8BEA]"
                {...register("phone_number", {
                  required: {
                    value: true,
                    message: "Number is require",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="w-full">
              <label className="label"></label>
              <input
                type="text"
                placeholder="Email Address"
                className="mb-[65px] border-b-[1px] w-[368px] border-[##A4A4A4] outline-none ring-0 focus:border-[#3B8BEA]"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is require",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
          </div>
        )}
        {isStep === "password" && (
          <div>
            <div className="w-full">
              <label className="label"></label>
              <input
                type="text"
                placeholder="Write password"
                className="mb-[65px] border-b-[1px] w-[368px] border-[##A4A4A4] outline-none ring-0 focus:border-[#3B8BEA]"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-700">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
          </div>
        )}
        <div className="w-[368px] mx-auto flex px-4 gap-[69px]">
          <button
            onClick={handleBack}
            type="button"
            className={`text-[12px] font-bold text-[#767676] ${
              isStep === "name" && "hidden"
            }`}
          >
            back
          </button>
          <button
            onClick={handleStep}
            type={isStep === "password" ? "submit" : "button"}
            className="text-[16px] bg-[#1678CB] border-2 border-[#1678CB] hover:bg-white hover:text-[#1678CB] rounded-[15px] py-[15px] px-[20px] text-white flex fill-white hover:fill-[#1678CB] items-center gap-[10px] shadow-lg"
          >
            {isStep === "password" ? (
              <span>SingUp</span>
            ) : (
              <div className="flex items-center gap-[10px]">
                <span>Next Step</span>
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.7071 8.20711C17.0976 7.81658 17.0976 7.18342 16.7071 6.79289L10.3431 0.428933C9.95262 0.0384087 9.31946 0.0384086 8.92893 0.428933C8.53841 0.819457 8.53841 1.45262 8.92893 1.84315L14.5858 7.5L8.92893 13.1569C8.53841 13.5474 8.53841 14.1805 8.92893 14.5711C9.31946 14.9616 9.95262 14.9616 10.3431 14.5711L16.7071 8.20711ZM-8.74228e-08 8.5L16 8.5L16 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" />
                </svg>
              </div>
            )}
          </button>
        </div>
        <div className="flex items-center gap-[10px] mt-12 mx-12">
          <p>
            <small className="">
              Already have an account{" "}
              <button
                type="button"
                onClick={switchAuth}
                className="text-[#1678CB] uppercase text-base font-bold "
              >
                Login Here
              </button>
            </small>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
