import { loadPartNumbers } from '../../file';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: number[] = loadPartNumbers(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {});
});
