SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    d.name
FROM soft_uni6.employees AS e
    JOIN soft_uni6.departments AS d ON d.department_id = e.department_id
WHERE d.name = 'Sales'
ORDER BY e.employee_id DESC;

/*

SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    d.name
FROM employees AS e
    JOIN departments AS d ON d.department_id = e.department_id
WHERE d.name = 'Sales'
ORDER BY e.employee_id DESC;

*/