import React from 'react';
import './rating.css';
class Review extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      yes:this.props.review.helpfulness,//lift
      text:'helpful',

    }
  }
  render(){
    return(
    <div className ='review'>
      <div> Rating Stars {this.props.review.rating}
      {this.props.review.reviewer_name} {this.props.review.date}</div>

      <h3>  {this.props.review.summary} </h3>
      <p> {this.props.review.body} </p>
      <div> {this.state.text}
        <button> Yes </button>
        <p>{this.state.yes}</p>
        <button> Report </button>
       </div>
    </div>
    )
  }

}






export default Review;