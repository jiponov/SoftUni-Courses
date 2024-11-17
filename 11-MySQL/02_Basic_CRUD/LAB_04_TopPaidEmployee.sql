USE hotel;

CREATE VIEW `v_top_paid_employee` AS 
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 1;

SELECT * FROM v_top_paid_employee;
    
/*    
SELECT * 
FROM hotel.employees 
ORDER BY salary DESC 
LIMIT 1;
*/

/* --for JUDGE
CREATE VIEW `v_top_paid_employee` AS 
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 1;

SELECT * FROM v_top_paid_employee;
*/