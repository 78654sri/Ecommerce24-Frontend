


import axios from "axios";
import { useSearch } from "../context/Search";
import { useNavigate } from "react-router-dom";

export default function Search() {
  // hooks
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/products/search/${values?.keyword}`);
      console.log(data);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="d-flex justify-content-center align-items-center">
      <input
        type="search"
        style={{ borderRadius: "0px",height: "30px"  }}
        className="form-control form-control-sm rounded-10"
        placeholder="Search"
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        value={values.keyword}
      />
      <button
        className="btn" onClick={handleSubmit}
        style={{ backgroundColor: "lightpink", color: "#000" }} type="button"
      >
        Search
      </button>
    </form>
  );
}