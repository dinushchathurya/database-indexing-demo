-- Create database cluster_index_demo
CREATE DATABASE cluster_index_demo;

-- Use the database cluster_index_demo
USE cluster_index_demo;

-- Create the table with an index
CREATE TABLE users_with_index (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    country VARCHAR(50),
    INDEX (age, country)
);

-- Create the table without an index
CREATE TABLE users_without_index (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    country VARCHAR(50)
);

-- Insert some sample data into both tables
INSERT INTO users_with_index (name, email, age, country) VALUES
('John Doe', 'john@example.com', 30, 'USA'),
('Jane Smith', 'jane@example.com', 28, 'USA'),
('Alice Johnson', 'alice@example.com', 35, 'Canada');

INSERT INTO users_without_index (name, email, age, country) VALUES
('John Doe', 'john@example.com', 30, 'USA'),
('Jane Smith', 'jane@example.com', 28, 'USA'),
('Alice Johnson', 'alice@example.com', 35, 'Canada');
