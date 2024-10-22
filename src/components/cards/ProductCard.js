
import { Badge } from "antd"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/Cart"
import toast from "react-hot-toast"


export default function ProductCard ({p}) {



  const [cart,setCart]=useCart()
    //hooks
  const navigate = useNavigate()
    return (
        <div key={p._id} className="col-md-3 mb-3"> 
        <div className="card hover-effect shadow">
          <div className="card-body">
            <Badge.Ribbon text={`${p?.sold} sold`} color="red">
                <Badge.Ribbon placement = "start" color="pink" text={`${p?.quantity >=1 ? `${p?.quantity - p?.sold} in stock` : 'out of stock'}`} >
                <img 
                src={`${process.env.REACT_APP_API}/product/photo/${p._id}`} alt={p.name} className="card-img-top"></img>
                </Badge.Ribbon>
            </Badge.Ribbon>
            <div className="card-body">
              <h5>{p?.name}</h5>
              <p className="card-title">{p?.description?.substring(0,8)}...</p>
        
              <p className="card-price">${p?.price}</p> 
        
            </div>
            <div className="d-flex justify-content-between">
                <button onClick={()=> navigate(`/product/${p.slug}`)}
                className="btn btn-primary col card-button m-2">
                    View Product
                </button>
                <button onClick={() => {
                  setCart([...cart, p])
                  localStorage.setItem("cart",JSON.stringify([...cart, p]))
                  toast.success('Added to cart')
                }} className="btn btn-primary col card-button m-2">
                    Add to Cart
                </button>
            </div>
         
          </div>
        </div>
        </div>
    )
}
