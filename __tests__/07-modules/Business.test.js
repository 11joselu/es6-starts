import Business from '../../07-modules/exercise/Business';

test('Debe importar la clase Business', () => {
  const business = new Business();

  expect(business).toBeInstanceOf(Business);
});
