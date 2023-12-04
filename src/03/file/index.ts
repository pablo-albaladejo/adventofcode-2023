import { readLinesFromTextFile } from '../../helpers';
import { Part } from '../part';

export const lineToPart = (line: string): Part => {
  return new Part();
};

export const loadParts = (filePath: string): Part[] => {
  const lines = readLinesFromTextFile(filePath);
  console.log(`Loaded ${lines.length} lines from ${filePath}`);
  return lines.map((line) => lineToPart(line));
};
