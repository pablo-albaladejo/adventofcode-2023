import { Race, RaceStrategy } from '../../race';
import { Strategy } from '../strategy.interface';

export const getWinnerStrategies = (race: Race): RaceStrategy[] => {
  return race
    .getStrategies()
    .filter((strategy) => strategy.getDistance() > race.distance);
};

export class SimpleStrategy implements Strategy {
  solve(races: Race[]): number {
    return races.reduce(
      (acc, race) => getWinnerStrategies(race).length * acc,
      1
    );
  }
}
