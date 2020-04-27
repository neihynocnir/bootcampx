CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  start_date DATE,
  end_date DATE
);