import { loadCosmos } from '../../file';
import { Cosmos } from '../../cosmos';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: Cosmos = loadCosmos(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {});
});
