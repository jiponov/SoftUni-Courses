USE soft_uni;

SELECT 
	e.employee_id,
    CONCAT_WS(' ', first_name, last_name) AS 'full_name',
    d.department_id,
    d.name AS 'department_name'
FROM employees e
JOIN departments d
	ON e.employee_id = d.manager_id
ORDER BY employee_id
LIMIT 5;

/*
SELECT
    e.employee_id,
    CONCAT_WS(' ', e.first_name, e.last_name) AS `full_name`,
    d.department_id,
    d.name AS `department_name`
FROM departments AS d
JOIN employees AS e 
ON d.manager_id = e.employee_id
ORDER BY e.employee_id 
LIMIT 5;
*/

/* --for JUDGE
SELECT 
	e.employee_id,
    CONCAT_WS(' ', first_name, last_name) AS 'full_name',
    d.department_id,
    d.name AS 'department_name'
FROM employees e
JOIN departments d
	ON e.employee_id = d.manager_id
ORDER BY employee_id
LIMIT 5;
*/
