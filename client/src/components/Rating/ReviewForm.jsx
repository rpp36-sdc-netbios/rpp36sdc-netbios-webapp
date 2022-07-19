import React from 'react';
import './rating.css';


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
      <form>
        <p className ="alignleft">Product Overall Ratings:</p>
        <div className="star-rating" required>
          <input type="radio" name="stars" id="star-a" value="5" />
          <label htmlFor="star-a" />
          <input type="radio" name="stars" id="star-b" value ="4" />
          <label htmlFor="star-b" />
          <input type="radio" name="stars" id="star-c" value ="3" />
          <label htmlFor="star-c" />
          <input type="radio" name="stars" id="star-d" value="2" />
          <label htmlFor="star-d" />
          <input type="radio" name="stars" id="star-e" value="1" />
          <label htmlFor="star-e" />
      </div>
      <div>
        <label>Do you recommend this product?</label>
        <input type="radio" name="recommond" value="true" />
        <label>Yes</label>
        <input type="radio" name="recommond" value="true" />
        <label>No</label>

      </div>
      <div>
        <label>Summary Reviews</label>
        <textarea  maxLength={60} rows={2} cols={30} placeholder ="Example: Best purchase ever!">
        </textarea>
      </div>
      <div>
        <label>Why did you like the product or not?</label>
        <textarea  minLength={50} maxLength={1000} rows={5} cols={30} placeholder ="Why did you like the product or not?" required>
        </textarea>
      </div>


        {/* <input type="submit" value="submit" id="submit" /> */}
      </form>



    )
  }


}

export default ReviewForm;




