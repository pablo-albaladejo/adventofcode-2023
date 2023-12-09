import { ReportHistory } from '../../history';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(histories: ReportHistory[]): number {
    return 0;
  }
}
