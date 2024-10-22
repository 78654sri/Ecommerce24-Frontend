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
import Category from "./pages/AdminPage/Category";
import Product from "./pages/AdminPage/Product";
import Orders from "./pages/userPages/Orders";
import Profile from "./pages/userPages/Profile";
import AdminProducts from "./pages/AdminPage/AdminProducts"
import ProductUpdate from "./pages/AdminPage/ProductUpdate";
import Shop from "./pages/userPages/Shop";
import Search from "./pages/Search";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster position="top-right"/>
      <Routes>
        //routes than can everyone access
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:slug" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        // user authenticated routes
        <Route path="/dashboard" element={<Routee />}> 
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        // admin authenticated routes
        <Route path="/dashboard" element={<AdminRoutee />}> 
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/category" element={<Category />} />
          <Route path="admin/product" element={<Product />} />
          <Route path="admin/product/update/:slug" element={<ProductUpdate />} />
          <Route path="admin/products" element={<AdminProducts />} />
        </Route>
        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
}


