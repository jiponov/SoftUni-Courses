USE soft_uni;

SELECT COUNT(*) AS 'count'
FROM employees
WHERE salary > (
	SELECT AVG(salary) FROM employees
);


/*

SELECT COUNT(e.employee_id) AS 'count'
FROM employees AS e
WHERE e.salary > (
    SELECT AVG(salary) AS 'average_salary'
	FROM employees
);

*/


/* --for JUDGE
SELECT COUNT(*) AS 'count'
FROM employees
WHERE salary > (
	SELECT AVG(salary) FROM employees
);
*/