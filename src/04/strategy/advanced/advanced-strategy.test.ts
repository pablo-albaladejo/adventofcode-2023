import { Card } from '../../card';
import { loadCards } from '../../common/file';
import { AdvancedStrategy } from './advanced-strategy';


const example: Card[] = loadCards('src/04/fixtures/example.txt');
const advancedStrategy = new AdvancedStrategy();

describe('AdvancedStrategy', () => {
  test('Example values', () => {
    expect(advancedStrategy.solution(example)).toBe(30);
  });
});
