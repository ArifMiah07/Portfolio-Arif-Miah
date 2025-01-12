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
            <FloatingAnimatedBox color={'green'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 5 ? (
          <div >
            <FloatingAnimatedBox color={'yellow'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 6 ? (
          <div >
            <FloatingAnimatedBox color={'red'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 7 ? (
          <div >
            <FloatingAnimatedBox color={'stone'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 8 ? (
          <div >
            <FloatingAnimatedBox color={'slate'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 9 ? (
          <div >
            <FloatingAnimatedBox color={'rose'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 10 ? (
          <div >
            <FloatingAnimatedBox color={'pink'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 11 ? (
          <div >
            <FloatingAnimatedBox color={'fuchsia'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 12 ? (
          <div >
            <FloatingAnimatedBox color={'purple'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 13 ? (
          <div >
            <FloatingAnimatedBox color={'violet'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 14 ? (
          <div >
            <FloatingAnimatedBox color={'indigo'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 15 ? (
          <div >
            <FloatingAnimatedBox color={'sky'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 16 ? (
          <div >
            <FloatingAnimatedBox color={'cyan'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 17 ? (
          <div >
            <FloatingAnimatedBox color={'teal'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 18 ? (
          <div >
            <FloatingAnimatedBox color={'emerald'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 19 ? (
          <div >
            <FloatingAnimatedBox color={'lime'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 20 ? (
          <div >
            <FloatingAnimatedBox color={'amber'}></FloatingAnimatedBox>
          </div>
        ) : countClick === 21 ? (
          <div >
            <FloatingAnimatedBox color={'orange'}></FloatingAnimatedBox>
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
