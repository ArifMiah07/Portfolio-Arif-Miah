import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import HomeContent from "../../components/HomeContent/HomeContent";
import { useState } from "react";

const Home = () => {

    const [sideBarClose, setSideBarClose] = useState(false);

    const handleSideBar = () => {
      // console.log("clicked");
      setSideBarClose(!sideBarClose);
    };


  return (
    <div className="bg-red-50 mx-auto w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden">
      {/* left */}
      {/* <section className="lg:col-span-3 w-full bg-[#1B8B09] p-5 z-50 lg:z-0">
        <div className="w-full h-full bg-[#60A15680]">
          <LeftSideBar handleSideBar={handleSideBar} />
        </div>
      </section> */}
      {/* left */}
      <section className={` fixed lg:relative transition-all duration-300 ease-in-out  ${sideBarClose ? "w-full mx-auto lg:col-span-3" : "w-full lg:col-span-1"} bg-[#1B8B09] p-1 lg:p-1 z-50 lg:z-50`}>
        <ScrollContainer>

        <LeftSideBar handleSideBar={handleSideBar} isSideBarClose={sideBarClose} ></LeftSideBar>
        </ScrollContainer>
      </section>
      {/* right */}
      {/* <section className="lg:col-span-9 w-full bg-[#FF0088] z-10 lg:z-0"> */}
      <section className={`fixed lg:relative transition-all duration-300 ease-in-out bg-[#FAFAFA]  ${sideBarClose ? "mx-auto lg:col-span-9 w-full bg-[#FAFAFA] over:bg-[#fff5df] bgFor1stSection p-1 lg:p-1  z-10 lg:z-0" : 'lg:col-span-11 w-full'} `}>
        <div className="w-full bg-[#FAFAFA] h-full">
          <ScrollContainer >
            <div className="bg-[#FAFAFA] w-full shadow-lg drop-shadow-md ">
              <HomeContent />
            </div>
          </ScrollContainer>
        </div>
      </section>
    </div>
  );
};

export default Home;
