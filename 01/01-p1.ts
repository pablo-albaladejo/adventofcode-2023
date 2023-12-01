export const findNumbersInString = (line: string): string[] => {
  const numbersInLine: string[] | null = line.match(/\d+/g);
  return numbersInLine || [];
};
