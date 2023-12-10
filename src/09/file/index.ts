import { readLinesFromTextFile } from '../../common/helpers';
import { ReportHistory } from '../history';

export const loadHistories = (filePath: string): ReportHistory[] => {
  const lines: string[] = readLinesFromTextFile(filePath);
  return lines.map(
    (line: string) => new ReportHistory(line.split(' ').map(Number))
  );
};
