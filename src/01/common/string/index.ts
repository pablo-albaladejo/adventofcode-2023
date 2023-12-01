export const filterNonDigitsInString = (str: string): string => {
  return str.replace(/\D/g, '');
};
