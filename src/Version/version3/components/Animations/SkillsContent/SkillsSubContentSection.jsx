import PropTypes from 'prop-types';


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
      <div className="flex flex-col items-center text-center w-full">
        {/* title */}
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <div className="sm:w-[120px] md:[160px] lg:[200px] h-[2px] bg-black "></div>
            <div className={makeTriangleStyle}></div>
          </div>
          <h1 className="text-2xl mx-3 ">{title}</h1>
          <div className=" flex items-center justify-center rotate-180">
            <div className="sm:w-[120px] md:[160px] lg:[200px] h-[2px] bg-black "></div>
            <div className={makeTriangleStyle}></div>
          </div>
        </div>
        {/* description */}
        <div>
          <p className="text-lg p-3 font-normal ">{description}</p>
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

SkillsSubContentSection.propTypes = {
    handleMouseEnter: PropTypes.func.isRequired, 
    handleMouseLeave: PropTypes.func.isRequired, 
    hoverStylesForContentDiv: PropTypes.string.isRequired, 
    makeTriangleStyle: PropTypes.string.isRequired, 
    view: PropTypes.bool.isRequired, 
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired,
  };

export default SkillsSubContentSection;

