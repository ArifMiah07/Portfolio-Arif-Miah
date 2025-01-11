import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { useState } from "react";
// import { InteractiveCursor } from "../../../../components/cursor/CursorDemo";

const Home = () => {
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);

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

  return (
    <div className="bg-red-50 mx-auto w-full lg:h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden ">
      {/* left */}
      {/* <InteractiveCursor></InteractiveCursor> */}
      <section className="lg:col-span-3 lg:w-[330px] bg-[#1B8B09] p-5 z-50 lg:z-0">
        <div className="lg:w-[270px] bg-[#60A15680] ">
          <LeftSideBar></LeftSideBar>
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full  bg-[#FF0088] p-1 z-10 lg:z-0">
        <ScrollContainer>
          <div className="bg-[#D663A080] lg:w-[930px]  p-1  lg:mb-2 ">
            <div className="p-5 bg-[#D9D9D9] flex flex-col items-center gap-3 lg:mb-2 ">
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
                className="bg-[#D9D5D5] flex flex-col items-center justify-end w-full">
                <div className="flex flex-col items-center w-full ">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center">
                      <div className="w-[200px] h-[2px] bg-black "></div>
                      <div className="w-4 h-4 border-b-2 border-l-2 border-current rounded-sm rotate-45"></div>
                    </div>
                    <h1 className="text-[32px] mx-3 ">Skills</h1>
                    <div className=" flex items-center justify-center rotate-180">
                      <div className="w-[200px] h-[2px] bg-black "></div>
                      <div className="w-4 h-4 border-b-2 border-l-2 border-current rounded-sm rotate-45"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px] ">
                      HTML, CSS, JavaScript, TypeScript, Node JS, Express,
                      MongoDB, , Firebase, JWT, C/C++, Python, English, Spanish
                      ...
                    </p>
                  </div>
                  {/* border div */}
                  <div
                    className={`transition-all duration-300 mt-4  ${
                      view
                        ? " w-full border border-green-700 "
                        : "w-[100px] h-[2px] bg-slate-600 "
                    }`}></div>
                </div>
              </div>
              {/* experience */}
              <div
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                className="bg-[#D9D5D5] flex flex-col items-center justify-end w-full">
                <div>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center">
                      <div className="w-[200px] h-[2px] bg-black "></div>
                      <div className="w-4 h-4 border-b-2 border-l-2 border-current rounded-sm rotate-45"></div>
                    </div>
                    <h1 className="text-[32px] mx-3 ">Experience</h1>
                    <div className=" flex items-center justify-center rotate-180">
                      <div className="w-[200px] h-[2px] bg-black "></div>
                      <div className="w-4 h-4 border-b-2 border-l-2 border-current rounded-sm rotate-45"></div>
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
                      ? " w-full border border-green-700 "
                      : "w-[100px] h-[2px] bg-slate-600 "
                  }`}></div>
              </div>
              {/* contact */}
              <div
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                className="bg-[#D9D5D5] flex flex-col items-center justify-end w-full">
                <div className="flex flex-col items-center w-full p-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center">
                      <div className="w-[200px] h-[2px] bg-black "></div>
                      <div className="w-4 h-4 border-b-2 border-l-2 border-current rounded-sm rotate-45"></div>
                    </div>
                    <h1 className="text-[32px] ">Contact</h1>
                    <div className=" flex items-center justify-center rotate-180">
                      <div className="w-[200px] h-[2px] bg-black "></div>
                      <div className="w-4 h-4 border-b-2 border-l-2 border-current rounded-sm rotate-45"></div>
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
                      ? " w-full border border-green-700 "
                      : "w-[100px] h-[2px] bg-slate-600 "
                  }`}></div>
              </div>
              <div className="bg-[#D9D5D5] flex flex-row items-center justify-center gap-4 w-full p-2">
                <div className="w-[24px] h-[24px] rounded-full bg-red-300"></div>
                <div className="w-[24px] h-[24px] rounded-full bg-red-300"></div>
                <div className="w-[24px] h-[24px] rounded-full bg-red-300"></div>
                <div className="w-[24px] h-[24px] rounded-full bg-red-300"></div>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default Home;
