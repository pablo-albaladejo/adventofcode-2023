export const findNumbersInString = (line: string): string[] => {
  const numbersInLine: string[] | null = line.match(/\d+/g);
  return numbersInLine || [];
};

export const findNumbersInStringAsNumber = (line: string): number[] => {
  const numbersInLine: string[] = findNumbersInString(line);
  return numbersInLine.map(Number);
};

const concatenateNumbers = (a: number, b: number): number => {
  return Number(`${a}${b}`);
};

export const calibrationValue = (line: string): number => {
  const numbersArr: number[] = findNumbersInStringAsNumber(line);
  if (numbersArr.length === 0) return 0;
  if (numbersArr.length === 1)
    return concatenateNumbers(numbersArr[0], numbersArr[0]);
  return concatenateNumbers(numbersArr[0], numbersArr[numbersArr.length - 1]);
};
