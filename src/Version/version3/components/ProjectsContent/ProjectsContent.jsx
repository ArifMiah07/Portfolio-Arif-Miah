// eslint-disable-next-line react/prop-types
const ProjectsContent = ({img, name, overview, tech}) => {
  // const img =
  //   "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="mx-auto w-full h-full p-5 lg:p-5 gap-5 bg-[#D9D9D9] flex flex-col ">
      <div className="relative group border-2 border-gray-400 hover:border-8 hover:border-gray-800 transition-all duration-500 ease-in-out overflow-hidden">
        {/* Image Container */}
        <div className="p-3 w-full flex justify-center">
          <img
            className=" object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
            src={img}
            alt="Project image"
          />
        </div>

        {/* Hover Details */}
        <div className="absolute inset-0 bg-white bg-opacity-80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <div className="flex flex-col justify-center items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <h1 className="text-lg font-bold">Name : {name} </h1>
            <h2 className="text-md text-gray-600">Overview : {overview} </h2>
            <p className="text-center p-2 mt-2">Technology : {tech} </p>
            <div>
            <button className="text-black hover:text-white border hover:bg-gray-600 p-3 ">
              Live Site
            </button>
            <button className="text-black hover:text-white border hover:bg-gray-600 p-3 ">
              Github Repo
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
