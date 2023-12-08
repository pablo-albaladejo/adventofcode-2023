import { loadCammelMap } from '../../file';
import { CammelMap } from '../../map';
import { AdvancedStrategy } from './advanced-strategy';
import path from 'path';

const example: CammelMap[] = loadCammelMap(
  path.join(__dirname, '../../fixtures/example.txt')
);
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {
  });
});
