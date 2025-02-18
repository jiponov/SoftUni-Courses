USE soft_uni;

# DROP FUNCTION ufn_count_employees_by_town;  -- if already exist delete it.

DELIMITER $$
CREATE FUNCTION ufn_count_employees_by_town(town_name VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
	DECLARE e_count INT;
    SET e_count := (
		SELECT COUNT(*) AS 'count'
		FROM employees e
			JOIN addresses a 
				ON e.address_id = a.address_id
			JOIN towns t 
				ON a.town_id = t.town_id
		WHERE t.name = town_name
        );
    
    RETURN e_count;
END$$
DELIMITER ;


/*
SELECT ufn_count_employees_by_town('Sofia');
*/


/*
SELECT COUNT(*) AS 'count'
FROM employees e
	JOIN addresses a ON e.address_id = a.address_id
    JOIN towns t ON a.town_id = t.town_id
WHERE t.name = 'Sofia';
*/


/*
DELIMITER $$
CREATE FUNCTION ufn_count_employees_by_town(town_name VARCHAR(50))
RETURNS INT
READS SQL DATA
BEGIN
	DECLARE e_count INT;
    SET e_count := (
		SELECT COUNT(*) AS 'count'
		FROM employees e
			JOIN addresses a 
				ON e.address_id = a.address_id
			JOIN towns t 
				ON a.town_id = t.town_id
		WHERE t.name = town_name
        );
    
    RETURN e_count;
END$$
DELIMITER ;
*/


/*

DELIMITER $$
CREATE FUNCTION soft_uni7.ufn_count_employees_by_town(`town_name` VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
    RETURN (
        SELECT COUNT(*)
        FROM employees AS e
            JOIN soft_uni7.addresses AS a ON e.address_id = a.address_id
            JOIN soft_uni7.towns t on t.town_id = a.town_id
        WHERE t.name = town_name
        );
END$$
DELIMITER ;

*/


/* --for JUDGE
CREATE FUNCTION ufn_count_employees_by_town(town_name VARCHAR(50))
RETURNS INT
DETERMINISTIC
BEGIN
	DECLARE e_count INT;
    SET e_count := (
		SELECT COUNT(*) AS 'count'
		FROM employees e
			JOIN addresses a 
				ON e.address_id = a.address_id
			JOIN towns t 
				ON a.town_id = t.town_id
		WHERE t.name = town_name
        );
    
    RETURN e_count;
END
*/