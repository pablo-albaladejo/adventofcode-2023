import { Graph, GraphNode, GraphNodeKey } from '../../common/graph';
import { Point, rayCasting } from '../../common/polygon';
export class PipePosition extends Point implements GraphNodeKey {
  equals(other: PipePosition) {
    return this.x == other.x && this.y == other.y;
  }
}

export class PipesGraph extends Graph {
  private start?: PipePosition;
  private nRows: number;
  private nCols: number;
  constructor(nRows: number, nCols: number) {
    super();
    this.nRows = nRows;
    this.nCols = nCols;
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

  calculateInnerPoints(): number {
    const path: PipePosition[] = this.getPath(this.start!);
    let innerPoints = 0;

    for (let i = 0; i < this.nRows; i++) {
      for (let j = 0; j < this.nCols; j++) {
        rayCasting(new PipePosition(i, j), path) && innerPoints++;
      }
    }
    return innerPoints - path.length;
  }
}
