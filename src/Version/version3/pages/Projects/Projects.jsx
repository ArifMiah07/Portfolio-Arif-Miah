import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import ProjectsContent from "../../components/ProjectsContent/ProjectsContent";

const Projects = () => {
  return (
    <div className="bg-red-50 mx-auto w-full h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden ">
      {/* left */}
      <section className="lg:col-span-3 lg:w-[330px] bg-[#1B8B09] p-5">
        <div className="lg:w-[270px] bg-[#60A15680] ">
          <LeftSideBar></LeftSideBar>
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full bg-[#FF0088] p-2 lg:p-1 flex items-center">
        <ScrollContainer>
          <div className="bg-[#D663A080] w-full shadow-lg drop-shadow-md p-1  lg:mb-2">
            <ProjectsContent />
            <ProjectsContent />
            <ProjectsContent />
            <ProjectsContent />
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default Projects;
