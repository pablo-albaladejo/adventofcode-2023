import { Card, HandType, getHandType } from '.';

describe('Hand', () => {
  describe('getHandType', () => {
    test('FiveOfAKind', () => {
      expect(
        getHandType([Card.Ace, Card.Ace, Card.Ace, Card.Ace, Card.Ace])
      ).toBe(HandType.FiveOfAKind);
    });
    test('FourOfAKind', () => {
      expect(
        getHandType([Card.Ace, Card.Ace, Card.Eight, Card.Ace, Card.Ace])
      ).toBe(HandType.FourOfAKind);
    });
    test('FullHouse', () => {
      expect(
        getHandType([Card.Two, Card.Three, Card.Three, Card.Three, Card.Two])
      ).toBe(HandType.FullHouse);
    });
    test('ThreeOfAKind', () => {
      expect(
        getHandType([Card.Ten, Card.Ten, Card.Ten, Card.Nine, Card.Eight])
      ).toBe(HandType.ThreeOfAKind);
    });
    test('TwoPair', () => {
      expect(
        getHandType([Card.Two, Card.Three, Card.Four, Card.Three, Card.Two])
      ).toBe(HandType.TwoPair);
    });
    test('OnePair', () => {
      expect(
        getHandType([Card.Two, Card.Two, Card.Three, Card.Ace, Card.Four])
      ).toBe(HandType.OnePair);
    });
    test('HighCard', () => {
      expect(
        getHandType([Card.Two, Card.Three, Card.Four, Card.Five, Card.Six])
      ).toBe(HandType.HighCard);
    });
  });
});
