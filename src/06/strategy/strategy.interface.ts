import { Race } from '../race';

export interface Strategy {
  solve(race: Race): number;
}