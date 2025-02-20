CREATE DATABASE movies;

CREATE TABLE movies.directors(
    id            INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    director_name VARCHAR(60)     NOT NULL,
    notes         TEXT
);

CREATE TABLE movies.genres(
    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    genre_name VARCHAR(60)     NOT NULL,
    notes      TEXT
);

CREATE TABLE movies.categories(
    id            INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(60)     NOT NULL,
    notes         TEXT
);

CREATE TABLE movies.movies(
    id             INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title          VARCHAR(60)     NOT NULL,
    director_id    INT REFERENCES directors (id),
    copyright_year YEAR,
    length         DOUBLE(10, 2),
    genre_id       INT REFERENCES genres (id),
    category_id    INT REFERENCES categories (id),
    rating         DOUBLE(10, 2),
    notes          TEXT
);

INSERT INTO movies.directors(director_name, notes) VALUES
('Ivan', 'text'),
('Peter', 'text'),
('Georgi', 'text'),
('Stamat', 'text'),
('Anton', 'text');

INSERT INTO movies.genres(genre_name, notes) VALUES
('Drama', 'text'),
('Horror', 'text'),
('Comedy', 'text'),
('Romans', 'text'),
('Fantasy', 'text');

INSERT INTO movies.categories(category_name, notes) VALUES
('Action', 'text'),
('Adventure', 'text'),
('Asian', 'text'),
('Western', 'text'),
('European', 'text');

INSERT INTO movies.movies(title, director_id, genre_id, category_id) VALUES
('First Movie', 1, 2, 3),
('Second Movie', 2,3, 4),
('Third Movie', 3, 4, 5),
('Forth Movie', 4, 5, 1),
('Fifth Movie', 5, 1, 2);


/* второ решение
CREATE TABLE `directors` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `director_name` VARCHAR(50) NOT NULL, 
    `notes` TEXT
); 
 
INSERT INTO `directors`(`director_name`, `notes`)
VALUES 
('TestName1', 'TestNotes'),
('TestName2', 'TestNotes'),
('TestName3', 'TestNotes'),
('TestName4', 'TestNotes'),
('TestName5', 'TestNotes');
 
CREATE TABLE `genres` (
    `id` INT PRIMARY KEY AUTO_INCREMENT , 
    `genre_name` VARCHAR(20) NOT NULL,
    `notes` TEXT
);
 
INSERT INTO `genres`(`genre_name`, `notes`)
VALUES 
('TestName1', 'TestNotes'),
('TestName2', 'TestNotes'),
('TestName3', 'TestNotes'),
('TestName4', 'TestNotes'),
('TestName5', 'TestNotes');
 
CREATE TABLE `categories` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `category_name` VARCHAR(20) NOT NULL,
    `notes` TEXT
);
 
INSERT INTO `categories`(`category_name`, `notes`)
VALUES 
('TestName1', 'TestNotes'),
('TestName2', 'TestNotes'),
('TestName3', 'TestNotes'),
('TestName4', 'TestNotes'),
('TestName5', 'TestNotes');
 
CREATE TABLE `movies` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(40) NOT NULL, 
    `director_id` INT,
    `copyright_year` INT,
    `length` INT,
    `genre_id` INT,
    `category_id` INT,
    `rating` DOUBLE, 
    `notes` TEXT
);
 
INSERT INTO `movies` (`title`)
VALUES 
('TestMovie1'),
('TestMovie2'),
('TestMovie3'),
('TestMovie4'),
('TestMovie5');

*/


/*   for JUDGE code:
CREATE TABLE directors(
    id            INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    director_name VARCHAR(60)     NOT NULL,
    notes         TEXT
);

CREATE TABLE genres(
    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    genre_name VARCHAR(60)     NOT NULL,
    notes      TEXT
);

CREATE TABLE categories(
    id            INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    category_name VARCHAR(60)     NOT NULL,
    notes         TEXT
);

CREATE TABLE movies(
    id             INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title          VARCHAR(60)     NOT NULL,
    director_id    INT REFERENCES directors (id),
    copyright_year YEAR,
    length         DOUBLE(10, 2),
    genre_id       INT REFERENCES genres (id),
    category_id    INT REFERENCES categories (id),
    rating         DOUBLE(10, 2),
    notes          TEXT
);

INSERT INTO directors(director_name, notes) VALUES
('Ivan', 'text'),
('Peter', 'text'),
('Georgi', 'text'),
('Stamat', 'text'),
('Anton', 'text');

INSERT INTO genres(genre_name, notes) VALUES
('Drama', 'text'),
('Horror', 'text'),
('Comedy', 'text'),
('Romans', 'text'),
('Fantasy', 'text');

INSERT INTO categories(category_name, notes) VALUES
('Action', 'text'),
('Adventure', 'text'),
('Asian', 'text'),
('Western', 'text'),
('European', 'text');

INSERT INTO movies(title, director_id, genre_id, category_id) VALUES
('First Movie', 1, 2, 3),
('Second Movie', 2,3, 4),
('Third Movie', 3, 4, 5),
('Forth Movie', 4, 5, 1),
('Fifth Movie', 5, 1, 2);
*/