import { loadParts } from '../../file';
import { Part } from '../../part';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: Part[] = loadParts(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {});
});
