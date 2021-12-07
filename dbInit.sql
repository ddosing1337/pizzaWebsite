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
("Пепперони", "Сырокопчёная колбаса, сыр моцарелла, помидоры, базилик, томатная паста", "pepperoni.jpg", 9.90),
("Маргарита", "Сыр моцарелла, помидоры, базилик, томатная паста", "margarita.jpg", 7.90),
("Домашняя", "Сыр моцарелла, помидоры, лук, сосиски, маринованные огурцы, шампиньоны", "homemade.jpg", 7.90),
("Сырная", "Сыр Чеддер, сыр моцарелла, сыр пармезан, томатная паста", "cheesy.jpg", 10.90),
("Карбонара", "Сыр Чеддер, сыр моцарелла, сыр пармезан, бекон, чеснок, красный лук, соус альфредо", "carbonara.jpg", 12.90),
("Барбекю", "Острые колбаски, соус барбекю, сыр моцарелла, чеснок, красный лук, томатная паста", "barbeque.jpg", 11.90);

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
