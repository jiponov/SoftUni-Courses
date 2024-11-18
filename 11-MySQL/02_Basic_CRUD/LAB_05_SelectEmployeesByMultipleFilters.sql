USE hotel;

SELECT * 
FROM hotel.employees
WHERE department_id = 4 AND salary >= 1000
ORDER BY id;

/* --for JUDGE
SELECT * FROM employees
WHERE department_id = 4 AND salary >= 1000
ORDER BY id;
*/