UPDATE actors SET first_name='Maty' WHERE first_name='Matt'; 

UPDATE actors SET number_oscars='4' WHERE first_name='George' AND last_name='Clooney' RETURNING actor_id , first_name , last_name , age , number_oscars; 


ALTER TABLE actors RENAME COLUMN age TO birthday; 

DELETE FROM actors WHERE first_name='George' returning first_name , last_name; 


CREATE TABLE movies(
    movie_id SERIAL,
    movie_name VARCHAR(50) 
);

CREATE TABLE producers(
    id SERIAL,
    name VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (movies_pkey) REFERENCES movies (movie_id)
);