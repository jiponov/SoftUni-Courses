SELECT
    deposit_group,
    SUM(deposit_amount) AS `total_sum`
FROM gringotts.wizzard_deposits
GROUP BY deposit_group
ORDER BY total_sum;


/*

SELECT
    deposit_group,
    SUM(deposit_amount) AS `total_sum`
FROM wizzard_deposits
GROUP BY deposit_group
ORDER BY total_sum;

*/