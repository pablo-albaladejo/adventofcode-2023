import { AlmanacMap } from '../file';

export interface Strategy {
  solve(almanacMap: AlmanacMap): number;
}