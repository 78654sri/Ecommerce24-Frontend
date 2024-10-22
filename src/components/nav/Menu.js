import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Cart";
import Search from "../form/Search";
import "./Menu.css"
import { Badge } from "antd";
export default function Menu() {

    const [auth,setAuth] = useAuth();
    const [cart,setCart]= useCart();
    const navigate = useNavigate();

   

    const logout = ()=>{
        setAuth({...auth,user:null,token:""});
        localStorage.removeItem("auth");
        navigate("/login");
    };


    return (
        <>
          <ul className="nav justify-content-center shadow sticky-top">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/shop">
                <i className="fas fa-shopping-cart"></i> Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <Badge count={cart?.length>=1 ? cart.length:0} offset={[-5, 13]} showZero={true} >
                   <NavLink className="nav-link" aria-current="page" to="/cart">
                     <i className="fas fa-shopping-cart"></i> Cart
                   </NavLink>
              </Badge>
             
            </li>

            <Search />

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
