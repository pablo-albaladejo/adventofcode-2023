import { Point } from '../../common/polygon';

export class CosmosEdge extends Point {
  private value: number;
  constructor(point: Point, value: number = 1) {
    super(point.x, point.y);
    this.value = value;
  }
  getValue(): number {
    return this.value;
  }
  increaseValue(inc: number = 1): void {
    this.value += inc;
  }
  setValue(value: number) {
    this.value = value;
  }
}

export class CosmosNode {
  private point: Point;
  private edges: CosmosEdge[];

  constructor(point: Point) {
    this.point = point;
    this.edges = [];
  }

  addEdge(edge: CosmosEdge) {
    if (this.edges.some((item) => item.equals(edge))) return;
    this.edges.push(edge);
  }
  getEdgeTo(point: Point): CosmosEdge | undefined {
    return this.edges.find((item) => item.equals(point));
  }
  getPoint(): Point {
    return this.point;
  }

  getEdgeToPoint(point: Point): CosmosEdge | undefined {
    return this.edges.find((item) => item.equals(point));
  }
}
export class Cosmos {
  private nodes: CosmosNode[];

  private nRows: number;
  private nCols: number;

  private spaceNodeKeys: Point[];
  private galaxyNodeKeys: Point[];

  constructor(nRows: number, nCols: number) {
    this.nRows = nRows;
    this.nCols = nCols;
    this.spaceNodeKeys = [];
    this.galaxyNodeKeys = [];
    this.nodes = [];
  }

  getNode(source: Point): CosmosNode | undefined {
    for (const node of this.nodes) {
      if (node.getPoint().equals(source)) {
        return node;
      }
    }
    return undefined;
  }

  addNode(node: CosmosNode) {
    this.nodes.push(node);
  }

  protected getNodeOrCreate(key: Point): CosmosNode {
    let node = this.getNode(key);
    if (node) return node;

    node = new CosmosNode(key);
    this.addNode(node);
    return node;
  }

  private addEdgeBidirectional(source: Point, destination: Point) {
    const edge1 = new CosmosEdge(source);
    const edge2 = new CosmosEdge(destination);
    this.getNodeOrCreate(source).addEdge(edge2);
    this.getNodeOrCreate(destination).addEdge(edge1);
  }

  private addCosmosNode(
    postion: Point,
    destinations: Point[],
    cosmosArr: Point[]
  ) {
    destinations.forEach((destination) => {
      this.addEdgeBidirectional(postion, destination);
    });
    cosmosArr.push(postion);
  }

  addGalaxyNode(postion: Point, destinations: Point[]) {
    this.addCosmosNode(postion, destinations, this.galaxyNodeKeys);
  }

  addSpaceNode(postion: Point, destinations: Point[]) {
    this.addCosmosNode(postion, destinations, this.spaceNodeKeys);
  }

  getNNodes(): number {
    return this.nodes.length;
  }

  getNCols(): number {
    return this.nCols;
  }
  getNRows(): number {
    return this.nRows;
  }

  getSpaceNodeKeys(): Point[] {
    return this.spaceNodeKeys;
  }
  getGalaxyNodeKeys(): Point[] {
    return this.galaxyNodeKeys;
  }

  getPairs(cosmosArray: Point[]) {
    const pairs: [Point, Point][] = [];

    for (let i = 0; i < cosmosArray.length - 1; i++) {
      for (let j = i + 1; j < cosmosArray.length; j++) {
        pairs.push([cosmosArray[i], cosmosArray[j]]);
      }
    }

    return pairs;
  }

  getGalaxyPairs(): [Point, Point][] {
    return this.getPairs(this.galaxyNodeKeys);
  }

  emptyRowsAndColumns(): { rows: number[]; columns: number[] } {
    const rows = Array.from({ length: this.nRows }, (_, index) => index);
    const columns = Array.from({ length: this.nCols }, (_, index) => index);

    for (const point of this.galaxyNodeKeys) {
      const xPos = rows.indexOf(point.x);
      if (xPos >= 0) rows.splice(xPos, 1);

      const yPos = columns.indexOf(point.y);
      if (yPos >= 0) columns.splice(yPos, 1);
    }

    return { rows, columns };
  }

  expand() {
    const { rows, columns } = this.emptyRowsAndColumns();
    console.log(rows);
    for (const row of rows) {
      for (let i = 0; i < this.nCols; i++) {
        const point = new Point(row, i);
        if (row > 0) {
          const above = new Point(row - 1, i);
          this.getNode(above)?.getEdgeToPoint(point)?.increaseValue(1);
          this.getNode(point)?.getEdgeToPoint(above)?.increaseValue(1);
        }
        if (row < this.nRows) {
          const below = new Point(row + 1, i);
          this.getNode(below)?.getEdgeToPoint(point)?.increaseValue(1);
          this.getNode(point)?.getEdgeToPoint(below)?.increaseValue(1);
        }
      }
    }
    for (const column of columns) {
      for (let i = 0; i < this.nCols; i++) {
        const point = new Point(i, column);
        if (i > column) {
          const left = new Point(i, column - 1);
          this.getNode(left)?.getEdgeToPoint(point)?.increaseValue(1);
          this.getNode(point)?.getEdgeToPoint(left)?.increaseValue(1);
        }
        if (column < this.nCols) {
          const right = new Point(i, column + 1);
          this.getNode(right)?.getEdgeToPoint(point)?.increaseValue(1);
          this.getNode(point)?.getEdgeToPoint(right)?.increaseValue(1);
        }
      }
    }
  }
}
