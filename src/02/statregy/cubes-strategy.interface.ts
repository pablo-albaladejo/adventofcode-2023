import { Cubes, Game } from '../game';

export interface CubesStrategy {
  solution(games: Game[], ...args: any[]): number;
}
