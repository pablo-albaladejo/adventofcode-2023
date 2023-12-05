import * as fs from 'fs';

export const readLinesFromTextFile = (filePath: string): string[] => {
  return readByDelimeterFromTextFile(filePath, '\n');
};

export const readByDelimeterFromTextFile = (
  filePath: string,
  delimeter: string
): string[] => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split(delimeter).map((line) => line.trim());
  } catch (error) {
    console.error('Error reading the file:', error);
    return [];
  }
};
