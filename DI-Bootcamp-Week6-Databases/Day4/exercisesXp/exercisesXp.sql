--1

SELECT first_name ||' '||last_name AS full_name
FROM employees
;

--2

SELECT DISTINCT department_id FROM employees;

--3

SELECT *
FROM employees 
ORDER BY first_name ASC
;

--4
SELECT first_name , last_name , salary*0.15 AS PF 
FROM employees
;

--5
SELECT employee_id , first_name , last_name , salary
FROM employees
ORDER BY salary ASC 
;
--6
SELECT SUM(salary) as total
FROM employees
;

--7

SELECT max(salary) AS higher_salary , min(salary) AS smallest_salary
FROM employees
;

--8
SELECT avg(salary) AS average 
FROM employees
;

--9
 SELECT count(*) FROM employees;

 --10

 SELECT upper(first_name)
 FROM employees
 ;

--11

 SELECT LEFT(first_name , 3)
FROM employees
;

--12

 SELECT LEFT(first_name , 3)
FROM employees
;

--13

SELECT first_name||' '||last_name AS full_name
FROM employees;

--14

SELECT first_name||' '||last_name AS full_name , (length(first_name)+length(last_name)+1) AS length_full_name
FROM employees;

--15

SELECT *
FROM employees 
LIMIT 10
;


--RESTRICTING AND SORTING
--1
SELECT *
FROM employees
WHERE salary > 10000
AND salary < 15000
;

--2
SELECT first_name , last_name , hire_date from employees
WHERE TO_CHAR(hire_date, 'YYYY')  LIKE '%1987%';

;
--3
SELECT first_name
FROM employees
WHERE first_name LIKE '%a%' 
AND
 first_name LIKE '%e%'

;

--4
SELECT last_name , job_title , salary
FROM employees 
INNER JOIN jobs
ON jobs.job_id = employees.job_id
WHERE job_title <> 'Programmer' OR job_title <> 'Shipping Clerk'
AND salary <> 4500 OR salary <> 10000 OR salary <> 15000
;

--5
SELECT last_name
FROM employees
WHERE LENGTH(last_name) = 6
;

--6
SELECT last_name 
FROM employees
WHERE first_name LIKE '__e%'
;

--7
SELECT * , jobs.job_title
FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id
;

--8
SELECT * , jobs.job_title
FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id
;


