import React from "react";
import { useForm } from "react-hook-form";
import img from "../Assets/Img.svg";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <div class="container px-5  mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto h-58 ">
              <form
                class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl py-12 "
                onSubmit={handleSubmit(onSubmit)}
              >
                <p class="text-lg font-medium ">SignUp Form</p>
                <div className=" w-full max-w-xs ">
                  <label className="label"></label>
                  <input
                    type="text"
                    placeholder="Write First Name"
                    className="inset-x-0 bottom-0 border-b-[1px] w-full border-[##A4A4A4]"
                    {...register("first_name", {
                      required: {
                        value: true,
                        message: "Name is require",
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
                <br />
                <div className="w-full max-w-xs">
                  <label className="label"></label>
                  <input
                    type="text"
                    placeholder="Write Last Name"
                    className="inset-x-0 bottom-0 border-b-[1px] w-full border-[##A4A4A4]"
                    {...register("last_name", {
                      required: {
                        value: true,
                        message: "Name is require",
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

                <input
                  className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600  focus:outline-none focus:ring active:text-indigo-500"
                  type="submit"
                  value="Signup"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
