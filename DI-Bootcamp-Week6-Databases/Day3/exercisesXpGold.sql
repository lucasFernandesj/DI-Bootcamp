--1
SELECT * FROM rental
WHERE return_date > (SELECT NOW())
;

--2
SELECT first_name
FROM customer
JOIN rental
ON rental.customer_id = customer.customer_id
WHERE rental.return_date > (SELECT NOW())
OR rental.return_date IS NULL
GROUP BY first_name
;

--3
SELECT title
FROM film
JOIN film_actor
ON film_actor.film_id = film.film_id
JOIN actor
ON actor.actor_id = film_actor.actor_id
WHERE actor.first_name = 'Joe'
;

--EXERCISE 2
--1
SELECT store_id , city , country 
FROM store
JOIN address 
ON store.address_id = address.address_id
JOIN city
ON address.city_id = city.city_id
JOIN country
ON city.country_id = country.country_id
;

--2
SELECT store.store_id , sum(length) AS total_time
FROM store
join inventory
on store.store_id = inventory.store_id 
join film
on film.film_id = inventory.film_id
group by store.store_id
;
--3
SELECT title 
FROM film
JOIN inventory
ON film.film_id = inventory.film_id
JOIN rental
ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date > (SELECT now())
OR rental.return_date IS NULL
;

--
CREATE TABLE waiting_list(
    customer_id REFERENCES customer.customer_id ,
    place_in_line SERIAL UNIQUE,
    title  references film.title 

)
