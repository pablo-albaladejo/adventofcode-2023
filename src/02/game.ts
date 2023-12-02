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
  isPossible(constrain: Cubes) {
    return (
      this.red <= constrain.red &&
      this.green <= constrain.green &&
      this.blue <= constrain.blue
    );
  }
}

export class Game {
  sets: GameSet[];
  constructor(sets: GameSet[]) {
    this.sets = sets;
  }
  isPossible(constrain: Cubes) {
    return this.sets.every((set) => set.isPossible(constrain));
  }
}
