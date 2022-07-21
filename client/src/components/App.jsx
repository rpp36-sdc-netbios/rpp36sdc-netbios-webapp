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
      currentId: 71901,
      product: {},
    }
    this.changeProduct = this.changeProduct.bind(this);

  }
  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    fetch('products/' + this.state.currentId)
    .then(res => {
      return res.json();
    }).then(product => {
      this.setState({ product});
    }).catch(err => {
      console.log(err);
    });

  }

  changeProduct(id) {
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
          <Overview productId={this.state.currentId} product={this.state.product}/>
        </section>
        <section>
          <RelatedProducts productId={this.state.currentId} changeProduct={this.changeProduct}/>
        </section>
        <section>
          <QA productId={this.state.currentId} product={this.state.product}/>
        </section>
        <section>
        <ReviewsRatings  productId={this.state.currentId} />
        </section>
      </div>

    );
  }
};

export default App;