CREATE DATABASE portfoliosite;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_description TEXT NOT NULL,
);

CREATE TABLE inprogress (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_description TEXT NOT NULL,
);

CREATE TABLE finished (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_description TEXT NOT NULL,
);
