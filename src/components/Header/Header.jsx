import logo from "../../assets/Logo/BrainFlix-logo.svg";
import userImage from "../../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";
import { Outlet } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <a className="header__logo-container" href="../.././public/index.html">
          <img className="header__logo" src={logo} alt="BrainFlix Logo" />
        </a>
        <form className="header__form">
          <div className="header__search-container">
            <input
              className="header__search-box"
              id="video-name"
              placeholder="Search"
            />
            <button type="submit" className="header__btn--tablet">
              <img className="header__upload-icon" src={uploadIcon} />
              <span className="header__btn-txt">UPLOAD</span>
            </button>
            <img
              className="header__user-img"
              src={userImage}
              alt="Mohan Muruge user"
            />
          </div>
          <button type="submit" className="header__btn">
            <img className="header__upload-icon" src={uploadIcon} />
            <span className="header__btn-txt">UPLOAD</span>
          </button>
        </form>
      </header>
      <Outlet />
    </>
  );
}
