import { useState } from "react";
import { FaGripLines } from "react-icons/fa6";

import "./index.css";

const Header = () => {
  const [ismenuClicked, toggleMenu] = useState(false);

  const onClickMenu = () => {
    toggleMenu(!ismenuClicked);
  };
  return (
    <>
      <div className="mobile-header-container">
        <img
          src="https://res.cloudinary.com/dyify82t6/image/upload/v1728986826/Group_20_zpxoqw.png"
          alt="logo"
          className="logo"
        />
        <button
          type="button"
          className="icon-button"
          aria-label="button"
          onClick={onClickMenu}
        >
          <FaGripLines className="menu-icon" />
        </button>
      </div>
      {ismenuClicked && (
        <ul className="nav-list-container">
          <li href="#features" className="item">
            Features
          </li>
          <li href="#why-us" className="item">
            Why Us
          </li>
          <li href="#tokenomics" className="item">
            Tokenomics
          </li>
          <li href="#roadmap" className="item">
            Roadmap
          </li>
        </ul>
      )}

      <div className="larger-header-container">
        <ul className="large-nav-list-container">
          <li className="item">
            <a href="#features" className="link">
              Features
            </a>
          </li>
          <li className="item">
            <a href="#why-us" className="link">
              Why Us
            </a>
          </li>
          <li className="item">
            <a href="#tokenomics" className="link">
              Tokenomics
            </a>
          </li>
          <li className="item">
            <a href="#roadmap" className="link">
              Roadmap
            </a>
          </li>
        </ul>
        <div className="button-container">
          <button type="button" className="login-button"></button>
          <button type="button" className="whitespace-button">
            Whitespace
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
