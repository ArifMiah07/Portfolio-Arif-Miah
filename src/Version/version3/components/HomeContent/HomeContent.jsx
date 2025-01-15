import { useState } from "react";

const HomeContent = () => {

  // states
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);

  // handle events
  const handleMouseEnter = () => {
    console.log("hovered");
    setView(true);
  };

  const handleMouseLeave = () => {
    setView(false);
  };
  //
  const handleMouseEnter2 = () => {
    console.log("hovered");
    setView2(true);
  };

  const handleMouseLeave2 = () => {
    setView2(false);
  };
  //
  const handleMouseEnter3 = () => {
    console.log("hovered");
    setView3(true);
  };

  const handleMouseLeave3 = () => {
    setView3(false);
  };

  //following dry: ---<do not repeat yourself>---|---<style>---|
  const hoverStylesForContentDiv =
    "bg-[#D9D5D5] transition-all duration-300 hover:drop-shadow-2xl hover:shadow-2xl hover:scale-105 flex flex-col items-center justify-end w-full h-full";
  const makeTriangleStyle =
    "w-4 h-4 border-b-2 border-l-2 border-current rounded-sm rotate-45";
  const footerNavStyle =
    "w-[24px] hover:w-[48px] h-[12px] transition-all duration-200 rounded-full bg-slate-400 hover:bg-slate-500";

  return (
      <div className=" p-5 bg-[#D9D9D9] flex flex-col items-centerw-full min-h-screen gap-3 ">
        {/* intro */}
        <div className="bg-[#D9D5D5] flex flex-col items-center w-full p-2">
          <h1 className="text-[36px] ">Hi, I’m Arif Miah</h1>
          <p className="text-[24px] ">
            {" "}
            I&apos;m a MERN Stack-focused Full Stack Web Developer
          </p>
        </div>
        {/* skills */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={hoverStylesForContentDiv}>
          <div className="flex flex-col items-center w-full ">
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <div className="w-[200px] h-[2px] bg-black "></div>
                <div className={makeTriangleStyle}></div>
              </div>
              <h1 className="text-[32px] mx-3 ">Skills</h1>
              <div className=" flex items-center justify-center rotate-180">
                <div className="w-[200px] h-[2px] bg-black "></div>
                <div className={makeTriangleStyle}></div>
              </div>
            </div>
            <div>
              <p className="text-[16px] ">
                HTML, CSS, JavaScript, TypeScript, Node JS, Express, MongoDB, ,
                Firebase, JWT, C/C++, Python, English, Spanish ...
              </p>
            </div>
            {/* border div */}
            <div
              className={`transition-all duration-300 mt-4  ${
                view
                  ? "w-full h-[4px] mt-5 bg-green-800 "
                  : "w-[100px] h-[2px] bg-slate-600 "
              }`}></div>
          </div>
        </div>
        {/* experience */}
        <div
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          className={hoverStylesForContentDiv}>
          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <div className="w-[200px] h-[2px] bg-black "></div>
                <div className={makeTriangleStyle}></div>
              </div>
              <h1 className="text-[32px] mx-3 ">Experience</h1>
              <div className=" flex items-center justify-center rotate-180">
                <div className="w-[200px] h-[2px] bg-black "></div>
                <div className={makeTriangleStyle}></div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-center ">
                Fresher but 1 years of solid Learning & Problem Solving
                Experience
              </p>
            </div>
          </div>
          {/* border div */}
          <div
            className={`transition-all duration-300 mt-4  ${
              view2
                ? "w-full h-[4px] mt-5 bg-green-800"
                : "w-[100px] h-[2px] bg-slate-600 "
            }`}></div>
        </div>
        {/* contact */}
        <div
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
          className={hoverStylesForContentDiv}>
          <div className="flex flex-col items-center w-full p-2">
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <div className="w-[200px] h-[2px] bg-black "></div>
                <div className={makeTriangleStyle}></div>
              </div>
              <h1 className="text-[32px] ">Contact</h1>
              <div className=" flex items-center justify-center rotate-180">
                <div className="w-[200px] h-[2px] bg-black "></div>
                <div className={makeTriangleStyle}></div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-center ">
                Gmail: arifmiah101@gmail.com
              </p>
              <p className="text-[16px] text-center ">X: ArifMiah01</p>
            </div>
          </div>
          {/* border div */}
          <div
            className={`transition-all duration-300 mt-4  ${
              view3
                ? "w-full h-[4px] mt-5 bg-green-800"
                : "w-[100px] h-[2px] bg-slate-600 "
            }`}></div>
        </div>
        {/* footer nav */}
        <div className="bg-[#D9D5D5] flex flex-row items-center justify-center gap-4 w-full p-2">
          <div className={footerNavStyle}></div>
          <div className={footerNavStyle}></div>
          <div className={footerNavStyle}></div>
          <div className={footerNavStyle}></div>
        </div>
      </div>
    
  );
};

export default HomeContent;
