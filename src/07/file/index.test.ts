import path from 'path';
import { Card, Hand } from '../hand';
import { lineToHand, loadHands } from '.';

const hand1 = new Hand(
  [Card.Three, Card.Two, Card.Ten, Card.Three, Card.King],
  765
);
const hand2 = new Hand(
  [Card.Ten, Card.Five, Card.Five, Card.Jack, Card.Five],
  684
);
const hand3 = new Hand(
  [Card.King, Card.King, Card.Six, Card.Seven, Card.Seven],
  28
);
const hand4 = new Hand(
  [Card.King, Card.Ten, Card.Jack, Card.Jack, Card.Ten],
  220
);
const hand5 = new Hand(
  [Card.Queen, Card.Queen, Card.Queen, Card.Jack, Card.Ace],
  483
);

describe('file', () => {
  test('lineToHand', () => {
    expect(lineToHand('')).toEqual(hand1);
  });
  test('loadHands', () => {
    expect(loadHands(path.join(__dirname, '../fixtures/example.txt'))).toEqual([
      hand1,
      hand2,
      hand3,
      hand4,
      hand5,
    ]);
  });
});
