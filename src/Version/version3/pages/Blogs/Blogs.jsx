import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
// import BlogsContent from "../../components/BlogsContent/BlogsContent";
import BlogPost from "./BlogPost/BlogPost";
import appleImg from "../../../../assets/apple/1.webp";
import { useState } from "react";

const Blogs = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
  // console.log(date, formattedDate);

      const [sideBarClose, setSideBarClose] = useState(false);
  
      const handleSideBar = () => {
        // console.log("clicked");
        setSideBarClose(!sideBarClose);
      };
  


  return (
    <div className="bg-red-50 mx-auto w-full h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden ">
      {/* left */}
      <section className={` fixed lg:relative transition-all duration-300 ease-in-out  ${sideBarClose ? "w-full mx-auto lg:col-span-3" : "w-full lg:col-span-1"} bg-[#1B8B09] p-1 lg:p-1 z-50 lg:z-50`}>
        <ScrollContainer>

        <LeftSideBar handleSideBar={handleSideBar} isSideBarClose={sideBarClose} ></LeftSideBar>
        </ScrollContainer>
      </section>
      {/* right */}
      <section className={`fixed lg:relative transition-all duration-300 ease-in-out bg-[#FAFAFA]  ${sideBarClose ? "mx-auto lg:col-span-9 w-full bg-[#FAFAFA] over:bg-[#fff5df] bgFor1stSection p-1 lg:p-1  z-10 lg:z-0" : 'lg:col-span-11 w-full'} `}>
      <div className="w-full bg-[#FAFAFA] h-full">
        <ScrollContainer>
          <div className="bg-[#FAFAFA] lg:w-full  p-3 shadow-xl drop-shadow-2xl  mb-6">
            <div className="w-full bg-[#FAFAFA] flex flex-col justify-center items-center ">
              <div className="flex flex-row items-center justify-center mt-3 ">
                <div className="w-fit h-fit p-2 border-y border-b border-t border-r-0 border-green-950">
                  <h1>Date : {formattedDate} </h1>
                </div>
                <div className="w-[100px] h-[60px] border border-black flex flex-col items-center justify-center ">
                  <h1>4</h1>
                </div>
              </div>
              <div className="w-full">
                <BlogPost image={appleImg}></BlogPost>
                <BlogPost image={appleImg}></BlogPost>
                <BlogPost image={appleImg}></BlogPost>
                <BlogPost image={appleImg}></BlogPost>
              </div>
            </div>
            <div className="w-full bg-[#FAFAFA] flex flex-col ">
              <div className="flex flex-row items-center justify-center mt-3 ">
                <div className="w-fit h-fit p-2 border-y border-b border-t border-r-0 border-green-950">
                  <h2>Date : 22-1-28</h2>
                </div>
                <div className="w-[100px] h-[60px] border border-black flex flex-col items-center justify-center ">
                  <h1>2</h1>
                </div>
              </div>
              <div>
                <BlogPost image={appleImg}></BlogPost>
                <BlogPost image={appleImg}></BlogPost>
              </div>
            </div>
            <div className="w-full bg-[#FAFAFA] flex flex-col mb-3">
              <div className="flex flex-row items-center justify-center mt-3 ">
                <div className="w-fit h-fit p-2 border-y border-b border-t border-r-0 border-green-950">
                  <h2>Date : 22-1-28</h2>
                </div>
                <div className="w-[100px] h-[60px] border border-black flex flex-col items-center justify-center ">
                  <h1>3</h1>
                </div>
              </div>
              <div>
                <BlogPost image={appleImg}></BlogPost>
                <BlogPost image={appleImg}></BlogPost>
                <BlogPost image={appleImg}></BlogPost>
              </div>
            </div>
          </div>
        </ScrollContainer>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
