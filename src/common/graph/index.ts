import { PriorityQueue } from '../queue/priority-queue';

interface Equatable {
  equals(other: any): boolean;
}

type HashKey = string | number;

abstract class Hashable {
  abstract getKey(): HashKey;

  // DJB2
  hashCode(): number {
    const str = JSON.stringify(this);
    let hash = 5381;

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash * 33) ^ char;
    }
    return hash >>> 0;
  }
}

export class Edge extends Hashable {
  private key: HashKey;
  private origin: HashKey;
  private destination: HashKey;
  private weight: number;

  constructor(origin: HashKey, destination: HashKey, weight: number) {
    super();
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;
    this.key = this.hashCode();
  }

  getKey(): HashKey {
    return this.key;
  }

  equals(obj: any): boolean {
    return obj.toString() === this.toString();
  }

  toString(): string {
    return `Edge(${this.origin}, ${this.destination}, ${this.weight})`;
  }

  getOrigin(): HashKey {
    return this.origin;
  }

  setOrigin(origin: HashKey): void {
    this.origin = origin;
  }

  getDestination(): HashKey {
    return this.destination;
  }

  setDestination(destination: HashKey): void {
    this.destination = destination;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }
}

export class Vertex<T extends Equatable> extends Hashable {
  private key: HashKey;
  private element: T;

  constructor(element: T) {
    super();
    this.element = element;
    this.key = this.hashCode();
  }
  getKey(): HashKey {
    return this.key;
  }
  getElement(): T {
    return this.element;
  }
}
export class Graph<T extends Equatable> {
  protected vertices: Vertex<T>[];
  protected edges: Edge[];

  constructor() {
    this.vertices = [];
    this.edges = [];
  }

  getVertexByKey(key: HashKey): Vertex<T> | undefined {
    return this.vertices.find((item) => item.getKey() === key);
  }
  getVertexByElement(element: T): Vertex<T> | undefined {
    return this.vertices.find((item) => item.getElement().equals(element));
  }

  addVertex(vertex: Vertex<T>) {
    this.vertices.push(vertex);
  }

  getVertices(): Vertex<T>[] {
    return this.vertices;
  }

  getEdges(): Edge[] {
    return this.edges;
  }
  getEdge(origin: HashKey, destination: HashKey): Edge | undefined {
    return this.edges.find(
      (edge) =>
        edge.getOrigin() === origin && edge.getDestination() === destination
    );
  }
  addEdge(edge: Edge) {
    this.edges.push(edge);
  }
  addUniqueEdge(edge: Edge) {
    if (!this.getEdge(edge.getOrigin(), edge.getDestination())) {
      this.addEdge(edge);
    }
  }

  dijkstra(start: Vertex<T>, end: Vertex<T>): Edge[] | undefined {
    const visited: Set<HashKey> = new Set();
    const distances: Map<HashKey, number> = new Map();
    const previous: Map<HashKey, Edge | undefined> = new Map();
    const queue = new PriorityQueue<Vertex<T>>();

    for (const vertex of this.vertices) {
      distances.set(vertex.getKey(), Infinity);
      previous.set(vertex.getKey(), undefined);
    }
    distances.set(start.getKey(), 0);
    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
      const current = queue.dequeue()!;

      if (visited.has(current.getKey())) continue;
      visited.add(current.getKey());

      const neighborEdges = this.getEdges().filter(
        (edge) => edge.getOrigin() === current.getKey()
      );

      for (const neighborEdge of neighborEdges) {
        const neighbor = this.getVertexByKey(neighborEdge.getDestination())!;
        const newDistance =
          distances.get(current.getKey())! + neighborEdge.getWeight();

        if (newDistance < distances.get(neighbor.getKey())!) {
          distances.set(neighbor.getKey(), newDistance);
          previous.set(neighbor.getKey(), neighborEdge);
          queue.enqueue(neighbor, newDistance);
        }
      }
    }

    const path: Edge[] = [];
    let current = end;

    while (previous.get(current.getKey())) {
      const edge = previous.get(current.getKey())!;
      path.unshift(edge);
      current = this.getVertexByKey(edge.getOrigin())!;
    }

    return path.length > 0 ? path : undefined;
  }
}
