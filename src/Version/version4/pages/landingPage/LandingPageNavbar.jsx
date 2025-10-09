import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function LandingPageNavbar({ scrollPositionY }) {
  // states
  const [isDark, setIsDark] = useState(true);
  // functionalities
  function handleToggleTheme() {
    setIsDark(!isDark);
  }
  const isAdmin = true;

  console.log(scrollPositionY);

  return (
    // this is landing page nav bar
    /**
     * this nav bar will use in landing page
     */
    <div
      className={`  ${
        scrollPositionY >= 100
          ? " transition-all delay-75 ease-in duration-150 bg-white/30 backdrop-blur-sm rounded-full px-6 py-2 w-fit flex flex-row gap-6 items-center justify-center border border-yellow-50 "
          : " transition-all delay-75 ease-out duration-200 bg-white/30 backdrop-blur-md px-6 py-3 z-3 w-full h-full flex flex-row items-center justify-between gap-6"
      } `}>
      {/* logo */}
      <div
        className={`flex flex-row items-center justify-center ${
          scrollPositionY >= 100 ? "hidden" : ""
        } `}>
        <span>{"<"}</span>
        <span>Arif Miah</span>
        <span>{"/>"}</span>
      </div>
      {/* menu */}
      <div
        className={`flex items-center ${
          scrollPositionY >= 100 ? " w-full  justify-end" : ""
        }`}>
        <ul className="flex flex-row items-center gap-6 ">
          <li>
            <Link to={`/v4/home`}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={`/v4/about`}>
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to={`/v4/blog`}>
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to={`/v4/lib`}>
              <span>Lib</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* extra */}
      <div
        className={`  ${
          scrollPositionY >= 100
            ? "flex flex-row w-full items-start gap-6 "
            : "flex flex-row items-center justify-center gap-6"
        }`}>
        <button onClick={handleToggleTheme}>
          {isDark ? <span>Light</span> : <span>Dark</span>}
        </button>
        {isAdmin && (
          <div>
            {isAdmin ? (
              // TODO: fix this later
              <div className="flex gap-6">
                <button>
                  <Link to={`/v4/login`}>
                    <span>Login</span>
                  </Link>{" "}
                </button>
                <button>
                  <Link to={`/v4/register`}>
                    <span>Register</span>
                  </Link>{" "}
                </button>
              </div>
            ) : (
              <button>
                <Link to={`/v4/logout`}>
                  <span>Logout</span>
                </Link>{" "}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

LandingPageNavbar.propTypes ={
  scrollPositionY: PropTypes.number.isRequired,
}