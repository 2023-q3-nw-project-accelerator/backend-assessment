DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT PRIMARY KEY,
    age INT,
    name VARCHAR(255),
    company VARCHAR(255),
    country VARCHAR(255),
    photo VARCHAR(255),
    about TEXT,
    latitude FLOAT(24),
    longitude FLOAT(24)
);