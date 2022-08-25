type Edge = [number, number];

class Graph {
    private __vertices: number[];
    private __edges: Array<Edge>;

    constructor(vertices?: number[], edges?: Array<Edge>) {
        this.__vertices = vertices ? vertices : [];
        this.__edges = edges ? edges : [];
    }

    addVertice(vertice: number) {
        this.__vertices.push(vertice);
    }

    addEdge(edge: Edge) {
        this.__edges.push(edge);
    }
}

export default Graph;