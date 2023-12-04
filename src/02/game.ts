import { CubesStrategy } from './statregy/cubes-strategy.interface';

export class Cubes {
  red: number;
  green: number;
  blue: number;

  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
}

export class GameSet extends Cubes {
  constructor(red: number, green: number, blue: number) {
    super(red, green, blue);
  }
}
export class Game {
  sets: GameSet[];
  constructor(sets: GameSet[]) {
    this.sets = sets;
  }
}

export class CubeConundrum {
  games: Game[];
  constrain: Cubes;
  strategy: CubesStrategy;

  constructor(games: Game[], constrain: Cubes, strategy: CubesStrategy) {
    this.games = games;
    this.constrain = constrain;
    this.strategy = strategy;
  }

  solution(): number {
    return this.strategy.solution(this.games, this.constrain);
  }
}
