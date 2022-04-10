--1
CREATE table items(
name VARCHAR (50) NOT NULL,
price INT  NOT NULL
)

CREATE table custormers(
first_name VARCHAR (50) NOT NULL,
	last_name VARCHAR (50) NOT NULL
	
)
--2
INSERT INTO items (item_name, item_price) values ('small_desk',100), ('large_desk',300),('fan',80)

INSERT INTO customers (first_name , last_name) values ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson')

--3
--1
SELECT * from items
SELECT * from customers
--2
SELECT * from items WHERE item_price > 80
SELECT * FROM items where item_price <=300
SELECT * FROM customers WHERE last_name ='Smith'
SELECT * FROM customers WHERE last_name ='Jones'
SELECT * FROM customers WHERE first_name <> 'Scott'
