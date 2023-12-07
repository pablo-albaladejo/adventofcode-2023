import { Card, Hand, HandType, getHandType } from '.';

describe('Hand', () => {
  describe('getHandType', () => {
    const fiveOfAKind = [Card.Ace, Card.Ace, Card.Ace, Card.Ace, Card.Ace];
    const fourOfAKind = [Card.Ace, Card.Ace, Card.Eight, Card.Ace, Card.Ace];
    const fullHouse = [Card.Two, Card.Three, Card.Three, Card.Three, Card.Two];
    const threeOfAKind = [Card.Ten, Card.Ten, Card.Ten, Card.Nine, Card.Eight];
    const twoPair = [Card.Two, Card.Three, Card.Four, Card.Three, Card.Two];
    const onePair = [Card.Two, Card.Two, Card.Three, Card.Ace, Card.Four];
    const highCard = [Card.Two, Card.Three, Card.Four, Card.Five, Card.Six];

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
      const fiveOfAKind = [Card.Ace, Card.Ace, Card.Ace, Card.Ace, Card.Ace];
      const fourOfAKind = [Card.Ace, Card.Ace, Card.Eight, Card.Ace, Card.Ace];
      const fullHouse = [
        Card.Two,
        Card.Three,
        Card.Three,
        Card.Three,
        Card.Two,
      ];
      const fiveOfAKindHand = new Hand(fiveOfAKind, 0);
      const fourOfAKindHand = new Hand(fourOfAKind, 0);
      const fullHouseHand = new Hand(fullHouse, 0);

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
      const hand1 = new Hand(
        [Card.Three, Card.Three, Card.Three, Card.Three, Card.Two],
        0
      );
      const hand2 = new Hand(
        [Card.Two, Card.Ace, Card.Eight, Card.Ace, Card.Ace],
        0
      );
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

    describe('extended game', () => {
      test('32T3K => 32T3K', () => {
        const hand = new Hand(
          [Card.Three, Card.Two, Card.Ten, Card.Three, Card.King],
          0
        );

        expect(hand.getCards(true)).toEqual([
          Card.Three,
          Card.Two,
          Card.Ten,
          Card.Three,
          Card.King,
        ]);
      });

      test('T55J5 => T5555', () => {
        const hand = new Hand(
          [Card.Ten, Card.Five, Card.Five, Card.Jack, Card.Five],
          0
        );

        expect(hand.getCards(true)).toEqual([
          Card.Ten,
          Card.Five,
          Card.Five,
          Card.Five,
          Card.Five,
        ]);
      });

      test('KK677 => KK677', () => {
        const hand = new Hand(
          [Card.King, Card.King, Card.Six, Card.Seven, Card.Seven],
          0
        );

        expect(hand.getCards(true)).toEqual([
          Card.King,
          Card.King,
          Card.Six,
          Card.Seven,
          Card.Seven,
        ]);
      });

      test('KTJJT => KTTTT', () => {
        const hand = new Hand(
          [Card.King, Card.Ten, Card.Jack, Card.Jack, Card.Ten],
          0
        );
        expect(hand.getCards(true)).toEqual([
          Card.King,
          Card.Ten,
          Card.Ten,
          Card.Ten,
          Card.Ten,
        ]);
      });

      test('QQQJA => QQQQA', () => {
        const hand = new Hand(
          [Card.Queen, Card.Queen, Card.Queen, Card.Jack, Card.Ace],
          0
        );

        expect(hand.getCards(true)).toEqual([
          Card.Queen,
          Card.Queen,
          Card.Queen,
          Card.Queen,
          Card.Ace,
        ]);
      });

      test('22J33 => 22333', () => {
        const hand = new Hand(
          [Card.Two, Card.Two, Card.Jack, Card.Three, Card.Three],
          0
        );

        expect(hand.getCards(true)).toEqual([
          Card.Two,
          Card.Two,
          Card.Three,
          Card.Three,
          Card.Three,
        ]);
      });

      test('2345J => 23455', () => {
        const hand = new Hand(
          [Card.Two, Card.Three, Card.Four, Card.Five, Card.Jack],
          0
        );

        expect(hand.getCards(true)).toEqual([
          Card.Two,
          Card.Three,
          Card.Four,
          Card.Five,
          Card.Five,
        ]);
      });

      test('JJJJJ => AAAAA', () => {
        const hand = new Hand(
          [Card.Jack, Card.Jack, Card.Jack, Card.Jack, Card.Jack],
          0
        );

        expect(hand.getCards(true)).toEqual([
          Card.Ace,
          Card.Ace,
          Card.Ace,
          Card.Ace,
          Card.Ace,
        ]);
      });

      test('JJJJJ => JJJJJ', () => {
        const hand = new Hand(
          [Card.Jack, Card.Jack, Card.Jack, Card.Jack, Card.Jack],
          0
        );

        expect(hand.getCards()).toEqual([
          Card.Jack,
          Card.Jack,
          Card.Jack,
          Card.Jack,
          Card.Jack,
        ]);

        expect(hand.getCards(false)).toEqual([
          Card.Jack,
          Card.Jack,
          Card.Jack,
          Card.Jack,
          Card.Jack,
        ]);
      });
    });
  });
});
