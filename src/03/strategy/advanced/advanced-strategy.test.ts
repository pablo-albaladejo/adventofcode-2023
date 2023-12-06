import { loadParts } from '../../file';
import { Part } from '../../part';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: Part[] = loadParts(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {
  });
});
