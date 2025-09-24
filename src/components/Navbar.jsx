import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar-body">
      <nav>
        <NavLink to= "/" >Hem</NavLink>
         <NavLink to= "/OmOss" >Om Oss</NavLink>
          <NavLink to= "/hundar" >Hundar</NavLink>
          </nav>
    </div>
  );
}
export default Navbar;
