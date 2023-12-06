import { Race } from '../race';

export interface Strategy {
  solve(races: Race[]): number;
}