import { useEffect, useState } from "react";
import LandingPageNavbar from "./LandingPageNavbar";
// import gsap from 'gsap';


export default function LandingPage() {
  // states
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [countProgress, setCountProgress] = useState(0);

  useEffect(() => {
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;
    console.log("MaxScrollY : ", maxScrollY);

    const progress = window.scrollY / maxScrollY;
    setCountProgress(progress);
    console.log("progress: ", progress);
    const handleScrollPosition = () => {
      setScrollPositionY(window.scrollY);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollPosition);

    //
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  console.log(scrollPositionY);

  // functionalities

  return (
    // this is the landing page
    /**
     * landing page will shown up in the root url
     * features
     * add animation
     *
     */
    <div className="z-1 landingPageBg w-full min-h-[200vh]  ">
      {/* header section */}
      <header className="relative w-full h-full flex items-center mb-12 px-6 py-2 ">
        {/* nav section*/}
        <nav
          className={`w-full z-2  fixed flex items-center justify-center  ${
            scrollPositionY >= 100
              ? " transition-all delay-75 ease-in duration-150 w-full top-0 right-0 items-center justify-center"
              : " transition-all delay-75 ease-out duration-200 top-0 right-0  w-full h-fit   "
          }`}>
          {/* nav component */}
          <LandingPageNavbar scrollPositionY={scrollPositionY} />
        </nav>
      </header>
      {/* this is the heading of landing page */}
      <div className="w-full flex flex-col items-center ">
        <h1 className=" gradientName uppercase text-center font-black text-7xl  ">
          <span>Junior</span>
          <span> Full Stack</span>
          <span> Developer</span>
        </h1>
        <p className="capitalize text-center font-medium text-md my-4  p-3 text-black ">
          I build exceptional digital experiences that are fast, accessible, and <br />
          visually appealing. Let&apos;s bring your ideas to life with modern <br />
          web technologies.
        </p>
      </div>
      {/* CTA btns */}
      <div className="w-full h-full flex flex-row items-center justify-evenly  gap-6 border border-red-400 ">
          <button className={` px-6 py-3 shadow-lg  bdrImgLandingPage `} >My Resume</button>
          <button className={` px-6 py-3  bdrImg2LandingPage `} >View Projects</button>
          <button className={` px-6 py-3  bdrImg3LandingPage `} >Latest Blogs</button>
      </div>
      {/* just a div */}
      <div className=" w-full h-full flex flex-col items-center mt-6 ">
        <div
          className={`blockquote bg-white w-[90vw] h-[70vh] border border-gray-50  ${
            scrollPositionY >= 200 ? "" : ""
          } `}>
          <span>{countProgress}</span>
          <span>{scrollPositionY}</span>
        </div>
      </div>
    </div>
  );
}
