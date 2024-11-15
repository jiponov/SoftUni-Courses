USE `minions`;
/*  send to JUDGE only statements below, without USE clause  */

CREATE TABLE `users` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,   # Auto incremented
    `username` VARCHAR(30) UNIQUE NOT NULL,   # unique identifier , Required
    `password` VARCHAR(26) NOT NULL,   # Required
    `profile_picture` BLOB,
    `last_login_time` TIME,
    `is_deleted` BOOLEAN
);
 
INSERT INTO `users` (`username`, `password`)
VALUES 
("pesho1", "1234"),
("ivan2", "gotinsam"),
("test", "thgjEST1234"),
("tester", "ttEssSTT1"),
("testche", "tEeeeeShhT5");


/* второ решение 
CREATE TABLE minions.users (
    id              INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username        VARCHAR(30) UNIQUE              NOT NULL,
    password        VARCHAR(26)                     NOT NULL,
    profile_picture BLOB,
    last_login_time DATETIME,
    is_deleted      BOOL
);

INSERT INTO minions.users(username, password, profile_picture, last_login_time, is_deleted) VALUES
('Ivan1', '123', 'test', NOW(), false),
('Gosho2', '234', 'test', NOW(), false),
('Peter3', '345', 'test', NOW(), false),
('Maria4', '456', 'test', NOW(), false),
('Tsveti5', '567', 'test', NOW(), false);
*/