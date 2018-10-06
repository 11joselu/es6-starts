const {
  arrayOfWords,
  businessIds,
  makeAllCaps,
  getBusinessId,
  getBusinessNameByIds,
  getExtendedBusinessData,
} = require('../../05-promises/exercise/promises');

function isPromiseObject(obj) {
  return Promise.resolve(obj) == obj
}

test('`makeAllCaps` debe devolver un `Promise`', () => {
  const makeCaps = makeAllCaps(arrayOfWords);
  expect(isPromiseObject(makeCaps)).toBe(true);
});

test('`getBusinessId` debe devolver un `Promise`', () => {
  const businessId = getBusinessId([1, 2]);
  expect(isPromiseObject(businessId)).toBe(true);
});

test('`getBusinessNameByIds` debe devolver un `Promise`', () => {
  const businessName = getBusinessNameByIds([1, 2]);
  expect(isPromiseObject(businessName)).toBe(true);
});


test('`getExtendedBusinessData` debe devolver un `Promise`', () => {
  const businessData = getExtendedBusinessData([1, 2]);
  expect(isPromiseObject(businessData)).toBe(true);
});

test('Debe convertir las palabras en mayúsculas', async (done) => {
  const array = ['hola', 'adios'];
  const makeCaps = await makeAllCaps(array);
  const result = array.map((x) => x.toUpperCase());

  expect(makeCaps).toMatchObject(result);

  const newArray = ['hola', 1];
  expect(makeAllCaps(newArray)).rejects.toThrow();

  done();
});

test('Debe devolver un objeto businessExtended', async (done) => {
  const keys = [
    'id',
    'name',
    'createtionDate',
    'updatedAt',
    'userId',
  ];

  getBusinessId(businessIds)
    .then(getBusinessNameByIds)
    .then(getExtendedBusinessData)
    .then(results => {
      const result = results[0];
      const resultKeys = Object.keys(result).sort();

      expect(resultKeys).toMatchObject(keys.sort());

      done();
    })
    .catch(done);
});