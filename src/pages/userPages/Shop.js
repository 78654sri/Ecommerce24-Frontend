import { useState, useEffect } from "react";
import Slider from "../../components/cards/Slider";
import axios from "axios";
import ProductCard from "../../components/cards/ProductCard";
import { Checkbox, Radio } from "antd";
import { prices } from "../prices";

export default function Shop() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]); // categories
  const [radio, setRadio] = useState([]); // radio


  useEffect(() => {
    if (!checked.length && !radio.length) {
      loadProducts();
    }
  }, []); 
  
  useEffect(() => {
    if (checked.length || radio.length) {
      loadFilteredProducts();
    }
  }, [checked, radio]); 
  

  const loadFilteredProducts = async () => {
    try {
        const { data } = await axios.post("/filtered-products", { checked, radio });
        
        console.log("Checked:", checked);
        console.log("Radio:", radio);
        console.log("Response data from backend:", data);
        console.log("All products received:", data.products);
        
        // Assuming products are filtered on the server side:
        setProducts(data); 
      
        
    } catch (err) {
        console.error("Error loading filtered products:", err.response ? err.response.data : err.message);
    }
};



  const loadProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCatgories();
  }, []);

  const loadCatgories = async () => {
    try {
      const { data } = await axios.get("/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheck = (value, id) => {
    console.log(value, id);
    // Create a copy of the current checked state
    let allChecked = [...checked];
  
    // If the checkbox is checked, add the id to the list, otherwise remove it
    if (value) {
      allChecked.push(id);
    } else {
      allChecked = allChecked.filter((c) => c !== id);
    }
  
    // Update the state with the new checked values
    setChecked(allChecked);
  };
  
  return (
    <>
      <Slider />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar p-3">
              <h4 className="text-center p-3 mb-2 h4 bg-light">Filter by Categories</h4>
              <div className="row p-5">
                {categories?.map((category) => (
                  <Checkbox
                    key={category._id}
                    onChange={(e) => handleCheck(e.target.checked, category._id)}
                  >
                    {category.name}
                  </Checkbox>
                ))}
              </div>
              <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
                Filter by Price
              </h2>
            
              <div className="row p-5">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {prices?.map((p) => (
                    <div key={p._id} style={{ marginLeft: "8px" }}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
             
              </div>

              <div className="p-5 pt-0">
                <button
                  className="btn btn-outline-secondary col-12"
                  onClick={() => window.location.reload()}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <h2 className="p-3 mt-3 mb-3 h4 bg-light text-center">
              {products?.length} Products
            </h2>
            <div className="row">
              {products?.map((p) => (
                <ProductCard p={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
