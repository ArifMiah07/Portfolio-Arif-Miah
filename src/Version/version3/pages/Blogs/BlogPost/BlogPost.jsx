import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const BlogPost = ({ image }) => {
  const [viewEvent, setViewEvent] = useState(false);

  const handleViewEvent = () => {
    // console.log("clicked");
    setViewEvent(!viewEvent);
  };

  const hashTags = ["HTML", "CSS", "Web Dev", "Div", "Alignment", "Blog"];
  const eventBtns = ["Share", "Star", "Download", "Comment", "Love", "Down"];
  return (
    <div className="p-5 bg-[#D9D9D9] flex flex-col items-center hover:bg-[#D9D5D5] transition-all duration-300 hover:drop-shadow-2xl hover:shadow-2xl hover:scale-105 hover:rounded-md justify-end w-full ">
      <div className="bg-[#EEEDEA] border-2 border-red-500 w-full h-full grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-5  border-2 border-green-500 flex flex-col items-center justify-center">
          <img
            src={image}
            alt="blog post image, an apple, colorful, gradient, green, purple, blue"
          />
        </div>
        <div className="col-span-7 bg-[#DDC9C9] flex flex-col items-center justify-evenly p-2 gap-2 border-2 border-blue-500">
          <div className="w-full bg-[#DDC9C9]  flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-medium font-bungee-tint text-center  ">
              How to center a Div
            </h1>
          </div>
          <div className="w-full bg-[#DDC9C9] p-2 flex flex-col items-center justify-center">
            <p className="text-[14px] text-center text-pretty font-poppins ">
              ‘How to center a Div’ is a common Joke in Developers World. You
              may hired about it in a certain time of ur development career.To
              center a Div we can follow few ways or there is few ways to
              center. You can use CSS to center a Div even you can use
              Javas...
            </p>
            <button className="text-[#7D49DD] underline ">read more</button>
          </div>
          <div className="w-full bg-[#DDC9C9] flex flex-col items-center justify-center ">
            <div className=" w-full flex flex-row flex-wrap items-center justify-center lg:justify-center p-2 gap-2">
              <span
                className="w-fit h-fit border border-stone-500 hover:bg-[#ace] p-3"
                onClick={handleViewEvent}>
                {" "}
                <FaArrowAltCircleRight></FaArrowAltCircleRight>
              </span>
              <div className="flex flex-col items-center justify-between">
                {viewEvent ? (
                  <ul className="flex flex-row flex-wrap items-center justify-center gap-2">
                    {hashTags.map((tags, i) => (
                      <li
                        key={i}
                        className=" w-fit h-fit border border-stone-500 hover:bg-[#ace] p-2">
                        #{tags}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="flex flex-row flex-wrap items-center justify-center gap-2">
                    {eventBtns.map((btns, i) => (
                      <li
                        key={i}
                        className=" w-fit h-fit border border-stone-500 hover:bg-[#ace] p-2">
                        {btns}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
