import React from 'react';
import Overview from './Overview/Overview.jsx';
import StarRating from './Overview/StarRating.jsx';
import QA from './QuestionsandAnswers/QA.jsx';
import './app.css';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <React.Fragment>
      <div id='nav'>
        <span>Nav Bar</span>
      </div>
      <div id='container'>
        <section>
        <Overview />
        </section>
        <section>
          <h3>Related Products</h3>
        </section>
        <section>
          <QA />
        </section>
      </div>
      </React.Fragment>
    );
  }
};

export default App;