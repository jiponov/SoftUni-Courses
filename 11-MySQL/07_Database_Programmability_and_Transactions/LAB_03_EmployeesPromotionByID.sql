USE soft_uni;

-- 100/100
DELIMITER $$
CREATE PROCEDURE usp_raise_salary_by_id(user_id INT)
BEGIN
	DECLARE employee_count INT;
    SET employee_count := (
		SELECT COUNT(*) 
        FROM employees 
        WHERE employee_id = user_id
        );
    
    --  employee_count = 1  => update (COMMIT);   employee_count = 0  => abort (ROLLBACK)
    
    START TRANSACTION;
	
    UPDATE employees
	SET salary = salary * 1.05
	WHERE employee_id = user_id;
    
    IF (employee_count = 0) THEN
		ROLLBACK;
	ELSE
		COMMIT;
	END IF;
END$$
DELIMITER ;


# SELECT * FROM employees;
# CALL usp_raise_salary_by_id(432112);
# CALL usp_raise_salary_by_id(17);

-- 100/100
/*
DELIMITER $$
CREATE PROCEDURE usp_raise_salary_by_id(`id` INT)
BEGIN
    UPDATE employees AS e
    SET e.salary = e.salary * 1.05
    WHERE e.employee_id = id;
END$$
DELIMITER ;
*/


/*
DELIMITER $$
CREATE PROCEDURE soft_uni7.usp_raise_salary_by_id(`id` INT)
BEGIN
    UPDATE soft_uni7.employees AS e
    SET e.salary = e.salary * 1.05
    WHERE e.employee_id = id;
END$$
DELIMITER ;
*/


/* --for JUDGE
CREATE PROCEDURE usp_raise_salary_by_id(`id` INT)
BEGIN
    UPDATE employees AS e
    SET e.salary = e.salary * 1.05
    WHERE e.employee_id = id;
END
*/