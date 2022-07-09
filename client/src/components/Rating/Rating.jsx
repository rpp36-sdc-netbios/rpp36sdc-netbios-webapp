import React from 'react';
import  Review from './Review.jsx';
import './rating.css';
import ReviewForm from './ReviewForm.jsx'
class Rating extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      cur:2,
      displayForm:false,
      displayButton:true,


    }
    this.changeIndex =this.changeIndex.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayForm =this.displayForm.bind(this);


  }



  changeIndex(){
    console.log('inside more inreviews')
    this.setState((state) => ({
      cur: state.cur + 2
    }));

  }
  handleChange(event){
    var name = event.target.value;
    console.log('name in handle select change   '+ name )

    this.props.changSort(event.target.value)
  }
  displayForm(){
    this.setState({displayForm:!this.state. displayForm,
      displayButton:!this.state.displayButton});

  }



  render(){
    var index = this.state.cur;
    var list = this.props.results.slice(0,index)
    return(
      <div >
        <h4> {this.props.results.length} reviews </h4>
        <label>
          sorted by:
          <select name="sort" value={this.props.sort} onChange={this.handleChange}>
            <option value="helpful">helpful</option>
            <option value="newest">newest</option>
            <option value="relevance">relevance</option>
          </select>
        </label>
      <div>
      {list.map((review, key)=>
      <Review review={review} key ={review.review_id}/>
      )}
      </div>
      <div className ="button-box">
      <button className ="button" onClick={this.changeIndex}> MORE REVIEWS</button>
      {this.state.displayButton&&<button className ="button" onClick ={this.displayForm}>
        ADD A REVIEW  +</button>}
      </div>
      {this.state.displayForm&&<ReviewForm/>}
      </div>


    )


  }
}



export default Rating;