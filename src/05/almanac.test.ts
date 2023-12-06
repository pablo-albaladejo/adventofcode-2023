import path from 'path';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { AdvancedStrategy } from './strategy/advanced/advanced-strategy';
import { AlmanacMap, loadParts } from './file';
import { Almanac } from './almanac';

const example: AlmanacMap = loadParts(
  path.join(__dirname, './fixtures/example.txt')
);
const input: AlmanacMap = loadParts(path.join(__dirname, './fixtures/input.txt'));

const simpleStrategy = new SimpleStrategy();
const advancedStrategy = new AdvancedStrategy();

describe('Almanac', () => {
  describe('Simple Strategy', () => {
    test('Example solution', () => {
      const challenge = new Almanac(example, simpleStrategy);
      expect(challenge.solve()).toBe(35);
    });

    test('Input solution', () => {
      const challenge = new Almanac(input, simpleStrategy);
      expect(challenge.solve()).toBe(340_994_526);
    });
  });

  describe('Advanced Strategy', () => {
    test('Example solution', () => {
      const challenge = new Almanac(example, advancedStrategy);
      expect(challenge.solve()).toBe(46);
    });

    test('Input solution', () => {
      const challenge = new Almanac(input, advancedStrategy);
      expect(challenge.solve()).toBe(52_210_644);
    });
  });
});
