import React from 'react';
import  Review from './Review.jsx';
const Rating = (props) => {

  console.log('props.results'+props.results)

  return(
    <div id = " ratingContainer">
    <h4> {props.results.length} reviews </h4>
      <div>
      {props.results.map((review, key)=> <Review review={review} key = {review.review_id}/>
      )}
      </div>
    </div>

    );
}

export default Rating;