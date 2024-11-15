USE hotel;

SELECT 
    id,
    CONCAT(first_name, ' ', last_name) AS 'full_name',
    job_title,
    salary
FROM employees
WHERE salary > 1000
ORDER BY id;


/*
SELECT id, CONCAT_WS(' ', first_name, last_name) AS full_name, job_title, salary
FROM hotel.employees
WHERE salary > 1000
ORDER BY id;
*/


/* for JUDGE
SELECT 
    id,
    CONCAT(first_name, ' ', last_name) AS 'full_name',
    job_title,
    salary
FROM employees
WHERE salary > 1000
ORDER BY id;
*/
