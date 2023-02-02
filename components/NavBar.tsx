import { AiFillHome } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="ul">
        <li>
          <AiFillHome className="menu-icon"/>
          <a href="">ABOUT</a>
        </li>
        <li>
          <RiComputerFill className="menu-icon"/>
          <a href="">SERVICES</a>
        </li>
        <li>
          <FaCode className="menu-icon"/>
          <a href="">PORTFOLIO</a>
        </li>
        <li>
          <GrMail className="menu-icon"/>
          <a href="">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
