import { useContext } from "react";
import { context } from "../context/context";

const Header = () => {
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;

  const activeNav = (value) => (value == nav ? "active" : "");

  return (
    <div className="edrea_tm_header">
      <div className="header_inner">
        <div className="logo">
          <p>J. Goldberg Consult</p>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className={activeNav("home")}>
              <a href="#home" onClick={() => changeNav("home")}>
                Forside
              </a>
            </li>
            <li className={activeNav("about")}>
              <a href="#about" onClick={() => changeNav("about")}>
                Om
              </a>
            </li>
            <li className={activeNav("portfolio")}>
              <a href="#portfolio" onClick={() => changeNav("portfolio")}>
                Portefølje
              </a>
            </li>
            <li className={activeNav("news")}>
              <a href="#news" onClick={() => changeNav("news")}>
                Services
              </a>
            </li>
            <li className={activeNav("contact")}>
              <a href="#contact" onClick={() => changeNav("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
