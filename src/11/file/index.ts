import { readLinesFromTextFile } from '../../common/helpers';
import { Cosmos } from '../cosmos';

export const loadCosmos = (filePath: string): Cosmos => {
  const lines = readLinesFromTextFile(filePath);
  return new Cosmos();
};
