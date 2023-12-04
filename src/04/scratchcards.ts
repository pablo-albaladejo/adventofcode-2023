import { Card } from './card';
import { Strategy } from './strategy/strategy.interface';
export class Scratchcards {
  cards: Card[];
  strategy: Strategy;

  constructor(cards: Card[], strategy: Strategy) {
    this.cards = cards;
    this.strategy = strategy;
  }

  solution(): number {
    return this.strategy.solution(this.cards);
  }
}
