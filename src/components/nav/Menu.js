import { NavLink } from "react-router-dom";
import "./Menu.css"
export default function Menu() {
  return (
    <>
      <ul className="nav justify-content-center shadow">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
      </ul>
    </>
  );
}