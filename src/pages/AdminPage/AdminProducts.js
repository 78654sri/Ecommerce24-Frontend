import { useAuth } from "../../components/context/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminMenu from "../../components/nav/AdminMenu";
import { Link } from "react-router-dom";
export default function AdminProducts(){
   const [auth] = useAuth();

   //state
   const [products,setProducts] = useState([]);

   useEffect(()=>{
      loadProducts();
   },[])

   const loadProducts= async ()=>{
      try{
         const {data} = await axios.get("/products");
         console.log(data);
         setProducts(data.products);
      }catch(err){
         console.log(err)
      }

   }

   return (
    <>
      <div className="container-fluid mt-1">
         <div className="row">
            <div className="col-lg-8 offset-lg-2">
               <div className="card shadow-sm">
                  <div className="card-body p-4">
                     <h2 className="card-title text-center mb-4">
                        <span className="text-primary">👋 {`Hello ${auth?.user?.name}`} 😊</span>
                     </h2>
                     <h3 className="card-subtitle text-center mb-4 text-muted">
                        Admin Dashboard
                     </h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu />
            </div>
            <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light"><h4>Admin Products</h4></div>
             {products.map((p) => <Link key={p._id} to={`/dashboard/admin/product/update/${p.slug}`}>
             <div className="card mb-3">
               <div className="row g-0">
                  <div className="col-md-4">
                     <img src={`${process.env.REACT_APP_API}/product/photo/${p._id}`} alt={p.name} className="img img-fluid rounded-start"></img>
                  </div>
                  <div className="col-md-8">
                       <div className="card-body text-center">
                        <h5 className="card-title text-primary">{p.name}</h5>
                        <p className="card-text text-muted">{p.description}</p>
                        <p className="card-text">
                           <small className="text-secondary">{p.createdAt}</small>
                        </p>
                       </div>
                  </div>

               </div>
             </div>
             </Link>)}

            </div>
        </div>
      </div>
    </>
   );
}
