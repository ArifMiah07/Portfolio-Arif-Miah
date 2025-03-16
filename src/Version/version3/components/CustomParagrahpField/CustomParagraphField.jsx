// eslint-disable-next-line react/prop-types
 const CustomParagraphField = ({ pText, propStylesClasses }) => {
  const regStyles =
    "hover:border-l-4 hover:p-4 hover:border-[#009400] px-3 bg-[#FAFAFA]  transition-all duration-300 hover:drop-shadow-2xl hover:shadow-2xl hover:scale-105 flex flex-col items-center justify-end w-full text-lg hover:text-xl";
  // eslint-disable-next-line react/prop-types
  const StylesClasses = (regStyles + " " + propStylesClasses.join(" "))
    .split(" ")
    .join(" ");
  // console.log((regStyles + " " + propStylesClasses.join(" ")).split(' ').join(" "))

  return <p className={`${StylesClasses}`}>{pText}</p>;
};

export default CustomParagraphField;