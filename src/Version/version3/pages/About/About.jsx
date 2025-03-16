import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { useState } from "react";
import CustomParagraphField from "../../components/CustomParagrahpField/CustomParagraphField";



const About = () => {
  // states
  const [font, setFont] = useState("laila");
  const [fontSize, setFontSize] = useState(16);
  const [sideBarClose, setSideBarClose] = useState(false);

  // handlers
  const handleSelectFont = (event) => {
    const selectedText = event.target.options[event.target.selectedIndex].text;
    console.log(selectedText);
    setFont(selectedText);
  };

  const handleFontSize = (e) => {
    e.preventDefault();
    const form = e.target;
    const size = form.size.value;
    console.log(size);
    setFontSize(size);
  };
// 
  const handleSideBar = () => {
    // console.log("clicked");
    setSideBarClose(!sideBarClose);
  };

  return (
    <div
      className={` bg-red-50 mx-auto ${font} text-black w-full h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden `}>
      {/* left */}
      <section className={` ${sideBarClose ? "w-full mx-auto lg:col-span-3" : "w-[100px] lg:col-span-1"} bg-[#1B8B09] p-1 lg:p-1 z-50 lg:z-50`}>
        <LeftSideBar handleSideBar={handleSideBar} isSideBarClose={sideBarClose} ></LeftSideBar>
      </section>
      {/* right */}
      {/* bgFor1stSection ==> bg-[#FF0088] */}
      <section className={`${sideBarClose ? "mx-auto lg:col-span-9 w-full bg-[#FAFAFA] over:bg-[#fff5df] bgFor1stSection p-1 lg:p-1  z-10 lg:z-0" : 'lg:col-span-11 w-full'} `}>
        <ScrollContainer>
          <div className="bg-[#D663A080]  p-1 lg:p-1 mb-2">
            <div className="p-5 bg-[#FAFAFA] over:bg-[#fff5df] text-black flex flex-col items-center ">
              <div className="mb-3">
                <div className="hidden">
                  {/* <Dropdown items={dropdownItems} label="Font" /> */}
                  <select
                    onChange={handleSelectFont}
                    name="select"
                    id="select"
                    className="select">
                    <option value="bungee-tint">bungee-tint</option>
                    <option value="inter">inter</option>
                    <option value="lato">lato</option>
                    <option value="matemasie">matemasie</option>
                    <option value="merriweather">merriweather</option>
                    <option value="new-amsterdam">new-amsterdam</option>
                    <option value="open-sans">open-sans</option>
                    <option value="playfair-display">playfair-display</option>
                    <option value="poppins">poppins</option>
                    <option value="raleway">raleway</option>
                    <option value="roboto">roboto</option>
                    <option value="laila">laila</option>
                    <option value="playwrite-au-sa">playwrite-au-sa</option>
                  </select>
                  <div>
                    <form onSubmit={handleFontSize}>
                      <input className="bg-red-50" type="text" name="size" />
                      <input
                        className="cursor-pointer border border-emerald-500 bg-red-100 p-2"
                        type="submit"
                        value="apply"
                      />
                    </form>
                  </div>
                </div>
                <h1 className="text-5xl">Yo, This is Arif Miah</h1>
              </div>
              {/* content section */}
              <div
                style={{ fontSize: `${fontSize}px` }}
                className="p-5 bg-[#FAFAFA] over:bg-[#fff5df] text-black flex flex-col gap-[32px] ">
                {/* 1st para */}

                <CustomParagraphField
                  propStylesClasses={[" hover:bg-[#ffebf2]", "text-[#FF0088]"]}
                  pText={
                    "Hello! I am Arif Mia, an aspiring full-stack developer. Currently, I am a first-year Computer Science and Engineering student at Premier University, Chittagong. My fascination with programming began early, which has guided me toward MERN stack development over the past few years."
                  }></CustomParagraphField>
                {/* 2nd para */}

                <CustomParagraphField
                  propStylesClasses={["hover:bg-[#ffe4e1]", "text-red-500"]}
                  pText={
                    "Programming is not just my profession; it is my passion. I find joy in problem-solving and creating something new through code. My ability to learn quickly and think creatively is one of my greatest strengths. Beyond programming, my interests span across various fields - from mathematics and science to literature and language learning."
                  }></CustomParagraphField>

                {/* 3rd para */}

                <CustomParagraphField
                  propStylesClasses={["hover:bg-[#ffedd5]", "text-orange-500"]}
                  pText={
                    "For the past year, I have been intensively studying web development, though my interest in coding and programming dates back 4-5 years. What excites me most is not just writing code, but seeing the output of my work come to life. I am currently expanding my expertise in full-stack development, mastering various technologies and frameworks."
                  }></CustomParagraphField>

                {/* 4th para */}

                <CustomParagraphField
                  propStylesClasses={["hover:bg-[#d1fae5]", "text-green-500"]}
                  pText={
                    "My goal is to join a professional company as a skilled full-stack developer where I can enhance my abilities and make meaningful contributions to the industry."
                  }></CustomParagraphField>

                {/* 5th para */}

                <CustomParagraphField
                  propStylesClasses={["hover:bg-[#e0f7f1]", "text-[#26c2a3]"]}
                  pText={
                    "  Just as I find peace in the night sky and nature&apos; greenery, I find joy in creating through code. I love exploring new human languages like Spanish, Arabic, Bahasa Indonesia, Japanese, Mandarin, and English, as well as programming languages such as Java, C++, Ruby, Rust, Red, Lua, C#, and Zig."
                  }></CustomParagraphField>

                {/* 6th para */}

                <CustomParagraphField
                  propStylesClasses={["hover:bg-[#e0f2fe]", "text-[#2563eb]"]}
                  pText={
                    "I am passionate about continuous learning and creative application of technology, always eager to tackle new challenges and create innovative solutions in the world of web development."
                  }></CustomParagraphField>
              </div>
            </div>
            {/* footer ==> foot note?? */}
            <div className="p-5 bg-[#D9D9D9] flex flex-col items-center mb-10 md:mb-32 lg:mb-2 ">
              <div className="p-5 bg-[#FAFAFA] border-l-2 hover:border-[#009400]">
                {/* 7th para */}
                <CustomParagraphField
                  propStylesClasses={["hover:bg-[#d1fae5]", "text-green-600"]}
                  pText={
                    "I'm always eager to learn and tackle new challenges. My goal is to create meaningful solutions and contribute to the tech world in a way that makes a difference."
                  }></CustomParagraphField>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default About;
