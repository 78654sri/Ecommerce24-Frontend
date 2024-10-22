import { useSearch } from "../components/context/Search"
import ProductCard from "../components/cards/ProductCard"


export default function Search() {
    const [values] = useSearch();
    return (
        <div>
         <h2 className="text-center">Found {values?.results?.length} products</h2>
        <div className="container mt-2">
        <div className="d-flex row flex-row">
          {values?.results?.map((p) => (
            <div key={p._id} className="">
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>

        </div>
    )
}
