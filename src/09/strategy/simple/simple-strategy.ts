import { ReportHistory } from '../../history';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(histories: ReportHistory[]): number {
    return histories.reduce((acc, history) => history.rigthExtrapolate() + acc, 0);
  }
}
