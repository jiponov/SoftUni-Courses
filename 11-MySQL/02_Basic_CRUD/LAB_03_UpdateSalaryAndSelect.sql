USE hotel;

UPDATE hotel.employees
SET salary = salary + 100
WHERE job_title = 'Manager' AND id > 0;

SELECT salary FROM hotel.employees;

/* for JUDGE
UPDATE employees
SET salary = salary + 100
WHERE job_title = 'Manager' AND id > 0;

SELECT salary FROM employees;
*/