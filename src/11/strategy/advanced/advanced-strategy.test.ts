import { loadCosmos } from '../../file';
import { Cosmos } from '../../cosmos';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: Cosmos = loadCosmos(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {
  });
});
