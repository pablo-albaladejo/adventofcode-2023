import { loadHands } from '../../file';
import { Hand } from '../../hand';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: Hand[] = loadHands(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {});
});
