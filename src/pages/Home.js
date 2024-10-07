import Slider from "../components/cards/Slider"
import {useAuth}  from "../components/context/auth"
export default function Home() {
    const [auth] = useAuth();

    return (
      <div>
        <Slider />
        <h1>this is Home page</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
      </div>
    );
  }
  
  
  