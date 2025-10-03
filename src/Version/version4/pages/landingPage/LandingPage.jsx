import { useEffect, useState } from "react";
import LandingPageNavbar from "./LandingPageNavbar";

export default function LandingPage() {
  // states
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [countProgress, setCountProgress] = useState(0);

  useEffect(() => {
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;
    console.log("MaxScrollY : ", maxScrollY);

    const progress = window.scrollY / maxScrollY;
    setCountProgress(progress);
    console.log("progress: ", progress);
    const handleScrollPosition = () => {
      setScrollPositionY(window.scrollY);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollPosition);

    //
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  console.log(scrollPositionY);

  // functionalities

  return (
    // this is the landing page
    /**
     * landing page will shown up in the root url
     * features
     * add animation
     *
     */
    <div className="z-1 landingPageBg w-full min-h-[200vh]  ">
      {/* header section */}
      <header className="relative w-full h-full flex items-center mb-12 px-6 py-2 ">
        {/* nav section*/}
        <nav
          className={`w-full z-2  fixed flex items-center justify-center  ${
            scrollPositionY >= 100
              ? " transition-all delay-75 ease-in duration-150 w-full top-0 right-0 items-center justify-center"
              : " transition-all delay-75 ease-out duration-200 top-0 right-0  w-full h-fit   "
          }`}>
          {/* nav component */}
          <LandingPageNavbar scrollPositionY={scrollPositionY} />
        </nav>
      </header>
      {/* this is the heading of landing page */}
      <div className="w-full flex flex-col items-center ">
        <h1 className=" gradientName uppercase text-center font-black text-7xl  ">
          <span>Junior</span>
          <span> Full Stack</span>
          <span> Developer</span>
        </h1>
        <p className="capitalize text-center font-medium text-md my-4  p-3 text-black ">
          I build exceptional digital experiences that are fast, accessible, and <br />
          visually appealing. Let&apos;s bring your ideas to life with modern <br />
          web technologies.
        </p>
      </div>
      {/* CTA btns */}
      <div className="w-full h-full flex flex-row items-center justify-evenly  gap-6 border border-red-400 ">
          <button className={` px-6 py-3 shadow-lg  bdrImgLandingPage `} >My Resume</button>
          <button className={` px-6 py-3  bdrImg2LandingPage `} >View Projects</button>
          <button className={` px-6 py-3  bdrImg3LandingPage `} >Latest Blogs</button>
      </div>
      {/* just a div */}
      <div className=" w-full h-full flex flex-col items-center mt-6 ">
        <div
          className={`blockquote bg-white w-[90vw] h-[70vh] border border-gray-50  ${
            scrollPositionY >= 200 ? "" : ""
          } `}>
          this is the content section Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae laborum cum aspernatur quos voluptatum ab
          recusandae incidunt, quaerat eum, laudantium sint quod culpa quisquam
          doloremque velit? Libero natus animi dolorum dolores sunt quas quis
          aspernatur odit ea quod, voluptate aliquid, voluptas excepturi, eos
          soluta. Eligendi velit, blanditiis recusandae sed aliquid molestias
          voluptatem obcaecati incidunt quos, ex repellat quis eius delectus,
          molestiae labore ducimus neque asperiores nulla voluptatum sapiente
          ratione perferendis animi illo? Perferendis fuga facilis quibusdam
          officiis soluta vel voluptas maiores aspernatur similique consequuntur
          quo unde expedita, nam eaque iste aliquam ipsa rerum dolorum officia
          sequi aperiam repudiandae? Tenetur cupiditate similique voluptatum, ex
          eum ipsum necessitatibus repellat. Illum adipisci officiis, tenetur
          ducimus eius iure, perferendis beatae repellat at fugit totam sequi
          debitis minus sint laudantium praesentium eaque fugiat quidem odit
          inventore dolores facere incidunt doloribus a! Repellendus blanditiis
          optio at, in perferendis enim facilis quo vitae dolores incidunt,
          illo, mollitia id magni quasi laudantium odit commodi illum quia?
          Impedit tempore expedita, quo id facilis quidem ratione, aliquid
          consequuntur praesentium quia necessitatibus vel ullam tenetur!
          Deserunt natus veritatis quasi voluptates iusto? Eaque, rerum, qui ut
          itaque cum sapiente error explicabo neque voluptatem obcaecati soluta
          reprehenderit quaerat. Repellendus iusto corrupti nulla velit ipsa
          consectetur molestias impedit quisquam, id fugit quibusdam assumenda
          praesentium distinctio, dicta harum placeat quidem, quos autem omnis
          cupiditate delectus blanditiis et pariatur culpa. Quasi incidunt vel,
          harum mollitia sunt dolorem magnam asperiores est ipsam tempore optio
          fugiat rem officia autem maxime quas debitis cumque cupiditate facere
          voluptate minima temporibus at, hic itaque. Harum voluptatum nisi
          assumenda iste odit, rerum expedita. Officiis, laborum nulla? Id,
          fugiat! Neque, ratione iste perferendis quasi saepe maiores, modi
          voluptatibus ipsa est dignissimos nulla blanditiis eum vitae ex
          asperiores. Error, temporibus aperiam aspernatur totam cumque soluta
          facere voluptates nesciunt eveniet quod similique, odit ad commodi
          doloribus dignissimos suscipit. Ipsum beatae obcaecati vero. Mollitia
          cupiditate amet dicta, odio reprehenderit beatae, odit dolore vel nam
          natus dolor recusandae et molestias veritatis vitae, laudantium a eius
          cumque commodi doloribus nobis. Recusandae corrupti ullam aliquid,
          <span>{countProgress}</span>
          <span>{scrollPositionY}</span>
        </div>
      </div>
    </div>
  );
}
