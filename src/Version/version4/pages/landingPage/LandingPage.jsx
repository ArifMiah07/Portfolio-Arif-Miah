import { useEffect, useState } from "react";
import LandingPageNavbar from "./LandingPageNavbar";

export default function LandingPage() {
  // states
  const [scrollPositionY, setScrollPositionY] = useState(0);

  useEffect(() => {
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
    <div className="z-1  landingPageBg w-full min-h-[200vh] border-4 border-red-500 ">
      {/* header section */}
      <header className="relative w-full h-full flex items-center px-6 py-2 ">
        {/* nav section*/}
        <nav className="z-2 fixed top-0 right-0  w-full h-fit   ">
          {/* nav component */}
          <LandingPageNavbar scrollPositionY={scrollPositionY} />
        </nav>
      </header>
      {/* this is the heading of landing page */}
      <h1 className=" gradientName uppercase text-center font-black text-7xl  ">
        <span>Junior</span>
        <span> Full Stack</span>
        <span> Developer</span>
      </h1>
      <div className=" overflow-x-hidden w-full h-full flex flex-col items-center mt-6 ">
        <div className={`blockquote bg-white w-[90vw] h-[70vh] border border-gray-50  ${scrollPositionY >= 200 ? 'p-6 ' : '' } `}>
          this is the content section
        </div>
      </div>
    </div>
  );
}
