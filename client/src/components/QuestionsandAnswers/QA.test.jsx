import React from 'react';
import QA from './QA.jsx';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

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
    delete global.fetch;
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
});

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