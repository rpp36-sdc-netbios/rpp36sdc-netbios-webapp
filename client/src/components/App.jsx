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
  }

  componentDidMount() {
    fetch('products' + this.state.currentId)
    .then(res => {
      return res.json();
    }).then(product => {
      this.setState({ product }, () => {
      });
    }).catch(err => {
      console.log(err);
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
          <RelatedProducts productId={this.state.currentId}/>
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