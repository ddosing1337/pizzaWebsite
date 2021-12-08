drop database if exists pizza;
create database pizza;
USE pizza;



CREATE TABLE pizzas (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    ingridients varchar(255) NOT NULL,
    picture varchar(255) NOT NULL,
    price FLOAT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO pizzas (name, ingridients, picture, price) VALUES 
("Пепперони", "Сырокопчёная колбаса, сыр моцарелла, помидоры, базилик, томатная паста", "pepperoni.png", 9.90),
("Маргарита", "Сыр моцарелла, томатная паста", "margarita.png", 6.90),
("Домашняя", "Сыр моцарелла, помидоры, лук, сосиски, маринованные огурцы, шампиньоны", "homemade.png", 7.90),
("Сырная", "Сыр Чеддер, сыр моцарелла, сыр пармезан, томатная паста", "cheesy.png", 10.90),
("Карбонара", "Сыр Чеддер, сыр моцарелла, сыр пармезан, бекон, чеснок, красный лук, соус альфредо", "carbonara.png", 12.90),
("Барбекю", "Острые колбаски, соус барбекю, сыр моцарелла, чеснок, красный лук, томатная паста", "barbeque.png", 11.90);

CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    order_list varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    surname varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    phone varchar(255) NOT NULL,
    additions varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
