import DEVELOPER from '../../07-modules/exercise/utils-functions';
import {
  sum,
  multiply,
  BUSINESS_NAME
} from '../../07-modules/exercise/utils-functions';

test('Debe importar el valor default del archivo', () => {
  expect(DEVELOPER).toEqual('developer');
});

test('Debe importar las functiones/constantes exportadas', () => {
  expect(sum).toBeDefined();
  expect(multiply).toBeDefined();
  expect(BUSINESS_NAME).toBeDefined();
});
