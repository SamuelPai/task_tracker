CREATE DATABASE IF NOT EXISTS task_tracker;
USE task_tracker;

DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    id int NOT NULL AUTO_INCREMENT,
    task varchar(255) NOT NULL,
    PRIMARY KEY (id)
)