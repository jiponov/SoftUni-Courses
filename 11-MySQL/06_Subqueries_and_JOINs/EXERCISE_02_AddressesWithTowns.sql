SELECT
    e.first_name,
    e.last_name,
    t.name,
    a.address_text
FROM soft_uni6.employees AS e
         JOIN soft_uni6.addresses AS a ON a.address_id = e.address_id
         JOIN soft_uni6.towns AS t on t.town_id = a.town_id
ORDER BY e.first_name, e.last_name LIMIT 5;


/*

SELECT
    e.first_name,
    e.last_name,
    t.name,
    a.address_text
FROM employees AS e
         JOIN addresses AS a ON a.address_id = e.address_id
         JOIN towns AS t on t.town_id = a.town_id
ORDER BY e.first_name, e.last_name LIMIT 5;

*/