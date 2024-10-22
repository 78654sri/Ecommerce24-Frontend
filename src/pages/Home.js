import Slider from "../components/cards/Slider";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import banner from '../assets/banner.jpg';
import ReviewCard from "../components/cards/ReviewCard";
export default function Home() {
  const [products, setProducts] = useState([]); 
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
    getTotal();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/products-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadProducts = async () => {
    try {
      const { data } = await axios.get(`/list-products/${page}`);
      console.log(data);
      setProducts(data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/list-products/${page}`);
      console.log(data);
      setProducts([...products, ...(data|| [])]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  const arr = [...products];
  const sortBySold = arr?.sort((a, b) => (a.sold < b.sold ? 1 : -1));

  return (
    <>
      <div className="container">

      <div className="hero-banner" style={{ backgroundImage:`url(${banner})`, margin:'6px',height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="cta-container">
   
        </div>
      </div>
       
        <h2 className="mt-4">New Arrivals</h2>
        <div className="row">
          {products.map((p) => (
            <ProductCard key={p._id} p={p} />
          ))}
        </div>
        <h2 className="mt-4" style={{ background: '#FFB6C1',textAlign: 'center',color: '#4B0082', fontWeight: 'bold' }}>Most Liked Books</h2>
        <hr style={{ border: '3px solid violet', margin: '10px 0' }}></hr>
        <div className="container">
          <Slider />
        </div>
        
        <h2 className="mt-4">Best Sellers</h2>
        <div className="row">
          
          { sortBySold.map((p) => (
            <ProductCard key={p._id} p={p} />
          ))}
        </div>
        <h2 className="mt-4"></h2>
      </div>

      <div className="container">
     
        {products && products.length < total && (
          <button
            className="btn btn-warning"
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}>
            {loading ? "loading..." : "load more"}
          </button>
        )}
         <h2 className="mt-4" style={{ background: '#FFB6C1',textAlign: 'center',  color: '#4B0082', fontWeight: 'bold' }}>Reviews</h2>
         <hr style={{ border: '3px solid violet', margin: '10px 0' }}></hr>
        <ReviewCard />
      </div>

    
    </>
  );
}
