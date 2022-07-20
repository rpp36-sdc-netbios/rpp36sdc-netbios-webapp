import React from 'react';
import QA from './QA.jsx';
import Answers from './Answers.jsx' 
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';

var mockFetch = () => {
  return jest.fn((url) => {
    var data = mockQuestions;
    if (url.includes('hello')) {
      data = mockSearch;
    } else if (url.includes('answers')) {
      data = mockAnswers;
    } else if (url.includes('feedback')) {
      return { status: 204, ok: true }
    };
    return Promise.resolve({
      ok: true,
      json: () => {
        return Promise.resolve(data);
      }
    });
  });
};

describe('QA Search', () => {

  beforeEach(() => {
    global.fetch = mockFetch();
  })

  afterEach(() => {
    global.fetch.mockClear();
  })

  it('Should allow input to change', async () => {
    var qa = render(<QA productId={1} />);
    var el = qa.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    fireEvent.change(el, { target: { value: 'hello' } });
    expect(el.value).toBe('hello');
    await waitForElementToBeRemoved(qa.getAllByText('Loading...'))
  });

  it('Should display results from search', (done) => {
    var qa = render(<QA productId={1} />);
    var searchBox = qa.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...');
    waitForElementToBeRemoved(qa.getByText('Loading...'))
    .then(() => {
      fireEvent.change(searchBox, { target: {value: 'hello'}});
      return qa.findAllByText(/hello123/)
    }).then(el => {
      expect(el[0]).toBeInTheDocument();
      expect(el.length).toBe(2);
      done();
    }).catch(err => {
      done(err);
    });
  });
});

describe('QA', () => {

  var qa;

  beforeEach(async () => {
    global.fetch = mockFetch();
    qa = render(<QA productId={1} product={{name: 'Test Product'}}/>);
    await waitForElementToBeRemoved(qa.getAllByText('Loading...'));
  });

  afterEach(async () => {
    global.fetch.mockClear();
  })

  it('Should render QA title', async () => {
    var el = qa.getByText('QUESTIONS & ANSWERS');
    expect(el).toBeInTheDocument();
    await waitForElementToBeRemoved(qa.getAllByText('Loading...'));
  });

  it('Should render two questions', async () => {
    var el = qa.container.getElementsByClassName('qa-question');
    expect(el.length).toBe(2);
    await waitForElementToBeRemoved(qa.getAllByText('Loading...'));
  });

  it('Should render four answers', async () => {
    await waitForElementToBeRemoved(qa.getAllByText('Loading...'));
    var el = qa.container.getElementsByClassName('qa-answer');
    expect(el.length).toBe(4);
  });

  it('Should load more questions', async () => {
    var el = qa.getByText('MORE ANSWERED QUESTIONS');
    var temp = mockQuestions;
    mockQuestions = mockQuestions2;
    fireEvent.click(el);
    await waitForElementToBeRemoved(qa.getAllByText('Loading...'));
    el = qa.container.getElementsByClassName('qa-question');
    expect(el.length).toBe(4);
    mockQuestions = temp;
  });

  it('Should display add question form on click add question button', () => {
    var el = qa.getByText('ADD A QUESTION');
    fireEvent.click(el);
    el = qa.container.getElementsByClassName('qa-add-question');
    expect(el[0]).toBeInTheDocument();
    expect(el.length).toBe(1);
  });

  it('Should display the product name in the add question form', () => {
    var el = qa.getByText('ADD A QUESTION');
    fireEvent.click(el);
    el = qa.getByText('About the Test Product');
    expect(el).toBeInTheDocument();
  });

  it('Should close the add question form when x is clicked', () => {
    var el = qa.getByText('ADD A QUESTION');
    fireEvent.click(el);
    el = qa.getByText('X');
    var form = qa.container.getElementsByClassName('qa-add-question');
    expect(form.length).toBe(1);
    fireEvent.click(el);
    expect(form.length).toBe(0);
  });

  it('Should increase helpful count for question when yes is clicked', async () => {
    var el = qa.getAllByTestId('qa-question-helpful');
    fireEvent.click(el[0]);
    var count = await qa.findByText('(5)')
    expect(count).toBeInTheDocument();


  });

});

describe('QA Answers', () => {

  var qa;
  var feedback;

  var mockFeedbackHandler = jest.fn((inFeedback) => {
        feedback = inFeedback;
  });

  beforeEach(async () => {
    global.fetch = mockFetch();
    qa = render(<Answers feedbackHandler={mockFeedbackHandler} questionId={1} />);
    await waitForElementToBeRemoved(qa.getAllByText('Loading...'));
  });

  afterEach(async () => {
    global.fetch.mockClear();
  })

  it('should render LOAD MORE ANSWERS option', async () => {
    var el = qa.getByText('LOAD MORE ANSWERS▼');
    expect(el).toBeInTheDocument();
  });

  it('should render COLLAPSE ANSWERS when load more answers is clicked', async () => {
    var el = qa.getByText('LOAD MORE ANSWERS▼');
    var temp = mockAnswers;
    mockAnswers = mockAnswers2
    fireEvent.click(el);
    await waitForElementToBeRemoved(qa.getAllByText('Loading...'));
    el = qa.getByText('COLLAPSE ANSWERS▲');
    expect(el).toBeInTheDocument();
    mockAnswers = temp;
  });

  it('Should render answer date in the correct format', () => {
    var el = qa.getByText('January 3, 2018');
    expect(el).toBeInTheDocument();
  });

  it('Should send feedback on click', () => {
    var el = qa.getAllByText('Yes');
    fireEvent.click(el[0]);
    expect(mockFeedbackHandler).toBeCalledTimes(1);
    expect(feedback).toBe('answers');
  });

});

var mockQuestions = {
  "product_id": "5",
  "results": [
    {
      "question_id": 37,
      "question_body": "Why is this product cheaper here than other sites?",
      "question_date": "2018-10-18T00:00:00.000Z",
      "asker_name": "williamsmith",
      "question_helpfulness": 4,
      "reported": false,
      "answers": {
        68: {
          "id": 68,
          "body": "We are selling it here without any markup from the middleman!",
          "date": "2018-08-18T00:00:00.000Z",
          "answerer_name": "Seller",
          "helpfulness": 4,
          "photos": []
        }
      }
    },
    {
      "question_id": 38,
      "question_body": "How long does it last?",
      "question_date": "2019-06-28T00:00:00.000Z",
      "asker_name": "funnygirl",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {
        70: {
          "id": 70,
          "body": "Some of the seams started splitting the first time I wore it!",
          "date": "2019-11-28T00:00:00.000Z",
          "answerer_name": "sillyguy",
          "helpfulness": 6,
          "photos": [],
        },
        78: {
          "id": 78,
          "body": "9 lives",
          "date": "2019-11-12T00:00:00.000Z",
          "answerer_name": "iluvdogz",
          "helpfulness": 31,
          "photos": [],
        }
      }
    }
  ]
}

var mockQuestions2 = {
  "product_id": "5",
  "results": [
    {
      "question_id": 39,
      "question_body": "Why is this product cheaper here than other sites?",
      "question_date": "2018-10-18T00:00:00.000Z",
      "asker_name": "williamsmith",
      "question_helpfulness": 4,
      "reported": false,
      "answers": {
        68: {
          "id": 68,
          "body": "We are selling it here without any markup from the middleman!",
          "date": "2018-08-18T00:00:00.000Z",
          "answerer_name": "Seller",
          "helpfulness": 4,
          "photos": []
        }
      }
    },
    {
      "question_id": 40,
      "question_body": "How long does it last?",
      "question_date": "2019-06-28T00:00:00.000Z",
      "asker_name": "funnygirl",
      "question_helpfulness": 2,
      "reported": false,
      "answers": {
        70: {
          "id": 70,
          "body": "Some of the seams started splitting the first time I wore it!",
          "date": "2019-11-28T00:00:00.000Z",
          "answerer_name": "sillyguy",
          "helpfulness": 6,
          "photos": [],
        },
        78: {
          "id": 78,
          "body": "9 lives",
          "date": "2019-11-12T00:00:00.000Z",
          "answerer_name": "iluvdogz",
          "helpfulness": 31,
          "photos": [],
        }
      }
    }
  ]
}

var mockSearch = {
  "product_id": "5",
  "results": [
    {
      "question_id": 37,
      "question_body": "Hello hello123 hello hello.",
      "question_date": "2018-10-18T00:00:00.000Z",
      "asker_name": "williamsmith",
      "question_helpfulness": 4,
      "reported": false,
      "answers": {
        68: {
          "id": 68,
          "body": "We are selling it here without any markup from the middleman!",
          "date": "2018-08-18T00:00:00.000Z",
          "answerer_name": "Seller",
          "helpfulness": 4,
          "photos": []
        }
      }
    },
    {
      "question_id": 38,
      "question_body": "Hello hello123 hello hello.",
      "question_date": "2018-10-18T00:00:00.000Z",
      "asker_name": "williamsmith",
      "question_helpfulness": 4,
      "reported": false,
      "answers": {
        68: {
          "id": 68,
          "body": "We are selling it here without any markup from the middleman!",
          "date": "2018-08-18T00:00:00.000Z",
          "answerer_name": "Seller",
          "helpfulness": 4,
          "photos": []
        }
      }
    }
  ]
}

var mockAnswers = {
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 8,
      "body": "What a great question!",
      "date": "2018-01-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
      "answer_id": 5,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-02-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/answer_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/answer_5_photo_number_2.jpg"
        },
      ]
    },
  ]
}

var mockAnswers2 = {
  "question": "1",
  "page": 0,
  "count": 5,
  "results": [
    {
      "answer_id": 15,
      "body": "What a great question!",
      "date": "2018-03-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 8,
      "photos": [],
    },
    {
      "answer_id": 16,
      "body": "Something pretty durable but I can't be sure",
      "date": "2018-04-04T00:00:00.000Z",
      "answerer_name": "metslover",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/answer_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/answer_5_photo_number_2.jpg"
        },
      ]
    },
  ]
}

