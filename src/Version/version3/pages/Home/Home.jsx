import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import HomeContent from "../../components/HomeContent/HomeContent";
// import { InteractiveCursor } from "../../../../components/cursor/CursorDemo";

const Home = () => {

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
            <HomeContent></HomeContent>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default Home;
