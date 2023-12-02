import { Game, Cubes } from '../../game';
import { CubesStrategy } from '../cubes-strategy.interface';

export class SimpleCubesStrategy implements CubesStrategy {
  solution(games: Game[], constrain: Cubes): number {
    return games.reduce(
      (acc, game, index) =>
        game.isPossible(constrain) ? acc + index + 1 : acc,
      0
    );
  }
}
