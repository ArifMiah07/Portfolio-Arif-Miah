import { Link } from "react-router-dom";
import { SiMinutemailer } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { FaMicroblog } from "react-icons/fa";
// import { TbCircleLetterAFilled, TbCircleDashedLetterA } from "react-icons/tb"; // Make sure the icons are valid
// import { TbCircleLetterAFilled } from "react-icons/tb";
import letterA from "../../../../../assets/letter_a_image.png";

// FloatingBox component
export const FloatingBox = () => {
  return (
    <div className="animate-bounce flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full bg-blue-800 ">
      <div className="animate-bounce  flex items-center justify-center w-[55px] h-[55px] rounded-full bg-blue-700 ">
        <div className="animate-bounce  flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-600 ">
          <div className="animate-bounce  flex items-center justify-center w-[45px] h-[45px] rounded-full bg-blue-500 ">
            <div className="animate-bounce  flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-400 ">
              <div className="animate-bounce  flex items-center justify-center w-[35px] h-[35px] rounded-full bg-blue-300 ">
                <div className="animate-bounce  flex items-center justify-center w-[30px] h-[30px] rounded-full bg-blue-200 ">
                  <div className="animate-bounce  flex items-center justify-center w-[25px] h-[25px] rounded-full bg-blue-100 ">
                    <div className="animate-bounce  flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-50 ">
                      <div className="animate-spin flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer">
                        <span className="bungee-tint">A</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FloatingBox2 component
export const FloatingBox2 = () => {
  return (
    <div className="flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full bg-blue-800 ">
      <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-blue-700 ">
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-600 ">
          <div className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-blue-500 ">
            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-400 ">
              <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-blue-300 ">
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-blue-200 ">
                  <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-blue-100 ">
                    <div className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-50 ">
                      <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer">
                        <img src={letterA} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FloatingBox3 component
export const FloatingBox3 = () => {
  return (
    <div className="flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full bg-blue-800 ">
      <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-blue-700 ">
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-600 ">
          <div className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-blue-500 ">
            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-400 ">
              <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-blue-300 ">
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-blue-200 ">
                  <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-blue-100 ">
                    <div className=" flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-50 ">
                      <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer">
                        <span className="text-white animate-ping hover:text-[24px] transition-all duration-300 hover:animate-bounce ">
                          <Link to={"/v3/about"}>
                            <FcAbout />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FloatingBox4 component
export const FloatingBox4 = () => {
  return (
    <div className="flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full ">
      <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-blue-50 ">
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-100 ">
          <div className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-blue-200 ">
            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-300 ">
              <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-blue-400 ">
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-blue-500 ">
                  <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-blue-600 ">
                    <div className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-700 ">
                      <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer bg-blue-800 ">
                        <span className="text-white animate-bounce hover:animate-ping">
                          <Link to={"/v3/blogs"}>
                            <FaMicroblog size={24} />
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FloatingBox5 component
export const FloatingBox5 = () => {
  return (
    <div className="flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full ">
      <div className="flex items-center justify-center w-[55px] h-[55px] rounded-full bg-blue-50 ">
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-100 ">
          <div className="flex items-center justify-center w-[45px] h-[45px] rounded-full bg-blue-200 ">
            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-300 ">
              <div className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-blue-400 ">
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-blue-500 ">
                  <div className="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-blue-600 ">
                    <div className="flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-700 ">
                      <div className="flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer bg-blue-800 ">
                        <span
                          onClick={() =>
                            window.open(
                              "https://mail.google.com/mail/?view=cm&fs=1&to=arifmiah.me101@gmail.com"
                            )
                          }
                          className="animate-pulse cursor-pointer">
                          <SiMinutemailer className="text-white" size={24} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBox;
