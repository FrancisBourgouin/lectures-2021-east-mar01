
INSERT INTO authors (name, description, funny) VALUES ('Francis', 'Oh boy, he is a teacher', true); 

INSERT INTO authors (name, funny, description) VALUES ('Paul', TRUE, 'A student in march01');

INSERT INTO authors (name, funny, description) VALUES ('Mike', TRUE, 'A student in march01');

/*
INSERT INTO 
jokes (question, answer, rating, author_id) 
VALUES 
('Knock knock, whos there, to who', 'no, to whom',5, 1);

INSERT INTO 
jokes (question,answer,rating,author_id) 
VALUES
('How is a bouncer at a club like a dish soap?', 'They both DETER GENTS', 5, 1);
*/

INSERT INTO
jokes (question, answer, rating, author_id)
VALUES
('Knock knock, whos there, to who', 'no, to whom',3, 1),
('How is a bouncer at a club like a dish soap?', 'They both DETER GENTS', 5, 2),
('What do you call a belt made out of watches?', 'A waist of time.', 5, 3),
('Why do programmers mix hallowen and christmas', 'because OCT 31 === DEC 25',5, 1);