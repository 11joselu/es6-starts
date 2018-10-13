var businessName = 'Habitissimo';
// This is for node solutions
global.businessName = businessName;
/**
 * getBusinessName
 *
 * Debe devolver la variable global definida
 * es decir, cada que vez que ejecute la función,
 * debe de devolver 'Habitissimo'
 *
 * Realizar los cambios necesarios para que esto ocurra.
 *
 * Nota: dependiendo de dónde ejecutarás el código (server o web)
 * se implanta una solución o otra.
 */
function getBusinessName() {
  var businessName = global.businessName || undefined;
  if (!businessName) {
    businessName = 'Unknown SL';
  }

  return businessName;
}


/**
 * changeButtonTextOnClick
 *
 * Cada vez que el usuario click en el botón
 * debe establecer el texto '{i}, dónde i es
 * el índice del nodo en el array de elementos encontrados.
 */
function changeButtonTextOnClick() {
  const nodes = document.getElementsByTagName('button');
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function () {
      this.innerText = i;
    });
  }
}

















// UNCOMMENT FOR SERVER SIDE TEST
module.exports = {
  getBusinessName: getBusinessName,
  changeButtonTextOnClick: changeButtonTextOnClick
};