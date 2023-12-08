export const enum Direction {
  L = 'L',
  R = 'R'
}

export type Nodes = {
  [key: string]: { [key: string]: string }
}

export class CammelMap {
  private directions: Direction[];
  private nodes: Nodes;

  constructor(directions: Direction[], nodes: Nodes) {
    this.directions = directions;
    this.nodes = nodes;
  }
}