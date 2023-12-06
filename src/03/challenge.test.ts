import path from 'path';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { AdvancedStrategy } from './strategy/advanced/advanced-strategy';
import { Challenge } from './challenge';
import { loadPartNumbers } from './file';

const example: number[] = loadPartNumbers(
  path.join(__dirname, './fixtures/example.txt')
);
const input: number[] = loadPartNumbers(
  path.join(__dirname, './fixtures/input.txt')
);

const simpleStrategy = new SimpleStrategy();
const advancedStrategy = new AdvancedStrategy();

describe('Challenge', () => {
  describe('Simple Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(example, simpleStrategy);
      expect(challenge.solve()).toBe(4361);
    });

    test('Input solution', () => {
      const challenge = new Challenge(input, simpleStrategy);
      expect(challenge.solve()).toBe(514_969);
    });
  });

  describe('Advanced Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(example, advancedStrategy);
      expect(challenge.solve());
    });

    test('Input solution', () => {
      const challenge = new Challenge(input, advancedStrategy);
      expect(challenge.solve());
    });
  });
});
