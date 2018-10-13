const {
  business,
  getBusinessExtra,
  getYearFromArray,
  getUserData,
} = require('../../04-destructuring-spread/exercise/destructuring-spread');


test('Debe mergear y generar un objeto businessExtra', () => {
  const newBusiness = {
    ...business
  };

  const businessExtra = getBusinessExtra(newBusiness, {
    id: 51,
    facebook: 'facebook',
    twitter: 'twitter',
    name: 'pepito',
  });

  expect(businessExtra).toMatchObject({
    ...newBusiness,
    facebook: 'facebook',
    twitter: 'twitter',
  });
});

test('Debe obtener el año de un array de tipo user', () => {
  const yearValue = 15;
  const year = getYearFromArray(['jose', 'cabrera', yearValue]);

  expect(year).toEqual(yearValue);
});


test('Debe obtener los datos del usuario: nombre, apellido y edad', () => {
  const user = {
    name: 'Jose',
    lastName: 'Cabrera',
    year: 26
  }
  const userData = getUserData(user);

  expect(userData).toMatchObject(user);

  user.test = 'test';
  delete user.name;
  delete user.lastName;

  const newUserData = getUserData(user);

  expect(newUserData).toMatchObject({
    name: 'Unknown',
    lastName: 'Unknown',
    year: 26
  });
});