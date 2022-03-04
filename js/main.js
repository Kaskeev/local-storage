// LocalStorage, SessionStorage, Cookies
// localStorage.setItem("key", JSON.stringify("value"));
// localStorage.getItem("key");
// localStorage.removeItem("key");
// localStorage.clear();

// console.log(window.localStorage);
// console.log(typeof localStorage);
// console.log(this.localStorage);
// window.onstorage = (event) => {
//   alert("new event on local storage");
//   console.log(event);
// };

let title = $("#title");
let price = $("#price");
let btnAdd = $("#btn-add");
let productsList = $("#products-list");

btnAdd.on("click", function () {
  // собираем новый обьект данные из инпутов
  let newProduct = {
    title: title.val(),
    price: price.val(),
    id: Date.now(),
  };
  let products = JSON.parse(localStorage.getItem("products"));
  //   Если products не найден то добавляем пустой массив  под этим ключом
  if (!products) {
    localStorage.setItem("products", JSON.stringify([]));
  }
  products = JSON.parse(localStorage.getItem("products"));
  console.log(products);
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
  render();
});

function render() {
  let products = JSON.parse(localStorage.getItem("products"));
  //   Если products не найден то добавляем пустой массив  под этим ключом
  if (!products) {
    localStorage.setItem("products", JSON.stringify([]));
  }
  products = JSON.parse(localStorage.getItem("products"));
  //   console.log(products);
  productsList.empty();
  products.forEach((item) => {
    productsList.append(`<div id=${item.id} class="card m-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.price}</p>
    <a href="#" class="btn btn-primary btn-delete">Delete</a>
    <a href="#" class="btn btn-primary btn-delete">Edit~</a>
  </div>
</div>`);
  });
}
render();

$(document).on("click", ".btn-delete", function (e) {
  console.log(e.target.parentNode.parentNode.id);
});
