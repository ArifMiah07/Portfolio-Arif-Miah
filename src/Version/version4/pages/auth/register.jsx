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
    <div className=" border ccRegisterPageBg py-6 flex flex-col items-center shadow-md justify-center w-full min-h-screen  ">
      {/* auth tab */}
      <div className="flex gap-6 mb-6">
        <button className={`${currentLocation === '/v4/register' ? 'bg-green-600 ' : ''} /v4/register`}>Register</button>
        <button className={`${currentLocation === '/v4/login' ? 'bg-green-500 ' : ''} /v4/register`} >Login</button>
      </div>
      <div className=" cardOuterOnly w-[80vw] h-full lg:h-[80vh] p-6 ccRegisterPageSection bg-white rounded-md drop-shadow-md flex flex-row items-center justify-center flex-wrap border gap-1 border-gray-200 ">
        <form
          className=" border flex flex-col lg:flex-row w-full h-full"
          action="">
          {/* left side div */}
          <div className=" border-r-2 border-dashed border-black/20 lg:border-0 w-full h-full flex flex-col items-start justify-evenly ">
            <label className=" w-full p-2" htmlFor="name">
              <span className="mr-3">Name : </span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              <span className="text-green-600 text-pretty text-md font-semibold ">
                is a valid name {""}
              </span>
            </label>
            <label className="w-full p-2" htmlFor="email">
              <span className="mr-3">Email : </span>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              <span className="text-green-600 text-pretty text-md font-semibold ">
                {" "}
                valid email {""}
              </span>
            </label>
            <label className="w-full p-2" htmlFor="name">
              <span className="mr-3">Creates a Password : </span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              <span className="text-green-600 text-pretty text-md font-semibold ">
                {" "}
                strong password hard to crack {""}
              </span>
            </label>
            <label className="w-full p-2" htmlFor="name">
              <span className="mr-3">Confirm Password</span>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              <span className="text-green-600 text-pretty text-md font-semibold ">
                password matched
              </span>
            </label>
          </div>
          {/* right side div */}
          <div className=" p-6 border-l-2 border-dashed border-black/20 w-full h-full">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="captcha"
                id="captcha"
                placeholder="you are not a robot"
              />
              <span>Conform You read term and conditions</span>
            </div>
            <div>
              <label>solve this captcha</label>
              <div className="my-4 w-full h-[90px] border border-gray-300  ">
                <img src="placeholder.png" alt="" />
              </div>
              <span>
                <input
                  type="text"
                  name="captcha-solution"
                  className="outline-none border border-black/30 px-5 py-1 rounded-md  w-full"
                  placeholder="plz write what u r seeing in the top box"
                />
              </span>
            </div>
            {/* OAuth login and register */}
            <div className="my-4 flex items-center w-full">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500 font-medium">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-col">
              {/* login with google */}
              <button className="flex gap-1 px-5 items-center justify-center border rounded-md mb-4  ">
                <img
                  className="w-12 h-12"
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="google logo"
                />
                <span>Sign up with Google</span>
              </button>
              {/* login with github */}
              <button className="flex gap-1 px-5 items-center justify-center border rounded-md my-4  ">
                <img
                  className="w-12 h-12"
                  src="https://e7.pngegg.com/pngimages/646/324/png-clipart-github-computer-icons-github-logo-monochrome-thumbnail.png"
                  alt="google logo"
                />
                <span>Sign up with Github</span>
              </button>
            </div>
            {/* submit btn */}
            <div className="flex gap-1 px-5 items-center justify-center border rounded-md my-4  ">
              <button className="">Submit</button>
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
