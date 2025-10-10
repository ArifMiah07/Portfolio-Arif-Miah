import { useContext, useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toast, Toaster } from "sonner";
import { MdExpandMore } from "react-icons/md";

export default function Login() {
  /**
   * +++++++++++++++++++++++++++++++++++++++++++
   * STATES
   * +++++++++++++++++++++++++++++++++++++++++++
   */
  const [checkCaptchaSolution, setCheckCaptchaSolution] = useState(0);
  const location = useLocation();
  const [isCaptchaSolved, setIsCaptchaSolved] = useState(false);
  const [toggleConfirmPasswordVisibility, setToggleConfirmPasswordVisibility] =
    useState(true);
  const [toggleCreatePasswordVisibility, setToggleCreatePasswordVisibility] =
    useState(true);
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkValidName, setCheckValidName] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // auth context
  const { handleLoginWithEmailAndPassword } = useContext(AuthContext);

  /**
   * ++++++++++++++++++++++++++++++++++++++++++
   * VARIABLES
   * ++++++++++++++++++++++++++++++++++++++++++
   * */
  // view current pathname
  const currentLocation = location.pathname;
  // TODO: Update it later | captcha solution
  const captchaSolutionResult = 3;

  /**
   * ++++++++++++++++++++++++++++++++++++++++++
   * HANDLE SIDEEFFECTs
   * ++++++++++++++++++++++++++++++++++++++++++
   */
  // check if Captcha Solved
  useEffect(() => {
    setIsCaptchaSolved(Number(checkCaptchaSolution) === captchaSolutionResult);
  }, [checkCaptchaSolution]);

  // check name validation
  useEffect(() => {
    const handleNameValidation = () => {
      const validName = String(checkValidName).trim().toLowerCase();
      setIsValidName(validName.length > 0);
      // console.log("valid name: ", validName);
    };

    handleNameValidation();
  }, [checkValidName]);

  /**
   * ++++++++++++++++++++++++++++++++++++++++++
   * HANDLER FUNCTIONS
   * ++++++++++++++++++++++++++++++++++++++++++
   */
  //   handle form submit and auth
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const createPassword = formData.get("createPassword");
    const confirmPassword = formData.get("confirmPassword");
    const userData = {
      name,
      email,
      createPassword,
      confirmPassword,
    };
    console.log("e", userData);
    // validate input like name, email, both password
    if (createPassword !== confirmPassword) {
      //show error msg
      toast.warning(" Plz enter a same password! password did not matched");
    }
    setLoading(true);
    const signinPromise = handleLoginWithEmailAndPassword(
      email,
      createPassword
    );

    // show toast
    toast.promise(signinPromise, {
      loading: "Signing in...",
      success: (user) => {
        console.log("Signin User: ", user);
        // if validation message
        return user.uid ? "Successfully Sign In!" : "Failed to Sign In!";
      },
      error: "Something went wrong!",
    });
    try {
      const user = await signinPromise;
      console.log("Signin User after await:", user);
      setLoading(false);
      // reset form
      e.target.reset();
      // reset name validation
      setIsValidName(false);
      if (user?.uid) {
        navigate("/v4/home");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // handle captcha | solution

  /**
   * ++++++++++++++++++++++++++++++++++++++++++
   * CONSTANTS | STYLE
   * ++++++++++++++++++++++++++++++++++++++++++
   */
  // styles for captcha images
  const captchaImageStyles = `w-full transition-all duration-300 ease-in-out blur-sm opacity-50 grayscale hover:blur-0 hover:opacity-100 hover:grayscale-0 hover:rotate-0 rotate-45`;
  //

  /**
   * ++++++++++++++++++++++++++++++++++++++++++
   *  CONSOLE
   * ++++++++++++++++++++++++++++++++++++++++++
   */
  // captcha ans:
  // console.log(currentLocation);
  // console.log("ans: ", checkCaptchaSolution);
  // valid name
  // console.log(checkValidName);
  return (
    <div className=" ccRegisterPageBg py-6 flex flex-col items-center shadow-md justify-center w-full min-h-screen  ">
      <Toaster richColors position="top-right" />

      {/* auth tab */}
      <div className="flex mb-6">
        {/* register button : nav*/}
        <button
          className={`${
            currentLocation === "/v4/login"
              ? "bg-green-500 px-3 rounded-l-sm text-white text-md font-medium tracking-wide py-1 "
              : "px-3 py-1  border border-green-500 bg-white"
          }`}>
          <Link to={`/v4/login`}>
            <span>Login</span>
          </Link>
        </button>
        {/* login button : nav*/}
        <button
          className={` px-3 py-1  border border-green-500  bg-white ${
            currentLocation === "/v4/register"
              ? "bg-green-500 px-3 rounded-sm text-white text-md font-medium tracking-wide py-1  "
              : ""
          }`}>
          <Link to={`/v4/register`}>
            <span>Register</span>
          </Link>
        </button>
        {/* goto home button: nav */}
        <button
          className={` bg-white px-3  rounded-sm text-black text-md font-medium tracking-wide py-1  border-l-0 border-t border-b border-r  border-green-500  rounded-r-sm`}>
          <Link to={`/v4/home`}>
            <span>Home</span>
          </Link>
        </button>
      </div>
      {/* form section */}
      <div className=" cardOuterOnly w-[80vw] h-full p-6 ccRegisterPageSection bg-white rounded-md drop-shadow-md flex flex-row items-center justify-center flex-wrap border gap-1 border-gray-200 ">
        <form
          onSubmit={handleSubmit}
          className=" border rounded-md flex flex-col lg:flex-row w-full h-full">
          {/* left side div */}
          <div className=" border-r-2 border-dashed border-black/20 lg:border-0 w-full h-full flex flex-col  ">
            {/* name section */}
            <label
              className=" border-l-0 border-t-0 border-b border-r-0 w-full p-2"
              htmlFor="name">
              <span className="mr-3">Name : </span>
              <input
                type="text"
                name="name"
                required
                onChange={(e) => {
                  setCheckValidName(e.target.value);
                }}
                // value={name}
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              {/* show Name validation msg */}
              {checkValidName && (
                <span className="text-green-600 text-pretty text-sm font-semibold ">
                  {isValidName && (
                    <span>
                      &apos;{checkValidName.toString().trim()}&apos; is a valid
                      name {""}
                    </span>
                  )}
                </span>
              )}
            </label>
            {/* email section */}
            <label
              className="border-l-0 border-t-0 border-b border-r-0 w-full p-2"
              htmlFor="email">
              <span className="mr-3">Email : </span>
              <input
                type="email"
                name="email"
                required
                // value={email}
                placeholder="Enter Your Name"
                className="outline-none border rounded-lg px-5 py-2 w-full   "
              />
              {/* input validation msg */}
              <span className="text-green-600 text-pretty text-sm font-semibold ">
                {" "}
                valid email {""}
              </span>
            </label>
            {/* create password section */}
            <label
              className="border-l-0 border-t-0 border-b border-r-0 w-full p-2"
              htmlFor="name">
              <span className="mr-3">Creates a Password : </span>
              {/* create password, input and visibility section*/}
              <div className="flex flex-row items-center justify-center    ">
                {/* password input */}
                <input
                  type={`${
                    toggleCreatePasswordVisibility ? "password" : "text"
                  }`}
                  onChange={(e) => setCreatePassword(e.target.value)}
                  name="createPassword"
                  required
                  // value={createPassword}
                  placeholder="create a password"
                  className="outline-none border-t border-b border-l rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none px-5 py-2 w-full   "
                />
                {/* control password visibility section*/}
                <div
                  className={` border-l-0 border-t border-b border-r  rounded-r-md  w-[100px] h-[41.9px] flex flex-col items-center justify-center px-6 `}>
                  {/* password toggle btn */}
                  {createPassword && (
                    <button
                      type="button"
                      // handle toggle password visibility
                      onClick={() =>
                        setToggleCreatePasswordVisibility(
                          !toggleCreatePasswordVisibility
                        )
                      }
                      className={`w-fit px-2 `}>
                      {/* toggle visibility icons */}
                      {toggleCreatePasswordVisibility ? (
                        <span>
                          <BsEye />
                        </span>
                      ) : (
                        <span>
                          <BsEyeSlash />
                        </span>
                      )}
                    </button>
                  )}
                </div>
              </div>
              <span className="text-green-600 text-pretty text-sm font-semibold ">
                {" "}
                strong password hard to crack {""}
              </span>
            </label>
            {/* conform password section */}
            <label
              className="border-l-0 border-t-0 border-b border-r-0 w-full p-2"
              htmlFor="name">
              <span className="mr-3">Confirm Password</span>
              {/* handle confirm password , input and toggle visibility */}
              <div className=" flex flex-row items-center justify-center    ">
                {/* confirm password input */}
                <input
                  // toggle input type
                  type={`${
                    toggleConfirmPasswordVisibility ? "password" : "text"
                  }`}
                  // use password input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="confirmPassword"
                  required
                  // value={confirmPassword}
                  placeholder="Confirm you password"
                  className="outline-none border-t border-b border-l rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none px-5 py-2 w-full   "
                />
                {/* confirm password visibility section */}
                <div
                  className={` border-l-0 border-t border-b border-r  rounded-r-md  w-[100px] h-[41.9px] flex flex-col items-center justify-center px-6  `}>
                  {/* confirm password visibility section */}
                  {
                    // hide icons when no input
                    confirmPassword && (
                      <button
                        type="button"
                        // handle confirm password visibility toggle
                        onClick={() =>
                          setToggleConfirmPasswordVisibility(
                            !toggleConfirmPasswordVisibility
                          )
                        }
                        className={`w-fit px-2 `}>
                        {/* toggle icons */}
                        {toggleConfirmPasswordVisibility ? (
                          <span>
                            <BsEye />
                          </span>
                        ) : (
                          <span>
                            <BsEyeSlash />
                          </span>
                        )}
                      </button>
                    )
                  }
                </div>
              </div>
              <span className="text-green-600 text-pretty text-sm font-semibold ">
                password matched
              </span>
            </label>
          </div>
          {/* right side div */}
          <div className=" p-3 border-l-2 border-dashed border-black/20 w-full h-full">
            {/* check box for terms and conditions */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="captcha"
                id="captcha"
                placeholder="you are not a robot"
              />
              <span>Accept terms and conditions</span>
            </div>
            {/* captcha section */}
            <div className=" mt-3 ">
              <label className="flex flex-col  ">
                <span>Solve This Captcha </span>
                <span className="text-sm text-black/70">
                  {
                    "(Please hover over the images below to view the full captcha.)"
                  }
                </span>
              </label>
              <div className=" w-full h-[90px]  flex flex-row items-center my-3 rounded-md border ">
                <img
                  className={`${captchaImageStyles}`}
                  src="/numbers/0x0.svg"
                  alt="captcha image"
                />
                <img
                  className={`${captchaImageStyles}`}
                  src="/numbers/0xA.svg"
                  alt="captcha image"
                />
                <img
                  className={`${captchaImageStyles}`}
                  src="/numbers/0x3.svg"
                  alt="captcha image"
                />
                <img
                  className={`${captchaImageStyles}`}
                  src="/numbers/0xE.svg"
                  alt="captcha image"
                />
                <img
                  className={`${captchaImageStyles}`}
                  src="/numbers/0xF.svg"
                  alt="captcha image"
                />
              </div>
              <div className="w-full flex flex-row items-center justify-center">
                <input
                  type="text"
                  name="captchaSolution"
                  onChange={(e) => setCheckCaptchaSolution(e.target.value)}
                  className="outline-none border-t border-b border-l rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none  px-5 py-1 w-full"
                  placeholder="Please Write Your Solution here"
                />
                <div
                  className={` border-l-0 border-t border-b border-r  rounded-r-md  w-[100px] h-[34px] flex flex-col items-center justify-center px-6 ${
                    isCaptchaSolved ? "bg-green-500 text-white" : "bg-gray-300"
                  }  `}>
                  <button disabled={!isCaptchaSolved} className={`w-fit px-2 `}>
                    Solved
                  </button>
                </div>
              </div>
            </div>
            {/* submit btn */}
            <div className="w-full  flex gap-1 items-center justify-center mt-3  ">
              <button
                disabled={loading}
                type="submit"
                className={`w-full h-full text-lg font-medium border rounded-md px-5 py-2 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-400 hover:bg-green-500"
                }`}>
                {loading ? "Logging..." : "Login"}
              </button>
            </div>
            {/* OAuth login and register */}
            <div className=" flex items-center w-full">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500 font-medium">Or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-col">
              {/* login with google */}
              <button className="flex gap-1 px-5 items-center justify-center border rounded-md mb-3  ">
                <img
                  className="w-12 h-12"
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="google logo"
                />
                <span>Sign in with Google</span>
              </button>
              {/* login with github */}
              <button className="flex gap-1 px-5 items-center justify-center border rounded-md mb-3  ">
                <img
                  className="w-10 h-10"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="github logo"
                />
                <span>Sign in with Github</span>
              </button>
              {/* Sign in with other platform */}
              <button className="flex gap-1 px-5 items-center justify-center text-center border rounded-md mb-3  ">
                <span className="flex items-center justify-center text-lg">
                  <MdExpandMore />
                </span>
                <span>More sign in options</span>
              </button>
            </div>
          </div>
        </form>
        <div></div>
      </div>
    </div>
  );
}
