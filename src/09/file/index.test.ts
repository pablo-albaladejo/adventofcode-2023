import { lineToHistory, loadHistories } from '.';
import path from 'path';
import { ReportHistory } from '../history';

const history1 = new ReportHistory();

describe('file', () => {
  test('lineToHistory', () => {
    expect(lineToHistory('')).toEqual(history1);
  });
  test('loadHistories', () => {
    expect(loadHistories(path.join(__dirname, '../fixtures/example.txt'))).toEqual(
      []
    );
  });
});
