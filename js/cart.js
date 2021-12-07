const cartProducts = document.querySelector(".cart-products");
const cartTotal = document.querySelector(".cart-total");
const orderSubmit = document.getElementById("submit-button");

if (!localStorage.pizzas) {
  getPizzas();
}
if (!localStorage.orderList) {
  localStorage.orderList = JSON.stringify([]);
}

function getPizzas() {
  fetch("http://127.0.0.1:4000/", {
    method: "get",
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      localStorage.pizzas = JSON.stringify(json);
    })
    .catch((err) => console.log(err));
}

function insertCartProduct(id, name, picture, price, count) {
  cartProducts.innerHTML += `<div class="cart-product-row">
  <div
    class="
                      cart-table-cell cart-table-inner-cell cart-product-desc
                    "
  >
    <img
      src="./images/pizzas/lg/barbecue_classic.png"
      alt="${name}"
      class="cart-product-image"
    />
    <div class="cart-product-name">${name}</div>
  </div>

  <div class="cart-table-cell cart-table-inner-cell cart-counter">
    <button class="blank-button button-minus" id="M${id}">−</button>
    <span class="cart-product-quantity" id="count${id}">${count}</span>
    <button class="blank-button button-plus" id="P${id}">+</button>
  </div>
  <div class="cart-table-cell cart-table-inner-cell">
    <span
      class="
                        cart-table-cell cart-table-inner-cell cart-product-price
                      "
    >
      ${price}
    </span>
  </div>
</div>`;
}

function showCart() {
  cartProducts.innerHTML = "";
  let list = JSON.parse(localStorage.orderList);
  let pizzas = JSON.parse(localStorage.pizzas);
  pizzas.forEach((elem) => {
    if (!list[elem.id]) return;
    insertCartProduct(
      elem.id,
      elem.name,
      elem.picture,
      elem.price,
      list[elem.id]
    );
  });
}

function changeCount(e) {
  if (e.target.tagName != "BUTTON") return;

  let list = JSON.parse(localStorage.orderList);
  const pizzaId = e.target.id.slice(1);

  let counter = cartProducts.querySelector(`#count${pizzaId}`);

  if (e.target.id[0] == "M") {
    counter.textContent = +counter.textContent - 1;
    list[pizzaId] ? list[pizzaId]-- : 0;
  } else {
    counter.textContent = +counter.textContent + 1;
    list[pizzaId]++;
  }
  localStorage.orderList = JSON.stringify(list);
  setTotal();
  if (counter.textContent == "0") showCart();
}

function setTotal() {
  let total = 0;
  let list = JSON.parse(localStorage.orderList);
  let pizzas = JSON.parse(localStorage.pizzas);
  pizzas.forEach((elem) => {
    if (!list[elem.id]) return;
    total += list[elem.id] * elem.price;
  });
  cartTotal.firstChild.textContent = total;
}

function submitForm(e) {
  e.preventDefault();
  let _order_list = "";
  let list = JSON.parse(localStorage.orderList);
  let pizzas = JSON.parse(localStorage.pizzas);
  pizzas.forEach((elem) => {
    if (!list[elem.id]) return;
    _order_list += elem.id + ":" + list[elem.id] + ";";
  });
  //console.log(order_list);
  let inputs = document.forms[0].elements;
  let _name = inputs.name.value;
  let _surname = inputs.surname.value;
  let _address = inputs.address.value;
  let _phone = inputs.phone.value;
  let _additions = inputs.additions.value;

  for (elem of inputs) {
    console.log(elem.name, elem.validity.valid);
  }

  // console.log("request:");
  // console.log(_name);
  // console.log(_surname);
  // console.log(_address);
  // console.log(_phone);
  // console.log(_additions);

  fetch("http://127.0.0.1:4000/createOrder/", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order_list: _order_list,
      name: _name,
      surname: _surname,
      address: _address,
      phone: _phone,
      additions: _additions,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => console.log(err));
}

showCart();
setTotal();
cartProducts.addEventListener("click", changeCount);
orderSubmit.addEventListener("click", submitForm);
