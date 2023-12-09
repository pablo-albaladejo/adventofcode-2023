import { loadHistories } from '../../file';
import { ReportHistory } from '../../history';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: ReportHistory[] = loadHistories(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {
    expect(advancedStrategy.solve(example)).toEqual(2);
  });
});
