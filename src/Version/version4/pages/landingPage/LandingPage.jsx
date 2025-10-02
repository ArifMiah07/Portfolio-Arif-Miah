export default function LandingPage() {
  return (
    // this is the landing page
    <div className="w-full  h-full border-4 border-red-500 ">
      <header className=" w-full h-full flex items-center px-6 py-2 ">
        <nav className=" w-full h-full flex flex-row items-center justify-between gap-6 ">
          {/* logo */}
          <div className="flex flex-row items-center justify-center ">
            <span>{"<"}</span>
            <span>Arif Miah</span>
            <span>{"/>"}</span>
          </div>
          {/* menu */}
          <div className="flex items-center">
            <ul className="flex flex-row items-center gap-6 ">
              <li>Home</li>
              <li>About</li>
              {/* <li>Skill</li>
                        <li>Projects</li>
                        <li>Contact</li> */}
              <li>Blog</li>
              <li>Lib</li>
            </ul>
          </div>
          {/* extra */}
          <div className="flex flex-row items-center justify-center  ">
            <span>Light</span>
            <span>Dark</span>
          </div>
        </nav>
      </header>
      <h1 className=" gradientName uppercase text-center font-black text-7xl  ">
        <span>Junior</span>
        <span> Full Stack</span>
        <span> Developer</span>
      </h1>
    </div>
  );
}
