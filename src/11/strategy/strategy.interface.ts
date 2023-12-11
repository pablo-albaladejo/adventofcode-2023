import { Cosmos } from '../cosmos';

export interface Strategy {
  solve(cosmos: Cosmos): number;
}