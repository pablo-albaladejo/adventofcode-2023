import { loadPartNumbers } from '../../file';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: number[] = loadPartNumbers(
  path.join(__dirname, '../../fixtures/example.txt')
);
const input: number[] = loadPartNumbers(
  path.join(__dirname, '../../fixtures/input.txt')
);

const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {
    expect(simpleStrategy.solve(example)).toBe(4361);
  });

  test('Input values', () => {
    expect(simpleStrategy.solve(input)).toBe(514_969);
  });
});
