export enum Card {
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

export const getHandType = (cards: Card[]): HandType => {
  const counts = new Map<Card, number>();
  for (const card of cards) {
    if (counts.has(card)) {
      counts.set(card, counts.get(card)! + 1);
    } else {
      counts.set(card, 1);
    }
  }

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

  compare(other: Hand): number {
    const type = getHandType(this.cards);
    const otherType = getHandType(other.cards);

    if (type > otherType) return 1;
    else if (type < otherType) return -1;

    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i] > other.cards[i]) return 1;
      if (this.cards[i] < other.cards[i]) return -1;
    }
    return 0;
  }
}
