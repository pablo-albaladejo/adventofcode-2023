import { Game, Cubes, GameSet } from '../../game';
import { CubesStrategy } from '../cubes-strategy.interface';

const isPossibleSet = (set: GameSet, constrain: Cubes): boolean => {
  return (
    set.red <= constrain.red &&
    set.green <= constrain.green &&
    set.blue <= constrain.blue
  );
};

export const isPossibleGame = (game: Game, constrain: Cubes): boolean => {
  return game.sets.every((set: GameSet) => isPossibleSet(set, constrain));
};

export class SimpleCubesStrategy implements CubesStrategy {
  solution(games: Game[], constrain: Cubes): number {
    return games.reduce(
      (acc, game, index) =>
        isPossibleGame(game, constrain) ? acc + index + 1 : acc,
      0
    );
  }
}
