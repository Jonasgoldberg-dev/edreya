import { Fragment, useContext, useState } from "react";
import { context } from "../context/context";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;

  const activeNav = (value) => (value == nav ? "active" : "");
  const onClick = (value) => {
    setToggle(false);
    changeNav(value);
  };

  return (
    <Fragment>
      <div className="edrea_tm_topbar">
        <div className="topbar_inner">
        <div className="logo">
        <img src="img/jglogo.png" alt="Skinbjerg Design" />
        </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`edrea_tm_mobile_menu ${toggle ? "opened" : ""}`}>
        <div className="inner">
          <div className="menu_list">
            <ul className="transition_link">
              <li className={activeNav("home")}>
                <a href="#home" onClick={() => onClick("home")}>
                  Forside
                </a>
              </li>
              <li className={activeNav("about")}>
                <a href="#about" onClick={() => onClick("about")}>
                  Om
                </a>
              </li>
              <li className={activeNav("portfolio")}>
                <a href="#portfolio" onClick={() => onClick("portfolio")}>
                  Portefølje
                </a>
              </li>
              <li className={activeNav("news")}>
                <a href="#news" onClick={() => onClick("news")}>
                  Services
                </a>
              </li>
              <li className={activeNav("contact")}>
                <a href="#contact" onClick={() => onClick("contact")}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MobileHeader;
