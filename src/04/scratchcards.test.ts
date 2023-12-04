import { loadCards } from './common/file';
import path from 'path';
import { Scratchcards } from './scratchcards';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { Card } from './card';
import { AdvancedStrategy } from './strategy/advanced/advanced-strategy';

const example: Card[] = loadCards(
  path.join(__dirname, './fixtures/example.txt')
);
const input: Card[] = loadCards(path.join(__dirname, './fixtures/input.txt'));

const simpleStrategy = new SimpleStrategy();
const advancedStrategy = new AdvancedStrategy();

describe('Solutions', () => {
  describe('Simple strategy', () => {
    test('Example solution', () => {
      const scratchcards = new Scratchcards(example, simpleStrategy);
      expect(scratchcards.solution()).toBe(13);
    });

    test('Input solution', () => {
      const scratchcards = new Scratchcards(input, simpleStrategy);
      expect(scratchcards.solution()).toBe(18_519);
    });
  });

  describe('Advanced strategy', () => {
    test('Example solution', () => {
      const scratchcards = new Scratchcards(example, advancedStrategy);
      expect(scratchcards.solution()).toBe(30);
    });

    test('Input solution', () => {
      const scratchcards = new Scratchcards(input, advancedStrategy);
      expect(scratchcards.solution()).toBe(11787590);
    });
  });
});
