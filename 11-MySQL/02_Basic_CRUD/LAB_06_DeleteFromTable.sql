USE hotel;

DELETE FROM hotel.employees
WHERE department_id = 1 OR department_id = 2;

SELECT * 
FROM hotel.employees 
ORDER BY id;

/* --for JUDGE
DELETE FROM employees
WHERE department_id = 1 OR department_id = 2;

SELECT * 
FROM employees 
ORDER BY id;
*/