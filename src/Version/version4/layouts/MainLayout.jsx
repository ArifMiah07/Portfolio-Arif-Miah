/**
 * this is the main layout for version 4
 */

import { Outlet } from "react-router-dom";
import NavBar4 from "../pages/shared/NavBar/NavBar4";
import { useEffect, useState } from "react";
// import LeftSideBar from "../../version3/components/LeftSideBar/LeftSideBar";

export default function MainLayout() {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  useEffect(() => {
    // const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    const handleScrollPosition = () => {
      setScrollPositionY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <div className="  w-full h-full border-8 border-blue-600">
        <nav className="w-full flex items-center justify-center border border-red-400 ">
          <NavBar4 scrollPositionY={scrollPositionY}></NavBar4>{" "}
        </nav>
          <div className=" w-full h-full border-4 border-pink-400 ">
            <Outlet />
          </div>
    </div>
  );
}
