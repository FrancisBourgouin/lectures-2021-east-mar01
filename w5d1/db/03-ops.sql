/*
SELECT * FROM jokes
JOIN authors
ON authors.id = author_id;
*/

/*
SELECT
jokes.*, authors.name
FROM jokes
JOIN authors
ON authors.id = author_id;
*/

SELECT
jokes.question, jokes.answer, authors.name AS author_name
FROM jokes
JOIN authors
ON authors.id = author_id;

/* Count how many jokes per authors */

-- SELECT count(*) FROM jokes;

/* */

SELECT 
count(*) AS amount_of_jokes, authors.name 
FROM jokes 
-- Run of the mill select query
JOIN authors 
ON author_id = authors.id 
-- Oh we're joining stuff
WHERE authors.name LIKE 'M%'
-- AND ...
-- And we're having conditions
GROUP BY authors.name
HAVING count(*) > 0
-- We need to manage the aggregate function
ORDER BY authors.name DESC;

SELECT
jokes.question, jokes.answer, authors.name AS author_name
FROM jokes
JOIN authors
ON author_id = authors.id
WHERE authors.name LIKE 'M%'
ORDER BY author_name