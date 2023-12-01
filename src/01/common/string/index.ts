export const filterNonDigitsInString = (str: string): string => {
  return str.replace(/\D/g, '');
};

const startsWithAny = (
  inputString: string,
  prefixes: string[]
): string | null => {
  const regex = new RegExp(`^(${prefixes.join('|')})`);
  const result = regex.exec(inputString);
  if (result) return result[0];
  else return null;
};

export const replaceStringWithNumbers = (
  str: string,
  dictionary: { [key: string]: number }
): string => {
  const stringNumbers = Object.keys(dictionary);
  let subStr = str;
  let numberArr: string[] = [];

  while (subStr.length > 0) {
    if (Number(subStr[0])) {
      numberArr.push(subStr[0]);
    } else {
      const prefix = startsWithAny(subStr, stringNumbers);
      if (prefix) numberArr.push(dictionary[prefix].toString());
    }
    subStr = subStr.slice(1);
  }

  return numberArr.join('');
};
