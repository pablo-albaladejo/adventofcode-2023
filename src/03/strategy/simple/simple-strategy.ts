import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(numbers: number[]): number {
    return numbers.reduce((acc, number) => acc + number, 0);
  }
}
