import React from 'react';
import Overview from './Overview/Overview.jsx';
import QA from './QuestionsandAnswers/QA.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import './app.css';
import ReviewsRatings from './Rating/ReviewsRatings.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      currentId: 71697,
      product: {},
      sort:'newest',
      count:5,
      productId:71697,
    }

  }
  componentDidMount() {

    fetch('products' + this.state.currentId)
    .then(res => {
      return res.json();
    }).then(product => {
      this.setState({ product }, () => {
        console.log(this.state);
      });
    }).catch(err => {
      console.log(err);
    });
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
      <div id='container'>
      <div id='nav'>
        <span>Bauhaus</span>
      </div>
      <section>
          <Overview />
        </section>
        <section>
          <RelatedProducts />
        </section>
        <section>
          <QA productId={this.state.product.id}/>
        </section>
        <section>
          <ReviewsRatings productId ={this.state.currentId}/>
        </section>
      </div>
    );
  }
};

export default App;