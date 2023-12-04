import { loadCards } from './common/file';
import path from 'path';
import { Scratchcards } from './scratchcards';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { Card } from './card';

const example: Card[] = loadCards(
  path.join(__dirname, './fixtures/example.txt')
);
const input: Card[] = loadCards(path.join(__dirname, './fixtures/input.txt'));

describe('Solutions', () => {
  describe('Simple strategy', () => {
    test('Example solution', () => {
      const scratchcards = new Scratchcards(example, new SimpleStrategy());
      expect(scratchcards.solution()).toBe(13);
    });

    test('Input solution', () => {
      const scratchcards = new Scratchcards(input, new SimpleStrategy());
      expect(scratchcards.solution()).toBe(18_519);
    });
  });
});
