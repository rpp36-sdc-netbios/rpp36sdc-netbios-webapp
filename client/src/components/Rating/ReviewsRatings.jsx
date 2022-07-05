import React from 'react';
import Rating from './Rating.jsx';
import fakeData from './FakeData.js';
import Summary from './Summary.jsx';
import meta from './MetaData.js';



class ReviewsRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsResults:[],
      sort:'newest',
      metaData:meta,
      count:5,
    }
  }

  componentDidMount(){
    this.ratingDisplay();
    this.summaryDisplay();

  }

  ratingDisplay(){
    let productId = this.props.productId;
    var sort = this.state.sort;
    var count = this.state.count;
    var page = 1;

    console.log('d')
    let url =`/reviews?product_id=${productId}&sort=${sort}&count=${count}&page=${page}`
    fetch(url)
    .then(response => response.json())
    .then(data=>{this.setState({reviewsResults:data.results})})
    .catch(err=> console.log('err inside ratingdisplay'))


  }
  summaryDisplay(){
    console.log('s');
    let productId = this.props.productId;
    let url =`/reviews/meta/${productId}`

    fetch(url)
    .then(response => response.json())
    .then(data=>{console.log('data ID '+data.recommended.false);this.setState({metaData:data})})
    .catch(err=> console.log('err inside summaryplay'))
  }



  render(){
    return (
      <div >
        <div className ="rating-box">
        <Rating results = {this.state.reviewsResults}/>
        </div>
        <div className="summary-box">
        <Summary results ={this.state.metaData}/>
        </div>
      </div>
    );
  }
};

export default  ReviewsRatings;