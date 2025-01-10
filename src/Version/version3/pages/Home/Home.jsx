import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
// import { InteractiveCursor } from "../../../../components/cursor/CursorDemo";

const Home = () => {
  return (
    <div className="bg-red-50 mx-auto w-full h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden ">
      {/* left */}
      {/* <InteractiveCursor></InteractiveCursor> */}
      <section className="lg:col-span-3 lg:w-[330px] bg-[#1B8B09] p-5">
        <div className="lg:w-[270px] bg-[#60A15680] ">
            <LeftSideBar></LeftSideBar>
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full  bg-[#FF0088] p-1">
        <ScrollContainer>
          <div className="bg-[#D663A080] lg:w-[930px]  p-1  lg:mb-2 ">
            <div className="p-5 bg-[#D9D9D9] flex flex-col items-center gap-3 lg:mb-2 ">
              <div className="bg-[#D9D5D5] flex flex-col items-center w-full h-[100px] p-2">
                  <h1 className="text-[36px] ">Hi, I’m Arif Miah</h1>
                  <p className="text-[24px] "> I&apos;m a MERN Stack-focused Full Stack Web Developer</p>
              </div>
              <div className="bg-[#D9D5D5] flex flex-col items-center w-full h-[100px] p-2">
                  <div>
                    <h1 className="text-[32px] ">Skills</h1>
                  </div>
                  <div>
                    <p className="text-[16px] ">HTML, CSS, JavaScript, TypeScript, Node JS, Express, MongoDB, , Firebase, JWT, 
                    C/C++, Python, English, Spanish ...</p>
                  </div>
              </div>
              <div className="bg-[#D9D5D5] flex flex-col items-center w-full h-[100px] p-2">
              <div>
                    <h1 className="text-[32px] ">Experience</h1>
                  </div>
                  <div>
                    <p className="text-[16px] ">Fresher but 1 years of solid Learning & Problem Solving Experience</p>
                  </div>
              </div>
              <div className="bg-[#D9D5D5] flex flex-col items-center w-full h-[100px] p-2">
              <div>
                    <h1 className="text-[32px] ">Contact</h1>
                  </div>
                  <div>
                    <p className="text-[16px] text-center ">Gmail: arifmiah101@gmail.com</p>
                    <p className="text-[16px] text-center ">X: ArifMiah01</p>
                  </div>
              </div>
              <div className="bg-[#D9D5D5] flex flex-row items-center justify-center gap-4 w-full h-[100px] p-2">
                  <div className="w-[24px] h-[24px] rounded-full bg-red-300"></div>
                  <div className="w-[24px] h-[24px] rounded-full bg-red-300"></div>
                  <div className="w-[24px] h-[24px] rounded-full bg-red-300"></div>
                  <div className="w-[24px] h-[24px] rounded-full bg-red-300"></div>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default Home;
