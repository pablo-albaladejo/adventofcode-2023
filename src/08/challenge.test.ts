import path from 'path';
import { SimpleStrategy } from './strategy/simple/simple-strategy';
import { AdvancedStrategy } from './strategy/advanced/advanced-strategy';
import { loadCammelMap } from './file';
import { CammelMap } from './map';
import { Challenge } from './challenge';

const example: CammelMap = loadCammelMap(
  path.join(__dirname, './fixtures/example.txt')
);
const input: CammelMap = loadCammelMap(
  path.join(__dirname, './fixtures/input.txt')
);

const simpleStrategy = new SimpleStrategy();
const advancedStrategy = new AdvancedStrategy();

describe('Challenge', () => {
  describe('Simple Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(example, simpleStrategy);
      expect(challenge.solve()).toBe(2);
    });

    test('Input solution', () => {
      const challenge = new Challenge(input, simpleStrategy);
      expect(challenge.solve()).toBe(11_567);
    });
  });

  /* describe('Advanced Strategy', () => {
    test('Example solution', () => {
      const challenge = new Challenge(example, advancedStrategy);
      expect(challenge.solve());
    });

    test('Input solution', () => {
      const challenge = new Challenge(input, advancedStrategy);
      expect(challenge.solve());
    });
  });*/
});
