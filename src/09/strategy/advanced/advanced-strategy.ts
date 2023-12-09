import { ReportHistory } from '../../history';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(histories: ReportHistory[]): number {
    return 0;
  }
}