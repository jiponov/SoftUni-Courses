USE `minions`;
/*  send to JUDGE only statements below, without USE clause  */

ALTER TABLE `users`
DROP PRIMARY KEY,
ADD PRIMARY KEY pk_users (`id`, `username`);


/*
ALTER TABLE minions.users
DROP PRIMARY KEY,
ADD PRIMARY KEY (id, username);
*/