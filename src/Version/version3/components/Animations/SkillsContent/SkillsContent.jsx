import { useState } from "react";
import SkillsSubContentSection from "./SkillsSubContentSection";

const SkillsContent = () => {
  // states
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [view4, setView4] = useState(false);
  const [view5, setView5] = useState(false);
  const [view6, setView6] = useState(false);

  // handle events
  //   1
  const handleMouseEnter1 = () => {
    // console.log("hovered");
    setView1(true);
  };

  const handleMouseLeave1 = () => {
    setView1(false);
  };
  //2
  const handleMouseEnter2 = () => {
    // console.log("hovered");
    setView2(true);
  };

  const handleMouseLeave2 = () => {
    setView2(false);
  };
  //3
  const handleMouseEnter3 = () => {
    // console.log("hovered");
    setView3(true);
  };

  const handleMouseLeave3 = () => {
    setView3(false);
  };
  //4
  const handleMouseEnter4 = () => {
    // console.log("hovered");
    setView4(true);
  };

  const handleMouseLeave4 = () => {
    setView4(false);
  };
  //5
  const handleMouseEnter5 = () => {
    // console.log("hovered");
    setView5(true);
  };

  const handleMouseLeave5 = () => {
    setView5(false);
  };
  //6
  const handleMouseEnter6 = () => {
    // console.log("hovered");
    setView6(true);
  };

  const handleMouseLeave6 = () => {
    setView6(false);
  };

  //following dry: ---<do not repeat yourself>---|---<style>---|
  const hoverStylesForContentDiv =
    "bg-[#D9D5D5] transition-all duration-300 hover:drop-shadow-2xl hover:shadow-2xl hover:scale-105 flex flex-col items-center justify-end w-full";
  const makeTriangleStyle = "w-[2px] h-[8px] bg-green-800 mr-3 ";
  const footerNavStyle =
    "w-[24px] hover:w-[48px] h-[12px] transition-all duration-200 rounded-full bg-slate-400 hover:bg-slate-500";

  return (
    <div className="bg-[#D663A080]  lg:w-[930px] shadow-lg drop-shadow-md p-1  lg:mb-2 ">
      <div className="p-5 bg-[#D9D9D9] flex flex-col items-center gap-3 lg:mb-2 ">
        {/* intro */}
        <div className="bg-[#D9D5D5] flex flex-col items-center w-full p-2 text-center">
          <h1 className="text-[36px] font-bold">Skills & Vision</h1>
          <p className="text-[24px] font-light ">
            Frontend, backend, databases, and everything in between—these are
            the skills I use to build robust and scalable solutions.
          </p>
        </div>
        {/* Frontend */}
        <div className="w-full">
          <SkillsSubContentSection
            handleMouseEnter={handleMouseEnter1}
            handleMouseLeave={handleMouseLeave1}
            hoverStylesForContentDiv={hoverStylesForContentDiv}
            makeTriangleStyle={makeTriangleStyle}
            view={view1}
            title={"Frontend"}
            description={
              "HTML, CSS, SCSS, Tailwind, Bootstrap, JavaScript ES6+, TypeScript, React Js,  React router dom, Redux, Redux toolkit, Transtack Query, Matarial Ui, Shadcn Ui, Motion,  "
            }></SkillsSubContentSection>
        </div>
        {/* Backend */}
        <div className="w-full">
          <SkillsSubContentSection
            handleMouseEnter={handleMouseEnter2}
            handleMouseLeave={handleMouseLeave2}
            hoverStylesForContentDiv={hoverStylesForContentDiv}
            makeTriangleStyle={makeTriangleStyle}
            view={view2}
            title={"Backend"}
            description={
              "Node js, Express, Firebase Auth, JWT, Stripe, RESTful APIs,"
            }></SkillsSubContentSection>
        </div>
        {/* Database */}
        <div className="w-full">
          <SkillsSubContentSection
            handleMouseEnter={handleMouseEnter3}
            handleMouseLeave={handleMouseLeave3}
            hoverStylesForContentDiv={hoverStylesForContentDiv}
            makeTriangleStyle={makeTriangleStyle}
            view={view3}
            title={"Database"}
            description={
              "MongoDb, Mongoose, DBMS, Database Design, Data Modeling, Indexing & Optimization"
            }></SkillsSubContentSection>
        </div>

        {/* others */}
        <div className="w-full">
          <SkillsSubContentSection
            handleMouseEnter={handleMouseEnter4}
            handleMouseLeave={handleMouseLeave4}
            hoverStylesForContentDiv={hoverStylesForContentDiv}
            makeTriangleStyle={makeTriangleStyle}
            view={view4}
            title={"Others"}
            description={
              "C/C++, Python, Git, Github, Notion, Google Docs, Linux, GIMP, Inkscape, Capcut, Figma, Photopea, "
            }></SkillsSubContentSection>
        </div>
        {/* soft skills */}
        <div className="w-full">
          <SkillsSubContentSection
            handleMouseEnter={handleMouseEnter5}
            handleMouseLeave={handleMouseLeave5}
            hoverStylesForContentDiv={hoverStylesForContentDiv}
            makeTriangleStyle={makeTriangleStyle}
            view={view5}
            title={"Soft Skills"}
            description={
              "English, Spanish, Communication, Creative Writing, Problem Solving, Prompting, Art Generations"
            }></SkillsSubContentSection>
        </div>

        {/* Next to Leaning */}
        <div className="w-full">
          <SkillsSubContentSection
            handleMouseEnter={handleMouseEnter6}
            handleMouseLeave={handleMouseLeave6}
            hoverStylesForContentDiv={hoverStylesForContentDiv}
            makeTriangleStyle={makeTriangleStyle}
            view={view6}
            title={"What’s Next"}
            description={
              "GraphQL, OAuth 2.0, Auth0 SQL,PostgreSQL, Prisma, Redis, Next Js, Docker, Ruby, Go, Rust, Zig, "
            }></SkillsSubContentSection>
        </div>
        {/* footer nav */}
        <div className="bg-[#D9D5D5] flex flex-row items-center justify-center gap-4 w-full p-2">
          <div className={footerNavStyle}></div>
          <div className={footerNavStyle}></div>
          <div className={footerNavStyle}></div>
          <div className={footerNavStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
