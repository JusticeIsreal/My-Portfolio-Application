import { AiFillHome } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="ul">
        <li>
          <a href="#home">
            <AiFillHome className="menu-icon" />
          </a>

          <a href="#home">ABOUT</a>
        </li>
        <li>
          <a href="#service">
            <RiComputerFill className="menu-icon" />
          </a>
          <a href="#service">SERVICES</a>
        </li>
        <li>
          <a href="#portfolio">
            <FaCode className="menu-icon" />
          </a>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#contact">
            <GrMail className="menu-icon" />
          </a>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
