const getLastElement = (array: any[]) => {
  return array[array.length - 1];
};

export class ReportHistory {
  private history: number[];

  constructor(history: number[]) {
    this.history = history;
  }

  extrapolate(): number {
    const extrapolated: number[][] = [];
    let level = 0;
    extrapolated[level] = Array.from(this.history);

    do {
      level++;
      extrapolated[level] = [];
      for (let i = 1; i < extrapolated[level - 1].length; i++) {
        extrapolated[level].push(
          extrapolated[level - 1][i] - extrapolated[level - 1][i - 1]
        );
      }
    } while (!extrapolated[level].every((item) => item === 0));

    extrapolated[level].push(0);
    do {
      level--;
      const leftElement = getLastElement(extrapolated[level]);
      const belowElement = getLastElement(extrapolated[level + 1]);
      extrapolated[level].push(leftElement + belowElement);
    } while (level > 0);

    return extrapolated[0][extrapolated[0].length - 1];
  }
}
