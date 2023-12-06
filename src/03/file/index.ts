import { readLinesFromTextFile } from '../../helpers';

export class NumberInfo {
  value: number;
  start: number;
  end: number;

  constructor(value: number, start: number, end: number) {
    this.value = value;
    this.start = start;
    this.end = end;
  }
}

export const loadPartNumbers = (filePath: string): number[] => {
  const partNumbers: number[] = [];
  const lines = readLinesFromTextFile(filePath);

  for (const [index, line] of lines.entries()) {
    const numbers = extractNumbersInfo(line);
    for (const number of numbers) {
      if (isPartNumber(index, number.start, number.end, lines))
        partNumbers.push(number.value);
    }
  }

  return partNumbers;
};

export const extractNumbersInfo = (inputString: string): NumberInfo[] => {
  const numbersInfo: NumberInfo[] = [];
  let currentNumberStart: number | null = null;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (/\d/.test(char)) {
      if (currentNumberStart === null) {
        currentNumberStart = i;
      }
    } else if (currentNumberStart !== null) {
      const currentNumber = parseInt(
        inputString.slice(currentNumberStart, i),
        10
      );
      const numberInfo = new NumberInfo(
        currentNumber,
        currentNumberStart,
        i - 1
      );
      numbersInfo.push(numberInfo);
      currentNumberStart = null;
    }
  }

  if (currentNumberStart !== null) {
    const currentNumber = parseInt(inputString.slice(currentNumberStart), 10);
    const numberInfo = new NumberInfo(
      currentNumber,
      currentNumberStart,
      inputString.length - 1
    );
    numbersInfo.push(numberInfo);
  }

  return numbersInfo;
};

export const hasSymbols = (str: string): boolean => /[^0-9.]/.test(str);

export const getAdjajectStrings = (
  lineNumber: number,
  start: any,
  end: any,
  lines: string[]
): string[] => {
  const result: string[] = [];
  //left
  if (start > 1) result.push(lines[lineNumber][start - 1]);

  //diagonal left above
  if (start > 1 && lineNumber > 0)
    result.push(lines[lineNumber - 1][start - 1]);

  //above
  if (lineNumber > 0) result.push(lines[lineNumber - 1].slice(start, end + 1));

  //diagonal rigth above
  if (end < lines[lineNumber].length - 1 && lineNumber > 0)
    result.push(lines[lineNumber - 1][end + 1]);

  //right
  if (end < lines[lineNumber].length - 1)
    result.push(lines[lineNumber][end + 1]);

  //diagonal right below
  if (end < lines[lineNumber].length - 1 && lineNumber < lines.length - 1)
    result.push(lines[lineNumber + 1][end + 1]);

  //below
  if (lineNumber < lines.length - 1)
    result.push(lines[lineNumber + 1].slice(start, end + 1));

  //diagonal left below
  if (start > 1 && lineNumber < lines.length - 1)
    result.push(lines[lineNumber + 1][start - 1]);

  return result;
};

export const isPartNumber = (
  lineNumber: number,
  start: any,
  end: any,
  lines: string[]
): boolean => {
  return getAdjajectStrings(lineNumber, start, end, lines).some((str) =>
    hasSymbols(str)
  );
};
