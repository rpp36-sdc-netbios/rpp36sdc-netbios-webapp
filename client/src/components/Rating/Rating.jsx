import React from 'react';
import  Review from './Review.jsx';
class Rating extends React.Component {
  constructor(props){
    super(props);


  }

  render(){
    return(
      <div id = " ratingContainer">
        <h4> {this.props.results.length} reviews </h4>
        <label>
          sorted by:
          <select >
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
            <option value="relevance">relevance</option>

          </select>
        </label>
      <div>
      {this.props.results.map((review, key)=> <Review review={review} key = {review.review_id}/>
      )}
      </div>
      <button> More Reviews</button>
      <button> Add A Review </button>

      </div>


    )


  }
}



export default Rating;