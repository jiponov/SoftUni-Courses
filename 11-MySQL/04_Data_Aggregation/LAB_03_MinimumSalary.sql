USE restaurant;

SELECT department_id, ROUND(MIN(salary), 2) AS 'MinSalary'
FROM employees
GROUP BY department_id
HAVING `MinSalary` > 800;

/*
SELECT department_id, ROUND(MIN(salary), 2) AS `Average Salary`
FROM restaurant.employees
GROUP BY department_id
HAVING `Average Salary` > 800;
*/

/* --for JUDGE
SELECT department_id, ROUND(MIN(salary), 2) AS 'MinSalary'
FROM employees
GROUP BY department_id
HAVING `MinSalary` > 800;
*/