import { products } from "./products.js";
import { checkPrice } from "./checkPrice.js";

const { name, price } = products[0];

console.log(`Product: ${name}, Price: $${price}`);

checkPrice(price)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });