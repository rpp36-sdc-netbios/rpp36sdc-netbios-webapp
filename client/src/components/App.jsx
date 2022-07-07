import React from 'react';
import Overview from './Overview/Overview.jsx';
import QA from './QuestionsandAnswers/QA.jsx';
import Rating from './Rating/Rating.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import './app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentId: 71701,
      product: {}
    }
    this.changeProduct = this.changeProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }
  
  getProduct() {
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

  changeProduct(id) {
    console.log(id);
    this.setState({ currentId: id }, () => {
      this.getProduct();
    });
  }

  render() {
    return (
      <div id='container'>
      <div id='nav'>
        <span>Bauhaus</span>
      </div>
        <section>
          <Overview />
        </section>
        <section>
          <RelatedProducts productId={this.state.currentId} changeProduct={this.changeProduct}/>
        </section>
        <section>
          <QA productId={this.state.currentId}/>
        </section>
        <section>
          <Rating />
        </section>
      </div>
    );
  }
};

export default App;