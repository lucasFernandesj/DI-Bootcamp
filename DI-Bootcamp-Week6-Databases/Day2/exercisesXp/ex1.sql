--1
SELECT * FROM items ORDER BY price DESC;
--2
SELECT * FROM items WHERE price >= 80;
--3
SELECT * FROM customers LIMIT 3 ORDER BY first_name ASC RETURNING first_name , last_name;
--4
SELECT DISTINCT last_name FROM customers ORDER BY last_name DESC;

--2-----------------------------

CREATE TABLE customers(
    customer_id SERIAL ,
    customer_name VARCHAR(50),
    PRIMARY KEY(customer_id)
);

CREATE TABLE items(
     item_id SERIAL ,
     item_name VARCHAR(50),
     price INT,
     PRIMARY KEY(item_id)
);

CREATE TABLE purchases(
    purchases_id SERIAL PRIMARY KEY ,
    customer_id INT, 
    item_id INT,
    
    quantity_purchased INT
    FOREIGN KEY(customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id),

)

SELECT customers.customer_name , items.item_name 
FROM purchases
INNER JOIN items ON items.item_id = purchases.item_id 
INNER JOIN customers ON customers.customer_id = purchases.customer_id
;



INSERT INTO items (item_name , price) VALUES ('fan' , 80) , ('small_desk' , 100) , ('big_desk' , 300);

INSERT INTO customers (customer_name) VALUES ('Lucas') , ('Amichai') , ('Adane');

INSERT INTO purchases (customer_id,item_id, quantity_purchased) VALUES (1,1,1);

INSERT INTO purchases (customer_id, item_id,quantity_purchased) VALUES (2,3,10);

INSERT INTO purchases (customer_id , item_id , quantity_purchased ) VALUES (3,2,2);

INSERT INTO purchases (customer_id, item_id  ) VALUES (1)

--PART II

SELECT * FROM purchases;
--2

SELECT purchases.quantity_purchased 
FROM purchases
INNER JOIN customers 
ON purchases.customer_id = customers.customer_id;

--3

SELECT * 
FROM purchases 
INNER JOIN customers 
ON purchases.customer_id = customers.customer_id
WHERE customers.customer_id =1
;

--4
SELECT * 
FROM purchases
INNER JOIN items
ON purchases.item_id = items.item_id 
WHERE items.item_name = 'small_desk' AND items.item_name = 'big_desk'
;


--PART II 2

SELECT customers.customer_name , items.item_name 
FROM purchases
INNER JOIN items ON items.item_id = purchases.item_id 
INNER JOIN customers ON customers.customer_id = purchases.customer_id
;

--3
--I could add it , on the table it shoes item_id and quantity_purchased as null


