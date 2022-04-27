SELECT title , rating
FROM film
JOIN inventory
ON inventory.film_id = film.film_id
JOIN rental
ON rental.inventory_id = inventory.inventory_id
WHERE rental.return_date IS NOT NULL
;