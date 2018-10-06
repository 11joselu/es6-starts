const {
  getTopFiveBusinesses,
  createTopTable,
  createTaggedTemplate
} = require("../../03-template-strings/exercise/template-strings");
const $ = require('jquery');

test('Debe crear una table con top empresas', () => {
  const tops = getTopFiveBusinesses();
  const table = createTopTable(tops);
  document.body.innerHTML = table;

  const $table = $('table');
  const $tableHeaders = $('th', $table);
  const $tableBodyTrs = $('tbody tr', $table);

  expect($tableHeaders.length).toEqual(3);
  expect($tableBodyTrs.length).toEqual(tops.length);
});

test('Debe crear un tagged template', () => {
  const userName = 'Jose';
  const devName = 'Cabrera';
  const languajes = ['Python', 'PHP', 'Javascript'];
  const sentence = createTaggedTemplate `Hey ${userName}!, me llamo ${devName} y conozco este listado de lenguajes ${languajes}`;
  const toEqual = `Hey ${userName}!, me llamo ${devName} y conozco este listado de lenguajes ${languajes.join(' ')}`;

  expect(sentence).toEqual(toEqual);
});