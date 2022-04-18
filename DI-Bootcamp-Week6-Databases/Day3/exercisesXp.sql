--1
SELECT *
FROM language;
--2
SELECT title , description , language.language_id ,language.name AS film_language
FROM film
INNER JOIN language 
ON film.language_id = language.language_id
;
--3
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)

);
INSERT INTO new_film (name) VALUES ('Harry Potter') , ('Harry Potter2');
--4
CREATE TABLE customer_review(
    review_id SERIAL ,
    film_id INT,
    language_id INT,
    title VARCHAR(255),
    score INT ,
    review_text TEXT ,
    last_update  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   --  fk_new_film FOREIGN KEY (id) REFERENCES new_film(id) ON DELETE CASCADE, this line didnt really work , why?
    FOREIGN KEY (film_id) REFERENCES new_film (id),
    FOREIGN KEY (language_id) REFERENCES language (language_id) ,
    PRIMARY KEY (review_id),
)
;
--5
INSERT INTO customer_review (film_id , language_id , title , score ,review_text) 
VALUES (1,1,'Harry Potter',10, 'A nice movie to watch')
;
--6
ERROR:  update or delete on table "new_film" violates foreign key constraint "customer_review_film_id_fkey" on table "customer_review"
Should it be this way??



--Exercise 2 : DVD Rental

--1
UPDATE film SET language_id = 2 WHERE title = 'Chamber Italian';
--2
customer_address_id is a foreign key
customer is a primary key 
--3
Just dropped it 
--4
SELECT * FROM rental
WHERE return_date < now();
;
--5
SELECT inventory.inventory_id , film.rental_rate , rental.return_date
FROM rental
INNER JOIN inventory
ON inventory.inventory_id = rental.inventory_id
INNER JOIN film
ON film.film_id = inventory.film_id
WHERE return_date < now() 
ORDER BY film.rental_rate DESC 
LIMIT 30
;
--6
--1
	  SELECT * FROM film
	  INNER JOIN film_actor
	  ON film.film_id = film_actor.actor_id
	  INNER JOIN actor
	  ON actor.actor_id = film_actor.actor_id
	  WHERE film.description LIKE '%sumo%'
	  AND actor.first_name ='Penelope'
	  ;

--2
 SELECT  film.title,rating,film.length 
	   FROM film
	   INNER JOIN film_category
	   ON film_category.film_id = film.film_id
	   INNER JOIN category
	   ON category.category_id = film_category.category_id
	   WHERE film.rating ='R' 
	   AND film.length < 60
	   AND category.name ='Documentary'
	   ;

--3
	  SELECT DISTINCT  title , first_name from payment
	  INNER JOIN rental
	  ON rental.customer_id = payment.customer_id
	  INNER JOIN customer
	  ON customer.customer_id = rental.customer_id
	  INNER JOIN inventory
	  ON inventory.inventory_id = rental.inventory_id
	  INNER JOIN film
	  ON film.film_id = inventory.film_id
	  WHERE payment.amount > 4
	  AND rental.return_date > '2005-07-28'
	  AND rental.return_date < '2005-08-01'
	  AND customer.first_name = 'Matthew'
	  ;

--4
 SELECT DISTINCT film.film_id , title , description , first_name FROM customer
	  INNER JOIN rental
	  ON rental.customer_id = customer.customer_id
	  INNER JOIN inventory
	  ON customer.store_id = inventory.store_id
	  INNER JOIN film
	  ON film.film_id = inventory.film_id
	  WHERE customer.first_name = 'Matthew'
	  AND film.title ILIKE '%boat%'
	  OR  film.description ILIKE '%boat%'
	
	  ;



