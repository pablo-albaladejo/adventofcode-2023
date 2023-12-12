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

  protected getNodeOrCreate(key: GraphNodeKey): GraphNode {
    let node = this.getNode(key);
    if (node) return node;

    node = new GraphNode(key);
    this.addNode(node);
    return node;
  }

  protected removeNode(key: GraphNodeKey) {
    this.nodes = this.nodes.filter((node) => !node.key.equals(key));
    this.nodes.forEach((node) => {
      node.edges = node.edges.filter((edge) => !edge.equals(key));
    });
  }

  protected removeNodes(keys: GraphNodeKey[]) {
    keys.forEach((key) => this.removeNode(key));
  }

  protected dfsVisitedRecursive(v: GraphNodeKey, visited: GraphNodeKey[]) {
    visited.push(v);
    const node = this.getNode(v);

    if (node) {
      for (const neighbor of node.edges) {
        if (!visited.some((visitedNode) => visitedNode.equals(neighbor))) {
          this.dfsVisitedRecursive(neighbor, visited);
        }
      }
    }
  }

  protected dfsVisited(v: GraphNodeKey, visited: GraphNodeKey[]) {
    const stack: GraphNodeKey[] = [];
    stack.push(v);
  
    while (stack.length > 0) {
      const currentKey = stack.pop()!;
      const currentNode = this.getNode(currentKey);
  
      if (currentNode && !visited.some((visitedNode) => visitedNode.equals(currentKey))) {
        visited.push(currentKey);
  
        for (const neighbor of currentNode.edges) {
          if (!visited.some((visitedNode) => visitedNode.equals(neighbor))) {
            stack.push(neighbor);
          }
        }
      }
    }
  }

  protected bfsWithMaxDepth(startNodeKey: GraphNodeKey): number {
    const visited: GraphNodeKey[] = [];
    const queue: { nodeKey: GraphNodeKey; depth: number }[] = [];

    queue.push({ nodeKey: startNodeKey, depth: 0 });
    visited.push(startNodeKey);
    let maxDepth = 0;

    while (queue.length > 0) {
      const { nodeKey, depth } = queue.shift()!;
      const currentNode = this.getNode(nodeKey);

      if (currentNode) {
        maxDepth = Math.max(maxDepth, depth);

        for (const neighbor of currentNode.edges) {
          if (!visited.some((visitedNode) => visitedNode.equals(neighbor))) {
            visited.push(neighbor);

            queue.push({ nodeKey: neighbor, depth: depth + 1 });
          }
        }
      }
    }

    return maxDepth;
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

  removeUnconnected(startNodeKey: GraphNodeKey) {
    const visited: GraphNodeKey[] = [];
    this.dfsVisited(startNodeKey, visited);

    for (const node of this.nodes) {
      if (!visited.some((visitedNode) => visitedNode.equals(node.key))) {
        this.removeNode(node.key);
      }
    }
  }
}
