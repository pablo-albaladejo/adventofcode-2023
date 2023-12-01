const concatenateDigits = (a: string, b: string): number => {
  return Number(`${a}${b}`);
};

export const digitsCalibrationValue = (digits: string): number => {
  const digitsStr: string[] = digits.split('');
  if (digitsStr.length === 0) return 0;
  if (digitsStr.length === 1)
    return concatenateDigits(digitsStr[0], digitsStr[0]);
  return concatenateDigits(digitsStr[0], digitsStr[digitsStr.length - 1]);
};
