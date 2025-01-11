import { Outlet } from "react-router-dom";
import FloatingBox, {
  FloatingBox2,
  FloatingBox3,
  FloatingBox4,
  FloatingBox5,
} from "./components/Animations/FloatingBox/FloatingBox";
import { useState } from "react";

const Portfolio3 = () => {
  // const [clicked, setClicked] = useState(false);
  let [countClick, setCountClick] = useState(0);

  const handleClicked = () => {
    // console.log("clicked");
    // setClicked(!clicked);
    setCountClick(countClick + 1);
    if (countClick === 4) {
      setCountClick((countClick = 0));
    }
    // console.log(countClick);
  };
  return (
    <div className="">
      <Outlet></Outlet>
      <div onClick={handleClicked} className="relative">
        {countClick === 0 ? (
          <FloatingBox4></FloatingBox4>
        ) : countClick === 1 ? (
          <FloatingBox2></FloatingBox2>
        ) : countClick === 2 ? (
          <FloatingBox></FloatingBox>
        ) : countClick === 3 ? (
          <div>
            <FloatingBox5></FloatingBox5>
          </div>
        ) : (
          <div className="">
              <FloatingBox3></FloatingBox3>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio3;
