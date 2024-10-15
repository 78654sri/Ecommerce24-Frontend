import Slider from "../components/cards/Slider";
import axios from "axios";
import { useEffect,useState } from "react";

import ProductCard from "../components/cards/ProductCard";


export default function Home() {
  const [products,setProducts] =  useState([])

  useEffect(()=>{
    loadProducts()

  },[])
  
  const loadProducts = async ()=>{
    try{
      const {data} = await axios.get("/products")
      console.log(data)
      setProducts(data.products);
    }catch(err){
      console.log(err)

    }

  }
  

  const arr = [...products];
  const sortBySold = arr?.sort((a,b)=>(a.sold < b.sold ? 1 : -1))
    return (
      <div className="container">
        <Slider />
        
        <h2 className="mt-4">New Arrivals</h2>
        <div className="row">
          {products?.map((p) => (
             <ProductCard p ={p} />
          ))}
        </div>
        
        <h2 className="mt-4">Best Sellers</h2>
        <div className="row">
          {sortBySold?.map((p) => (
             <ProductCard p ={p} />
          ))}
        </div>
      </div>
    );
}
  

  
