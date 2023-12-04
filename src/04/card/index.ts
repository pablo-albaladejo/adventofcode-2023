export class Card {
  winning: number[];
  numbers: number[];
  copies: number = 1;

  constructor(winning: number[], numbers: number[]) {
    this.winning = winning;
    this.numbers = numbers;
  }

  checkWinning(): number {
    return this.numbers.reduce(
      (acc, number) => (this.winning.includes(number) ? acc + 1 : acc),
      0
    );
  }

  getCopies(): number {
    return this.copies;
  }

  addCopy(amount: number = 1): number {
    this.copies += amount;
    return this.copies;
  }
}
