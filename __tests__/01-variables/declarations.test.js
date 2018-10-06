const {
  getBusinessName,
  changeButtonTextOnClick
} = require('../../01-variables/exercise/declarations');

const $ = require('jquery');

test('Debe devolver \'Habitissimo\' como nombre de empresa', () => {
  var name = getBusinessName();
  expect(name).toEqual('Habitissimo');
});

test('Click en los botones y que establezca el índice del botón como texto', () => {
  document.body.innerHTML = `
    <button id="click-here">1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
  `
  changeButtonTextOnClick();

  var $buttons = document.getElementsByTagName('button');
  var indexToClick = 0;
  var $button = $buttons[indexToClick];

  $($button).click();

  expect($button.innerText).toEqual(indexToClick);
});