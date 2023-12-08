import { CammelMap } from '../map';

export interface Strategy {
  solve(map: CammelMap): number;
}