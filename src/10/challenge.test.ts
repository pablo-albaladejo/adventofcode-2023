import path from 'path';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { AdvancedStrategy } from './strategy/advanced/advanced-strategy';
import { loadGraph } from './file';
import { PipesGraph } from './graph';
import { Challenge } from './challenge';

const example: PipesGraph = loadGraph(
  path.join(__dirname, './fixtures/example2a.txt')
);
const input: PipesGraph = loadGraph(path.join(__dirname, './fixtures/input.txt'));

const simpleStrategy = new SimpleStrategy();
const advancedStrategy = new AdvancedStrategy();

describe('Challenge', () => {
  describe('Simple Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(example, simpleStrategy);
      expect(challenge.solve()).toBe(8);
    });

    test('Input solution', () => {
      const challenge = new Challenge(input, simpleStrategy);
      expect(challenge.solve()).toBe(6956);
    });
  });

  describe('Advanced Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(example, advancedStrategy);
      expect(challenge.solve()).toBe(1);
    });

    test('Input solution', () => {
      const challenge = new Challenge(input, advancedStrategy);
      expect(challenge.solve()).toBe(455);
    });
  });
});
