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

// import { SiGmail } from 'react-icons/si';
// import Dropdown from '../Dropdown/Dropdown';

const LeftSideBar = () => {
  const [sideBarClose, setSideBarClose] = useState(false);
  const [nightModeClose, setNightModeClose] = useState(false);

  const handleSideBar = () => {
    console.log("clicked");
    setSideBarClose(!sideBarClose);
  };
  const handleNightMode = () => {
    console.log("clicked");
    setNightModeClose(!nightModeClose);
  };

  return (
    <div className={`bg-[#60A15680] lg:p-5 `}>
      <div className="bg-red-500 w-[40px] md:w-[120px] lg:w-full border border-green-500 ">
        <img className="" src={profileImg} alt="" />
      </div>
      <div className="flex items-center justify-evenly mt-2">
        <div
          onClick={handleSideBar}
          className="w-4 h-4 bg-red-100 rounded-full ">
          {sideBarClose ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </div>
        <div
          onClick={handleNightMode}
          className="w-4 h-4 bg-red-100 rounded-full ">
          {nightModeClose ? <CiBrightnessDown /> : <GiNightSky />}
        </div>
        <div className="w-4 h-4 bg-red-100 rounded-full "></div>
        <div className="w-4 h-4 bg-red-100 rounded-full "></div>
      </div>
      {/* divider */}
      <div className="w-full h-1 bg-red-700"></div>
      <div>
        {/* nav */}
        <div className="bg-red-300 p-5">
          <ul>
            <li>
              <Link to={"/v3/"}>Home</Link>
            </li>
            <li>
              <Link to={"/v3/about"}>About</Link>
            </li>
            <li>
              <Link to={"/v3/skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/v3/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/v3/blogs"}>Blogs</Link>
            </li>
            <li>
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
