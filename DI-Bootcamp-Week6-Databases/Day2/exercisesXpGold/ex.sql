--EXERCISE 1
--1
SELECT rating,COUNT(rating) FROM film
GROUP BY film.rating
;

--2
SELECT title,rating,COUNT(rating) FROM film
GROUP BY film.rating , film.length , rental_rate,title
HAVING rating = 'PG-13'
OR    rating = 'R'
AND film.length > 120
AND rental_rate < 3.00
ORDER BY title ASC
;

--3
UPDATE  customer
SET first_name ='Lucas' ,
last_name ='Fernandes'
WHERE customer_id =1
;

--4
update address 
set address = 'Tel Aviv', district = 'TLV'
where address_id = (
	select address.address_id 
	from customer 
	right join address on customer.address_id = address.address_id 
	where customer_id = 1 
)





--EXERCISE 2
--1
UPDATE students
SET birth_date = '02/11/1998'
WHERE last_name = 'Benichou'
SET last_name = 'Guez'
WHERE last_name ='Grez' AND first_name='David'
;

--2
DELETE FROM students 
WHERE first_name = 'Lea' AND last_name='Benichou'
;
--3
SELECT COUNT(*) FROM students;
--4
SELECT COUNT(*) FROM students
WHERE birth_date > '1/01/2000'
;

--5
ALTER TABLE students 
ADD COLUMN math_grade INT
;
--
UPDATE students
SET math_grade = 80
WHERE student_id =1
;
--
UPDATE students
SET math_grade = 90
WHERE student_id =2 OR student_id = 4
;
--
UPDATE students 
SET math_grade = 60
WHERE student_id = 6
;
--
SELECT COUNT(*) FROM students
WHERE math_grade > 83
;
--
INSERT INTO students (first_name , last_name , birth_date , math_grade)
VALUES
('Omer','Simpson','01/01/2020',70)
;
--
SELECT SUM(math_grade) AS total_grades;

