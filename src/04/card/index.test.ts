import { Card } from '.';
import { loadCards } from '../common/file';

const example: Card[] = loadCards('src/04/fixtures/example.txt');

describe('Card', () => {
  test('checkWinning', () => {
    expect(example[0].checkWinning()).toBe(4);
    expect(example[1].checkWinning()).toBe(2);
    expect(example[2].checkWinning()).toBe(2);
    expect(example[3].checkWinning()).toBe(1);
    expect(example[4].checkWinning()).toBe(0);
    expect(example[5].checkWinning()).toBe(0);
  });
});
