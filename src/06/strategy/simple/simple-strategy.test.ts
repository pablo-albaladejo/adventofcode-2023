import { loadRaces } from '../../file';
import { Race } from '../../race';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: Race[] = loadRaces(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {
    expect(simpleStrategy.solve(example)).toBe(288);
  });
});
