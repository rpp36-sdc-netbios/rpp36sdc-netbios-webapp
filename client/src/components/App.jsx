import React from 'react';
import Overview from './Overview/Overview.jsx';
import QA from './QuestionsandAnswers/QA.jsx';
import Rating from './Rating/Rating.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import './app.css';
import fakeData from './Rating/FakeData.js';
import Summary from './Rating/Summary.jsx';
import meta from './Rating/MetaData.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviewsResults:fakeData,
      product_id :1,
      sort:'newest',
      meta:meta,

    }

  // componentDidMount(){
  //   fetch('products' + this.state.currentId)
  //   .then(res => {
  //     return res.json();
  //   }).then(product => {
  //     this.setState({ product }, () => {
  //       console.log(this.state);
  //     });
  //   }).catch(err => {
  //     console.log(err);
  //   });
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
          <QA productId={this.state.product_id}/>
        </section>
        <section>
        <Rating results = {this.state.reviewsResults}/>
        <Summary results ={this.state.meta}/>
        </section>
      </div>
    );
  }
};

export default App;