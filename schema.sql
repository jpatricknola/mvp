DROP DATABASE IF EXISTS haiku;

CREATE DATABASE haiku;

USE haiku;

CREATE TABLE works (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  first varchar(200) NOT NULL,
  second varchar(200) NOT NULL,
  third varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
