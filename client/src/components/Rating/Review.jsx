import React from 'react';
import Stars from './Stars.jsx';
import CheckIcon from '@mui/icons-material/Check';
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
      helpful:true,
      report:true,


    }
    this.handlehelp = this.handlehelp.bind(this)
    this.handleReport = this.handleReport.bind(this)
  }
  handlehelp(e){
    var review_id = this.props.review.review_id;
    this.setState({helpful:false,yes:this.props.review.helpfulness+1})
    if(this.state.helpful){
      this.props.handlehelp(review_id)
    }
  }
  handleReport(e){
    var review_id = this.props.review.review_id;
    console.log("inside report")

    if(this.state.report){
    fetch(`/reviews/${review_id}/report`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

    })
    .then(data=>{
      if(data.status === 204){
        this.setState({report:false})

      }

    })



    }

  }


  render(){
    var date = this.props.review.date;
    var dateData = new Date(date);
    var response = this.props.review.response;


    var dateForm = dateData.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'

  });
    return(
    <div className ='review'>
      <div className ="user-box">
      {this.props.review.reviewer_name},{dateForm}
      </div>
      <Stars starsDisplay ={this.state.starsDisplay} />
      <div className ="user-box2">
      <h3 style={{fontWeight: 'bold', fontSize: '1.5rem'}}>  {this.props.review.summary} </h3>
      <p> {this.props.review.body} </p>


      </div>

      {this.props.review.recommend &&  <p> <CheckIcon/> I recommend this product </p>}
      {response && <div className = "review-textbox">
      <h5 style={{fontWeight: 'bold'}}>Response from seller: </h5>
      <p>{this.props.review.response}</p>
      </div>}

      <div> {this.state.text}
        <button className ="button-helpful" onClick={this.handlehelp}> Yes </button>
        <p className ="helpul-inline">({this.state.yes})</p>
        {this.state.report ? <button className ="button-helpful" onClick={this.handleReport}> Report </button>
        :<p className ="button-helpful2" > Reported </p>}
      </div>

       {this.props.review.photos.length > 0 &&
       <div>
         {this.props.review.photos.map((photo,index)=>(<img src ={photo.url} alt={photo.url} key={photo.id}/>))}
        </div> }
      </div>
   )

  }

}






export default Review;