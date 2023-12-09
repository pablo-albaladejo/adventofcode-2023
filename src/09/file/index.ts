import { readLinesFromTextFile } from '../../helpers';
import { ReportHistory } from '../history';

export const lineToHistory = (line: string): ReportHistory => {
  return new ReportHistory();
};

export const loadHistories = (filePath: string): ReportHistory[] => {
  const lines = readLinesFromTextFile(filePath);
  return lines.map((line) => lineToHistory(line));
};
