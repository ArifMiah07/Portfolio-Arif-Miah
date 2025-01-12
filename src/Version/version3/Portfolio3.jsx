import { Outlet } from "react-router-dom";
import FloatingBox, {
  FloatingBox2,
  FloatingBox3,
  FloatingBox4,
  FloatingBox5,
} from "./components/Animations/FloatingBox/FloatingBox";
import { useState } from "react";
import FloatingAnimatedBox from "./components/Animations/FloatingAnimatedBox/FloatingAnimatedBox";

const Portfolio3 = () => {
  // const [clicked, setClicked] = useState(false);
  let [countClick, setCountClick] = useState(0);

  const handleClicked = () => {
    // console.log("clicked");
    // setClicked(!clicked);
    setCountClick(countClick + 1);
    if (countClick === 22) {
      setCountClick((countClick = 0));
    }
    console.log(countClick);
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
        ) : countClick === 4 ? (
          <div >
            <FloatingAnimatedBox color={'green'} font={'poppins'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 5 ? (
          <div >
            <FloatingAnimatedBox color={'yellow'} font={'inter'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 6 ? (
          <div >
            <FloatingAnimatedBox color={'red'} font={'lato'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 7 ? (
          <div >
            <FloatingAnimatedBox color={'stone'} font={''} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 8 ? (
          <div >
            <FloatingAnimatedBox color={'slate'} font={'playwrite-au-sa '} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 9 ? (
          <div >
            <FloatingAnimatedBox color={'rose'} font={'bungee-tint'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 10 ? (
          <div >
            <FloatingAnimatedBox color={'pink'} font={'laila'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 11 ? (
          <div >
            <FloatingAnimatedBox color={'fuchsia'} font={'roboto'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 12 ? (
          <div >
            <FloatingAnimatedBox color={'purple'} font={'raleway '} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 13 ? (
          <div >
            <FloatingAnimatedBox color={'violet'} font={'playfair-display'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 14 ? (
          <div >
            <FloatingAnimatedBox color={'indigo'} font={'open-sans'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 15 ? (
          <div >
            <FloatingAnimatedBox color={'sky'} font={'new-amsterdam'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 16 ? (
          <div >
            <FloatingAnimatedBox color={'cyan'} font={'montserrat'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 17 ? (
          <div >
            <FloatingAnimatedBox color={'teal'} font={'merriweather'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 18 ? (
          <div >
            <FloatingAnimatedBox color={'emerald'} font={'matemasie'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 19 ? (
          <div >
            <FloatingAnimatedBox color={'lime'} font={'lato'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 20 ? (
          <div >
            <FloatingAnimatedBox color={'amber'} font={'bungee-tint'} ></FloatingAnimatedBox>
          </div>
        ) : countClick === 21 ? (
          <div >
            <FloatingAnimatedBox color={'orange'} font={'playfair-display'} ></FloatingAnimatedBox>
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
