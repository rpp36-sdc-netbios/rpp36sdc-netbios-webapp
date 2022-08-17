import React from 'react';
import Overview from './Overview/Overview.jsx';
import QA from './QuestionsandAnswers/QA.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import './app.css';
import ReviewsRatings from './Rating/ReviewsRatings.jsx';




class App extends React.Component {
  constructor(props) {
    if (window.location.href.split('-').length === 1) {
      window.location.href = window.location.href + 'p-71701';
    }
    super(props);
    this.state ={
      currentId: window.location.href.split('-').pop(),
      product: {},
      outfit: []
    }
    this.changeProduct = this.changeProduct.bind(this);
    this.saveOutfit = this.saveOutfit.bind(this);

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
    this.setState({ currentId: id}, () => {
      this.getProduct();
      window.history.pushState('','', window.location.href.split('-')[0] + '-' + id);
    });
  }

  saveOutfit() {
    this.setState({ outfit: [...this.state.outfit, this.state.currentId ]})
  }

  render() {
    return (
      <div id='container'>
      <div id='nav'>
        <span>Bauhaus</span>
      </div>
        <section>
          <Overview productId={this.state.currentId} product={this.state.product} saveOutfit={this.saveOutfit}/>
        </section>
        <section>
          <RelatedProducts productId={this.state.currentId} changeProduct={this.changeProduct} outfit={this.state.outfit}/>
        </section>
        <section>
          <QA productId={this.state.currentId} product={this.state.product}/>
        </section>
        <div id='rating-main'>
          <ReviewsRatings  productId={this.state.currentId} />
        </div>
      </div>
    );
  }
};

export default App;