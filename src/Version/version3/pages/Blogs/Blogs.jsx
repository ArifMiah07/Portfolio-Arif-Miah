import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";


const Blogs = () => {
    return (
        <div className="bg-red-50 mx-auto w-full h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden ">
      {/* left */}
      <section className="lg:col-span-3 lg:w-[330px] bg-[#1B8B09] p-5">
        <div className="lg:w-[270px] bg-[#60A15680] ">
            <LeftSideBar></LeftSideBar>
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full  bg-[#FF0088] p-2 ">
        <ScrollContainer>
          <div className="bg-[#D663A080] lg:w-[930px]  p-5 ">
            <div className="p-5 bg-[#D9D9D9] flex flex-col items-center ">
              <p>hi this is blogs</p>
            </div>
          </div>
        </ScrollContainer>
      </section>
    </div>
    );
};

export default Blogs;