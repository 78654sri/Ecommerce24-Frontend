import { useState,useEffect } from "react";
import { useAuth } from "../../components/context/auth";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios"
import toast from "react-hot-toast"
import {Modal} from "antd"

export default function Category(){
   const [auth] = useAuth();

   const [name,setName] = useState("");
   const [categories,setCategories] = useState([]);
   const [visible,setVisible] = useState(false);
   const [selected,setSelected] = useState(null);
   const [Updatename,setUpdateName] = useState("");

   useEffect(()=>{
      loadCategories();
   },[])


   // displaying created categories
   const loadCategories = async ()=>{
      try{
         const {data} = await axios.get("/categories");
         console.log(data)
         setCategories(data);
      }catch(err){
         console.log(err)

      }

   }

   //  creating category 
   const handleSubmit = async (e) =>{
      e.preventDefault();
      try{
         const {data} = await axios.post("/category" ,{name});
         console.log(data)
         if(data?.error){
            toast.error(data.error)
         }else{
            loadCategories();
            setName("");
            toast.success(`"${data?.name}" is created`)
         }
      }catch(err){
         console.log(err);
         toast.error("creating category failed.Try again")

      }
   }


 //updating category
   const handleUpdate = async (e)=>{
      e.preventDefault();
      try{
         const {data} = await axios.put(`/category/${selected._id}`,{name:Updatename})
         if(data?.error){
            toast.error(data.error);
         }else{
            toast.success(`"${data?.name}" is updated`);
            setSelected(null);
            setUpdateName("");
            loadCategories()
            setVisible(false)
         }

      }catch(err){
         console.log(err)
         toast.error("category name already exit")

      }
   }


//Deleting Category
   const handleDelete = async (id) => {
      try {
         const { data } = await axios.delete(`/category/${id}`);
         if (data?.error) {
            toast.error(data.error);
         } else {
            toast.success(`"${data?.name}" is deleted`);
            loadCategories();
         }
      } catch (err) {
         console.log(err);
         toast.error("Deleting category failed. Try again");
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
            <div className="p-3 mt-2 mb-2 h4 bg-light"><h4>Manage categories</h4></div>

            <div className="p-3">
               <form onSubmit={handleSubmit}>
                  <input type="text" className="form-control p-3" placeholder="category name" value={name} onChange={(e)=> setName(e.target.value)}></input>
                  <button className="btn btn-primary form-control mt-3">submit</button>
               </form>
            </div>
            <div className="d-flex flex-wrap">
                  {categories?.map((c) => (
                        <div key={c._id} className="">
                           <button className="btn btn-outline-primary m-3" onClick={() => {
                              setVisible(true);
                              setSelected(c);
                              setUpdateName(c.name);
                           }}>{c.name}</button>
                        </div>
                  ))}
               </div>
               <Modal visible={visible} onOk={()=> setVisible(false)} onCancel={()=> setVisible(false)} footer={null}>
               <div className="p-3">
               <form onSubmit={handleUpdate}>
                  <input type="text" className="form-control p-3" placeholder="category name" value={Updatename} onChange={(e)=> setUpdateName(e.target.value)}></input>
                  <button className="btn btn-primary form-control mt-3">submit</button>
               </form>
               <button className="btn btn-danger form-control mt-3" onClick={() => {
                  handleDelete(selected._id);
                  setVisible(false);
               }}>Delete</button>
            </div>
               </Modal>
            </div>
        </div>
      </div>
    </>
   );
}