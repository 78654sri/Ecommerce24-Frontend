import { useState } from "react";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";



export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const {data} = await axios.post(`${process.env.REACT_APP_API}/login`,{email,password})
            console.log(data);
            if(data.error){
                toast.error(data.error); 
            }else{
                toast.success("Login successful!"); 
            }

        }catch(err){
            console.log(err);
            
        }
    }
    return (
      <div>
        <Jumbotron title="" subtitle="Welcome Back to DevLibrary!"/>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-5">
                <h1 className="text-center mb-4 display-4 text-primary font-weight-bold shadow-sm p-3 bg-light rounded">
  Login
</h1>

                    <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your Email" value={email} onChange = {(e) =>{setEmail(e.target.value)}} autoFocus className="form-control mb-4 p-2 "></input>
                    <input type="text" placeholder="Enter your Password" value={password} onChange = {(e) =>{setPassword(e.target.value)}} autoFocus className="form-control mb-4 p-2 " ></input>
                    <button style={{ backgroundColor: 'pink', padding: '20px' }} type="submit" className="btn btn-primary form-control fw-bold  btn-block p-2">
            Submit
              </button>
                    </form>
                </div>
            </div>
        </div>


      </div>
    );
  }
  
  
  