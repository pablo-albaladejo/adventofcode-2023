import { Game, Cubes } from '../../game';
import { CubesStrategy } from '../cubes-strategy.interface';

export const minPossible = (game: Game): Cubes => {
  const minCubes = new Cubes(0, 0, 0);
  game.sets.forEach((set) => {
    minCubes.red = Math.max(minCubes.red, set.red);
    minCubes.green = Math.max(minCubes.green, set.green);
    minCubes.blue = Math.max(minCubes.blue, set.blue);
  });
  return minCubes;
};

export const minCubesValue = (minCubes: Cubes): number => {
  return minCubes.red * minCubes.green * minCubes.blue;
};

export class AdvancedCubesStrategy implements CubesStrategy {
  solution(games: Game[]): number {
    return games.reduce(
      (acc, game) => minCubesValue(minPossible(game)) + acc,
      0
    );
  }
}
