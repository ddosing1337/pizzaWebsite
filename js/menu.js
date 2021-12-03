let pizzaMenu = document.querySelector(".mobile-pizza-menu");
console.log(pizzaMenu);

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

for (let i = 0; i < 10; i++) {
  insertPizza();
}
