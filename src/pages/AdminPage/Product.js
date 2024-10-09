import { useAuth } from "../../components/context/auth";

import AdminMenu from "../../components/nav/AdminMenu";

export default function Product(){
   const [auth] = useAuth();

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
            <div className="p-3 mt-2 mb-2 h4 bg-light"><h4>create product</h4></div>
            <p>create product form</p>
            </div>
        </div>
      </div>
    </>
   );
}