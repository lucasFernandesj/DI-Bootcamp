--1
SELECT * FROM students
ORDER BY last_name ASC
LIMIT 4
;
--2
SELECT *
 FROM students
 WHERE age =SELECT(
     min(age)
     )
     FROM students
 ;
--3
SELECT *
FROM students
OFFSET 2
LIMIT 3
;

