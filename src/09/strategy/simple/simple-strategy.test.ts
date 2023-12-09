import { loadHistories } from '../../file';
import { ReportHistory } from '../../history';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: ReportHistory[] = loadHistories(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {
    expect(simpleStrategy.solve(example)).toEqual(114);
  });
});
