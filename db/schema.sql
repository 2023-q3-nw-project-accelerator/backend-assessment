DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    age varchar(255),
    name varchar(255), 
    company varchar(255),
    country varchar(255),
    photo varchar(255),
    about text, 
    latitude varchar(255), 
    longitude varchar(255)
);