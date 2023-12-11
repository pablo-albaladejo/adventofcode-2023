export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  equals(other: Point) {
    return this.x == other.x && this.y == other.y;
  }
}

export const rayCasting = (point: Point, polygon: Point[]): boolean => {
  const { x, y } = point;
  const n = polygon.length;
  let inside = false;

  if (polygon.some((item) => item.x === point.x && item.y === point.y))
    return true;

  for (let i = 0; i < n; i++) {
    const { x: x1, y: y1 } = polygon[i];
    const { x: x2, y: y2 } = polygon[(i + 1) % n];

    if (
      ((y1 <= y && y < y2) || (y2 <= y && y < y1)) &&
      x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1
    ) {
      inside = !inside;
    }
  }

  return inside;
};
