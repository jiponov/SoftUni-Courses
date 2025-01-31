USE camp;

SELECT 
	routes.starting_point AS 'route_starting_point',
    routes.end_point AS 'route_end_point',
    routes.leader_id,
    CONCAT(first_name, ' ', last_name) AS 'leader_name'
FROM routes
	JOIN campers ON routes.leader_id = campers.id;
    
/*
    SELECT
    routes.starting_point AS `route_starting_point`,
    routes.end_point AS `route_ending_point`,
    routes.leader_id,
    CONCAT_WS(' ', campers.first_name, campers.last_name) AS `leader_name`
FROM camp.routes
JOIN camp.campers on campers.id = routes.leader_id;
*/


/* --for JUDGE
SELECT 
	routes.starting_point AS 'route_starting_point',
    routes.end_point AS 'route_end_point',
    routes.leader_id,
    CONCAT(first_name, ' ', last_name) AS 'leader_name'
FROM routes
	JOIN campers ON routes.leader_id = campers.id;
*/