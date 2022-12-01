import React from "react";
import { useForm } from "react-hook-form";
import img from "../Assets/Img.svg";
import logo from "../Assets/Logo.svg";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data, "update done");
  };
  return (
    <div>
      <div>
        <div class="container mx-auto flex px-5  md:flex-row flex-col items-center gap-32">
          <div className="mt-20 ">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <div>
              <div class="max-w-screen-2xl px-4 md:px-8 mx-auto ">
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
    </div>
  );
};

export default Signup;
