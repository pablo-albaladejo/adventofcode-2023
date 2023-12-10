export abstract class GraphNodeKey {
  abstract equals(other: GraphNodeKey): boolean;
  toString(): string {
    return JSON.stringify(this, null, 2);
  }
}

export class GraphNode {
  key: GraphNodeKey;
  edges: GraphNodeKey[];

  constructor(key: GraphNodeKey) {
    this.key = key;
    this.edges = [];
  }

  addEdge(key: GraphNodeKey) {
    if (this.edges.some((edge) => edge.equals(key))) return;
    this.edges.push(key);
  }

  toString(): string {
    return JSON.stringify(this, null, 2);
  }
}

export class Graph {
  private nodes: GraphNode[];

  constructor() {
    this.nodes = [];
  }

  addNode(node: GraphNode) {
    this.nodes.push(node);
  }

  addEdge(source: GraphNodeKey, destination: GraphNodeKey) {
    this.getNodeOrCreate(source).addEdge(destination);
  }

  addEdgeBidirectional(source: GraphNodeKey, destination: GraphNodeKey) {
    this.getNodeOrCreate(source).addEdge(destination);
    this.getNodeOrCreate(destination).addEdge(source);
  }

  getNode(key: GraphNodeKey): GraphNode | undefined {
    for (const node of this.nodes) {
      if (node.key.equals(key)) {
        return node;
      }
    }
    return undefined;
  }

  getNodeOrCreate(key: GraphNodeKey): GraphNode {
    let node = this.getNode(key);
    if (node) return node;

    node = new GraphNode(key);
    this.addNode(node);
    return node;
  }

  toString(): string {
    return JSON.stringify(this, null, 2);
  }
}
