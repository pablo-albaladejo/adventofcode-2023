export const findNumbersInString = (line: string): string[] => {
  const numbersInLine: string[] | null = line.match(/\d+/g);
  return numbersInLine || [];
};

export const findNumbersInStringAsNumber = (line: string): number[] => {
  const numbersInLine: string[] = findNumbersInString(line);
  return numbersInLine.map(Number);
};
