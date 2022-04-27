--update statements
--1
UPDATE employees
SET email = 'not available'
SET commission_pct = 0.10
WHERE department_id = 110
;

--2
UPDATE employees
SET email = 'available'
WHERE department = 'accounting' 
;
--3
IF (SELECT salary FROM employees WHERE employee_id = 105) < 5000 THEN
UPDATE employees
SET salary = 8000
WHERE employee_id = 105
;

--aggregate
SELECT SUM(job) AS num_of_jobs from employees
GROUP BY job
;
--2
SELECT SUM(*) from employees
GROUP BY job
;

--3
SELECT max(salary) - min(salary) AS difference FROM employees;

--4
--5
SELECT avg(salary) from employees 
WHERE job <> 'Programmer'
;
--6
SELECT avg(salary) from employees
WHERE department_employees > 10
;
--
ALTER TABLE locations
RENAME COLUMN state_province
TO state 
;
--
ALTER TABLE locations
ADD COLUMN location_id INT UNIQUE PRIMARY KEY
;

