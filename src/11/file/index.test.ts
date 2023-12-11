import { loadCosmos } from '.';
import path from 'path';
import { Cosmos } from '../cosmos';

const cosmos1 = new Cosmos();

describe('file', () => {
  test('loadCosmos', () => {
    expect(loadCosmos(path.join(__dirname, '../fixtures/example.txt'))).toEqual(
      cosmos1
    );
  });
});
