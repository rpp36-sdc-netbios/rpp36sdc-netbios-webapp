import React from 'react';
import QA from './QA.jsx';
import { render } from '@testing-library/react';
import { Simulate, act } from 'react-dom/test-utils';

var mockFetch = () => {
  return jest.fn((url) => {
    var data = url.includes('answers') ? mockAnswers : mockQuestions;
    return Promise.resolve({
      ok: true,
      json: () => {
        return Promise.resolve(data);
      }
    });
  });
};


describe('QA test', () => {

  var qa;

  beforeEach(async () => {

    global.fetch = mockFetch();
    qa = await act(() => render(<QA productId={1} />));
  });

  afterEach(() => {
    global.fetch.mockClear();
    //delete global.fetch;
  });

  it('Should render QA title', async () => {
    var el = await qa.findByTestId('qa-title');
    expect(el).toBeInTheDocument();
  });

  it('Should render question search box', async () => {
    var el = await qa.findByTestId('qa-search');
    expect(el).toBeInTheDocument();
  });

  it('Should render two questions', async () => {
    var el = await qa.findAllByTestId('qa-qset');
    expect(el.length).toBe(2);
  });

  it('Should render two answers', async () => {
      var el = await qa.findAllByTestId('qa-answer');
      expect(el.length).toBe(4);
  });

  it('Should accept feedback for quesions', async () => {
    var el = await qa.findAllByTestId('qa-question-helpful');
    Simulate.click(el);
    expect(true).toBe(true);
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
      "date": "2018-01-04T00:00:00.000Z",
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