import React from 'react';
import './rating.css';
import RowRadioButtonsGroup from './RowRadioButtonsGroup.jsx'

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
    this.handlePhotoChange =this.handlePhotoChange.bind(this);
    this.handleClose =this.handleClose.bind(this);
  }

  handlePhotoChange(e){
    if(this.state.photos.length<5){
      this.setState(preState => {
        return ({photos: [...preState.photos, e.target.files[0]]})
      })

    }

  }
  handleClose(e){
    this.props.handleClose(e)

  }


  render(){
    var urls =this.state.photos.map(photo=>URL.createObjectURL(photo));
    var charKeys =Object.keys(this.props.char)

    console.log("char"+Array.isArray(charKeys))



    return(
      <div className="popup-box">
        <div className="box1">
        <span className="close-icon" onClick={this.handleClose}>x</span>
        <form>
          <p className="form-p">Product Overall Ratings:</p>
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
          <div className="form-section">
            <p className ="form-word">Do you recommend this product?</p>
            <input type="radio" name="recommond" value="true" />
            <label>Yes</label>
            <input type="radio" name="recommond" value="true" />
            <label>No</label>

          </div>
          <div className="form-section">
          {charKeys.map((item,index) => <RowRadioButtonsGroup item={item} key={index}/>)}
          </div>
          <div className="form-section">
            <label className="form-word"> Summary Reviews</label>
            <textarea  className="form-textarea" maxLength={60} rows={2} cols={30} placeholder ="Example: Best purchase ever!">
            </textarea>
          </div>
          <div className="form-section">
          <label className="form-word">Review</label>
           <textarea  className="form-textarea" minLength={50} maxLength={1000} rows={8} cols={42}
            placeholder ="Why did you like the product or not?" required>
          </textarea>
          </div>
          <div className="form-section">
            <label className="form-word" > Upload your photos
            <input className="form-textarea" type="file"  accept ="image/*" multiple onChange={this.handlePhotoChange}/>
            {urls.map((url,index)=><div url={url} key={index}> <img src ={url} alt={url}/></div>)}
            </label>
          </div>
        <div className="form-section">
        <label >What is your nickname?
        <input className="form-textarea" type="text" maxLength={60}  placeholder="Example: jackson11!" required></input>
        </label>
        <label>For privacy reasons, do not use your full name or email address</label>
      </div>
      <div className="form-section">
        <label>Email
        <input className="form-textarea"  type="email" id="email" pattern=".+@globex\.com" maxLength={60}
        placeholder="Example: jackson11@email.com" required></input>
        </label>
        <label>For authentication reasons, you will not be emailed</label>
      </div>


        {/* <input type="submit" value="submit" id="submit" /> */}
      </form>
      </div>
      </div>




    )
  }


}

export default ReviewForm;




