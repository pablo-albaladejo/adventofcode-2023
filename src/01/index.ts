export const findDigitsInString = (line: string): string => {
  return line.replace(/\D/g, '');
};

const concatenateDigits = (a: string, b: string): number => {
  return Number(`${a}${b}`);
};

export const calibrationValue = (line: string): number => {
  const digitsStr: string[] = findDigitsInString(line).split('');
  if (digitsStr.length === 0) return 0;
  if (digitsStr.length === 1)
    return concatenateDigits(digitsStr[0], digitsStr[0]);
  return concatenateDigits(digitsStr[0], digitsStr[digitsStr.length - 1]);
};

export const solution = (lines: string[]): number => {
  return lines.reduce((acc, line) => acc + calibrationValue(line), 0);
};
