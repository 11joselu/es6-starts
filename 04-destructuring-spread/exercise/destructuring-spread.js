const business = {
  id: 1,
  name: 'Habitissimo',
  created_date: '2018-03-18',
  updated_date: '2018-10-7',
}

/**
 * Modificar la función para que, dada un business y una serie de opciones,
 * genere un objeto de tipo businessExtra con los atributos de business
 * y los nuevos atributos (estos pueden ser cualquier tipo)
 *
 * Si dentro de la businessOptions se reemplaza un valor de business,
 *  se debe de prevenir dicho reemplazo.
 * Además debe Prevenir que lance un error al pasarle undefined como valor
 * tanto business y businessOptions
 *
 *  Ej: si businessOptions = { id: 12321}, el valor debe mantener a 1
 *
 * Puede servir: ¿quizás?
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/freeze
 *
 * Nota: businessOptions puede tener cualquier atributo y cualquier valor (no incluye array ni objeto).
 *
 * @param {*} business
 * @param {*} businessOptions
 */
const getBusinessExtra = (businessData = business, businessOptions = {}) => {
  return {
    ...businessOptions,
    ...business,
  };
}


/**
 * Realizar las modificaciones necesarias a la definición
 * de la función (tan sólo al parámetro) para que:
 *
 * El usuario le pase un array del tipo [name, lastName, year]
 * devuelva siempre el año del usuario
 * @param {*} year
 */
const getYearFromArray = ([, , year]) => {
  return year;
}


/**
 * Modificar la función para que, dada un objeto de tipo user,
 * tan sólo acceda al atributo
 *  - name
 *  - lastName
 *  - year
 *
 *  Además, si el atributoX (donde X son los atributos de arriba) no estee definido,
 *  debe devolver atributoX: 'Unknown'
 *
 *  Ej: getUserName({name: 'Jose'}) // -> {name: 'Jose', lastName: 'Unknown', year: 'Unknown'}
 *
 * Nota: cualquier otro atributo, debe omitirlo.
 *
 * @param {*} userObject
 */
const getUserData = ({
  name = 'Unknown',
  lastName = 'Unknown',
  year = 'Unknown'
}) => {
  return {
    name,
    lastName,
    year,
  }
}




// UNCOMMENT FOR SERVER SIDE TEST
module.exports = {
  business: business,
  getBusinessExtra: getBusinessExtra,
  getYearFromArray: getYearFromArray,
  getUserData: getUserData,
};