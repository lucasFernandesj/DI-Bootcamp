
--1
SELECT * FROM customer;
--2
SELECT
    first_name || ' ' || last_name AS full_name
FROM
    customer;

--3

SELECT DISTINCT create_date FROM customer;

--4

SELECT * FROM customer ORDER BY first_name ASC;

--5

SELECT film_id , title , description , release_year , rental_rate 
FROM film
ORDER BY rental_rate ASC
;


--6
   SELECT address , phone
   FROM customer
   INNER JOIN address
   ON customer.address_id = address.address_id
   WHERE district='Texas'
   ;

  





--7
SELECT *
FROM film
WHERE film_id = 15 OR film_id = 15
;

--8
 SELECT film_id , title , description , length , rental_rate
 FROM film
 WHERE title LIKE '%Harry Potter%'
 ;

 --9
 SELECT film_id , title , description , length , rental_rate
FROM film 
WHERE title LIKE 'Ha%'
;
--10
SELECT * 
FROM film
ORDER BY replacement_cost ASC
LIMIT 10
;

--11
SELECT * 
FROM film
ORDER BY replacement_cost ASC
LIMIT 10 OFFSET 10
;


--12
 SELECT amount , payment_date
 FROM customer
 INNER JOIN payment
 ON customer.customer_id = payment.customer_id
 ORDER BY customer.customer_id ASC
 ;

--13
  SELECT film.title 
    FROM film
    LEFT JOIN inventory
    ON inventory.film_id = film.film_id 
    WHERE inventory.title = null
    ;

    --14
     SELECT city.city|| ' is in ' || country.country AS city_Country
 FROM country
 INNER JOIN city
 ON country.country_id = city.city_id
;


