/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
        <NavLink to='/'>Home</NavLink>
      <NavLink to="/products">products</NavLink>
    
      <NavLink to="/cart">cart</NavLink>
    </div>
  );
};

export default Navbar;
