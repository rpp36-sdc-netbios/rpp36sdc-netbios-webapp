import React from 'react';
import QA from './QA.jsx';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

var mockFetch = () => {
  return jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(mockData);
      }
    });
  });
};

describe('QA test', () => {

  var qa;

  beforeEach(async () => {
    global.fetch = mockFetch();
    qa = await act(() => render(<QA />));
  });

  afterEach(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('Should render QA title', () => {
    var el = qa.getByTestId('qa-title');
    expect(el).toBeInTheDocument();
  });

  it('Should render question search box', () => {
    var el = qa.getByTestId('qa-search');
    expect(el).toBeInTheDocument();
  });

  it('Should call api once', () => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('Should render two questions', () => {
    var el = qa.getAllByTestId('qa-qset');
    expect(el.length).toBe(2);
  });

  it('Should render two answers', () => {
    var el = qa.getAllByTestId('qa-answer');
    expect(el.length).toBe(2);
  });
});


var mockData = {
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