import { Graph, GraphNode, GraphNodeKey } from '../../common/graph';
export class Position extends GraphNodeKey {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  equals(other: Position) {
    return this.x == other.x && this.y == other.y;
  }
}

export class PipesGraph extends Graph {
  private start?: Position;

  constructor() {
    super();
  }

  setStart(start: Position) {
    this.addNode(new GraphNode(start));
    this.start = start;
  }
  getStart(): GraphNode | undefined {
    return this.start && this.getNode(this.start);
  }
  getSize(): number {
    return this.nodes.length;
  }

  clean() {
    if (this.start) this.removeUnconnected(this.start);
  }

  getPath(startKey: GraphNodeKey): Position[] {
    const path: Position[] = [];
    this.dfsVisited(startKey, path);
    return path;
  }

  calculateDistancesFromStart(): number {
    return this.getPath(this.start!).length / 2;
  }
}
