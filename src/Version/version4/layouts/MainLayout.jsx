/**
 * this is the main layout for version 4
 */

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <h1>this is main layout</h1>
      {/* page layout / 2 section | flex | row */}
      <div className="flex flex-row border-2 border-green-300">
        {/* left side bar / this is static / layout*/}
        <section className=" h-[400px] border border-purple-400 ">
            <h1>this is left side bar for global navigation</h1>
        </section>
        {/* right side bar | 2 div | flex/grid | col/1-3/11-9*/}
        <section className=" w-full h-full flex flex-col gap-5 border border-purple-400 ">
            {/* this is nav bar in each dynamic page */}
            <div className="border border-pink-400 ">
                <nav>this nav bar</nav>
            </div>
            {/* this page will show other pages / this is dynamic and only active routes will show here*/}
            {/* all content from pages */}
            <div className="border border-pink-400 ">
                <h1>this is the actual content page</h1>
                <Outlet />
            </div>
        </section>
      </div>
    </div>
  );
}
