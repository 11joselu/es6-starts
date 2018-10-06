const {
  getTopFiveBusinesses,
  bestBusinesses,
  businessType,
  ages,
  getAllAdults,
  changeButtonTextOnClick,
  calculateTax
} = require("../../02-arrow-functions/exercise/arrow-functions");

const $ = require("jquery");

test("Debe devolver un array de Top 5 Premium Business", () => {
  const winners = getTopFiveBusinesses();
  const firstWinner = winners[0];
  expect(firstWinner).toMatchObject({
    businessName: bestBusinesses[0],
    businessType: businessType,
    position: 1
  });

  const businessTypeTest = "TEST";
  const newTopTest = getTopFiveBusinesses(businessTypeTest);
  const newTopFirst = newTopTest[0];

  expect(newTopFirst).toMatchObject({
    businessName: bestBusinesses[0],
    businessType: businessTypeTest,
    position: 1
  });
});

test("Debe eliminar del array todas las edades menores a 18", () => {
  const adults = getAllAdults(ages);
  const hasNotAdult = adults.length && adults.some(x => x < 18);

  expect(hasNotAdult).toBe(false);
});

test("Click en los botones y que establezca el índice del botón como texto", () => {
  document.body.innerHTML = `
    <button id="btn">Click Me!</button>
  `;
  const $button = document.getElementById("btn");
  changeButtonTextOnClick($button);

  $($button).click();

  expect($button.innerText).toEqual("Is the same node");
});

test("Aplicar el iva sobre un precio", () => {
  const price = calculateTax(50);
  let iva = 0.19;

  expect(price).toEqual(60.5);

  const colPrice = calculateTax(50, iva);
  expect(colPrice).toEqual(59.5);
});