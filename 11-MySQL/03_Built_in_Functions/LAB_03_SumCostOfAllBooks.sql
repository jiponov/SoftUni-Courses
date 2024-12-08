USE book_library;

SELECT 
ROUND(SUM(cost),2) 
FROM book_library.books;

/*
SELECT 
	ROUND(SUM(cost), 2) AS 'Total Price'
FROM books;
*/

/* --for JUDGE
SELECT 
ROUND(SUM(cost),2) 
FROM books;
*/