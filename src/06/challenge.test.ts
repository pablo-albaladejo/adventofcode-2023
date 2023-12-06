import path from 'path';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { loadRace, loadRaces } from './file';
import { Race } from './race';
import { Challenge } from './challenge';

const exampleRaces: Race[] = loadRaces(
  path.join(__dirname, './fixtures/example.txt')
);
const inputRaces: Race[] = loadRaces(
  path.join(__dirname, './fixtures/input.txt')
);

const exampleRace: Race = loadRace(
  path.join(__dirname, './fixtures/example.txt')
);
const inputRace: Race = loadRace(path.join(__dirname, './fixtures/input.txt'));

const simpleStrategy = new SimpleStrategy();

describe('Challenge', () => {
  describe('Simple Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(exampleRaces, simpleStrategy);
      expect(challenge.solve()).toBe(288);
    });

    test('Input solution', () => {
      const challenge = new Challenge(inputRaces, simpleStrategy);
      expect(challenge.solve()).toBe(1_312_850);
    });
  });

  describe('Advanced Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge([exampleRace], simpleStrategy);
      expect(challenge.solve()).toBe(71_503);
    });

    test('Input solution', () => {
      const challenge = new Challenge([inputRace], simpleStrategy);
      expect(challenge.solve()).toBe(36_749_103);
    });
  });
});
