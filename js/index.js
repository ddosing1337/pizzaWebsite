const pizzaMenu = document.querySelector(".mobile-pizza-menu");

getPizzas();

if (!localStorage.orderList) {
  localStorage.orderList = JSON.stringify([]);
}

function insertPizza(id, name, ingridients, picture, price) {
  pizzaMenu.innerHTML += `<div class="pizza">
<figure>
  <img
    class="pizza-image"
    src="images/pizzas/${picture}"
    alt="${name}"
  />
</figure>
<div class="pizza-box">
  <div class="mobile-pizza-header">${name}</div>
  <div class="mobile-pizza-ingredients">
    ${ingridients}
  </div>
  <div class="mobile-pizza-price">
    <span class="price-accent">${price}</span>
  </div>
  <div class="buttons">
    <button class="order-button" id="pizza${id}">
      В корзину <i class="fas fa-shopping-cart"></i>
    </button>
  </div>
</div>
</div>`;
}

function getPizzas() {
  fetch("http://192.168.100.3:4000/", {
    method: "get",
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      localStorage.pizzas = JSON.stringify(json);
    })
    .catch((err) => console.log(err));
}

function showPizzas(pizzas) {
  pizzas.forEach((elem) => {
    insertPizza(elem.id, elem.name, elem.ingridients, elem.picture, elem.price);
  });
}

showPizzas(JSON.parse(localStorage.pizzas).slice(0, 4));

function addToCart(e) {
  if (e.target.tagName != "BUTTON") return;

  pizzaId = +e.target.id.slice(5);
  let list = JSON.parse(localStorage.orderList);

  list[pizzaId] ? list[pizzaId]++ : (list[pizzaId] = 1);
  localStorage.orderList = JSON.stringify(list);
}

pizzaMenu.addEventListener("click", addToCart);
