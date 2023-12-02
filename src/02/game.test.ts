import { Cubes, Game, GameSet } from './game';

describe('Cube Conundrum', () => {
  const constrain: Cubes = new Cubes(12, 13, 14);

  describe('Possible games', () => {
    test('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', () => {
      const game = new Game([
        new GameSet(4, 0, 3),
        new GameSet(1, 2, 6),
        new GameSet(0, 2, 0),
      ]);
      expect(game.isPossible(constrain)).toBe(true);
    });
    test('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', () => {
      const game = new Game([
        new GameSet(0, 2, 1),
        new GameSet(1, 3, 4),
        new GameSet(0, 1, 1),
      ]);
      expect(game.isPossible(constrain)).toBe(true);
    });
    test('Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', () => {
      const game = new Game([new GameSet(6, 3, 1), new GameSet(1, 2, 2)]);
      expect(game.isPossible(constrain)).toBe(true);
    });
  });

  describe('Impossible games', () => {
    test('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', () => {
      const game = new Game([
        new GameSet(20, 8, 6),
        new GameSet(4, 13, 5),
        new GameSet(1, 5, 0),
      ]);
      expect(game.isPossible(constrain)).toBe(false);
    });
    test('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', () => {
      const game = new Game([
        new GameSet(3, 1, 6),
        new GameSet(6, 3, 0),
        new GameSet(14, 3, 15),
      ]);
      expect(game.isPossible(constrain)).toBe(false);
    });
  });
});
