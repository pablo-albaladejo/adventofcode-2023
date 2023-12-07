import { Hand } from '../hand';

export interface Strategy {
  solve(hands: Hand[]): number;
}