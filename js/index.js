let pizzaMenu = document.querySelector(".mobile-pizza-menu");

function insertPizza() {
  pizzaMenu.innerHTML += `<div class="pizza">
<figure>
  <img
    class="pizza-image"
    src="images/pizzas/sm/ham_classic.png"
    alt="Пица Шункова"
  />
</figure>
<div class="pizza-box" data-base-price="6.40">
  <div class="mobile-pizza-header">Шункова</div>
  <div class="mobile-pizza-ingredients">
    Доматен сос, шунка, гъби, зелена чушка, моцарела
  </div>
  <div class="mobile-pizza-price">
    <span class="price-accent">6.40</span>
  </div>
  <div class="buttons">
    <button class="order-button">
      В корзину <i class="fas fa-shopping-cart"></i>
    </button>
  </div>
</div>
</div>`;
}

for (let i = 0; i < 4; i++) {
  insertPizza();
}

// fetch("localhost:4000/", {
//   method: "post",
//   body: JSON.stringify({}),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

fetch("http://127.0.0.1:4000/", {
  method: "get",
})
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
