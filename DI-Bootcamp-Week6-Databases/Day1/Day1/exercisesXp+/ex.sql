--  CREATE TABLE students(
-- id SERIAL PRIMARY KEY,
--  	first_name VARCHAR(50) NOT NULL,
--  	last_name VARCHAR(50) NOT NULL,
-- 	 birth_date DATE NOT NULL
	

--  )
--1
--  INSERT INTO students (first_name , last_name , birth_date) values
--  ('Marc','Benichou','1998-11-02'),
--  ('Yoan','Cohen', '2010-11-03'),
--   ('Lea','Benichou','1987-07-27'),
--   ('Amelia','Dux', '1996-04-07'),
--   ('David','Grez','2003-06-14'),
--  ('Omer','Simpson','1980-10-03')
--2
-- INSERT INTO students (first_name , last_name , birth_date) values ('Lucas','Fernandes','1992-12-29')

--fetch
--1
--SELECT * FROM students
--2
--SELECT first_name , last_name FROM students
--3
--SELECT first_name , last_name FROM students WHERE id = 2
--2
--SELECT first_name , last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
--3
--SELECT first_name , last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'
--4
-- SELECT first_name , last_name FROM students WHERE first_name LIKE '%a%'
--5
--SELECT first_name,last_name FROM students WHERE first_name LIKE 'a%'
--6
--SELECT first_name,last_name FROM students WHERE first_name LIKE '%a'
--7
--SELECT first_name , last_name FROM students WHERE first_name LIKE '%a_'
--8
--SELECT first_name , last_name FROM students WHERE id =1 AND id=3
--9
--SELECT * FROM students WHERE birth_date > '1/01/2000'