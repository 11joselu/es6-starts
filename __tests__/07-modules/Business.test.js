import Business from '../../07-modules/exercise/utils-functions';

test('Debe importar la clase Business', () => {
  const business = new Business();

  expect(business).toBeInstanceOf(Business);
});
