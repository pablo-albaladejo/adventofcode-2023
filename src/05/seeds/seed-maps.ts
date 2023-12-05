export class SeedMapRange {
  destination: number;
  source: number;
  length: number;
  constructor(destination: number, source: number, length: number) {
    this.destination = destination;
    this.source = source;
    this.length = length;
  }
  getDestinationMap(origin: number): number | undefined {
    const isInRange =
      origin >= this.source && origin < this.source + this.length;
    if (!isInRange) return undefined;
    return origin - this.source + this.destination;
  }
}

export class SeedMap {
  ranges: SeedMapRange[];

  constructor(ranges: SeedMapRange[]) {
    this.ranges = ranges;
  }

  map(origin: number): number {
    for (const range of this.ranges) {
      const result = range.getDestinationMap(origin);
      if (result) {
        return result;
      }
    }
    return origin;
  }
}
