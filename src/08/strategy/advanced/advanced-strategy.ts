import { CammelMap } from '../../map';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(map: CammelMap): number {
    throw new Error('Method not implemented.');
  }
}