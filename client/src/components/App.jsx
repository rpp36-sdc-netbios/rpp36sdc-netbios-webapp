import React from 'react';
import Overview from './Overview/Overview.jsx';
import StarRating from './Overview/StarRating.jsx';
import './app.css';
import fakeData from './Rating/FakeData.js';
import Rating from './Rating/Rating.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviewsResults:fakeData,
      product_id :1,
      sort:'newest',

    }

  }

  render() {
    return (
      <div id='container' style={{width: '60%', margin: 'auto', padding: '10px'}}>
      <h1>To be changed into a nav bar</h1>

      <Rating results = {this.state.reviewsResults}/>
      </div>
    );
  }
};

export default App;