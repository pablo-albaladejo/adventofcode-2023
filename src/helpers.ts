import * as fs from 'fs';

export const readLinesFromTextFile = (filePath: string): string[] => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split('\n').map((line) => line.trim());
  } catch (error) {
    console.error('Error reading the file:', error);
    return [];
  }
};
