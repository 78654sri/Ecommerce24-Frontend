import moment from "moment"
import { Badge } from "antd"
export default function ProductCard ({p}) {
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
              <p className="card-title">{p?.description?.substring(0,20)}...</p>
        
              <p className="card-price">${p?.price}</p> 
        
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-primary col card-button m-2">
                    View Product
                </button>
                <button className="btn btn-primary col card-button m-2">
                    Add to Cart
                </button>
            </div>
            {/* <p className="card-text">{moment(p.createdAt).fromNow()}</p>
            <p className="card-text">{p.sold} sold</p> */}
          </div>
        </div>
        </div>
    )
}
