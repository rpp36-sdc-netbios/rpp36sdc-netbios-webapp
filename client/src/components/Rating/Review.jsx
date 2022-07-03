import React from 'react';
import Stars from './Stars.jsx';
class Review extends React.Component {
  constructor(props){
    super(props);
    var num = (this.props.review.rating/5)*100;
    var str =num.toString()+"%";
    console.log('percent'+str)
    this.state = {
      yes:this.props.review.helpfulness,//lift
      text:'Helpful?',
      starsDisplay: str,

    }
  }
  render(){
    return(
    <div className ='review'>
      <div className ="user-box">
      {this.props.review.reviewer_name},{this.props.review.date}
      </div>
      <Stars starsDisplay ={this.state.starsDisplay} />
      <div>
      <h3>  {this.props.review.summary} </h3>
      <p> {this.props.review.body} </p>
      <div> {this.state.text}
        <button className ="button-helpful"> Yes </button>
        <p className ="helpul-inline">({this.state.yes})</p>
        <button className ="button-helpful"> Report </button>
      </div>
      </div>

    </div>
    )
  }

}






export default Review;