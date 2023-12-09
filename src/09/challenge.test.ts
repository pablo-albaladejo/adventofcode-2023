import path from 'path';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { AdvancedStrategy } from './strategy/advanced/advanced-strategy';
import { loadHistories } from './file';
import { ReportHistory } from './history';
import { Challenge } from './challenge';

const example: ReportHistory[] = loadHistories(
  path.join(__dirname, './fixtures/example.txt')
);
const input: ReportHistory[] = loadHistories(
  path.join(__dirname, './fixtures/input.txt')
);

const simpleStrategy = new SimpleStrategy();
const advancedStrategy = new AdvancedStrategy();

describe('Challenge', () => {
  describe('Simple Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(example, simpleStrategy);
      expect(challenge.solve()).toBe(114);
    });

    test('Input solution', () => {
      const challenge = new Challenge(input, simpleStrategy);
      expect(challenge.solve()).toBe(1_757_008_019);
    });
  });

  describe('Advanced Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(example, advancedStrategy);
      expect(challenge.solve()).toBe(2);
    });

    test('Input solution', () => {
      const challenge = new Challenge(input, advancedStrategy);
      expect(challenge.solve()).toBe(995);
    });
  });
});
