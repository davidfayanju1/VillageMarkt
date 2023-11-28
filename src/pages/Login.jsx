import React from "react";
import useTitle from "../utils/useTitle";

const Login = () => {
  useTitle("Log in - Village Markt");
  return (
    <div className="md:bg-gray-100 bg-white w-full flex h-screen items-center justify-center">
      <div className="form_container md:w-[27rem] w-full bg-white pt-[2rem] pb-[1.4rem] px-[1.4rem] rounded-[8px]">
        <h1 className="text-center md:text-[2rem] text-[1.1rem] mb-[2rem]">
          Village Markt
        </h1>
        <div className="container-element mb-[1.5rem]">
          <h2 className="text-[1.5rem] mb-[1rem] font-semibold">Log in</h2>
          <small className="block text-gray-500">
            Enter your email and we'll send you a login code
          </small>
        </div>
        <form>
          <label htmlFor="email block" className="text-[.9rem]">
            Email
          </label>
          <input
            type="text"
            className="mb-[1.5rem] w-full h-[1.5rem] outline-none rounded-[4px] px-[1.1rem] py-[1.2rem] focus:border-accent-blue border-solid border-[2px] border-gray-400"
          />
          <button
            type="submit"
            className="w-full text-center flex items-center text-white justify-center bg-blue-700 outline-none py-[.5rem] rounded-[4px]"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
