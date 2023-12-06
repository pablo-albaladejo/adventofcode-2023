import { Race, getWinnerStrategies } from '../../race';
import { Strategy } from '../strategy.interface';
export class SimpleStrategy implements Strategy {
  solve(races: Race[]): number {
    return races.reduce(
      (acc, race) => getWinnerStrategies(race).length * acc,
      1
    );
  }
}
