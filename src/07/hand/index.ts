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

export class Hand {
  private cards: Card[];
  private bid: number;

  constructor(cards: Card[], bid: number) {
    this.cards = cards;
    this.bid = bid;
  }

  compare(other: Hand): number {
    return 0;
  }
}
