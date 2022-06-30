import React from 'react';

const Review= (props) => {


  return(
   <div>
     <p> Rating Stars out of five {props.review.rating}</p>
     <p> Review summary: {props.review.summary} </p>
     <p> Review Body {props.review.body} </p>
   </div>
    );


}



export default Review;