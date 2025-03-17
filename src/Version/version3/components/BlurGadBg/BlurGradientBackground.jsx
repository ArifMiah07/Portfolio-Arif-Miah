import HomeContent from "../HomeContent/HomeContent";

const BlurGradientBackground = ()=> {
  return (
    <main className="frame w-full h-full bg-white">
      <section className="container relative w-full h-full bg-white">
        {/* Purple blurry gradient background */}
        <div
          style={{ filter: "blur(200px)" }}
          className="absolute rounded-full bg-blur w-[1500px] h-[1500px] -top-[276px] -left-[276px] bg-purple-500">
          {/* Empty - just for the background */}
        </div>

        {/* Text on top of purple background */}
        <h1 className="absolute z-10 -top-[276px] -left-[276px] w-[1500px] h-[1500px] flex items-center justify-center text-center">
          {/* this is purple background color */}
        </h1>

        {/* Blue blurry background */}
        <div className="absolute rounded-full bg-blur w-[200px] h-[100px] top-20 left-20 blur-3xl bg-blue-500">
          {/* Empty - just for the background */}
        </div>

        {/* Text on top of blue background */}
        <h1 className="absolute z-10 top-20 left-20 w-[200px] h-[100px] flex items-center justify-center text-center">
          {/* this is blue background color */}
        </h1>

        {/* Other content */}
        <div className="content absolute left-16 z-50">
          {/* <h1>HI This is Content Page</h1> */}
          <HomeContent></HomeContent>
        </div>
      </section>
    </main>
  )
}


export default BlurGradientBackground;