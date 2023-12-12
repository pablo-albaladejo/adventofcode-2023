import { Edge, Graph, Vertex } from '../../common/graph';
import { getPairs } from '../../common/helpers';
import { Point } from '../../common/polygon';
export class Cosmos extends Graph<Point> {
  private nRows: number;
  private nCols: number;

  private spacePoints: Point[];
  private galaxyPoints: Point[];

  constructor(nRows: number, nCols: number) {
    super();
    this.nRows = nRows;
    this.nCols = nCols;
    this.spacePoints = [];
    this.galaxyPoints = [];
  }

  getNCols(): number {
    return this.nCols;
  }
  getNRows(): number {
    return this.nRows;
  }

  getNVertex(): number {
    return this.vertices.length;
  }

  getSpacePoints(): Point[] {
    return this.spacePoints;
  }
  getGalaxyPoints(): Point[] {
    return this.galaxyPoints;
  }

  private geVertexOrCreate(point: Point): Vertex<Point> {
    let vertex = this.getVertexByElement(point);
    if (vertex) return vertex;

    vertex = new Vertex(point);
    this.addVertex(vertex);
    return vertex;
  }

  private addCosmosVertex(
    source: Point,
    destinations: Point[],
    cosmosArr: Point[]
  ) {
    const sourceVertex = this.geVertexOrCreate(source);
    destinations.forEach((destination) => {
      const destinationVertex = this.geVertexOrCreate(destination);

      this.addUniqueEdge(
        new Edge(sourceVertex.getKey(), destinationVertex.getKey(), 1)
      );
      this.addUniqueEdge(
        new Edge(destinationVertex.getKey(), sourceVertex.getKey(), 1)
      );
    });
    cosmosArr.push(source);
  }

  addGalaxyVertex(postion: Point, destinations: Point[]) {
    this.addCosmosVertex(postion, destinations, this.galaxyPoints);
  }

  addSpaceVertex(postion: Point, destinations: Point[]) {
    this.addCosmosVertex(postion, destinations, this.spacePoints);
  }

  getGalaxyPairs(): [Point, Point][] {
    return getPairs(this.galaxyPoints);
  }

  emptyRowsAndColumns(): { rows: number[]; columns: number[] } {
    const rows = Array.from({ length: this.nRows }, (_, index) => index);
    const columns = Array.from({ length: this.nCols }, (_, index) => index);

    for (const point of this.galaxyPoints) {
      const xPos = rows.indexOf(point.x);
      if (xPos >= 0) rows.splice(xPos, 1);

      const yPos = columns.indexOf(point.y);
      if (yPos >= 0) columns.splice(yPos, 1);
    }

    return { rows, columns };
  }

  private updateEdgeWeigth(source: Point, destination: Point) {
    const v1 = this.getVertexByElement(source)!;
    const v2 = this.getVertexByElement(destination)!;

    const edge1 = this.getEdge(v1.getKey(), v2.getKey());
    edge1?.setWeight(edge1.getWeight() + 1);

    const edge2 = this.getEdge(v2.getKey(), v1.getKey());
    edge2?.setWeight(edge2.getWeight() + 1);
  }

  expand() {
    const { rows, columns } = this.emptyRowsAndColumns();
    for (const row of rows) {
      for (let i = 0; i < this.nCols; i++) {
        const point = new Point(row, i);
        if (row < this.nRows) {
          const below = new Point(row + 1, i);
          this.updateEdgeWeigth(below, point);
        }
      }
    }
    for (const column of columns) {
      for (let i = 0; i < this.nCols; i++) {
        const point = new Point(i, column);
        if (column < this.nCols) {
          const right = new Point(i, column + 1);
          this.updateEdgeWeigth(right, point);
        }
      }
    }
  }

  shortestPath(a: Point, b: Point): number | undefined {
    const source = this.getVertexByElement(a);
    const destination = this.getVertexByElement(b);
    if (!source || !destination) return undefined;

    const path = this.dijkstra(source, destination);
    if (!path) return undefined;
    return path?.reduce((acc, edge) => acc + edge.getWeight(), 0);
  }
}
