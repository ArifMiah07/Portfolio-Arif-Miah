import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Register() {
  const location = useLocation();
  const currentLocation = location.pathname;
  console.log(currentLocation);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
  };

  return (
    <div className=" ccRegisterPageBg py-6 flex flex-col items-center shadow-md justify-center w-full min-h-screen  ">
      {/* auth tab */}
      <div className="flex mb-6">
        <button
          className={`${
            currentLocation === "/v4/register"
              ? "bg-green-500 px-3 rounded-l-sm text-white text-md font-medium tracking-wide py-1 "
              : "px-3 py-1  border border-green-500 bg-white"
          } /v4/register`}>
          Register
        </button>
        <button
          className={` px-3 py-1  border border-green-500 rounded-r-sm bg-white ${
            currentLocation === "/v4/login"
              ? "bg-green-500 px-3 rounded-sm text-white text-md font-medium tracking-wide py-1  "
              : ""
          } /v4/register`}>
          Login
        </button>
      </div>
      {/* form section */}
      <div className=" cardOuterOnly w-[80vw] h-full lg:h-[80vh] p-6 ccRegisterPageSection bg-white rounded-md drop-shadow-md flex flex-row items-center justify-center flex-wrap border gap-1 border-gray-200 ">
        <form
          className=" border rounded-md flex flex-col lg:flex-row w-full h-full"
          action="">
          {/* left side div */}
          <div className=" border-r-2 border-dashed border-black/20 lg:border-0 w-full h-full flex flex-col  ">
            {/* name section */}
            <label
              className=" border-l-0 border-t-0 border-b border-r-0 w-full p-2"
              htmlFor="name">
              <span className="mr-3">Name : </span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              <span className="text-green-600 text-pretty text-sm font-semibold ">
                is a valid name {""}
              </span>
            </label>
            {/* email section */}
            <label
              className="border-l-0 border-t-0 border-b border-r-0 w-full p-2"
              htmlFor="email">
              <span className="mr-3">Email : </span>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              <span className="text-green-600 text-pretty text-sm font-semibold ">
                {" "}
                valid email {""}
              </span>
            </label>
            {/* create password section */}
            <label
              className="border-l-0 border-t-0 border-b border-r-0 w-full p-2"
              htmlFor="name">
              <span className="mr-3">Creates a Password : </span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              <span className="text-green-600 text-pretty text-sm font-semibold ">
                {" "}
                strong password hard to crack {""}
              </span>
            </label>
            {/* conform password section */}
            <label
              className="border-l-0 border-t-0 border-b border-r-0 w-full p-2"
              htmlFor="name">
              <span className="mr-3">Confirm Password</span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              <span className="text-green-600 text-pretty text-sm font-semibold ">
                password matched
              </span>
            </label>
          </div>
          {/* right side div */}
          <div className=" p-3 border-l-2 border-dashed border-black/20 w-full h-full">
            {/* check box for terms and conditions */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="captcha"
                id="captcha"
                placeholder="you are not a robot"
              />
              <span>Conform You read term and conditions</span>
            </div>
            {/* captcha section */}
            <div className=" mt-3 ">
              <label>Solve this Captcha</label>
              <div className="my-3 rounded-md w-full h-[90px] border ">
                <img src="/numbers/0.svg" alt="" />
              </div>
              <span>
                <input
                  type="text"
                  name="captcha-solution"
                  className="outline-none border  px-5 py-1 rounded-md  w-full"
                  placeholder="plz write what u r seeing in the top box"
                />
              </span>
            </div>
            {/* OAuth login and register */}
            <div className=" flex items-center w-full">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500 font-medium">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-col">
              {/* login with google */}
              <button className="flex gap-1 px-5 items-center justify-center border rounded-md mb-3  ">
                <img
                  className="w-12 h-12"
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="google logo"
                />
                <span>Sign up with Google</span>
              </button>
              {/* login with github */}
              <button className="flex gap-1 px-5 items-center justify-center border rounded-md mb-3  ">
                <img
                  className="w-10 h-10"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="github logo"
                />
                <span>Sign up with Github</span>
              </button>
            </div>
            {/* submit btn */}
            <div className="w-full  flex gap-1 items-center justify-center mb-3  ">
              <button className="w-full h-full border rounded-md px-5 py-2">
                Register
              </button>
            </div>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
}

// exploration
/**
 * {Array.from({ length: 126 }, (_, i) => (
        <div key={i} 
        className="w-[50px] h-[50px] cardVertical flex items-center text-2xl font-black 
        text-black/60  justify-center ">
          {i+1}
        </div>
    ))}
 */
