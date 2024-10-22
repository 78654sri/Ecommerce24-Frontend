import { useCart } from "../components/context/Cart"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/auth";
import ProductCard from "../components/cards/ProductCard";
import ProductHorizontal from "../components/cards/ProductHorizontal";
export default function Cart(){

    //context
    const [cart] = useCart();
    const [auth]=useAuth();


    //hooks
    const navigate = useNavigate();


    return (
        <>
          <h1>Cart Page ({cart.length})</h1>
          {cart.length > 0 ? (
            <p>
              You have {cart.length} items in your cart. 
              {auth?.token ? '' : ' Please login to checkout.'}
            </p>
          ) : (
            <p>Your cart is empty.</p>
          )}
      
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="p-3 mt-2 mb-2 h4 bg-light text-center">
                  {cart.length > 0 ? (
                    "My Cart"
                  ) : (
                    <div className="text-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate("/")}
                      >
                        Continue Shopping
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
      
          {cart.length > 0 && (
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    {cart.map((p) => (
                      <ProductHorizontal key={p._id} p={p} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    }