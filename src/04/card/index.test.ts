import { Card } from '.';
import { loadCards } from '../common/file';

describe('Card', () => {
  test('checkWinning', () => {
    const example: Card[] = loadCards('src/04/fixtures/example.txt');

    expect(example[0].checkWinning()).toBe(4);
    expect(example[1].checkWinning()).toBe(2);
    expect(example[2].checkWinning()).toBe(2);
    expect(example[3].checkWinning()).toBe(1);
    expect(example[4].checkWinning()).toBe(0);
    expect(example[5].checkWinning()).toBe(0);
  });

  describe('copies', () => {
    const card = new Card([], []);
    test('getCopies', () => {
      expect(card.getCopies()).toEqual(1);
    });

    test('addCopy', () => {
      expect(card.addCopy()).toEqual(2);
      expect(card.addCopy()).toEqual(3);
      expect(card.addCopy(2)).toEqual(5);
    });
  });
});
