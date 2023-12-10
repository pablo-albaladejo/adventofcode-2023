import { loadGraph } from '../../file';
import { PipesGraph } from '../../graph';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: PipesGraph = loadGraph(
  path.join(__dirname, '../../fixtures/example2a.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {
    expect(simpleStrategy.solve(example)).toBe(8);
  });
});
