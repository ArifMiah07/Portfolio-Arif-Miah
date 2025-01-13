// eslint-disable-next-line react/prop-types
const BlogPost = ({ image }) => {
  return (
    <div className="p-5 bg-[#D9D9D9] flex flex-col items-center hover:bg-[#D9D5D5] transition-all duration-300 hover:drop-shadow-2xl hover:shadow-2xl hover:scale-105 hover:rounded-md justify-end w-full ">
      <div className="bg-[#EEEDEA] border-2 border-red-500 w-full h-full grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-5  border-2 border-green-500">
          <img
            src={image}
            alt="blog post image, an apple, colorful, gradient, green, purple, blue"
          />
        </div>
        <div className="col-span-7 bg-[#D9D9D9] grid grid-cols-1 grid-rows-12 p-2 gap-2 border-2 border-blue-500">
          <div className="w-full bg-[#DDC9C9] row-span-4  flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-medium font-bungee-tint text-center  ">
              How to center a Div
            </h1>
          </div>
          <div className="w-full bg-[#DDC9C9] row-span-5 p-2 flex flex-col items-center justify-center">
            <p className="text-[14px] text-center text-pretty font-poppins ">
              ‘How to center a Div’ is a common Joke in Developers World. You
              may hired about it in a certain time of ur development career.To
              center a Div we can follow few ways or there is few ways to
              center. You can use CSS to center a Div even you can use
              Javas...read more
            </p>
          </div>
          <div className="w-full bg-[#DDC9C9] row-span-3 ">
            <div>
              <h1>this is viewers events</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
