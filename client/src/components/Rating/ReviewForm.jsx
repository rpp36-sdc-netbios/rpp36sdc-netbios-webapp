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
    this.handlePhotoChange =this.handlePhotoChange.bind(this)
  }

  handlePhotoChange(e){
    if(this.state.photos.length<5){
      this.setState(preState => {
        return ({photos: [...preState.photos, e.target.files[0]]})
      })

    }

  }


  render(){
    var urls =this.state.photos.map(photo=>URL.createObjectURL(photo))


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
        <label>Review</label>
        <textarea  minLength={50} maxLength={1000} rows={5} cols={30}
        placeholder ="Why did you like the product or not?" required>
        </textarea>
      </div>
      <>
        <label> Upload your photos
        <input type="file"  accept ="image/*" multiple onChange={this.handlePhotoChange}/>
        {urls.map((url,index)=><div url={url} key={index}> <img src ={url} alt={url}/></div>)}
        </label>
      </>
      <>
      <label>What is your nickname?
      <input type="text" maxLength={60} placeholder="Example: jackson11!" required></input>
      </label>
      <label>For privacy reasons, do not use your full name or email address</label>
      </>
      <>
        <label>email
        <input type="email" id="email" pattern=".+@globex\.com" maxLength={60}
        placeholder="Example: jackson11@email.com" required></input>
        </label>
        <label>For authentication reasons, you will not be emailed</label>
      </>


        {/* <input type="submit" value="submit" id="submit" /> */}
      </form>



    )
  }


}

export default ReviewForm;




