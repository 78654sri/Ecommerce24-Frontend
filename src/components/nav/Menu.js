import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import "./Menu.css"
export default function Menu() {

    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();

    const logout = ()=>{
        setAuth({...auth,user:null,token:""});
        localStorage.removeItem("auth");
        navigate("/login");
    };


    return (
        <>
          <ul className="nav justify-content-center shadow">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/shop">
                <i className="fas fa-shopping-cart"></i> Shop
              </NavLink>
            </li>
            {!auth?.user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
              </>
            ) : (
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {auth?.user?.name}
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</NavLink>    
                        </li>
                        <li>
                            <button onClick={logout} className="dropdown-item">Logout</button>
                        </li>
                    </ul>
                </li>
            )}
          </ul>
        </>
    );
}
