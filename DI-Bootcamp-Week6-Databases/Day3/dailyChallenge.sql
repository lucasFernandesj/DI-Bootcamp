--PART I
--1
CREATE DATABASE daily_challenge_day3

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
)
;

CREATE TABLE customer_profile(
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT 'false',
	UNIQUE fk_customer_id ,
    FOREIGN KEY (fk_customer_id) REFERENCES customer(customer_id)
)
;

--2
INSERT INTO customer (first_name , last_name) VALUES ('Dot' , 'Net'), ('Java' , 'Script'), ('C' , 'Sharp');
INSERT INTO customer_profile (isLoggedIn ) Values ('true') , ('false') , ('true');

--3
SELECT * from customer_profile
WHERE isLoggedIn = 'true'
;
SELECT * FROM customers;
SELECT COUNT(*) FROM customer_profile WHERE isLoggedIn = 'false';


--PART II
--1
CREATE TABLE book(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR (255) NOT NULL
)
;
--2
INSERT INTO book (title , author) VALUES ('Alice In Wonderland' , 'Lewis Carroll') , ('Harry Potter' , 'J.K Rowling') , ('To kill a mockingbird' , 'Harper Lee');

--3
CREATE TABLE student(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    age INT,
    CONSTRAINT valid_number CHECK ( age < 15 )
)
;
--4
INSERT INTO students (name , age) VALUES ('John', 12) , ('Lera',11) , ('Patrick' , 10) , ('Bob',14);
--5
CREATE TABLE library(
    book_id INT references book(id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_id INT references student(id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date date NOT NULL DEFAULT CURRENT_DATE
)
;
--6
INSERT INTO library (book_id, student_id , borrowed_date)
VALUES
(1,1,'15/02/2022'),
(3,4, '03/03/2021'),
(1,2, '23/05/2021'),
(2,4, '12/08/2021')
;

--7
SELECT * FROM library;
--
SELECT title , author FROM library
INNER JOIN book
ON book.id = library.book_id 
;
--
SELECT AVG(age) FROM library
INNER JOIN book
ON book.id = library.book_id 
INNER JOIN student
ON student.id = library.student_id
WHERE book.title = 'Alice in the Wonderland'
;
--
DELETE FROM student WHERE name ='Bob';
SELECT * FROM library;
--All of the data related to Bob was deleted from the library table



