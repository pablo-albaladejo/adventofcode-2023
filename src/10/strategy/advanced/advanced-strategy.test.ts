import { loadGraph } from '../../file';
import { PipesGraph } from '../../graph';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: PipesGraph = loadGraph(
  path.join(__dirname, '../../fixtures/example6.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {
    expect(advancedStrategy.solve(example)).toBe(10);
  });
});
