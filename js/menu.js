let pizzaMenu = document.querySelector(".mobile-pizza-menu");
console.log(pizzaMenu);

function insertPizza(name, ingredients, picture, price) {
  pizzaMenu.innerHTML += `<div class="pizza">
<figure>
  <img
    class="pizza-image"
    src="images/pizzas/sm/ham_classic.png"
    alt="${name}"
  />
</figure>
<div class="pizza-box">
  <div class="mobile-pizza-header">${name}</div>
  <div class="mobile-pizza-ingredients">
    ${ingredients}
  </div>
  <div class="mobile-pizza-price">
    <span class="price-accent">${price}</span>
  </div>
  <div class="buttons">
    <button class="order-button">
      В корзину <i class="fas fa-shopping-cart"></i>
    </button>
  </div>
</div>
</div>`;
}

// fetch("http://127.0.0.1:4000/")
//   .then((res) => json)
//   .then((json) => pizzas)
//   .then((pizzas) => console.log(pizzas))
//   .catch((err) => console.log(err));

// for (let i = 0; i < 10; i++) {
//   insertPizza();
// }

// const data = null;

// const xhr = new XMLHttpRequest();

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "http://127.0.0.1:4000/");

// xhr.send(data);

fetch("http://127.0.0.1:4000/", {
  method: "get",
})
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    json.forEach((elem) => {
      insertPizza(elem.name, elem.ingridients, elem.picture, elem.price);
    });
  })
  .catch((err) => console.log(err));
