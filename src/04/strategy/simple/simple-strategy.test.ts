import { Card } from '../../card';
import path from 'path';
import { loadCards } from '../../common/file';
import { SimpleStrategy } from './simple-strategy';

const example: Card[] = loadCards('src/04/fixtures/example.txt');
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {
    expect(simpleStrategy.solution(example)).toBe(13);
  });
});
