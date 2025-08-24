import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ marginRight: "10px", fontWeight: isActive ? "bold" : "normal" })}
      >
        Home
      </NavLink>
      <NavLink 
        to="/directors" 
        style={({ isActive }) => ({ marginRight: "10px", fontWeight: isActive ? "bold" : "normal" })}
      >
        Directors
      </NavLink>
      <NavLink 
        to="/about" 
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
