USE restaurant;

SELECT COUNT(*)
FROM products
WHERE category_id = 2 AND price > 8;

/*
SELECT COUNT(*)
FROM restaurant.products
WHERE category_id = 2 AND price > 8;
*/

/* --for JUDGE
SELECT COUNT(*)
FROM products
WHERE category_id = 2 AND price > 8;
*/