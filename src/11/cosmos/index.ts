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
  setValue(value: number) {
    this.value = value;
  }
}

export class CosmosNode {
  point: Point;
  edges: CosmosEdge[];

  constructor(point: Point) {
    this.point = point;
    this.edges = [];
  }

  addEdge(edge: CosmosEdge) {
    if (this.edges.some((item) => item.equals(edge))) return;
    this.edges.push(edge);
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
      if (node.point.equals(source)) {
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

  private addEdgeBidirectional(source: CosmosEdge, destination: CosmosEdge) {
    this.getNodeOrCreate(source).addEdge(destination);
    this.getNodeOrCreate(destination).addEdge(source);
  }

  private addCosmosNode(
    postion: Point,
    destinations: Point[],
    cosmosArr: Point[]
  ) {
    destinations.forEach((destination) => {
      const edge1 = new CosmosEdge(postion);
      const edge2 = new CosmosEdge(destination);
      this.addEdgeBidirectional(edge1, edge2);
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

  getGalaxyPairs(): [Point, Point][] {
    return this.getPairs(this.galaxyNodeKeys);
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
}
