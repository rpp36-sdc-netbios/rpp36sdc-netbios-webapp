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
        <ReviewsRatings  productId={this.state.currentId} />
        </section>
      </div>
    );
  }
};

export default App;