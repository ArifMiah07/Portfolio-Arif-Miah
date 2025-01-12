import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import SkillsContent from "../../components/Animations/SkillsContent/SkillsContent";

const Skills = () => {
  return (
    <div className="bg-red-50 mx-auto w-full h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden ">
      {/* left */}
      <section className="lg:col-span-3 lg:w-[330px] bg-[#1B8B09] p-5">
        <div className="lg:w-[270px] bg-[#60A15680] ">
          <LeftSideBar></LeftSideBar>
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 lg:w-full bg-[#FF0088] lg:p-1 ">
        <ScrollContainer>
          <div className="bg-[#D663A080] w-full lg:p-1 ">
            <SkillsContent></SkillsContent>
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default Skills;
