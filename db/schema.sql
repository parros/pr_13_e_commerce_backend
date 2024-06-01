-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

\c ecommerce_db

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    category_name TEXT NOT NULL
)

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL,
    price DECIMAL(30,2) NOT NULL,
    stock INTEGER(10) NOT NULL,
    category_id INTEGER,
    FOREIGN KEY (category_id)
    REFERENCES category(id)
)

CREATE TABLE tag (
    id SERIAL PRIMARY KEY,
    tag_name TEXT
)

CREATE TABLE productTag (
    id SERIAL PRIMARY KEY,
    product_id INTEGER,
    tag_id INTEGER,
    FOREIGN KEY (product_id)
    REFERENCES product(id),
    FOREIGN KEY (tag_id)
    REFERENCES tag(id)
)