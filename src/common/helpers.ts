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

export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);
export const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
export const calculateLCM = (numbers: number[]): number => {
  return numbers.reduce((acc, num) => lcm(acc, num), numbers[0]);
};

export const getPairs = (elements: any[]) => {
  const pairs: [any, any][] = [];

  for (let i = 0; i < elements.length - 1; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      pairs.push([elements[i], elements[j]]);
    }
  }

  return pairs;
};
