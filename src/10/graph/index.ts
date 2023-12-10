export class Position {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class GraphNode {
  position: Position;
  edges: Position[];

  constructor(position: Position) {
    this.position = position;
    this.edges = [];
  }

  addEdge(position: Position) {
    if (this.edges.some((edge) => edge.x == position.x && edge.y == position.y))
      return;

    this.edges.push(position);
  }
}

export class Graph {
  private nodes: GraphNode[];
  private start: Position;

  constructor() {
    this.nodes = [];
    this.start = new Position(-1, -1);
  }

  addNode(node: GraphNode) {
    this.nodes.push(node);
  }

  addEdge(source: Position, destination: Position) {
    this.getNodeOrCreate(source).addEdge(destination);
    this.getNodeOrCreate(destination).addEdge(source);
  }

  getNode(position: Position): GraphNode | undefined {
    for (const node of this.nodes) {
      if (node.position.x === position.x && node.position.y === position.y) {
        return node;
      }
    }
    return undefined;
  }

  getNodeOrCreate(position: Position): GraphNode {
    let node = this.getNode(position);
    if (node) return node;

    node = new GraphNode(position);
    this.addNode(node);
    return node;
  }

  setStart(start: Position) {
    this.start = start;
  }
}
