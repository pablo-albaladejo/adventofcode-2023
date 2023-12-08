export const enum Direction {
  L = 'L',
  R = 'R',
}

export type Node = { [key: string]: string };

export type Nodes = {
  [key: string]: Node;
};

export class CammelMap {
  private directions: Direction[];
  private nodes: Nodes;

  constructor(directions: Direction[], nodes: Nodes) {
    this.directions = directions;
    this.nodes = nodes;
  }

  getDirections(): Direction[] {
    return this.directions;
  }

  getNodes(): Nodes {
    return this.nodes;
  }

  getNode(key: string): Node {
    return this.nodes[key];
  }
}
