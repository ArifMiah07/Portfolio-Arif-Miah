

const SkillsSubContentSection = ({
    handleMouseEnter, 
    handleMouseLeave,
    hoverStylesForContentDiv,
    makeTriangleStyle,
    view,
    title,
    description,
}) => {
    return (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={hoverStylesForContentDiv}>
          <div className="flex flex-col items-center w-full">
            {/* title */}
            <div className="flex items-center">
              <div className="flex items-center justify-center">
                <div className="w-[200px] h-[2px] bg-black "></div>
                <div className={makeTriangleStyle}></div>
              </div>
              <h1 className="text-[32px] mx-3 ">{title}</h1>
              <div className=" flex items-center justify-center rotate-180">
                <div className="w-[200px] h-[2px] bg-black "></div>
                <div className={makeTriangleStyle}></div>
              </div>
            </div>
            {/* description */}
            <div>
              <p className="text-[16px] ">
                {description}
              </p>
            </div>
            {/* border div */}
            <div
              className={`transition-all duration-300 mt-4  ${
                view
                  ? "w-full h-[4px] mt-5 bg-green-800 "
                  : "w-[100px] h-[2px] bg-slate-600 "
              }`}></div>
          </div>
        </div>
    );
};

export default SkillsSubContentSection;