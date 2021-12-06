drop database if exists pizza;
create database pizza;
USE pizza;



CREATE TABLE pizzas (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    ingridients varchar(255) NOT NULL,
    picture varchar(255) NOT NULL,
    price INT NOT NULL,
    PRIMARY KEY (id)


);

INSERT INTO pizzas (name, ingridients, picture, price) VALUES 
("Пепперони", "Сырокопчёная колбаса, сыр моцарелла, помидоры, базилик, томатная паста", "pepperoni.jpg", 9.90),
("Маргарита", "Сыр моцарелла, помидоры, базилик, томатная паста", "margarita.jpg", 7.90),
("Домашняя", "Сыр моцарелла, помидоры, лук, сосиски, маринованные огурцы, шампиньоны", "homemade.jpg", 7.90);

