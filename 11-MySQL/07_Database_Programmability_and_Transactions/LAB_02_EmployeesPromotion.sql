USE soft_uni;

-- 100/100
DELIMITER $$
CREATE PROCEDURE usp_raise_salaries(`department_name` VARCHAR(50))
BEGIN
UPDATE employees e
	SET e.salary = e.salary * 1.05
	WHERE e.department_id = (
		SELECT d.department_id 
        FROM departments d 
        WHERE d.name = department_name
	);
END$$
DELIMITER ;

-- 100/100
/*
DELIMITER $$
CREATE PROCEDURE usp_raise_salaries(`department_name` VARCHAR(50))
BEGIN
    UPDATE employees AS e
        JOIN departments AS d 
        ON e.department_id = d.department_id
    SET e.salary = e.salary * 1.05
    WHERE d.name = department_name;    
END$$
DELIMITER ;
*/


/* --for JUDGE
CREATE PROCEDURE usp_raise_salaries(`department_name` VARCHAR(50))
BEGIN
UPDATE employees e
	SET e.salary = e.salary * 1.05
	WHERE e.department_id = (
		SELECT d.department_id 
        FROM departments d 
        WHERE d.name = department_name
	);
END
*/


/*

SELECT e.first_name, e.salary
FROM employees e 
	JOIN departments d ON e.department_id = d.department_id
WHERE d.name = 'Finance'
ORDER BY e.first_name, e.salary;

UPDATE employees e
SET e.salary = e.salary * 1.05
WHERE e.department_id = (
	SELECT d.department_id 
    FROM departments d WHERE d.name = 'Finance'
);

*/




/*
DELIMITER $$
CREATE PROCEDURE usp_raise_salaries(department_name VARCHAR(50))
BEGIN
	UPDATE employees e
	SET e.salary = e.salary * 1.05
	WHERE e.department_id = (
		SELECT d.department_id 
        FROM departments d 
        WHERE d.name = department_name
	);
    
    SELECT e.first_name, e.salary
	FROM employees e 
		JOIN departments d 
        ON e.department_id = d.department_id
	WHERE d.name = department_name
	ORDER BY e.first_name, e.salary;
END$$
DELIMITER ;
*/

/*
DELIMITER $$
CREATE PROCEDURE soft_uni7.usp_raise_salaries(`department_name` VARCHAR(50))
BEGIN
    UPDATE soft_uni7.employees AS e
        JOIN soft_uni7.departments AS d ON e.department_id = d.department_id
    SET e.salary = e.salary * 1.05
    WHERE d.name = department_name;
END$$
DELIMITER ;
*/

