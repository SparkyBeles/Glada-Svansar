import { NavLink } from "react-router-dom";
import "../style/NavbarStyle.css";

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to= "/" >Home</NavLink>
         <NavLink to= "/about" >About</NavLink>
          <NavLink to= "/dashboard" >Dashboard</NavLink>
           <NavLink to= "/dogPage">Dog</NavLink>
      </nav>
    </div>
  );
}
export default Navbar;
