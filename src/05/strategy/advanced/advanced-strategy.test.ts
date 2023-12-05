import { AlmanacMap, loadParts } from '../../file';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: AlmanacMap = loadParts(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {});
});
