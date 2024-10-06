// import { useState } from "react";
// import Jumbotron from "../components/cards/Jumbotron";
// import axios from "axios";
// import toast from "react-hot-toast"
// export default function Register() {
//     const [name,setName]=useState("vyshu");
//     const [email,setEmail]=useState("vyshu@gmail.com");
//     const [password,setPassword]=useState("rrr444");




//     const handleSubmit = async (e) =>{
//         e.preventDefault();
//         try{
//             const res = await axios.post(`${process.env.REACT_APP_API}/register` ,{name,email,password});
//             console.log(res)

//         }catch(err){
            
//         }
//     }
//     return (
//       <div>
//         <Jumbotron title="" subtitle="New to DevLibrary? Join the Tech Revolution!"/>
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6 offset-md-3 mt-5">
//                 <h1 className="text-center mb-4 display-4 text-primary font-weight-bold shadow-sm p-3 bg-light rounded">
//   Register
// </h1>

//                     <form onSubmit={handleSubmit}>
//                     <input type="text" placeholder="Enter your Name" value={name} onChange = {(e) =>{setName(e.target.value)}} autoFocus className="form-control mb-4 p-2 "  ></input>
//                     <input type="text" placeholder="Enter your Email" value={email} onChange = {(e) =>{setEmail(e.target.value)}} autoFocus className="form-control mb-4 p-2 "></input>
//                     <input type="text" placeholder="Enter your Password" value={password} onChange = {(e) =>{setPassword(e.target.value)}} autoFocus className="form-control mb-4 p-2 " ></input>'
//                     </form>
//                 </div>
//             </div>
//         </div>


//       </div>
//     );
//   }
  
  
import { useState } from "react";
import Jumbotron from "../../components/cards/Jumbotron";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("vyshu");
  const [email, setEmail] = useState("vyshu@gmail.com");
  const [password, setPassword] = useState("rrr444");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(
        `${process.env.REACT_APP_API}/register`,
        { name, email, password }
      );
      console.log(data)
      if(data?.error){
        toast.error(data.error); 
      }else{
        toast.success("Registration successful!"); 

      }
    }catch(err) {
        console.log(err);
    }
  };

  return (
    <div>
      <Jumbotron title="" subtitle="New to DevLibrary? Join the Tech Revolution!" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5">
            <h1 className="text-center mb-4 display-4 text-primary font-weight-bold shadow-sm p-3 bg-light rounded">
              Register
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-4 p-2"
                autoFocus
              />
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-4 p-2"
              />
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-4 p-2"
              />
             
              <button type="submit" style={{ backgroundColor: 'pink', padding: '20px' }} className="btn form-control btn-primary fw-bold btn-block p-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
