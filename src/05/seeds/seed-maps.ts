export class SeedMapRange {
  destination: number;
  source: number;
  length: number;
  constructor(destination: number, source: number, length: number) {
    this.destination = destination;
    this.source = source;
    this.length = length;
  }
}

export class SeedMap {
  ranges: SeedMapRange[];

  constructor(ranges: SeedMapRange[]) {
    this.ranges = ranges;
  }
}
