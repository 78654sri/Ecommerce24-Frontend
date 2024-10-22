import React, { useState } from 'react';
import reviews from './Data.js'; 

const ReviewCard = () => {
  const [index, setIndex] = useState(0); 

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
 
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length); 
  };

  const person = reviews[index];


  if (!person) {
    return <div>No reviews available</div>;
  }

  const { user, rating, comment, date, image } = person;

  return (
    <div className="container card d-flex justify-content-center" style={{ width: '18rem', border: '1px solid #ddd', borderRadius: '0.5rem' }}>
      <div className=" card-body">
        <h5 className="card-title text-center">{user}</h5>
        <p className="card-text text-muted">Rating: {rating}</p>
        <p className="card-text">{comment}</p>
        <img className="card-img-top" src={image} alt={`${user}'s profile`} style={{ maxHeight: '150px', objectFit: 'cover', borderRadius: '0.5rem' }} />
        <p className="card-text text-muted">{date}</p>
        
        <div className="d-flex justify-content-between">
          <button className="btn btn-secondary btn-sm" onClick={prevReview}>Previous</button>
          <button className="btn btn-secondary btn-sm" onClick={nextReview}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
