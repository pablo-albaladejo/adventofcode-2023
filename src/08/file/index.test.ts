import { loadCammelMap } from '.';
import path from 'path';
import { CammelMap, Direction } from '../map';

const cammelMap = new CammelMap([Direction.L, Direction.L, Direction.R], {
  AAA: { [Direction.L]: 'BBB', [Direction.R]: 'BBB' },
  BBB: { [Direction.L]: 'AAA', [Direction.R]: 'ZZZ' },
  ZZZ: { [Direction.L]: 'ZZZ', [Direction.R]: 'ZZZ' },
});

describe('file', () => {
  test('loadCammelMap', () => {
    expect(
      loadCammelMap(path.join(__dirname, '../fixtures/example2.txt'))
    ).toEqual(cammelMap);
  });
});
