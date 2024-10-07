import { useState,createContext,useContext,useEffect } from "react";

const AuthContext = createContext();


const AuthProvider = ({children}) =>{

    const [auth,setAuth] = useState({
        user:null,
        token:"",
    });

    useEffect(()=>{
        const data = localStorage.getItem("auth");
        if(data){
             const parsed = JSON.parse(data);
             setAuth({...auth,token:parsed.token,user:parsed.user});
        }
    },[]);

    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    );

};

const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider};