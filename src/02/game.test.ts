import { CubeConundrum, Cubes, Game, GameSet } from './game';

describe('Cube Conundrum', () => {
  const constrain: Cubes = new Cubes(12, 13, 14);
  const game1 = new Game([
    new GameSet(4, 0, 3),
    new GameSet(1, 2, 6),
    new GameSet(0, 2, 0),
  ]);
  const game2 = new Game([
    new GameSet(0, 2, 1),
    new GameSet(1, 3, 4),
    new GameSet(0, 1, 1),
  ]);
  const game3 = new Game([
    new GameSet(20, 8, 6),
    new GameSet(4, 13, 5),
    new GameSet(1, 5, 0),
  ]);
  const game4 = new Game([
    new GameSet(3, 1, 6),
    new GameSet(6, 3, 0),
    new GameSet(14, 3, 15),
  ]);
  const game5 = new Game([new GameSet(6, 3, 1), new GameSet(1, 2, 2)]);
  describe('Possible games', () => {
    test('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', () => {
      expect(game1.isPossible(constrain)).toBe(true);
    });
    test('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', () => {
      expect(game2.isPossible(constrain)).toBe(true);
    });
    test('Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', () => {
      expect(game5.isPossible(constrain)).toBe(true);
    });
  });

  describe('Impossible games', () => {
    test('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', () => {
      expect(game3.isPossible(constrain)).toBe(false);
    });
    test('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', () => {
      expect(game4.isPossible(constrain)).toBe(false);
    });
  });

  describe('Solution', () => {
    it('calculates the example solution', () => {
      const cubeConundrum = new CubeConundrum(
        [game1, game2, game3, game4, game5],
        constrain
      );

      expect(cubeConundrum.solution()).toBe(8);
    });
  });
});
