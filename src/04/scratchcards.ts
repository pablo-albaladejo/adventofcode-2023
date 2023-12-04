export class Card {
  winning: number[];
  numbers: number[];

  constructor(winning: number[], numbers: number[]) {
    this.winning = winning;
    this.numbers = numbers;
  }

  checkWinning(): number {
    return this.numbers.reduce(
      (acc, number) => (this.winning.includes(number) ? acc++ : acc),
      0
    );
  }
}

export class Scratchcards {
  cards: Card[];
  constructor(cards: Card[]) {
    this.cards = cards;
  }
}
