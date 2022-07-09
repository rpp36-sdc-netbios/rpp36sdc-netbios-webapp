import React from 'react';



class ReviewForm extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      "rating":0,
      "summary":"",
      "recommend":"",
      "response":null,
      "body":"",
      "date":"",
      "reviewer_name":"",
      "photos":[],
      "helpful":"",
    }
  }
  render(){


    return(
      <div>form </div>

    )
  }


}

export default ReviewForm;




