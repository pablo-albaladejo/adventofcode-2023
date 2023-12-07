export enum Card {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = 11,
  Queen = 12,
  King = 13,
  Ace = 14,
}

export enum HandType {
  HighCard = 0,
  OnePair = 1,
  TwoPair = 2,
  ThreeOfAKind = 3,
  FullHouse = 4,
  FourOfAKind = 5,
  FiveOfAKind = 6,
}

const getCardsWithCount = (
  counts: Map<Card, number>,
  count: number
): Card[] => {
  const cards: Card[] = [];
  for (const [card, countInMap] of counts) {
    if (countInMap === count) {
      cards.push(card);
    }
  }
  return cards;
};

const getCounts = (cards: Card[]): Map<Card, number> => {
  const counts = new Map<Card, number>();
  for (const card of cards) {
    if (counts.has(card)) {
      counts.set(card, counts.get(card)! + 1);
    } else {
      counts.set(card, 1);
    }
  }
  return counts;
};

export const getHandType = (cards: Card[]): HandType => {
  const counts = getCounts(cards);
  const pairs: Card[] = [];
  const threeOfAKinds: Card[] = [];
  const fourOfAKinds: Card[] = [];
  const fiveOfAKinds: Card[] = [];
  for (const [card, count] of counts) {
    switch (count) {
      case 2:
        pairs.push(card);
        break;
      case 3:
        threeOfAKinds.push(card);
        break;
      case 4:
        fourOfAKinds.push(card);
        break;
      case 5:
        fiveOfAKinds.push(card);
        break;
    }
  }

  if (fiveOfAKinds.length === 1) {
    return HandType.FiveOfAKind;
  }

  if (fourOfAKinds.length === 1) {
    return HandType.FourOfAKind;
  }

  if (pairs.length === 1 && threeOfAKinds.length === 1) {
    return HandType.FullHouse;
  }

  if (threeOfAKinds.length === 1) {
    return HandType.ThreeOfAKind;
  }

  if (pairs.length === 2) {
    return HandType.TwoPair;
  }

  if (pairs.length === 1) {
    return HandType.OnePair;
  }

  return HandType.HighCard;
};

const getNumber = (handType: HandType): number => {
  switch (handType) {
    case HandType.FourOfAKind:
      return 4;
    case HandType.FullHouse:
      return 3;
    case HandType.ThreeOfAKind:
      return 3;
    case HandType.TwoPair:
      return 2;
    case HandType.OnePair:
      return 2;
    default:
      return 1;
  }
};

const extendHand = (
  cards: Card[],
  countsMap: Map<Card, number>,
  handType: HandType
): Card[] => {
  const cardsWithCount: Card[] = getCardsWithCount(
    countsMap,
    getNumber(handType)
  )!;

  const extendedCard = cardsWithCount.reduce(
    (acc, card) => (card > acc ? card : acc),
    Card.One
  );
  return cards.map((card) => (card === Card.Jack ? extendedCard : card));
};

export class Hand {
  private cards: Card[];
  private bid: number;

  constructor(cards: Card[], bid: number) {
    this.cards = cards;
    this.bid = bid;
  }

  getBid(): number {
    return this.bid;
  }

  getCards(isExtended: boolean = false): Card[] {
    if (isExtended) {
      const nonJackCards = this.cards.filter((card) => card !== Card.Jack);
      if (nonJackCards.length === 0)
        return [Card.Ace, Card.Ace, Card.Ace, Card.Ace, Card.Ace];
      return extendHand(
        this.cards,
        getCounts(nonJackCards),
        getHandType(nonJackCards)
      );
    } else return this.cards;
  }

  compare(other: Hand, isExtended: boolean = false): number {
    const type = getHandType(this.getCards(isExtended));
    const otherType = getHandType(other.getCards(isExtended));

    if (type > otherType) return 1;
    else if (type < otherType) return -1;

    for (let i = 0; i < this.cards.length; i++) {
      const currentCard = isExtended
        ? this.cards[i] === Card.Jack
          ? Card.One
          : this.cards[i]
        : this.cards[i];

      const currentOtherCard = isExtended
        ? other.cards[i] === Card.Jack
          ? Card.One
          : other.cards[i]
        : other.cards[i];

      if (currentCard > currentOtherCard) return 1;
      if (currentCard < currentOtherCard) return -1;
    }
    return 0;
  }
}
