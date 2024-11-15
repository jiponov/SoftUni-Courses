CREATE DATABASE car_rental;

CREATE TABLE car_rental.categories(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    category VARCHAR(255) NOT NULL,
    daily_rate DOUBLE(12, 2),
    weekly_rate DOUBLE(12, 2),
    monthly_rate DOUBLE(12, 2),
    weekend_rate DOUBLE(12, 2)
);

CREATE TABLE car_rental.cars (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    plate_number VARCHAR(30) NOT NULL UNIQUE,
    make VARCHAR(255),
    model VARCHAR(255),
    car_year YEAR,
    category_id INT NOT NULL REFERENCES car_rental.categories(id),
    doors INT,
    picture BLOB,
    car_condition VARCHAR(255),
    available BOOL
);

CREATE TABLE car_rental.employees (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    title VARCHAR(50),
    notes TEXT
);

CREATE TABLE car_rental.customers (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    driver_licence_number INT NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(60),
    zip_code INT,
    notes TEXT
);

CREATE TABLE car_rental.rental_orders (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    employee_id INT NOT NULL REFERENCES car_rental.employees(id),
    customer_id INT NOT NULL REFERENCES car_rental.customers(id),
    car_id INT NOT NULL REFERENCES car_rental.cars(id),
    car_condition VARCHAR(255),
    tank_level INT,
    kilometrage_start INT,
    kilometrage_end INT,
    total_kilometrage INT,
    start_date DATE,
    end_date DATE,
    total_days INT,
    rate_applied DOUBLE(12, 2),
    tax_rate DOUBLE(12, 2),
    order_status BOOL,
    notes TEXT
);

INSERT INTO car_rental.categories(category, daily_rate, weekly_rate, monthly_rate, weekend_rate) VALUES
('Category 1', 1, 2, 3, 4),
('Category 2', 2, 3, 4, 5),
('Category 3', 3, 4, 5, 6);

INSERT INTO car_rental.cars(plate_number, make, model, car_year, category_id, doors, picture, car_condition, available) VALUES
('Plate 1', 'Make 1', 'Model 1', '2005', 1, 4, 'Text', 'Good', TRUE),
('Plate 2', 'Make 2', 'Model 2', '2005', 2, 4, 'Text', 'Good', TRUE),
('Plate 3', 'Make 3', 'Model 3', '2005', 3, 4, 'Text', 'Good', TRUE);

INSERT INTO car_rental.customers(driver_licence_number, full_name, address, city, zip_code, notes) VALUES
(1, 'Name 1', 'Address 1', 'City1', 1, 'text'),
(2, 'Name 2', 'Address 2', 'City2', 2, 'text'),
(3, 'Name 3', 'Address 3', 'City3', 3, 'text');

INSERT INTO car_rental.employees(first_name, last_name, title, notes) VALUES
('First Name 1', 'Last Name 1', 'Title 1', 'Text'),
('First Name 2', 'Last Name 2', 'Title 2', 'Text'),
('First Name 3', 'Last Name 3', 'Title 3', 'Text');

INSERT INTO car_rental.rental_orders(employee_id, customer_id, car_id, car_condition, tank_level, kilometrage_start, kilometrage_end, total_kilometrage, start_date, end_date, total_days, rate_applied, tax_rate, order_status, notes) VALUES
(1, 1, 1, 'Good', 100, 1111, 1121, 10, '2022-01-01', '2022-01-02', 2, 1.1, 1.1, TRUE, 'Text'),
(2, 2, 2, 'Good', 100, 1111, 1131, 20, '2022-02-01', '2022-02-03', 3, 2.2, 2.2, TRUE, 'Text'),
(3, 3, 3, 'Good', 100, 1111, 1141, 30, '2022-03-01', '2022-03-04', 4, 3.3, 3.3, TRUE, 'Text');


/* второ решение
CREATE TABLE `categories` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `category` VARCHAR(20), 
    `daily_rate` DOUBLE, 
    `weekly_rate` DOUBLE, 
    `monthly_rate` DOUBLE, 
    `weekend_rate` DOUBLE    
);
 
INSERT INTO `categories` (`category`)
VALUES 
('TestName1'),
('TestName2'),
('TestName3');
 
CREATE TABLE `cars` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, 
    `plate_number` VARCHAR(20),
    `make` VARCHAR(20),
    `model` VARCHAR(20),
    `car_year` INT,
    `category_id` INT,
    `doors` INT,
    `picture` BLOB,
    `car_condition` VARCHAR(30),
    `available` BOOLEAN   
);
 
INSERT INTO `cars` (`plate_number`)
VALUES 
('TestName1'),
('TestName2'),
('TestName3');
 
CREATE TABLE `employees` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(50),
    `last_name` VARCHAR(50),
    `title` VARCHAR(50),
    `notes` TEXT
);
 
INSERT INTO `employees` (`first_name`, `last_name`)
VALUES 
('TestName1', 'TestName1'),
('TestName2', 'TestName2'),
('TestName3', 'TestName3');
 
CREATE TABLE `customers` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `driver_license` VARCHAR(20),
    `full_name` VARCHAR(50),
    `address` VARCHAR(50),
    `city` VARCHAR(10),
    `zip_code` VARCHAR(10),
    `notes` TEXT
);
 
INSERT INTO `customers` (`driver_license`, `full_name`)
VALUES 
('TestName1', 'TestName1'),
('TestName2', 'TestName2'),
('TestName3', 'TestName3');
 
CREATE TABLE `rental_orders` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `employee_id` INT,
    `customer_id` INT,
    `car_id` INT,
    `car_condition` VARCHAR(50),
    `tank_level` VARCHAR(20),
    `kilometrage_start` INT,
    `kilometrage_end` INT,
    `total_kilometrage` INT,
    `start_date` DATE, 
    `end_date` DATE, 
    `total_days` INT,
    `rate_applied` DOUBLE,
    `tax_rate` DOUBLE,
    `order_status` VARCHAR(20),
    `notes` TEXT
);
 
INSERT INTO `rental_orders` (`employee_id`, `customer_id`)
VALUES 
(1, 2),
(2, 3),
(3, 1);

*/


/* for JUDGE
CREATE TABLE categories(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    category VARCHAR(255) NOT NULL,
    daily_rate DOUBLE(12, 2),
    weekly_rate DOUBLE(12, 2),
    monthly_rate DOUBLE(12, 2),
    weekend_rate DOUBLE(12, 2)
);

CREATE TABLE cars (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    plate_number VARCHAR(30) NOT NULL UNIQUE,
    make VARCHAR(255),
    model VARCHAR(255),
    car_year YEAR,
    category_id INT NOT NULL REFERENCES car_rental.categories(id),
    doors INT,
    picture BLOB,
    car_condition VARCHAR(255),
    available BOOL
);

CREATE TABLE employees (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    title VARCHAR(50),
    notes TEXT
);

CREATE TABLE customers (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    driver_licence_number INT NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(60),
    zip_code INT,
    notes TEXT
);

CREATE TABLE rental_orders (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    employee_id INT NOT NULL REFERENCES car_rental.employees(id),
    customer_id INT NOT NULL REFERENCES car_rental.customers(id),
    car_id INT NOT NULL REFERENCES car_rental.cars(id),
    car_condition VARCHAR(255),
    tank_level INT,
    kilometrage_start INT,
    kilometrage_end INT,
    total_kilometrage INT,
    start_date DATE,
    end_date DATE,
    total_days INT,
    rate_applied DOUBLE(12, 2),
    tax_rate DOUBLE(12, 2),
    order_status BOOL,
    notes TEXT
);

INSERT INTO categories(category, daily_rate, weekly_rate, monthly_rate, weekend_rate) VALUES
('Category 1', 1, 2, 3, 4),
('Category 2', 2, 3, 4, 5),
('Category 3', 3, 4, 5, 6);

INSERT INTO cars(plate_number, make, model, car_year, category_id, doors, picture, car_condition, available) VALUES
('Plate 1', 'Make 1', 'Model 1', '2005', 1, 4, 'Text', 'Good', TRUE),
('Plate 2', 'Make 2', 'Model 2', '2005', 2, 4, 'Text', 'Good', TRUE),
('Plate 3', 'Make 3', 'Model 3', '2005', 3, 4, 'Text', 'Good', TRUE);

INSERT INTO customers(driver_licence_number, full_name, address, city, zip_code, notes) VALUES
(1, 'Name 1', 'Address 1', 'City1', 1, 'text'),
(2, 'Name 2', 'Address 2', 'City2', 2, 'text'),
(3, 'Name 3', 'Address 3', 'City3', 3, 'text');

INSERT INTO employees(first_name, last_name, title, notes) VALUES
('First Name 1', 'Last Name 1', 'Title 1', 'Text'),
('First Name 2', 'Last Name 2', 'Title 2', 'Text'),
('First Name 3', 'Last Name 3', 'Title 3', 'Text');

INSERT INTO rental_orders(employee_id, customer_id, car_id, car_condition, tank_level, kilometrage_start, kilometrage_end, total_kilometrage, start_date, end_date, total_days, rate_applied, tax_rate, order_status, notes) VALUES
(1, 1, 1, 'Good', 100, 1111, 1121, 10, '2022-01-01', '2022-01-02', 2, 1.1, 1.1, TRUE, 'Text'),
(2, 2, 2, 'Good', 100, 1111, 1131, 20, '2022-02-01', '2022-02-03', 3, 2.2, 2.2, TRUE, 'Text'),
(3, 3, 3, 'Good', 100, 1111, 1141, 30, '2022-03-01', '2022-03-04', 4, 3.3, 3.3, TRUE, 'Text');

*/