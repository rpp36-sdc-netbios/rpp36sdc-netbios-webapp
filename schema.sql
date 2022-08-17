DROP DATABASE IF EXISTS questions_answers;

CREATE DATABASE questions_answers;

\connect questions_answers;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date_written BIGINT NOT NULL,
  asker_name VARCHAR(60) NOT NULL,
  asker_email VARCHAR(60) NOT NULL,
  reported SMALLINT NOT NULL,
  helpful INTEGER NOT NULL
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  question_id INTEGER NOT NULL,
  body VARCHAR(1000) NOT NULL
  date_written BIGINT NOT NULL,
  answerer_name VARCHAR(60) NOT NULL,
  answerer_email VARCHAR(60) NOT NULL,
  reported SMALLINT NOT NULL,
  helpful INTEGER NOT NULL,
  FOREIGN KEY (question_id) REFERENCES questions (id)
);

CREATE TABLE answers_photos (
  id SERIAL PRIMARY KEY,
  answer_id INTEGER NOT NULL,
  url TEXT NOT NULL,
  FOREIGN KEY (answer_id) REFERENCES answers (id)
);

COPY questions(id,product_id,body,date_written,asker_name,asker_email,reported,helpful)
FROM '/Users/ai_lam/coding/hackreactor/rpp36/SDC/legacy-data/questions.csv'
DELIMITER ','
CSV HEADER;

COPY answers(id,question_id,body,date_written,answerer_name,answerer_email,reported,helpful)
FROM '/Users/ai_lam/coding/hackreactor/rpp36/SDC/legacy-data/answers.csv'
DELIMITER ','
CSV HEADER;

COPY answers_photos(id,answer_id,url)
FROM '/Users/ai_lam/coding/hackreactor/rpp36/SDC/legacy-data/answers_photos.csv'
DELIMITER ','
CSV HEADER;
