import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

import ProductCard from '../components/cards/ProductCard';
import toast from 'react-hot-toast';
import { useCart } from '../components/context/Cart';
const ProductView = () => {

    const [product,setProduct] = useState({});
    const [related, setRelated] = useState([]);
    const [cart,setCart] = useCart();
    const params = useParams();

    useEffect(()=>{
       if(params?.slug) loadProduct()
    },[params?.slug]);

    const loadProduct = async ()=>{
        try{
            const {data}=await axios.get(`/product/${params.slug}`);
            setProduct(data)
            loadRelated(data._id, data.category._id);
        }catch(err){

        }
    }
    const loadRelated = async (productId, categoryId) => {
        try {
          const { data } = await axios.get(
            `/related-products/${productId}/${categoryId}`
          );
          setRelated(data);
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className='d-flex '>
          <div className="container mt-4">
            <div className="card" style={{ width: '68rem' }}>
              <div className="card-body d-flex flex-column align-items-start">
                <img 
                  src={`${process.env.REACT_APP_API}/product/photo/${product._id}`} 
                  alt={product.name} 
                  className="card-img-top"
                />
                <h1 className="card-title">{product.name}</h1>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                <p className="card-text"><strong>Category:</strong> {product.category?.name}</p>
                <p className="card-text"><strong>Quantity Available:</strong> {product.quantity}</p>
                <p className="card-text"><strong>Sold:</strong> {product.sold}</p>
                <p className="card-text"><strong>Shipping:</strong> {product.shipping ? 'Yes' : 'No'}</p>
                <button onClick={() => {
                  setCart([...cart, product])
                  toast.success('Added to cart')
                }} className="btn btn-primary col card-button m-2">
                    Add to Cart
                </button>
              </div>
            </div>
          </div>
      
          <div className="container mt-4">
  <h2>Related Products</h2>
  {related?.length < 1 && <p>Nothing Found</p>}
  <div className="row">
    {related?.map(p => (
      <div className="" key={p._id}>
        <ProductCard p={p} />
      </div>
    ))}
  </div>
</div>

        </div>
    );
}   
export default ProductView;
