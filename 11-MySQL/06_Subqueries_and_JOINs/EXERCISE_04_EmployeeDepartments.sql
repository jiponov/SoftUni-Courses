SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    d.name
FROM soft_uni6.employees AS e
         JOIN soft_uni6.departments AS d ON d.department_id = e.department_id
WHERE e.salary > 15000
ORDER BY d.department_id DESC LIMIT 5;

/*

SELECT
    e.employee_id,
    e.first_name,
    e.salary,
    d.name
FROM employees AS e
         JOIN departments AS d ON d.department_id = e.department_id
WHERE e.salary > 15000
ORDER BY d.department_id DESC LIMIT 5;

*/