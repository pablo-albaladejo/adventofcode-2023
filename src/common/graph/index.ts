export abstract class GraphNodeKey {
  abstract equals(other: GraphNodeKey): boolean;
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
}

export class Graph {
  protected nodes: GraphNode[];

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

  dfs(v: GraphNodeKey, visited: GraphNodeKey[]) {
    visited.push(v);
    const node = this.getNode(v);

    if (node) {
      for (const neighbor of node.edges) {
        if (!visited.some((visitedNode) => visitedNode.equals(neighbor))) {
          this.dfs(neighbor, visited);
        }
      }
    }
  }

  removeNode(key: GraphNodeKey){
    this.nodes = this.nodes.filter((node) => !node.key.equals(key));
    this.nodes.forEach((node) => {
      node.edges = node.edges.filter((edge) => !edge.equals(key));
    } );
  }

  removeNodes(keys: GraphNodeKey[]){
    keys.forEach((key) => this.removeNode(key));
  }
}
