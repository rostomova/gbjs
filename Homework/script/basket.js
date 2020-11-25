// @ts-check
function countBasketPrice(basketProducts) {
  let basketTotalPrice = 0;
  for (let i = 0; i < basketProducts.length; i++) {
    basketTotalPrice =
      basketTotalPrice + basketProducts[i][1] * basketProducts[i][2];
  }
  return basketTotalPrice;
}

// Название, цена, количество
let basketProducts = [
  ['Товар 1', 125, 1],
  ['Товар 2', 478, 2],
  ['Товар 3', 851, 3],
];

alert(
  'Цена корзины ' +
    basketProducts[0] +
    ' ' +
    basketProducts[1] +
    ' ' +
    basketProducts[2] +
    ' ' +
    ' составит ' +
    countBasketPrice(basketProducts)
);
