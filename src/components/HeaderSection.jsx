// Header Section
import { useState } from "react";
import logo from "../assets/logo.svg";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

function HeaderSection() {
  const [clicks, setClicks] = useState(false);

  const toggleNavClicks = () => {
    setClicks(!clicks);
  };

  return (
    <header className="header" id="header">
      <div className="content | container">
        {/* desktop nav */}
        <nav className="nav">
          <div className="nav-inner">
            {/* logo */}
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
            </a>

            {/* nav links */}
            <ul className="nav-links | hide">
              <li>
                <a href="#" className="nav-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="buttons | hide">
            <a href="#" className="nav-link">
              Log In
            </a>
            <a href="#" className="nav-link">
              Sign Up
            </a>
          </div>
        </nav>

        {/* mobile nav */}
        <nav className={`mobile-nav ${clicks ? "show" : ""}`}>
          <ul className="nav-links | primary">
            <li>
              <a href="#" className="nav-link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Resources
              </a>
            </li>
          </ul>

          <ul className="nav-links | secondary">
            <li>
              <a href="#" className="nav-link">
                Log In
              </a>
            </li>
            <li>
              <a href="#" className="nav-link | btn | signup-btn" datatype="wide">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>

        {/* menu icons */}
        <div className="menu-icons" onClick={toggleNavClicks}>
          {clicks ? (
            <button>
              <XMarkIcon className="size-6 text-slate-700" />
            </button>
          ) : (
            <button>
              <Bars4Icon className="size-6 text-slate-700" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
