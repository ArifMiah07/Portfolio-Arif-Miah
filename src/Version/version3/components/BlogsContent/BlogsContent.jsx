
import bImg from '../../../../assets/apple/1.webp'

const BlogsContent = (img) => {

    
  return (
    <div className="p-5 bg-[#D9D9D9] flex flex-col items-center ">
      <div className="bg-[#EEEDEA] border-4 border-red-500 w-full h-full grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-5  border-4 border-green-500">
          <img
            src={bImg}
            className="w-full h-full"
            alt="blog post image, an apple, colorful, gradient, green, purple, blue"
          />
        </div>
        <div className="col-span-7 bg-[#D9D9D9] flex flex-col gap-5 border-4 border-blue-500">
          <div className="w-full bg-[#DDC9C9] ">a</div>
          <div className="w-full bg-[#DDC9C9] ">a</div>
          <div className="w-full bg-[#DDC9C9] ">a</div>
        </div>
      </div>
    </div>
  );
};

export default BlogsContent;
