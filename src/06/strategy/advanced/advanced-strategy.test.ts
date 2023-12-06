import { loadRaces } from '../../file';
import { Race } from '../../race';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: Race[] = loadRaces(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {
  });
});
