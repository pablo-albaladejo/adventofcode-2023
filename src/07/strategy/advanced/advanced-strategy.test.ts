import { loadHands } from '../../file';
import { Hand } from '../../hand';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: Hand[] = loadHands(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {
    expect(advancedStrategy.solve(example)).toBe(5905);
  });
});
