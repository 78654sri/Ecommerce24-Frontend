import { useAuth } from "../../components/context/auth";
import { useState, useEffect } from "react";
import AdminMenu from "../../components/nav/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";

const {Option} = Select;

export default function Product() {
  const [auth] = useAuth();

  // State
  const [categories, setCategories] = useState([]);
  const [photo,setPhoto] = useState("");
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shipping,setShipping] = useState("");
  const [quantity,setQuantity] = useState("");


  const navigate = useNavigate();
  // Fetch categories on component mount
  useEffect(() => {
    loadCategories();
  }, []);

  // Fetch categories from the backend
  const loadCategories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e)=>{
   e.preventDefault();
   try{
      if (!name || !description || !category || !price || !quantity) {
         return toast.error("All fields are required");
       }
      const productData = new FormData();
      productData.append("photo",photo)
      productData.append("name", name)
      productData.append("description",description)
      productData.append("category",category)
      productData.append("shipping",shipping)
      productData.append("quantity",quantity)
      productData.append("price", price);

      const {data} = await axios.post("/product" , productData);
      if(data?.error){
         toast.error(data.error)
      }else{
         toast.success(`"${data.name}" is created`);
         navigate("/dashboard/admin/products")
      }
   }catch(err){
     console.log(err)
     toast.error("product create failed please try again")
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
                  <span className="text-primary">
                    👋 {`Hello ${auth?.user?.name}`} 😊
                  </span>
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
            <div className="p-3 mt-2 mb-2 h4 bg-light">
              <h4>Create Product</h4>
            </div>


            {photo && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="product "
                  className="img img-responsive"
                  height="200px"
                />
              </div>
            )}

            <div className="pt-2">
              <label className="btn btn-outline-secondary col-12 mb-3">
                {photo ? photo.name : "Upload photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
              </label>
            </div>

            <input type="text" className="form-control mb-3 p-2" placeholder="write a name" value={name} onChange={(e)=> setName(e.target.value)}></input>
            <textarea type="text" className="form-control mb-3 p-2" placeholder="write a description" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
            <Select  bordered={false} size="large" className="form-select mb-3" placeholder="choose category" value={category} onChange={(value)=> setCategory(value)}>
               {
                  categories.map((c) => <Option key={c._id} value={c._id}>{c.name}</Option>)
               }
            </Select>
            <input type="number" className="form-control mb-3 p-2" placeholder="Enter Price" value={price} onChange={(e)=> setPrice(e.target.value)}></input>
           
            <Select  bordered={false} size="large" className="form-select mb-3" placeholder="choose Shipping"  onChange={(value)=> setShipping(value)}>
              <Option value="0">No</Option>
              <Option value="1">Yes</Option>
            </Select>
            <input type="number" min="1" className="form-control mb-3 p-2" placeholder="Enter Quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)}></input>
            <button className="form-control btn btn-primary mb-5" onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
