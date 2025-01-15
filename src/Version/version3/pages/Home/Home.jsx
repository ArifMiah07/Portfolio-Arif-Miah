import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import HomeContent from "../../components/HomeContent/HomeContent";

const Home = () => {
  return (
    <div className="bg-red-50 mx-auto w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden">
      {/* left */}
      <section className="lg:col-span-3 w-full bg-[#1B8B09] p-5 z-50 lg:z-0">
        <div className="w-full h-full bg-[#60A15680]">
          <LeftSideBar />
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full bg-[#FF0088] z-10 lg:z-0">
        <div className="w-full h-full">
          <ScrollContainer >
            <div className="bg-[#D663A080] w-full shadow-lg drop-shadow-md ">
              <HomeContent />
            </div>
          </ScrollContainer>
        </div>
      </section>
    </div>
  );
};

export default Home;
