import { ReportHistory } from '../../history';
import { Strategy } from '../strategy.interface';

export class AdvancedStrategy implements Strategy {
  solve(histories: ReportHistory[]): number {
    return histories.reduce((acc, history) => history.leftExtrapolate() + acc, 0);
  }
}