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
      stars:"",
      startext:"",
      characteristics:{},

    }
    this.handlePhotoChange =this.handlePhotoChange.bind(this);
    this.handleClose =this.handleClose.bind(this);
    this.handleStar = this.handleStar.bind(this);
    this.handleRadio =this.handleRadio.bind(this);
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
  handleStar(event){
    const target = event.target;
    const value = target.value;
    const words={1:"Poor",2:"Fair",3:"Average", 4:"Good", 5:"Great"}

    this.setState({
      stars: value,startext:words[value]
    });
  }
  handleRadio(e){
    console.log(e.target.name)
    this.setState(preState => ({
      characteristics: {...preState.characteristics, [e.target.name]:e.target.value}
    }))

  }



  render(){
    var urls =this.state.photos.map(photo=>URL.createObjectURL(photo));
    var charKeys =Object.keys(this.props.char)
    var charas =this.props.char;
    console.log("charas"+charas[charKeys[0]].id)

    return(
      <div className="popup-box">
        <div className="box1">
        <span className="close-icon" onClick={this.handleClose}>x</span>
        <form >
          <p className="form-p">Product Overall Ratings (required):  {this.state.startext}</p>
          <div className="star-rating" >
            <input type="radio" name="stars" id="star-a" value="5" onClick={this.handleStar} required/>
            <label htmlFor="star-a" />
            <input type="radio" name="stars" id="star-b" value ="4" onClick={this.handleStar} required/>
            <label htmlFor="star-b" />
            <input type="radio" name="stars" id="star-c" value ="3" onClick={this.handleStar}required/>
            <label htmlFor="star-c" />
            <input type="radio" name="stars" id="star-d" value="2" onClick={this.handleStar}required/>
            <label htmlFor="star-d" />
            <input type="radio" name="stars" id="star-e" value="1" onClick={this.handleStar}required/>
            <label htmlFor="star-e" />

          </div>
          <div className="form-section">
            <p className ="form-word">Do you recommend this product? (required)</p>
            <input type="radio" name="recommond" value="true" required/>
            <label>Yes</label>
            <input type="radio" name="recommond" value="true" required/>
            <label>No</label>

          </div>
          <div className="form-section">
          {charKeys.map((item,index) => <RowRadioButtonsGroup item={item} key={index} itemKey = {charas[item].id}
          handleRadio={this.handleRadio} required/>)}
          </div>
          <div className="form-section">
            <label className="form-word"> Summary Reviews</label>
            <textarea  className="form-textarea" maxLength={60} rows={1} cols={60} placeholder ="Example: Best purchase ever!">
            </textarea>
          </div>
          <div className="form-section">
          <label className="form-word">Review (required)</label>
           <textarea  className="form-textarea" minLength={50} maxLength={1000} rows={8} cols={60}
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
        <label className="form-word">What is your nickname? (required)
        <input className="form-textarea" type="text" maxLength={60} size={73} placeholder="Example: jackson11!" required></input>
        </label>
        <label>For privacy reasons, do not use your full name or email address</label>
      </div>
      <div className="form-section">
        <label className="form-word">Email (required)
        <input className="form-textarea"  type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" maxLength={60} size={73}
        placeholder="Example: jackson11@email.com" required></input>
        </label>
        <label>For authentication reasons, you will not be emailed</label>
      </div>
        <input className="form-button" type="submit" value="submit" id="submit" />
      </form>
      </div>
      </div>

    )
  }


}

export default ReviewForm;




