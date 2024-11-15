USE `minions`;
/*  send to JUDGE only statements below, without USE clause  */


ALTER TABLE `users`
MODIFY COLUMN `last_login_time` DATETIME DEFAULT NOW();



/*
ALTER TABLE minions.users
CHANGE last_login_time last_login_time DATETIME DEFAULT NOW();
*/