CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (PRIMARY KEY(id), id INTEGER(5) AUTO_INCREMENT NOT NULL, burger_name VARCHAR(200), devoured BOOLEAN DEFAULT 0, date TIMESTAMP);