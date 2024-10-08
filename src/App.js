import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/authpages/Login";
import Register from "./pages/authpages/Register";
import Dashboard from "./pages/userPages/Dashboard";
import AdminDashboard from "./pages/AdminPage/AdminDashboard";
import Routee from "./components/PrivateRoute/Routee";
import AdminRoutee from "./components/PrivateRoute/AdminRoutee";
import { PageNotFound } from "./pages/4o4/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Routee />}> 
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<Routee />}> 
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
}


