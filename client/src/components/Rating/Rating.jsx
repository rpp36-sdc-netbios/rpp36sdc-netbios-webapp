import React from 'react';
import  Review from './Review.jsx';
import './rating.css';
class Rating extends React.Component {
  constructor(props){
    super(props);


  }

  render(){
    return(
      <div >
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
      {this.props.results.map((review, key)=>
      <Review review={review} key ={review.review_id}/>
      )}
      </div>
      <div className ="button-box">
      <button className ="button"> MORE REVIEWS</button>
      <button className ="button">ADD A REVIEW  +</button>
      </div>
      </div>


    )


  }
}



export default Rating;