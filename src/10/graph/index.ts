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
    const visited: GraphNodeKey[] = [];
    const start: GraphNodeKey = this.getNode(this.start!)!.key;
    this.dfs(start, visited);

    for (const node of this.nodes) {
      if (!visited.some((visitedNode) => visitedNode.equals(node.key))) {
        this.removeNode(node.key);
      }
    }
  }
}
