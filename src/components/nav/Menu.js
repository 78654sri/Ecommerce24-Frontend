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
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
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
              <li className="nav-item">
              
                <button onClick={logout} className="nav-link" style={{ background: 'none', border: 'none', padding: 0 }}>Logout</button>
              </li>
            )}
          </ul>
        </>
    );
}