import { useAuth } from "../context/auth";
import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";

const Routee = ()=>{

    //context
    const [auth] = useAuth();
    // state
    const [ok, setOk] = useState(false);
  
    useEffect(() => {
      const authCheck = async () => {
        const { data } = await axios.get(`/auth-check`);
        if (data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      };
  
      if (auth?.token) authCheck();
    }, [auth?.token]);
  
    // useEffect(() => {
    //   if (auth?.token) {
    //     setOk(true);
    //   } else {
    //     setOk(false);
    //   }
    // }, [auth?.token]);
  
    return ok ? <Outlet /> : <Loading />;
  }


export default Routee;