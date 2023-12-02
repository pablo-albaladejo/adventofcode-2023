import { Cubes, Game } from '../game';

export interface CubesStrategy {
  solution(games: Game[], constrain: Cubes): number;
}
