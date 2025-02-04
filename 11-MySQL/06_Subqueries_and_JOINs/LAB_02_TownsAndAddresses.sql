USE soft_uni;

SELECT
    t.town_id,
    t.name,
    a.address_text
FROM towns AS t
JOIN addresses AS a 
ON t.town_id = a.town_id
WHERE t.name IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY t.town_id, a.address_id;

/*
SELECT
    t.town_id,
    t.name,
    a.address_text
FROM soft_uni5.towns AS t
JOIN soft_uni5.addresses AS a on t.town_id = a.town_id
WHERE t.name IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY t.town_id, a.address_id;
*/

/* --for JUDGE
SELECT
    t.town_id,
    t.name,
    a.address_text
FROM towns AS t
JOIN addresses AS a 
ON t.town_id = a.town_id
WHERE t.name IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY t.town_id, a.address_id;
*/