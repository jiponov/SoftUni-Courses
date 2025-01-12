USE restaurant;

SELECT department_id, ROUND(AVG(salary), 2) AS `Average Salary`
FROM employees
GROUP BY department_id
ORDER BY department_id;

/*
SELECT department_id, ROUND(AVG(salary), 2) AS `Average Salary`
FROM restaurant.employees
GROUP BY department_id
ORDER BY department_id;
*/

/* --for JUDGE
SELECT department_id, ROUND(AVG(salary), 2) AS `Average Salary`
FROM employees
GROUP BY department_id
ORDER BY department_id;
*/