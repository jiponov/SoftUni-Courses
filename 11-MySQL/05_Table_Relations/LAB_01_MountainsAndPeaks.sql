USE camp;

CREATE TABLE mountains(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE peaks(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
	mountain_id INT NOT NULL,
    CONSTRAINT fk_peaks_mountains
		FOREIGN KEY (mountain_id)
        REFERENCES mountains(id)
);


/*
CREATE TABLE camp.mountains (
    id   INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE camp.peaks (
    id   INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    mountain_id INT,

    CONSTRAINT fk_peaks_mountains
        FOREIGN KEY (mountain_id)
            REFERENCES mountains(id)
);
*/


/* --for JUDGE
CREATE TABLE mountains(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE peaks(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
	mountain_id INT NOT NULL,
    CONSTRAINT fk_peaks_mountains
		FOREIGN KEY (mountain_id)
        REFERENCES mountains(id)
);
*/