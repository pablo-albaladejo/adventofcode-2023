import { loadGames } from './common/file';
import { CubeConundrum, Cubes, Game } from './game';
import path from 'path';
import { SimpleCubesStrategy } from './statregy/simple/simple-cubes-strategy';
import { AdvancedCubesStrategy } from './statregy/advanced/advanced-cubes-strategy';

const constrain: Cubes = new Cubes(12, 13, 14);

const exampleGames: Game[] = loadGames(
  path.join(__dirname, './fixtures/example.txt')
);
const testGames: Game[] = loadGames(
  path.join(__dirname, './fixtures/input.txt')
);

const simpleCubesStrategy = new SimpleCubesStrategy();
const advancedCubesStrategy = new AdvancedCubesStrategy();

describe('Solutions', () => {
  describe('Simple Solution', () => {
    test('Example solution', () => {
      const cubeConundrum = new CubeConundrum(
        exampleGames,
        constrain,
        simpleCubesStrategy
      );

      expect(cubeConundrum.solution()).toBe(8);
    });

    test('Test solution', () => {
      const cubeConundrum = new CubeConundrum(
        testGames,
        constrain,
        simpleCubesStrategy
      );

      expect(cubeConundrum.solution()).toBe(1853);
    });
  });

  describe('Advanced Solution', () => {
    test('Example solution', () => {
      const cubeConundrum = new CubeConundrum(
        exampleGames,
        constrain,
        advancedCubesStrategy
      );

      expect(cubeConundrum.solution()).toBe(2286);
    });

    test('Test solution', () => {
      const cubeConundrum = new CubeConundrum(
        testGames,
        constrain,
        advancedCubesStrategy
      );

      expect(cubeConundrum.solution()).toBe(72706);
    });
  });
});
