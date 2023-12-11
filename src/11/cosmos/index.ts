import { Graph, GraphNode, GraphNodeKey } from '../../common/graph';
import { Point } from '../../common/polygon';

export class CosmosPosition extends Point implements GraphNodeKey {
  equals(other: CosmosPosition) {
    return this.x == other.x && this.y == other.y;
  }
}

class CosmosEdge extends Point implements GraphNodeKey {
  private value: number;

  constructor(x: number, y: number, value: number) {
    super(x, y);
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  equals(other: CosmosEdge): boolean {
    return this.x == other.x && this.y == other.y;
  }
}
export class CosmosNode extends GraphNode {
  key: CosmosPosition;
  edges: CosmosEdge[];

  constructor(key: CosmosPosition, edges: CosmosEdge[]) {
    super(key);
    this.key = key;
    this.edges = edges;
  }
}

export class Cosmos extends Graph {
  private nRows: number;
  private nCols: number;

  private spaceNodeKeys: CosmosPosition[];
  private galaxyNodeKeys: CosmosPosition[];

  constructor(nRows: number, nCols: number) {
    super();
    this.nRows = nRows;
    this.nCols = nCols;
    this.spaceNodeKeys = [];
    this.galaxyNodeKeys = [];
  }

  private addCosmosNode(
    postion: CosmosPosition,
    destinations: CosmosPosition[],
    cosmosArr: CosmosPosition[]
  ) {
    destinations.forEach((destination) => {
      this.addEdgeBidirectional(postion, destination);
    });
    cosmosArr.push(postion);
  }

  addGalaxyNode(postion: CosmosPosition, destinations: CosmosPosition[]) {
    this.addCosmosNode(postion, destinations, this.galaxyNodeKeys);
  }

  addSpaceNode(postion: CosmosPosition, destinations: CosmosPosition[]) {
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

  getSpaceNodeKeys(): CosmosPosition[] {
    return this.spaceNodeKeys;
  }
  getGalaxyNodeKeys(): CosmosPosition[] {
    return this.galaxyNodeKeys;
  }

  getGalaxyPairs(): [CosmosPosition, CosmosPosition][] {
    return this.getPairs(this.galaxyNodeKeys);
  }
  getPairs(cosmosArray: CosmosPosition[]) {
    const pairs: [CosmosPosition, CosmosPosition][] = [];

    for (let i = 0; i < cosmosArray.length - 1; i++) {
      for (let j = i + 1; j < cosmosArray.length; j++) {
        pairs.push([cosmosArray[i], cosmosArray[j]]);
      }
    }

    return pairs;
  }
}
