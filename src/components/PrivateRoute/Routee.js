import { useAuth } from "../context/auth";
import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Loading";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";

const Routee = ()=>{

    //context
    const [auth] = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();


    //state
    const [ok,setOk] = useState(false);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const authCheck = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`/auth-check`)
                setOk(data.ok);
            } catch (error) {
                console.error("Auth check failed:", error);
                setOk(false);
            }
            setLoading(false);
        };

        if(auth?.token) authCheck();
    }, [auth?.token]);

    if (loading) {
        return <Loading />;
    }
    
    return ok ? <Outlet /> : navigate("/login",{state:location.pathname});

}


export default Routee;