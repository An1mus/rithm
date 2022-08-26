import {Graph} from "../utils/graph";
import {HEIGHT, MARGIN, WIDTH} from "./const";
import * as d3 from "d3";
import {SimulationNodeDatum} from "d3";

export const drawGraphChart = (selector: any, data: Graph) => {
    const canvas = d3.select(selector)
        .append("svg")
        .attr("width", WIDTH + MARGIN.left + MARGIN.right)
        .attr("height", HEIGHT + MARGIN.top + MARGIN.bottom)
        .append("g")
        .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

    const links = canvas
        .selectAll("line")
        .data(data.getEdges())
        .join("line")
        .style("stroke", "#aaa")

    const nodes = canvas
        .selectAll("circle")
        .data(data.getVertices())
        .join("circle")
        .attr("r", 20)
        .style("fill", "#69b3a2")

    const simulation = d3.forceSimulation(data.getVertices() as SimulationNodeDatum[])                 // Force algorithm is applied to data.nodes
        .force("link", d3.forceLink()                               // This force provides links between nodes
            .id(function(d: any) { return d.id; })                     // This provide  the id of a node
            .links(data.getEdges())                                    // and this the list of links
        )
        .force("charge", d3.forceManyBody().strength(-400))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
        .force("center", d3.forceCenter(WIDTH / 2, HEIGHT / 2))     // This force attracts nodes to the center of the svg area
        .on("end", ticked);

    function ticked() {
        links
            .attr("x1", function(d: any) { return d.source.x; })
            .attr("y1", function(d: any) { return d.source.y; })
            .attr("x2", function(d: any) { return d.target.x; })
            .attr("y2", function(d: any) { return d.target.y; });

        nodes
            .attr("cx", function(d: any) { return d.x+6; })
            .attr("cy", function(d: any) { return d.y-6; });
    }

}