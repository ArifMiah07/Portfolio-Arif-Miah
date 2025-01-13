import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
// import BlogsContent from "../../components/BlogsContent/BlogsContent";
import BlogPost from "./BlogPost/BlogPost";
import appleImg from "../../../../assets/apple/1.webp";

const Blogs = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
  // console.log(date, formattedDate);
  return (
    <div className="bg-red-50 mx-auto w-full h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden ">
      {/* left */}
      <section className="lg:col-span-3 lg:w-[330px] bg-[#1B8B09] p-5">
        <div className="lg:w-[270px] bg-[#60A15680] ">
          <LeftSideBar></LeftSideBar>
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full  bg-[#FF0088] p-3 ">
        <ScrollContainer>
          <div className="bg-[#D663A080] lg:w-full  p-3 shadow-xl drop-shadow-2xl ">
            <div className="w-full bg-[#D9D9D9] flex flex-col justify-center items-center ">
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
            <div className="w-full bg-[#D9D9D9] flex flex-col ">
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
            <div className="w-full bg-[#D9D9D9] flex flex-col ">
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
      </section>
    </div>
  );
};

export default Blogs;
