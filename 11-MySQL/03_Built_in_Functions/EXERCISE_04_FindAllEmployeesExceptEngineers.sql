SELECT
    first_name, last_name
FROM soft_uni3.employees
WHERE employees.job_title NOT LIKE ('%engineer%')
ORDER BY employee_id;

/*

SELECT
    first_name, last_name
FROM employees
WHERE employees.job_title Not LIKE ('%engineer%')
ORDER BY employee_id;

*/