SELECT name, DATE_FORMAT(start, '%Y-%m-%d') AS `start`
FROM diablo2.games
WHERE YEAR(start) IN (2011, 2012)
ORDER BY start, name
LIMIT 50;

/*

SELECT name, DATE_FORMAT(start, '%Y-%m-%d') AS `start`
FROM games
WHERE YEAR(start) IN (2011, 2012)
ORDER BY start, name
LIMIT 50;

*/