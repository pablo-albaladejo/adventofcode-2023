import { loadHistories } from '.';
import path from 'path';
import { ReportHistory } from '../history';

const history1 = new ReportHistory([0, 3, 6, 9, 12, 15]);
const history2 = new ReportHistory([1, 3, 6, 10, 15, 21]);
const history3 = new ReportHistory([10, 13, 16, 21, 30, 45]);

describe('file', () => {
  test('loadHistories', () => {
    expect(
      loadHistories(path.join(__dirname, '../fixtures/example.txt'))
    ).toEqual([history1, history2, history3]);
  });
});
