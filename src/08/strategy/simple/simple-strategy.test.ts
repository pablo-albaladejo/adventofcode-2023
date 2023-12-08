import { loadCammelMap } from '../../file';
import { CammelMap } from '../../map';
import { SimpleStrategy } from './simple-strategy';
import path from 'path';

const example: CammelMap[] = loadCammelMap(
  path.join(__dirname, '../../fixtures/example.txt')
);
const simpleStrategy = new SimpleStrategy();

describe('SimpleStrategy', () => {
  test('Example values', () => {});
});
