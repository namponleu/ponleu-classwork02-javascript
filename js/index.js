import { cardComponents } from "../components/cardComponents.js";
import { cardComponentsJson } from "../components/cardComponentsJson.js";
// import { products } from "../data/products.js";
let renderArea = document.querySelector("#renderArea");

let baseUrl = "http://127.0.0.1:5500/data/products.json";
fetch(baseUrl).then((res) => res.json()).then((data) => {
  let products = data;
  products.map((products) => (renderArea.innerHTML += cardComponentsJson(products)))
}
);

// RENDER PRODUCT
// products
//   .slice(0, 20)
//   .map((product) => (renderArea.innerHTML += cardComponents(product)));  

