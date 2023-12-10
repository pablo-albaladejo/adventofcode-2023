import { Graph, GraphNode, GraphNodeKey } from '../../common/graph';
import { Point } from '../../common/polygon';
export class PipePosition extends Point implements GraphNodeKey {
  equals(other: PipePosition) {
    return this.x == other.x && this.y == other.y;
  }
}

export class PipesGraph extends Graph {
  private start?: PipePosition;

  constructor() {
    super();
  }

  setStart(start: PipePosition) {
    this.addNode(new GraphNode(start));
    this.start = start;
  }
  getStart(): GraphNode | undefined {
    return this.start && this.getNode(this.start);
  }

  clean() {
    if (this.start) this.removeUnconnected(this.start);
  }

  getPath(startKey: GraphNodeKey): PipePosition[] {
    const path: PipePosition[] = [];
    this.dfsVisited(startKey, path);
    return path;
  }

  calculateDistancesFromStart(): number {
    return this.getPath(this.start!).length / 2;
  }
}
