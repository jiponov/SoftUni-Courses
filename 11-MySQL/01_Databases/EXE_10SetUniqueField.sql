USE `minions`;
/*  send to JUDGE only statements below, without USE clause  */

ALTER TABLE `users`
DROP PRIMARY KEY,     # Remove username field from the primary key so 
ADD CONSTRAINT pk_users PRIMARY KEY `users` (`id`),     # only the field id would be primary key
MODIFY COLUMN `username` VARCHAR(30) UNIQUE;     # Now add unique constraint to the username field

/*
ALTER TABLE minions.users
DROP PRIMARY KEY,
ADD CONSTRAINT pk_users PRIMARY KEY (id),
ADD CONSTRAINT uq_username UNIQUE (username);
*/