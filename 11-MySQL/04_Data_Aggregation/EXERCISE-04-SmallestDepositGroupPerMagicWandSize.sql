SELECT
    deposit_group
FROM gringotts.wizzard_deposits
GROUP BY deposit_group
ORDER BY AVG(magic_wand_size) LIMIT 1;

/*

SELECT
    deposit_group
FROM wizzard_deposits
GROUP BY deposit_group
ORDER BY AVG(magic_wand_size) LIMIT 1;

*/