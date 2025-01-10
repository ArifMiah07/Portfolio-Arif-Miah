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
// import { TbMenuOrder } from "react-icons/tb";
import { CgMenuLeft } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

// import { SiGmail } from 'react-icons/si';
// import Dropdown from '../Dropdown/Dropdown';

const LeftSideBar = () => {
  const [sideBarClose, setSideBarClose] = useState(false);
  const [nightModeClose, setNightModeClose] = useState(false);
  const [settingModeClose, setSettingModeClose] = useState(false);
  const [startClose, setStartClose] = useState(false);
  const [view, setView] = useState(false);
  // const [viewEyes, setViewEyes] = useState(10);
  const [navbarClose, setNavbarClose] = useState(false);

  const viewEyes = "1.4k";

  const handleNavbarTToggle = () => {
    console.log("clicked");
    setNavbarClose(!navbarClose);
  };

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
  // console.log(viewEyes);

  const navLinks = (
    <>
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
    </>
  );

  const smLinks = (
    <>
      <FaGithub className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
      <FaLinkedin className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
      <MdEmail className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
      <FaXTwitter className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
      <TbFileCv className="text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out" />
    </>
  );

  return (
    <div
      className={`bg-[#60A15680] p-1 lg:p-5 flex flex-row justify-between items-center lg:flex-col lg:gap-3 `}>
      <div className="flex justify-center items-center   ">
        <img
          className="shadow-xl drop-shadow-xl rounded-full w-[40px] md:w-[120px] lg:w-[160px] xl:w-[180px] xl:h-[160.28]  "
          src={profileImg}
          alt="profile image of arif miah"
        />
      </div>
      {/* settings / users interactions */}
      <div className="flex flex-row justify-between items-center gap-1 lg:justify-evenly lg:mt-2">
        {/* sidebar folding / Drawer */}
        <div
          onClick={handleSideBar}
          className="flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 ">
          {sideBarClose ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </div>
        {/* night mode toggle / theme */}
        <div
          onClick={handleNightMode}
          className="flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 ">
          {nightModeClose ? <CiBrightnessDown /> : <GiNightSky />}
        </div>
        {/* apply settings */}
        <div
          onClick={handleSettingMode}
          className="flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 ">
          {settingModeClose ? (
            <div className="relative">
              {" "}
              <IoSettings className="" />{" "}
              <div className="absolute top-50 right-50 bg-sky-300 p-5 rounded-xl ">
                {" "}
                <h1 className="text-center">Customization Setting</h1>
                <div>
                  <ul className="border border-red-400 bg-sky-200 rounded-lg p-1">
                    <li className="border-b-2 border-green-700 hover:border-b-2 hover:border-green-300 hover:p-2 hover:text-center cursor-pointer hover:bg-blue-700 hover:transition-all hover:rounded-md">
                      Font Size
                    </li>
                    <li className="border-b-2 border-green-700 hover:border-b-2 hover:border-green-300 hover:p-2 hover:text-center cursor-pointer hover:bg-blue-700 hover:transition-all hover:rounded-md">
                      Front Family
                    </li>
                    <li className="border-b-2 border-green-700 hover:border-b-2 hover:border-green-300 hover:p-2 hover:text-center cursor-pointer hover:bg-blue-700 hover:transition-all hover:rounded-md">
                      Color
                    </li>
                    <li className="border-b-2 border-green-700 hover:border-b-2 hover:border-green-300 hover:p-2 hover:text-center cursor-pointer hover:bg-blue-700 hover:transition-all hover:rounded-md">
                      Mode
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
        </div>
        {/* give star  */}
        <div
          onClick={handleStar}
          className={`flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 `}>
          {startClose ? (
            <FaStar className="text-yellow-300" />
          ) : (
            <CiStar className="" />
          )}
        </div>
        {/* show website view */}
        <div
          onMouseEnter={handleView}
          className={`flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 text-[15px] hover:text-[14px] hover:transition-all hover:delay-75 `}>
          {view ? viewEyes : <PiEyes />}
        </div>
      </div>
      {/* footer */}
      <div>
        {/* sm */}
        <div onClick={handleNavbarTToggle} className="lg:hidden">
          {navbarClose ? (
            <div className="sm:flex sm:items-center sm:justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 ">
              <CgMenuLeft />

              <div className="relative">
                <div className=" flex flex-col absolute  right-0 z-50 ">
                  {/* nav */}
                  {/* divider */}
                  <div className="w-full h-1 bg-red-700"></div>
                  {/* navigation links */}
                  <div className="bg-red-300 p-5">
                    <ul className="">{navLinks}</ul>
                  </div>
                  {/* end footer social media links */}
                  <div className="bg-red-200 p-5 flex items-center justify-evenly">
                    {smLinks}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 ">
              <IoMenu />
            </div>
          )}
        </div>
        {/* lg */}
        <div className="hidden lg:flex lg:flex-col w-full ">
          {/* nav */}
          {/* divider */}
          <div className="w-full h-1 bg-red-700"></div>
          {/* navigation links */}
          <div className="bg-red-300 p-5">
            <ul className="">{navLinks}</ul>
          </div>
          {/* end footer social media links */}
          <div className="bg-red-200 p-5 flex items-center justify-evenly">
            {smLinks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
