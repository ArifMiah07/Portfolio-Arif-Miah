import { Link } from "react-router-dom";

export const FloatingBox2 = () => {
  return (
    <div className=" flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full bg-blue-800 ">
      <div className="  flex items-center justify-center w-[55px] h-[55px] rounded-full bg-blue-700 ">
        <div className="  flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-600 ">
          <div className="  flex items-center justify-center w-[45px] h-[45px] rounded-full bg-blue-500 ">
            <div className="  flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-400 ">
              <div className="  flex items-center justify-center w-[35px] h-[35px] rounded-full bg-blue-300 ">
                <div className="  flex items-center justify-center w-[30px] h-[30px] rounded-full bg-blue-200 ">
                  <div className="  flex items-center justify-center w-[25px] h-[25px] rounded-full bg-blue-100 ">
                    <div className="  flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-50 ">
                      <div className=" flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer">
                        A
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
export const FloatingBox4 = () => {
  return (
    <div className=" flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full ">
      <div className="  flex items-center justify-center w-[55px] h-[55px] rounded-full bg-blue-50 ">
        <div className="  flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-100 ">
          <div className="  flex items-center justify-center w-[45px] h-[45px] rounded-full bg-blue-200 ">
            <div className="  flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-300 ">
              <div className="  flex items-center justify-center w-[35px] h-[35px] rounded-full bg-blue-400 ">
                <div className="   flex items-center justify-center w-[30px] h-[30px] rounded-full bg-blue-500 ">
                  <div className="   flex items-center justify-center w-[25px] h-[25px] rounded-full bg-blue-600 ">
                    <div className="  flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-700 ">
                      <div className=" flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer bg-blue-800 ">
                        <Link to={"/v3/blogs"}>
                          <span>MSG</span>
                        </Link>
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
export const FloatingBox5 = () => {
  return (
    <div className=" flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full ">
      <div className=" flex items-center justify-center  w-[55px] h-[55px] rounded-full bg-blue-50 ">
        <div className=" flex items-center justify-center  w-[50px] h-[50px] rounded-full bg-blue-100 ">
          <div className=" flex items-center justify-center  w-[45px] h-[45px] rounded-full bg-blue-200 ">
            <div className=" flex items-center justify-center  w-[40px] h-[40px] rounded-full bg-blue-300 ">
              <div className=" flex items-center justify-center  w-[35px] h-[35px] rounded-full bg-blue-400 ">
                <div className=" flex items-center justify-center   w-[30px] h-[30px] rounded-full bg-blue-500 ">
                  <div className=" flex items-center justify-center   w-[25px] h-[25px] rounded-full bg-blue-600 ">
                    <div className=" flex items-center justify-center  w-[20px] h-[20px] rounded-full bg-blue-700 ">
                      <div className=" flex items-center justify-center  w-[15px] h-[15px] rounded-full cursor-pointer bg-blue-800 ">
                        <span
                          onClick={() =>
                            window.open(
                              "https://mail.google.com/mail/?view=cm&fs=1&to=arifmiah.me101@gmail.com"
                            )
                          }
                          className="animate-pulse cursor-pointer">
                          Mail
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
export const FloatingBox3 = () => {
  return (
    <div className=" flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full bg-blue-800 ">
      <div className="  flex items-center justify-center w-[55px] h-[55px] rounded-full bg-blue-700 ">
        <div className="  flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-600 ">
          <div className="  flex items-center justify-center w-[45px] h-[45px] rounded-full bg-blue-500 ">
            <div className="  flex items-center justify-center w-[40px] h-[40px] rounded-full bg-blue-400 ">
              <div className="  flex items-center justify-center w-[35px] h-[35px] rounded-full bg-blue-300 ">
                <div className="  animate-ping flex items-center justify-center w-[30px] h-[30px] rounded-full bg-blue-200 ">
                  <div className="   flex items-center justify-center w-[25px] h-[25px] rounded-full bg-blue-100 ">
                    <div className=" animate-pulse flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-50 ">
                      <div className=" flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer">
                        <Link to={"about"}>A</Link>
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
export const greenFloatingBox1 = () => {
  return (
    <div className="animate-bounce flex items-center justify-center absolute bottom-10 right-10 w-[60px] h-[60px] rounded-full bg-green-800 ">
      <div className="animate-bounce  flex items-center justify-center w-[55px] h-[55px] rounded-full bg-green-700 ">
        <div className="animate-bounce  flex items-center justify-center w-[50px] h-[50px] rounded-full bg-green-600 ">
          <div className="animate-bounce  flex items-center justify-center w-[45px] h-[45px] rounded-full bg-green-500 ">
            <div className="animate-bounce  flex items-center justify-center w-[40px] h-[40px] rounded-full bg-green-400 ">
              <div className="animate-bounce  flex items-center justify-center w-[35px] h-[35px] rounded-full bg-green-300 ">
                <div className="animate-bounce  flex items-center justify-center w-[30px] h-[30px] rounded-full bg-green-200 ">
                  <div className="animate-bounce  flex items-center justify-center w-[25px] h-[25px] rounded-full bg-green-100 ">
                    <div className="animate-bounce  flex items-center justify-center w-[20px] h-[20px] rounded-full bg-green-50 ">
                      <div className="animate-spin flex items-center justify-center w-[15px] h-[15px] rounded-full cursor-pointer">
                        A
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
const FloatingBox = () => {
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
                        A
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
