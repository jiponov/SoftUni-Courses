SELECT user_name, ip_address
FROM diablo2.users
WHERE ip_address LIKE ('___.1%.%.___')
ORDER BY user_name;

/*

SELECT user_name, ip_address
FROM users
WHERE ip_address LIKE ('___.1%.%.___')
ORDER BY user_name;

*/