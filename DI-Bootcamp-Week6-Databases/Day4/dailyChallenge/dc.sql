CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    customer_id INT
    fk_item_id INT FOREIGN KEY REFERENCES items(item_id)

)

CREATE TABLE items(
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(255),
    price INT
)


CREATE FUNCTION total_price(this_order_id INT) 
RETURNS INT AS  $total_price$
BEGIN
SELECT (SUM(price) WHERE order_id = this_order_id) 
END;
$total_price$ LANGUAGE plpgsql;
