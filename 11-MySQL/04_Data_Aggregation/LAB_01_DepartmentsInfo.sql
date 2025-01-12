USE restaurant;

SELECT department_id, COUNT(*) AS 'Number of employees'
FROM employees
GROUP BY department_id
ORDER BY department_id, `Number of employees`;

/* --for JUDGE
SELECT department_id, COUNT(*) AS 'Number of employees'
FROM employees
GROUP BY department_id
ORDER BY department_id, `Number of employees`;
*/

/*
SELECT department_id, COUNT(id) AS `Number of employees`
FROM restaurant.employees
GROUP BY department_id
ORDER BY department_id;
*/