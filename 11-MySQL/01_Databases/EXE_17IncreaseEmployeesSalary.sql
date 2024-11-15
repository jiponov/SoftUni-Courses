USE soft_uni;
UPDATE soft_uni.employees SET salary = salary * 1.10 WHERE id > 0;
SELECT salary FROM soft_uni.employees;

/* for JUDGE
UPDATE employees SET salary = salary * 1.10 WHERE id > 0;
SELECT salary FROM employees;
*/