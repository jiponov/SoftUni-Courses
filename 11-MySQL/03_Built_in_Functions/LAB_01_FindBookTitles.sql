USE book_library;

SELECT title
FROM books
WHERE SUBSTRING(title, 1, 3) = 'The'
ORDER BY id;

/*
SELECT title
FROM book_library.books
WHERE SUBSTRING(title, 1, 3) = 'The';
*/

/* --for JUDGE
SELECT title
FROM books
WHERE SUBSTRING(title, 1, 3) = 'The'
ORDER BY id;
*/