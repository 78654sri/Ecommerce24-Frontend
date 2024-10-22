import React from 'react';
import './Slider.css';


const Slider = () => {
  return (
    <div>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className="carousel-item ">
          <img src={require("../../assets/react.webp")} className="d-block w-100" alt="స్లైడర్ చిత్రం 3" />
          </div>
          <div className="carousel-item active">
            <img src={require("../../assets/python book.jpg")} className="d-block w-100" alt="స్లైడర్ చిత్రం 2" />
          </div>
          <div className="carousel-item">
           
            <img src={require("../../assets/jss.jpg")} className="d-block w-100" alt="స్లైడర్ చిత్రం 1" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
