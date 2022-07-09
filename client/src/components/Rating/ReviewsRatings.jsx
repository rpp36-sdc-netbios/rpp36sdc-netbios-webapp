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
      sort:'relevance',
      metaData:meta,
      count:5,
    }
    this.changSort= this.changSort.bind(this)

  }
  changSort(value){
    console.log('inside sort'+ value);
    this.setState({sort:value});
    this.ratingDisplay();

  }
  ratingDisplay(){
    let productId = this.props.productId;
    var sort = this.state.sort;
    var count = this.state.count;
    var page = 1;
    console.log('d')
    let url =`reviews?product_id=${productId}&sort=${sort}&count=${count}&page=${page}`
    fetch(url)
    .then(response => response.json())
    .then(data=>{this.setState({reviewsResults:data.results})})
    .catch(err=> console.log(err))
  }


  componentDidMount(){
    let productId = this.props.productId;
    var sort = this.state.sort;
    var count = this.state.count;
    var page = 1;
    console.log('url'+ `/reviews?product_id=${productId}&sort=${sort}&count=${count}&page=${page}`)
    Promise.all([
      fetch(`/reviews?product_id=${productId}&sort=${sort}&count=${count}&page=${page}`),
      fetch(`/reviews/meta/${productId}`)])
        .then(([res1, res2]) => {
          return Promise.all([res1.json(), res2.json()])
       })
        .then(([data1, data2]) => {
         // set state in here
          this.setState({reviewsResults: data1.results,
            metaData: data2,})
        })
        .catch(error=>{ console.log('error inside reviews Rating')});
  }


  render(){
    var list ={

    }
    return (
      <div >
        <div className ="rating-box">
        <Rating results = {this.state.reviewsResults} changSort={this.changSort} sort={this.state.sort}/>
        </div>
        <div className="summary-box">
        <Summary results ={this.state.metaData}/>
        </div>
      </div>
    );
  }
};

export default  ReviewsRatings;