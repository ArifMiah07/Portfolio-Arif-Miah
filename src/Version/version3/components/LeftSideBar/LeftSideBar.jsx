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
// import { TbMenuOrder } from "react-icons/tb";
// import { CgMenuLeft } from "react-icons/cg";
// import { IoMenu } from "react-icons/io5";
// import { SiGmail } from 'react-icons/si';
// import Dropdown from '../Dropdown/Dropdown';

// eslint-disable-next-line react/prop-types
const LeftSideBar = ({handleSideBar, isSideBarClose}) => {

  const [nightModeClose, setNightModeClose] = useState(false);
  const [settingModeClose, setSettingModeClose] = useState(false);
  const [startClose, setStartClose] = useState(false);
  let [countStar, setCountStar] = useState(1);
  const [view, setView] = useState(false);

  const [settingModeOpen, setSettingModeOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // Tracks the active modal
  const [fontSize, setFontSize] = useState(16); // State for Font Size
  const [fontFamily, setFontFamily] = useState("Arial"); // State for Font Family
  const [selectedColor, setSelectedColor] = useState("blue"); // State for Color
  const [mode, setMode] = useState("Light"); // State for Mode

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

  const navLinksStyle =
    "border-b-2 border-green-800 hover:p-1 hover:bg-green-200 hover:shadow-2xl rounded-md hover:text-center delay-75 hover:transition-shadow transition-all hover:border-x-2 hover:border-green-600 hover:drop-shadow-sm ";

  const navLinks = (
    <>
      <li className={navLinksStyle}>
        <Link to={"/v3/"}>Home</Link>
      </li>
      <li className={navLinksStyle}>
        <Link to={"/v3/about"}>About</Link>
      </li>
      <li className={navLinksStyle}>
        <Link to={"/v3/skills"}>Skills</Link>
      </li>
      <li className={navLinksStyle}>
        <Link to={"/v3/projects"}>Projects</Link>
      </li>
      <li className={navLinksStyle}>
        <Link to={"/v3/blogs"}>Blogs</Link>
      </li>
      <li className={navLinksStyle}>
        <Link to={"/v3/contact"}>Contact</Link>
      </li>
    </>
  );

  const smLinksStyle =
    "text-2xl hover:text-3xl hover:text-[#384ba7] transition-all duration-300 ease-in-out";
  const smLinks = (
    <>
      <FaGithub className={smLinksStyle} />
      <FaLinkedin className={smLinksStyle} />
      <MdEmail className={smLinksStyle} />
      <FaXTwitter className={smLinksStyle} />
      <TbFileCv className={smLinksStyle} />
    </>
  );

  const interactionIconsStyle =
    "flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 ";

  const applyCustomizationStyle =
    "border-b-2 border-green-700 hover:border-b-2 hover:border-green-300 hover:p-2 hover:text-center cursor-pointer hover:bg-blue-700 hover:transition-all hover:rounded-md";

  return (
    <div className={`bg-[#60A15680] p-5 flex flex-col gap-3 ${isSideBarClose ? "w-full":'w-[100px]'} h-full `}>
      <div className="flex justify-center items-center   ">
        <img
          className="shadow-xl drop-shadow-xl rounded-full w-[160px]  "
          src={profileImg}
          alt="profile image of arif miah"
        />
      </div>
      {/* settings / users interactions */}
      <div className={`${isSideBarClose ? "flex flex-row justify-between items-center gap-1 lg:justify-evenly lg:mt-2" : "flex flex-col justify-between items-center gap-1 lg:justify-evenly lg:mt-2"}`}>
        {/* sidebar folding / Drawer */}
        <div onClick={handleSideBar} className={interactionIconsStyle}>
          {isSideBarClose ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </div>
        {/* night mode toggle / theme */}
        <div onClick={handleNightMode} className={interactionIconsStyle}>
          {nightModeClose ? <CiBrightnessDown /> : <GiNightSky />}
        </div>
        {/* apply settings */}
        <div className="relative">
          {/* Settings Icon */}
          <div onClick={handleSettingMode} className={interactionIconsStyle}>
            {settingModeOpen ? (
              <IoSettings  />
            ) : (
              <IoSettingsOutline  />
            )}
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
          className={`flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full  w-10 h-10  `}>
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
        <div
          onMouseEnter={handleView}
          className={`flex items-center justify-center bg-green-50 shadow-xl drop-shadow-xl rounded-full w-10 h-10 text-[15px] hover:text-[14px] hover:transition-all hover:delay-75 `}>
          {view ? viewEyes : <PiEyes />}
        </div>
      </div>
      {/* footer */}
      <div>
        {/* lg */}
        <div className=" flex flex-col w-full ">
          {/* nav */}
          {/* divider */}
          <div className="w-full h-1 bg-red-700"></div>
          {/* navigation links */}
          <div className="bg-red-300 p-5">
            <ul className="">{navLinks}</ul>
          </div>
          {/* end footer social media links */}
          <div className="bg-red-200 p-5 flex items-center justify-evenly gap-3">
            {smLinks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
