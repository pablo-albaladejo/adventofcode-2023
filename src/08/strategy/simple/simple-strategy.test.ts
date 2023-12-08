import { loadCammelMap } from '../../file';
import { CammelMap } from '../../map';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: CammelMap = loadCammelMap(
  path.join(__dirname, '../../fixtures/example.txt')
);
const example2: CammelMap = loadCammelMap(
  path.join(__dirname, '../../fixtures/example2.txt')
);

const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {
    expect(simpleStrategy.solve(example)).toBe(2);
    expect(simpleStrategy.solve(example2)).toBe(6);
  });
});
