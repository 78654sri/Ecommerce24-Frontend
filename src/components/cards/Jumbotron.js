import "./Jumbotron.css"
const Jumbotron = (props) => {
    return (
      <div className="container-fluid ">
        <div className="row">
            <div className="col text-center p-5 ">
            <h1>{props.subtitle}</h1>
            </div>
        </div>
        
      </div>
    );
  };
  
  export default Jumbotron;
  