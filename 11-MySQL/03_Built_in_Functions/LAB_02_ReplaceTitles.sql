USE book_library;

SELECT 
REPLACE(title, 'The', '***') AS 'title'
FROM books
WHERE SUBSTR(title, 1, 3) = 'the'     # SUBSTRING
ORDER BY id;

/* --for JUDGE
SELECT 
REPLACE(title, 'The', '***') AS 'title'
FROM books
WHERE SUBSTR(title, 1, 3) = 'the'     # SUBSTRING
ORDER BY id;
*/