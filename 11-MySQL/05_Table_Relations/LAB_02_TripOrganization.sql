USE camp;

SELECT 
    vehicles.driver_id,
    vehicles.vehicle_type,
    CONCAT(first_name, ' ', campers.last_name) AS 'driver_name'
FROM vehicles
JOIN campers ON campers.id = vehicles.driver_id;


/*
SELECT
    vehicles.driver_id,
    vehicles.vehicle_type,
    CONCAT_WS(' ', campers.first_name, campers.last_name) AS `driver_name`
FROM camp.vehicles
JOIN camp.campers ON vehicles.driver_id = campers.id;
*/


/* --for JUDGE
SELECT 
    vehicles.driver_id,
    vehicles.vehicle_type,
    CONCAT(first_name, ' ', campers.last_name) AS 'driver_name'
FROM vehicles
JOIN campers ON campers.id = vehicles.driver_id;
*/