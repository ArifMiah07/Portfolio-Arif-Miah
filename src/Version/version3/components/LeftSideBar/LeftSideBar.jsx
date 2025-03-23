// import profileImg from "../../../../../public/assets/profile-removebg-preview.png";
// import { Link } from "react-router-dom";
// import { FaAngleDoubleRight, FaGithub } from "react-icons/fa";
// import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { TbFileCv } from "react-icons/tb";
// import { FaAngleDoubleLeft } from "react-icons/fa";
// import { useState } from "react";
// import { GiNightSky } from "react-icons/gi";
// import { CiBrightnessDown } from "react-icons/ci";
// import { IoSettings } from "react-icons/io5";
// import { IoSettingsOutline } from "react-icons/io5";
// import { CiStar } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import { PiEyes } from "react-icons/pi";
// // import { TbMenuOrder } from "react-icons/tb";
// import { CgMenuLeft } from "react-icons/cg";
// import { IoMenu } from "react-icons/io5";
// // import { SiGmail } from 'react-icons/si';
// // import Dropdown from '../Dropdown/Dropdown';

// const LeftSideBar = () => {
//   const [sideBarClose, setSideBarClose] = useState(false);
//   const [nightModeClose, setNightModeClose] = useState(false);
//   const [settingModeClose, setSettingModeClose] = useState(false);
//   const [startClose, setStartClose] = useState(false);
//   let [countStar, setCountStar] = useState(1);
//   const [view, setView] = useState(false);
//   // const [viewEyes, setViewEyes] = useState(10);
//   const [navbarClose, setNavbarClose] = useState(false);

//   const viewEyes = "1.4k";

//   const handleNavbarTToggle = () => {
//     // console.log("clicked");
//     setNavbarClose(!navbarClose);
//   };

//   const handleView = () => {
//     // console.log("hovered");
//     setView(!view);
//   };

//   const handleStar = () => {
//     // console.log("hello");
//     setStartClose(!startClose);
//     setCountStar(countStar + 1);
//     if( countStar === 11){
//       setCountStar(countStar = 0)
//     }
//     // console.log(countStar);
//   };

//   const handleSettingMode = () => {
//     // console.log("clicked");
//     setSettingModeClose(!settingModeClose);
//   };

//   const handleSideBar = () => {
//     // console.log("clicked");
//     setSideBarClose(!sideBarClose);
//   };
//   const handleNightMode = () => {
//     console.log("clicked");
//     setNightModeClose(!nightModeClose);
//   };
//   // console.log(viewEyes);

//   const navLinksStyle =
//     "border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ";

//   const navLinks = (
//     <>
//       <li className={navLinksStyle}>
//         <Link to={"/v3/"}>Home</Link>
//       </li>
//       <li className={navLinksStyle}>
//         <Link to={"/v3/about"}>About</Link>
//       </li>
//       <li className={navLinksStyle}>
//         <Link to={"/v3/skills"}>Skills</Link>
//       </li>
//       <li className={navLinksStyle}>
//         <Link to={"/v3/projects"}>Projects</Link>
//       </li>
//       <li className={navLinksStyle}>
//         <Link to={"/v3/blogs"}>Blogs</Link>
//       </li>
//       <li className={navLinksStyle}>
//         <Link to={"/v3/contact"}>Contact</Link>
//       </li>
//     </>
//   );

//   const smLinksStyle =
//     "text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out";
//   const smLinks = (
//     <>
//       <FaGithub className={smLinksStyle} />
//       <FaLinkedin className={smLinksStyle} />
//       <MdEmail className={smLinksStyle} />
//       <FaXTwitter className={smLinksStyle} />
//       <TbFileCv className={smLinksStyle} />
//     </>
//   );

//   const interactionIconsStyle =
//     "flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 ";

//   const applyCustomizationStyle =
//     "border-b-2 border-green-700 hover:border-b-2 hover:border-green-300 hover:p-2 hover:text-center cursor-pointer hover:bg-blue-700 hover:transition-all hover:rounded-md";

//   return (
//     <div
//       className={`bg-[#60A15680] p-1 lg:p-5 flex sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:gap-3  `}>
//       <div className="flex justify-center items-center   ">
//         <img
//           className="shadow-xl drop-shadow-xl rounded-full w-[40px] md:w-[120px] lg:w-[160px] xl:w-[180px] xl:h-[160.28]  "
//           src={profileImg}
//           alt="profile image of arif miah"
//         />
//       </div>
//       {/* settings / users interactions */}
//       <div className="flex flex-row justify-between items-center gap-1 lg:justify-evenly lg:mt-2">
//         {/* sidebar folding / Drawer */}
//         <div onClick={handleSideBar} className={interactionIconsStyle}>
//           {sideBarClose ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
//         </div>
//         {/* night mode toggle / theme */}
//         <div onClick={handleNightMode} className={interactionIconsStyle}>
//           {nightModeClose ? <CiBrightnessDown /> : <GiNightSky />}
//         </div>
//         {/* apply settings */}
//         <div onClick={handleSettingMode} className={interactionIconsStyle}>
//           {settingModeClose ? (
//             <div className="relative">
//               {" "}
//               <IoSettings className="" />{" "}
//               <div className="absolute top-50 right-50 bg-sky-300 p-5 rounded-xl ">
//                 {" "}
//                 <h1 className="text-center">Customization Setting</h1>
//                 <div>
//                   <ul className="border border-red-400 bg-sky-200 rounded-lg p-1">
//                     <li className={applyCustomizationStyle}>Font Size</li>
//                     <li className={applyCustomizationStyle}>Front Family</li>
//                     <li className={applyCustomizationStyle}>Color</li>
//                     <li className={applyCustomizationStyle}>Mode</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div>
//               {" "}
//               <IoSettingsOutline />{" "}
//             </div>
//           )}
//         </div>
//         {/* give star  */}
//         <div
//           onClick={handleStar}
//           className={`flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full  w-10 h-10  `}>
//           {startClose ? (
//             <FaStar
//               className={`${
//                 countStar === 2
//                   ? "w-10 h-10 text-yellow-300 "
//                   : countStar === 4
//                   ? "w-12 h-12 text-pink-600"
//                   : countStar === 6
//                   ? "w-14 h-14 text-blue-600"
//                   : countStar === 8
//                   ? "w-16 h-16 text-[#26c2a3]"
//                   : countStar === 10
//                   ? "w-16 h-16 text-[#26c25d]"
//                   : ""
//               }`}
//             />
//           ) : (
//             <CiStar className="" />
//           )}
//         </div>
//         {/* show website view */}
//         <div
//           onMouseEnter={handleView}
//           className={`flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 text-[15px] hover:text-[14px] hover:transition-all hover:delay-75 `}>
//           {view ? viewEyes : <PiEyes />}
//         </div>
//       </div>
//       {/* footer */}
//       <div>
//         {/* sm */}
//         <div onClick={handleNavbarTToggle} className="lg:hidden">
//           {navbarClose ? (
//             <div className={interactionIconsStyle}>
//               <CgMenuLeft />

//               <div className="relative top-6">
//                 <div className=" flex flex-col absolute top-0 right-0  ">
//                   {/* nav */}
//                   {/* divider */}
//                   <div className="w-full h-1 bg-red-700"></div>
//                   {/* navigation links */}
//                   <div className="bg-red-300 p-5">
//                     <ul className="">{navLinks}</ul>
//                   </div>
//                   {/* end footer social media links */}
//                   <div className="bg-red-200 p-5 flex items-center justify-evenly gap-3">
//                     {smLinks}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className={interactionIconsStyle}>
//               <IoMenu />
//             </div>
//           )}
//         </div>
//         {/* lg */}
//         <div className="hidden lg:flex lg:flex-col w-full ">
//           {/* nav */}
//           {/* divider */}
//           <div className="w-full h-1 bg-red-700"></div>
//           {/* navigation links */}
//           <div className="bg-red-300 p-5">
//             <ul className="">{navLinks}</ul>
//           </div>
//           {/* end footer social media links */}
//           <div className="bg-red-200 p-5 flex items-center justify-evenly gap-3">
//             {smLinks}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftSideBar;
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
import Modal from "../Modal/Modal";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

import { ImBlog } from "react-icons/im";

import { GiSpaceShuttle } from "react-icons/gi";

import { RiContactsBook3Line } from "react-icons/ri";
import Tooltip from "../Tooltip/Tooltip";

// import { TbMenuOrder } from "react-icons/tb";
// import { CgMenuLeft } from "react-icons/cg";
// import { IoMenu } from "react-icons/io5";
// import { SiGmail } from 'react-icons/si';
// import Dropdown from '../Dropdown/Dropdown';

export const AboutIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm0 6h.01M11 12h2v6h-2z"
        />
      </svg>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const LeftSideBar = ({ handleSideBar, isSideBarClose }) => {
  // states
  const [nightModeClose, setNightModeClose] = useState(false);
  // const [settingModeClose, setSettingModeClose] = useState(false);
  const [startClose, setStartClose] = useState(false);
  let [countStar, setCountStar] = useState(1);
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);

  const [settingModeOpen, setSettingModeOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // Tracks the active modal
  const [fontSize, setFontSize] = useState(16); // State for Font Size
  const [fontFamily, setFontFamily] = useState("Arial"); // State for Font Family
  const [selectedColor, setSelectedColor] = useState("blue"); // State for Color
  const [mode, setMode] = useState("Light"); // State for Mode

  // handles

  // Toggle the settings panel
  // const handleSettingMode = () => {
  //   setSettingModeOpen(!settingModeOpen);
  // };

  // Open a specific modal
  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  // Close the modal
  const closeModal = () => {
    setActiveModal(null);
  };
  // const [viewEyes, setViewEyes] = useState(10);
  // const [navbarClose, setNavbarClose] = useState(false);

  const viewEyes = "1.4k";
  // Toggle the visibility of the settings panel
  const handleSettingMode = () => {
    setSettingModeOpen(!settingModeOpen);
  };

  // Open the color modal
  // const handleCngColor = () => {
  //   setColorModalOpen(true);
  // };

  // Close the color modal
  // const closeColorModal = () => {
  //   setColorModalOpen(false);
  // };

  // const closeColorModal = () => {
  //   setColorModalOpen(false);
  // };

  // const handleNavbarTToggle = () => {
  //   // console.log("clicked");
  //   setNavbarClose(!navbarClose);
  // };

  const handleView = () => {
    // console.log("hovered");
    setView(!view);
  };

  const handleView2 = () => {
    // console.log("hovered");
    setView2(!view2);
  };

  const handleStar = () => {
    // console.log("hello");
    setStartClose(!startClose);
    setCountStar(countStar + 1);
    if (countStar === 11) {
      setCountStar((countStar = 0));
    }
    // console.log(countStar);
  };

  // const handleSettingMode = () => {
  //   // console.log("clicked");
  //   setSettingModeClose(!settingModeClose);
  // };

  const handleNightMode = () => {
    console.log("clicked");
    setNightModeClose(!nightModeClose);
  };

  // const handleCngColor = () => {
  //   console.log("clicked");
  //   setColor(true);
  // };
  // console.log(viewEyes);

  // styles
  const navLinksStyle =
    "border-b-2 z-50 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ";
  const navLinksStyleFF = "text-2xl";
  // following DRY method
  const customClassesForNavLinks = `${navLinksStyle}  ${
    isSideBarClose ? navLinksStyle : navLinksStyleFF
  }`;

  const smLinksStyle =
    "text-lg xl:text-2xl hover:xl:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out";
  const interactionIconsStyle =
    "flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 ";
  const interactionIconsStyleFF =
    "border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm";
  // following Dry method
  const customClassesForUserInteractions = `${interactionIconsStyle} ${
    isSideBarClose ? interactionIconsStyle : interactionIconsStyleFF
  }`;

  const applyCustomizationStyle =
    "border-b-2 border-green-700 hover:border-b-2 hover:border-green-300 hover:p-2 hover:text-center cursor-pointer hover:bg-blue-700 hover:transition-all hover:rounded-md";

  // Links
  const navLinks = (
    <>
      <li className={` ${customClassesForNavLinks}`}>
        <Link to={"/v3/"}>
          {isSideBarClose ? (
            "Home"
          ) : (
            <Tooltip text="Home">
              {" "}
              <FaHome />
            </Tooltip>
          )}
        </Link>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <Link to={"/v3/about"}>
          {isSideBarClose ? (
            "About"
          ) : (
            <Tooltip text="About">
              <FaUserTie />
            </Tooltip>
          )}
        </Link>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <Link to={"/v3/skills"}>
          {isSideBarClose ? (
            "Skills"
          ) : (
            <Tooltip text="Skills">
              <GiSkills />
            </Tooltip>
          )}
        </Link>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <Link to={"/v3/projects"}>
          {isSideBarClose ? (
            "Projects"
          ) : (
            <Tooltip text="Projects">
              {" "}
              <GiSpaceShuttle />
            </Tooltip>
          )}
        </Link>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <Link to={"/v3/blogs"}>
          {isSideBarClose ? (
            "Blogs"
          ) : (
            <Tooltip text="Blogs">
              {" "}
              <ImBlog />
            </Tooltip>
          )}
        </Link>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <Link to={"/v3/contact"}>
          {isSideBarClose ? (
            "Contact"
          ) : (
            <Tooltip text="Contact">
              {" "}
              <RiContactsBook3Line />
            </Tooltip>
          )}
        </Link>
      </li>
    </>
  );

  const smLinks = (
    <>
      <li className={` ${customClassesForNavLinks}`}>
        <a href={"https://github.com/ArifMiah07"}>
          {isSideBarClose ? (
            <FaGithub className={smLinksStyle} />
          ) : (
            <Tooltip text="Github Profile">
              {" "}
              <FaGithub className={smLinksStyle} />
            </Tooltip>
          )}
        </a>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <a href="https://github.com/ArifMiah07" target="_blank">
          {isSideBarClose ? (
            <FaLinkedin className={smLinksStyle} />
          ) : (
            <Tooltip text="linkedIn Profile">
              <FaLinkedin className={smLinksStyle} />
            </Tooltip>
          )}
        </a>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <a href={"https://github.com/ArifMiah07"}>
          {isSideBarClose ? (
            <MdEmail className={smLinksStyle} />
          ) : (
            <Tooltip text="EMail to Me">
              {" "}
              <MdEmail className={smLinksStyle} />
            </Tooltip>
          )}
        </a>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <a href="https://github.com/ArifMiah07" target="_blank">
          {isSideBarClose ? (
            <FaXTwitter className={smLinksStyle} />
          ) : (
            <Tooltip text="Twitter/X Profile">
              <FaXTwitter className={smLinksStyle} />
            </Tooltip>
          )}
        </a>
      </li>
      <li className={` ${customClassesForNavLinks}`}>
        <a href="https://github.com/ArifMiah07" target="_blank">
          {isSideBarClose ? (
            <TbFileCv className={smLinksStyle} />
          ) : (
            <Tooltip text="My CV/Resume">
              <TbFileCv className={smLinksStyle} />
            </Tooltip>
          )}
        </a>
      </li>
    </>
  );

  const NavForSMDevice = (
    <>
      {/* footer */}
      <div
        className={`bg-[#60A15680] 
        h-[70px] md:h-[50px] lg:h-full xl:h-full 2xl-h-full 
        p-5 md:p-3 lg:p-5 xl:p-6 2xl:p-8
        flex flex-row md:flex md:flex-row lg:flex lg:flex-col xl:flex xl:flex-col 2xl:flex-col
        justify-between items-center md:justify-between md:items-center lg:justify-evenly lg:items-center
        gap-1 md:gap-2 lg:gap-3 
        ${isSideBarClose ? "w-full" : "w-full"}`}>
        <div className="w-12 h-12 rounded-full border border-green-500">
          <h1>Logo</h1>
        </div>
        <div>
          <h1>Navigation</h1>
        </div>
        <div>
          <h1>Profiles</h1>
        </div>
        <div>
          <h1>Settings</h1>
        </div>
      </div>
    </>
  );

  const contents = (
    <>
      {/* footer */}
      <div className=" ">
        {/* lg */}
        <div
          className="w-full h-full 
          flex md:flex-row lg:flex-col xl:flex-col 2xl:flex-col  ">
          {/* nav */}
          {/* divider */}
          <div
            className={`hidden md:block lg:hidden xl:hidden 2xl:hidden w-full h-1 rounded-t-lg ${
              isSideBarClose ? "bg-red-700" : "bg-red-700"
            }`}>
            {/*  */}
          </div>
          {/* navigation links */}
          {/*  */}
          <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
            <h1>Navigation</h1>
          </div>
          {/*  */}
          <div
            className={`block md:hidden lg:block xl:block 2xl:block p-0 xl:p-5 ${
              isSideBarClose ? "bg-red-300" : "bg-red-300"
            }`}>
            <ul
              className={` ${
                isSideBarClose
                  ? "flex flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col"
                  : "flex flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col justify-between items-center gap-2"
              }`}>
              {navLinks}
            </ul>
          </div>
          {/* end footer social media links */}
          {/*  */}
          <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden mx-8">
            <h1 >Profiles</h1>
          </div>
          {/*  */}
          <div
            className={`flex md:hidden lg:block xl:block 2xl:block p-1 md:p-0 lg:p-5 xl:p-5 2xl:p-6 items-center justify-evenly gap-3 rounded-b-lg ${
              isSideBarClose ? "bg-red-200" : "bg-red-200 flex flex-col"
            }`}>
            <ul
              className={`w-full h-full flex flex-row justify-between items-center gap-3 xl:gap-5 ${
                isSideBarClose
                  ? "flex-row md:flex-row lg:flex-col xl:flex-row 2xl:flex-row p-0 "
                  : "flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col p-0"
              }`}>
              {smLinks}
            </ul>
          </div>
          {/* Show only on small devices */}
        </div>
      </div>
    </>
  );

  return (
    <div
      //  className={`bg-[#60A15680] p-1 lg:p-5 flex sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:gap-3  `}>
      className={`bg-[#60A15680] 
        h-[70px] md:h-[50px] lg:h-full xl:h-full 2xl-h-full 
        p-5 md:p-3 lg:p-5 xl:p-6 2xl:p-8
        flex flex-row md:flex md:flex-row lg:flex lg:flex-col xl:flex xl:flex-col 2xl:flex-col
        justify-between items-center md:justify-between md:items-center lg:justify-evenly lg:items-center
        gap-1 md:gap-2 lg:gap-3 
        ${isSideBarClose ? "w-full" : "w-full"}`}>
      <div className="w-[50px] md:w-[48px] lg:w-[160px] xl:w-[160px] 2xl:w-[170px] flex justify-center items-center">
  <img
    className={`shadow-xl drop-shadow-xl rounded-full 
      ${isSideBarClose ? "w-[50px] md:w-[48px] lg:w-[160px] xl:w-[160px] 2xl:w-[170px]" 
                       : "w-[50px] md:w-[48px] lg:w-[56px] xl:w-[60px] 2xl:w-[70px]"}`}
    src={profileImg}
    alt="profile image of arif miah"
  />
</div>

      {/* settings / users interactions */}
      <div className="xs:hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        <h1>Settings</h1>
      </div>
      <div
        className={`xs:block sm:block md:hidden lg:block xl:block 2xl:block justify-between items-center gap-3 lg:justify-evenly lg:mt-2 ${
          isSideBarClose
            ? "flex flex-row gap-12"
            : "flex flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col gap-6"
        }`}>
        {/* sidebar folding / Drawer */}
        <div
          onClick={handleSideBar}
          className={`${customClassesForUserInteractions}`}>
          {isSideBarClose ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </div>
        {/* night mode toggle / theme */}
        <div
          onClick={handleNightMode}
          className={`${customClassesForUserInteractions}`}>
          {nightModeClose ? <CiBrightnessDown /> : <GiNightSky />}
        </div>
        {/* apply settings */}
        <div className="relative">
          {/* Settings Icon */}
          <div
            onClick={handleSettingMode}
            className={`${customClassesForUserInteractions}`}>
            {settingModeOpen ? <IoSettings /> : <IoSettingsOutline />}
          </div>

          {/* Settings Panel */}
          {settingModeOpen && (
            <div className="absolute lg:w-[500px] lg:h-[300px] lg:left-60  bg-sky-300 p-5 rounded-xl z-50">
              <h1 className="text-center text-xl font-bold">
                Customization Setting
              </h1>
              <ul className="border border-red-400 bg-sky-200 rounded-lg p-3 space-y-2">
                <li
                  onClick={() => openModal("Font Size")}
                  className={applyCustomizationStyle}>
                  Font Size
                </li>
                <li
                  onClick={() => openModal("Font Family")}
                  className={applyCustomizationStyle}>
                  Font Family
                </li>
                <li
                  onClick={() => openModal("Color")}
                  className={applyCustomizationStyle}>
                  Color
                </li>
                <li
                  onClick={() => openModal("Mode")}
                  className={applyCustomizationStyle}>
                  Mode
                </li>
              </ul>
            </div>
          )}

          {/* Modal */}
          <Modal isOpen={activeModal !== null} onClose={closeModal}>
            {activeModal === "Font Size" && (
              <div>
                <h2 className="text-xl font-bold text-center">
                  Adjust Font Size
                </h2>
                <div className="flex items-center justify-center mt-4">
                  <input
                    type="range"
                    min="10"
                    max="32"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className="w-full"
                  />
                </div>
                <p className="text-center mt-4">
                  Selected Font Size: <strong>{fontSize}px</strong>
                </p>
              </div>
            )}
            {activeModal === "Font Family" && (
              <div>
                <h2 className="text-xl font-bold text-center">
                  Select Font Family
                </h2>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="mt-4 block mx-auto border p-2 rounded">
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Verdana">Verdana</option>
                  <option value="Courier New">Courier New</option>
                </select>
                <p className="text-center mt-4">
                  Selected Font Family: <strong>{fontFamily}</strong>
                </p>
              </div>
            )}
            {activeModal === "Color" && (
              <div>
                <h2 className="text-xl font-bold text-center">Pick a Color</h2>
                <div className="flex justify-center space-x-4 mt-4">
                  {["red", "green", "blue", "yellow", "purple"].map((color) => (
                    <div
                      key={color}
                      className={`w-10 h-10 rounded-full cursor-pointer`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
                <p className="text-center mt-4">
                  Selected Color:{" "}
                  <span className="font-bold" style={{ color: selectedColor }}>
                    {selectedColor}
                  </span>
                </p>
              </div>
            )}
            {activeModal === "Mode" && (
              <div>
                <h2 className="text-xl font-bold text-center">Choose a Mode</h2>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setMode("Light")}
                    className={`p-2 border rounded ${
                      mode === "Light" ? "bg-blue-500 text-white" : ""
                    }`}>
                    Light Mode
                  </button>
                  <button
                    onClick={() => setMode("Dark")}
                    className={`p-2 border rounded ml-4 ${
                      mode === "Dark" ? "bg-blue-500 text-white" : ""
                    }`}>
                    Dark Mode
                  </button>
                </div>
                <p className="text-center mt-4">
                  Selected Mode: <strong>{mode}</strong>
                </p>
              </div>
            )}
          </Modal>
        </div>
        {/* give star  */}
        <div
          onClick={handleStar}
          className={`${customClassesForUserInteractions}`}>
          {startClose ? (
            <FaStar
              className={`${
                countStar === 2
                  ? "w-10 h-10 text-yellow-300 "
                  : countStar === 4
                  ? "w-12 h-12 text-pink-600"
                  : countStar === 6
                  ? "w-14 h-14 text-blue-600"
                  : countStar === 8
                  ? "w-16 h-16 text-[#26c2a3]"
                  : countStar === 10
                  ? "w-16 h-16 text-[#26c25d]"
                  : ""
              }`}
            />
          ) : (
            <CiStar className="" />
          )}
        </div>
        {/* show website view */}
        {isSideBarClose ? (
          <div
            onMouseEnter={handleView}
            className={`${customClassesForUserInteractions}`}>
            {view ? viewEyes : <PiEyes />}
          </div>
        ) : (
          <Tooltip text="Total visitors">
            <div
              onMouseEnter={handleView}
              className={`${customClassesForUserInteractions}`}>
              {view ? viewEyes : <PiEyes />}
            </div>
          </Tooltip>
        )}
      </div>
      {/* for xs */}
      <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        Content for xs devices
        {/* footer */}
        {contents}
      </div>

      {/* for sm */}
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        Content for sm devices
        {/* footer */}
        {contents}
      </div>

      {/* for md */}
      <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
        {/* Content for md devices */}
        {/* footer */}
        {contents}
        {/* {NavForSMDevice} */}
      </div>

      {/* for lg */}
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
        Content for lg devices
        {/* footer */}
        {contents}
      </div>

      {/* for xl */}
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
        Content for xl devices
        {/* footer */}
        {contents}
      </div>

      {/* for 2xl */}
      <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
        Content for 2xl devices
        {/* footer */}
        {contents}
      </div>
    </div>
  );
};

export default LeftSideBar;
