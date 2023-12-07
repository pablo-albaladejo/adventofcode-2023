import { Card, Hand, HandType, getHandType } from '.';

const fiveOfAKind = [Card.Ace, Card.Ace, Card.Ace, Card.Ace, Card.Ace];
const fourOfAKind = [Card.Ace, Card.Ace, Card.Eight, Card.Ace, Card.Ace];
const fullHouse = [Card.Two, Card.Three, Card.Three, Card.Three, Card.Two];
const threeOfAKind = [Card.Ten, Card.Ten, Card.Ten, Card.Nine, Card.Eight];
const twoPair = [Card.Two, Card.Three, Card.Four, Card.Three, Card.Two];
const onePair = [Card.Two, Card.Two, Card.Three, Card.Ace, Card.Four];
const highCard = [Card.Two, Card.Three, Card.Four, Card.Five, Card.Six];

const fiveOfAKindHand = new Hand(fiveOfAKind, 0);
const fourOfAKindHand = new Hand(fourOfAKind, 0);
const fullHouseHand = new Hand(fullHouse, 0);

const hand1 = new Hand(
  [Card.Three, Card.Three, Card.Three, Card.Three, Card.Two],
  0
);

const hand2 = new Hand([Card.Two, Card.Two, Card.Two, Card.Two, Card.Ace], 0);

describe('Hand', () => {
  describe('getHandType', () => {
    test('FiveOfAKind', () => {
      expect(getHandType(fiveOfAKind)).toBe(HandType.FiveOfAKind);
    });
    test('FourOfAKind', () => {
      expect(getHandType(fourOfAKind)).toBe(HandType.FourOfAKind);
    });
    test('FullHouse', () => {
      expect(getHandType(fullHouse)).toBe(HandType.FullHouse);
    });
    test('ThreeOfAKind', () => {
      expect(getHandType(threeOfAKind)).toBe(HandType.ThreeOfAKind);
    });
    test('TwoPair', () => {
      expect(getHandType(twoPair)).toBe(HandType.TwoPair);
    });
    test('OnePair', () => {
      expect(getHandType(onePair)).toBe(HandType.OnePair);
    });
    test('HighCard', () => {
      expect(getHandType(highCard)).toBe(HandType.HighCard);
    });
  });

  describe('compare hands', () => {
    describe('not equal types', () => {
      test('fiveOfAKind greater than fourOfAKind', () => {
        expect(fiveOfAKindHand.compare(fourOfAKindHand)).toBe(1);
      });
      test('fiveOfAKind lower than fourOfAKind', () => {
        expect(fourOfAKindHand.compare(fiveOfAKindHand)).toBe(-1);
      });

      test('fiveOfAKind greater than fullHouse', () => {
        expect(fiveOfAKindHand.compare(fullHouseHand)).toBe(1);
      });
      test('fiveOfAKind lower than fullHouse', () => {
        expect(fullHouseHand.compare(fiveOfAKindHand)).toBe(-1);
      });
    });

    describe('equal types', () => {
      test('33332 > 2AAAA', () => {
        expect(hand1.compare(hand2)).toBe(1);
      });

      test('2AAAA < 33332', () => {
        expect(hand2.compare(hand1)).toBe(-1);
      });

      test('33332 = 33332', () => {
        expect(hand1.compare(hand1)).toBe(0);
      });
    });
  });
});
