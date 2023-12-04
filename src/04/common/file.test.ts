import { Card } from '../scratchcards';
import { lineToCard, loadCards } from './file';

const card1 = new Card([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]);
const card2 = new Card([13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19]);
const card3 = new Card([1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1]);
const card4 = new Card([41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83]);
const card5 = new Card([87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36]);
const card6 = new Card([31, 18, 13, 56, 72], [74, 77, 10, 23, 35, 67, 36, 11]);

describe('loadCards', () => {
  test('lineToCard', () => {
    expect(
      lineToCard('Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53')
    ).toEqual(card1);

    expect(
      lineToCard('Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19')
    ).toEqual(card2);

    expect(
      lineToCard('Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1')
    ).toEqual(card3);

    expect(
      lineToCard('Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83')
    ).toEqual(card4);

    expect(
      lineToCard('Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36')
    ).toEqual(card5);

    expect(
      lineToCard('Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11')
    ).toEqual(card6);
  });

  test('loadCards', () => {
    expect(loadCards('src/04/fixtures/example.txt')).toEqual([
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
    ]);
  });
});
