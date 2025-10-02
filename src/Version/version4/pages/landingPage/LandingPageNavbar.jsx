import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPageNavbar() {
  // states
  const [isDark, setIsDark] = useState(true);
  // functionalities
  function handleToggleTheme() {
    setIsDark(!isDark);
  }
  return (
    // this is landing page nav bar
    /**
     * this nav bar will use in landing page
     */
    <nav className=" w-full h-full flex flex-row items-center justify-between gap-6 ">
      {/* logo */}
      <div className="flex flex-row items-center justify-center ">
        <span>{"<"}</span>
        <span>Arif Miah</span>
        <span>{"/>"}</span>
      </div>
      {/* menu */}
      <div className="flex items-center">
        <ul className="flex flex-row items-center gap-6 ">
          <li>
            <Link>
                <span>Home</span>
            </Link>
          </li>
          <li>
            <Link>
                <span>About</span>
            </Link>
          </li>
          <li>
            <Link>
                <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link>
                <span>Lib</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* extra */}
      <div className="flex flex-row items-center justify-center  ">
        <button onClick={handleToggleTheme}>
          {isDark ? <span>Light</span> : <span>Dark</span>}
        </button>
      </div>
    </nav>
  );
}
