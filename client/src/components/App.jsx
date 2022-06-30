import React from 'react';
import Overview from './Overview/Overview.jsx';
import StarRating from './Overview/StarRating.jsx';
import QA from './QuestionsandAnswers/QA.jsx';
import Rating from './Rating/Rating.jsx';
import './app.css';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id='container'>
      <div id='nav'>
        <span>Nav Bar</span>
      </div>
        <section>
          <Overview />
        </section>
        <section>
          <h3>Related Products</h3>
        </section>
        <section>
          <QA />
        </section>
        <section>
          <Rating />
        </section>
      </div>
    );
  }
};

export default App;