import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

const About = () => {
  return (
    <div className="bg-red-50 mx-auto w-full h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden ">
      {/* left */}
      <section className="lg:col-span-3 w-full bg-[#1B8B09] p-1 lg:p-5">
        <LeftSideBar></LeftSideBar>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full  bg-[#FF0088] p-1 lg:p-2 mb-3">
        <ScrollContainer>
          <div className="bg-[#D663A080]  p-1 lg:p-5 mb-5">
            <div className="p-5 bg-[#D9D9D9] flex flex-col items-center ">
              <div className="mb-3">
                <h1 className="text-5xl">Yo, This is Arif Miah</h1>
              </div>
              <div className="p-5 bg-[#D9D5D5] border-l-4 border-[#009400]">
                <p className="laila">
                  Hello! I am Arif Mia, an aspiring full-stack developer.
                  Currently, I am a first-year Computer Science and Engineering
                  student at Premier University, Chittagong. My fascination with
                  programming began early, which has guided me toward MERN stack
                  development over the past few years.
                </p>

                <p>
                  Programming is not just my profession; it is my passion. I
                  find joy in problem-solving and creating something new through
                  code. My ability to learn quickly and think creatively is one
                  of my greatest strengths. Beyond programming, my interests
                  span across various fields - from mathematics and science to
                  literature and language learning.
                </p>
                <p>
                  For the past year, I have been intensively studying web
                  development, though my interest in coding and programming
                  dates back 4-5 years. What excites me most is not just writing
                  code, but seeing the output of my work come to life. I am
                  currently expanding my expertise in full-stack development,
                  mastering various technologies and frameworks. My goal is to
                  join a professional company as a skilled full-stack developer
                  where I can enhance my abilities and make meaningful
                  contributions to the industry. Just as I find peace in the
                  night sky and nature&aposs greenery, I find joy in creating
                  through code. I love exploring new human languages like
                  Spanish, Arabic, Bahasa Indonesia, Mandarin, and English, as
                  well as programming languages such as Java, C++, Ruby, Red,
                  C#, and Zig.
                </p>
                <p>
                  I am passionate about continuous learning and creative
                  application of technology, always eager to tackle new
                  challenges and create innovative solutions in the world of web
                  development.
                </p>
              </div>
            </div>
            {/* footer */}
            <div className="p-5 bg-[#D9D9D9] flex flex-col items-center mb-10 md:mb-32 lg:mb-2 ">
              <div className="p-5 bg-[#D9D5D5] border-l-2 border-[#009400]">
                <p>
                  I am passionate about continuous learning and creative
                  application of technology, always eager to tackle new
                  challenges and create innovative solutions in the world of web
                  development.
                </p>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default About;
