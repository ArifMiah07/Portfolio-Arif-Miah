import LandingPageNavbar from "./LandingPageNavbar";

export default function LandingPage() {
  // states

  // functionalities

  return (
    // this is the landing page
    /**
     * landing page will shown up in the root url
     * features
     * add animation
     *
     */
    <div className="landingPageBg w-full min-h-screen border-4 border-red-500 ">
      <header className=" w-full h-full flex items-center px-6 py-2 ">
        <LandingPageNavbar />
      </header>
      <h1 className=" gradientName uppercase text-center font-black text-7xl  ">
        <span>Junior</span>
        <span> Full Stack</span>
        <span> Developer</span>
      </h1>
    </div>
  );
}
