USE book_library;

SELECT
    CONCAT_WS(' ', first_name, last_name) AS 'Full Name',
    TIMESTAMPDIFF(DAY, born, died) AS 'Days Lived'
FROM authors;

/*
CREATE VIEW Person AS 

	SELECT CONCAT_WS(' ', first_name, last_name) AS 'Full Name', 
    IF(died IS NULL, NULL, DATEDIFF(died, born))  AS 'Days Lived' 
FROM authors; 
*/


/*
SELECT
    CONCAT_WS(' ', first_name, last_name) AS 'Full Name',
    TIMESTAMPDIFF(DAY, born, died) AS 'Days Lived'
FROM book_library.authors;
*/

/* --for JUDGE
SELECT
    CONCAT_WS(' ', first_name, last_name) AS 'Full Name',
    TIMESTAMPDIFF(DAY, born, died) AS 'Days Lived'
FROM authors;
*/