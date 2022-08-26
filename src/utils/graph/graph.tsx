import {Vertice} from "./Vertice";
import Edge from "./edge";

const NAME_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class Graph {
    private __vertices: Vertice[];
    private __edges: Array<Edge>;

    constructor(vertices?: Vertice[], edges?: Array<Edge>) {
        this.__vertices = vertices ? vertices : [];
        this.__edges = edges ? edges : [];
    }

    addVertice(vertice: Vertice) {
        this.__vertices.push(vertice);
    }

    addEdge(edge: Edge) {
        this.__edges.push(edge);
    }

    getEdges(): Edge[] {
        return this.__edges;
    }

    getVertices(): Vertice[] {
        return this.__vertices;
    }

    getDrawableGraph() {
        return {
            vertices: this.__vertices,
            edges: this.__edges
        }
    }

    generateGraph(amountOfNodes: number) {
        for(let i = 0; i < amountOfNodes; i++) {
            this.addVertice(new Vertice(i, NAME_LETTERS[i % NAME_LETTERS.length]));
            const source = Math.round(Math.random() * i);
            const target = Math.round(Math.random() * amountOfNodes);

            if(source !== target) this.addEdge(new Edge(source, target));
        }
    }
}

export default Graph;