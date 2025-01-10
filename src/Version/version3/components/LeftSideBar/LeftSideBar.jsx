import profileImg from "../../../../../public/assets/profile-removebg-preview.png";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useState } from "react";
import { GiNightSky } from "react-icons/gi";

import { CiBrightnessDown } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";

import { IoSettingsOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { PiEyes } from "react-icons/pi";

// import { SiGmail } from 'react-icons/si';
// import Dropdown from '../Dropdown/Dropdown';

const LeftSideBar = () => {
  const [sideBarClose, setSideBarClose] = useState(false);
  const [nightModeClose, setNightModeClose] = useState(false);
  const [settingModeClose, setSettingModeClose] = useState(false);
  const [startClose, setStartClose] = useState(false);

  // const [viewEyes, setViewEyes] = useState(10);

  const [view, setView] = useState(false);

  const viewEyes = "1.4k";

  const handleView = () => {
    console.log("hovered");
    setView(!view);
  };

  const handleStar = () => {
    console.log("hello");
    setStartClose(!startClose);
  };

  const handleSettingMode = () => {
    console.log("clicked");
    setSettingModeClose(!settingModeClose);
  };

  const handleSideBar = () => {
    console.log("clicked");
    setSideBarClose(!sideBarClose);
  };
  const handleNightMode = () => {
    console.log("clicked");
    setNightModeClose(!nightModeClose);
  };
  console.log(viewEyes);
  return (
    <div className={`bg-[#60A15680] lg:p-5 `}>
      <div className="flex justify-center items-center   ">
        <img
          className="w-[40px] md:w-[120px] lg:w-[160px] xl:w-[180px] xl:h-[160.28]  "
          src={profileImg}
          alt="profile image of arif miah"
        />
      </div>
      <div className="flex items-center justify-evenly mt-2">
        <div
          onClick={handleSideBar}
          className="flex items-center justify-center bg-green-50 rounded-full w-10 h-10 ">
          {sideBarClose ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </div>
        <div
          onClick={handleNightMode}
          className="flex items-center justify-center bg-green-50 rounded-full w-10 h-10 ">
          {nightModeClose ? <CiBrightnessDown /> : <GiNightSky />}
        </div>
        <div
          onClick={handleSettingMode}
          className="flex items-center justify-center bg-green-50 rounded-full w-10 h-10 ">
          {settingModeClose ? (
            <div className="relative">
              {" "}
              <IoSettings className="" />{" "}
              <div className="absolute top-50 right-50 bg-sky-400 p-5 ">
                {" "}
                <h1>Customization Setting</h1>
                <div>
                  <ul>
                    <li>
                      abcd
                    </li>
                    <li>
                      abcd
                    </li>
                    <li>
                      abcd
                    </li>
                    <li>
                      abcd
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <IoSettingsOutline />{" "}
            </div>
          )}
          {/* {settingModeClose ?  : <div className="mt-10"> </div>} */}
        </div>
        <div
          onClick={handleStar}
          className={`flex items-center justify-center bg-green-50 rounded-full w-10 h-10 `}>
          {startClose ? (
            <FaStar className="text-yellow-300" />
          ) : (
            <CiStar className="" />
          )}
        </div>
        <div
          onMouseEnter={handleView}
          className={`flex items-center justify-center bg-green-50 rounded-full w-10 h-10 text-[15px] hover:text-[14px] hover:transition-all hover:delay-75 `}>
          {view ? viewEyes : <PiEyes />}
        </div>
      </div>
      {/* divider */}
      <div className="w-full h-1 bg-red-700"></div>
      <div>
        {/* nav */}
        <div className="bg-red-300 p-5">
          <ul className="">
            <li className="border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ">
              <Link to={"/v3/"}>Home</Link>
            </li>
            <li className="border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ">
              <Link to={"/v3/about"}>About</Link>
            </li>
            <li className="border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ">
              <Link to={"/v3/skills"}>Skills</Link>
            </li>
            <li className="border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ">
              <Link to={"/v3/projects"}>Projects</Link>
            </li>
            <li className="border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ">
              <Link to={"/v3/blogs"}>Blogs</Link>
            </li>
            <li className="border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ">
              <Link to={"/v3/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* link */}
        <div className="bg-red-200 p-5 flex items-center justify-evenly">
          <FaGithub className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
          <FaLinkedin className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
          <MdEmail className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
          <FaXTwitter className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
          <TbFileCv className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
