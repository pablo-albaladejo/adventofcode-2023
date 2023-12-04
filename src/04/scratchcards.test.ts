import { loadCards } from './common/file';
import path from 'path';
import { Scratchcards } from './scratchcards';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { Card } from './card';

const exampleGames: Card[] = loadCards(
  path.join(__dirname, './fixtures/example.txt')
);

describe('Solutions', () => {
  describe('Simple strategy', () => {
    const scratchcards = new Scratchcards(exampleGames,new SimpleStrategy());

    test('Example solution', () => {
      expect(scratchcards.solution()).toBe(13);
    })
  })
})