const arrayOfWords = ['cucumber', 'tomato', 'avocado'];
const businessIds = [1, 30, 60, 21];

const delayedResponse = (cb) => {
  setTimeout(() => {
    cb()
  }, 1000);
}

/**
 * Escribe una función que utilice Promises cuyo objetivo será,
 * recibir un array de palabras y devolver un nuevo array con
 * las palabras en MAYUSCULAS.
 *
 * NOTA: Si una 'palabra' dentro del array NO ES de tipo STRING debe lanzar un error.
 * @param {*} array
 */
const makeAllCaps = (array = []) => {
  return array.map((word) => {
    return word.toUpperCase();
  });
}


/**
 * Should return a Promise
 * @param {*} callback
 */
const getBusinessId = (callback) => {
  const ids = businessIds;
  delayedResponse(() => {
    callback(ids);
  });
}


/**
 * Should return a Promise
 * @param {*} callback
 */
const getBusinessNameByIds = (ids, callback) => {
  const businessName = ids.map((id) => ({
    id,
    name: `Business-${id}`
  }));

  delayedResponse(() => {
    callback(businessName);
  });
}


/**
 * Should return a Promise
 * @param {*} callback
 */
const getExtendedBusinessData = (business, callback) => {
  const businessData = business.map((b) => ({
    ...b,
    createtionDate: Date.now(),
    updatedAt: Date.now(),
    userId: Date.now()
  }));

  delayedResponse(() => {
    callback(businessData);
  });
}


/**
 * Realiza los cambios necesarios para que este callback hell
 * para convertirlo a promesas y devolver el valor de businessData
 */
getBusinessId((ids) => {
  getBusinessNameByIds(ids, (business) => {
    getExtendedBusinessData(business, (businessData) => {
      return businessData;
    });
  });
});


// UNCOMMENT FOR SERVER SIDE TEST
/* module.exports = {
  arrayOfWords: arrayOfWords,
  businessIds: businessIds,
  makeAllCaps: makeAllCaps,
  getBusinessId: getBusinessId,
  getBusinessNameByIds: getBusinessNameByIds,
  getExtendedBusinessData: getExtendedBusinessData
}; */