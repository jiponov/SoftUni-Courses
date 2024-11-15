SELECT * FROM soft_uni.towns ORDER BY name;
SELECT * FROM soft_uni.departments ORDER BY name;
SELECT * FROM soft_uni.employees ORDER BY salary DESC;     # the opposite: SELECT * FROM soft_uni.employees ORDER BY salary ASC; (ascending order: lowest salary to the highest.)

/* for JUDGE
SELECT * FROM towns ORDER BY name;
SELECT * FROM departments ORDER BY name;
SELECT * FROM employees ORDER BY salary DESC;
*/

/* второ решение
USE `soft_uni`;
SELECT * FROM `towns` ORDER BY `name`;
SELECT * FROM `departments` ORDER BY `name`;
SELECT * FROM `employees` ORDER BY `salary` DESC;
*/