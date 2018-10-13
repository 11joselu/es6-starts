const businessType = "PREMIUM";
const bestBusinesses = [
  "John el pintor",
  "John el arquitecto",
  "John el jardinero",
  "John el electricista",
  "John el carpintero"
];

const getTopFiveBusinesses = (type = businessType) => bestBusinesses.map((name, i) => ({
  businessType: type,
  businessName: name,
  position: i + 1
}));

/**
 * Crear una table a partir de los top 5 businesses
 *  Business Name | Business Type | Position
 *                |               |
 *      John...   |     <TYPE>    |    1
 *
 * @param {array} top top five business
 */
const createTopTable = (top = []) => {
  return `
    <table>
      <thead>
        <tr>
          <th>Business Name</th>
          <th>Business Type</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        ${createBodyTable(top)}
      </tbody>
    </table>

  `
}

function createBodyTable(top = []) {
  return top
    .map(({
      businessName,
      businessType,
      position
    }) => `
    <tr>
      <td>${businessName}</td>
      <td>${businessType}</td>
      <td>${position}</td>
    </tr>
  `)
}
/**
 * Escribir la función que permita generar un tagged template
 * cuya sentencia debe ser
 *
 * 'Hey $userName!, me llamo $devName y conozco este listado de
 * lenguajes LANGUAJE 1, LENGUAJE 2...'
 *
 * Nota: La sentencia ya está siendo utilizada en index.html
 */
const createTaggedTemplate = (sentenceArr, ...args) => {
  let sentence = '';
  for (let i = 0; i < sentenceArr.length; i++) {

    // Este es una posible solución, sino
    // se le podría pasar directamente como string
    // a la function
    if (Array.isArray(args[i])) {
      args[i] = args[i].join(' ');
    }

    sentence += sentenceArr[i] + (args[i] || '');
  }

  return sentence;
}



















// UNCOMMENT FOR SERVER SIDE TEST
module.exports = {
  getTopFiveBusinesses: getTopFiveBusinesses,
  createTopTable: createTopTable,
  createTaggedTemplate: createTaggedTemplate
};