import * as d3 from 'd3';

const MARGIN = {top: 30, right: 30, bottom: 60, left: 30},
    WIDTH = 600 - MARGIN.left - MARGIN.right,
    HEIGHT = 600 - MARGIN.top - MARGIN.bottom;

const BAR_GAP = 3;

export const drawBarChart = (selector: any, data: number[]) => {
    destroyChart(selector);

    const MAX = Math.max(...data);
    const ENTRIES_AMOUNT = data.length;
    const BAR_WIDTH = WIDTH / ENTRIES_AMOUNT;
    const BAR_HEIGHT = HEIGHT / MAX;

    const canvas = d3.select(selector)
        .append("svg")
        .attr("width", WIDTH + MARGIN.left + MARGIN.right)
        .attr("height", HEIGHT + MARGIN.top + MARGIN.bottom)
        .append("g")
        .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

    const BAR_WIDTH_MULTIPLICATOR = BAR_WIDTH + BAR_GAP;

    const rectGroups =canvas.selectAll("bar")
        .data(data)
        .join("g")

    rectGroups
        .append('rect')
        .attr("x", (_, i) => i * BAR_WIDTH_MULTIPLICATOR)
        .attr("y", d => HEIGHT - d * BAR_HEIGHT)
        .attr("width", BAR_WIDTH)
        .attr("height", d => d * BAR_HEIGHT)
        .attr("fill", "#69b3a2");

    rectGroups
        .append("text")
        .attr("x", (_, i) => i * BAR_WIDTH_MULTIPLICATOR)
        .attr("y", HEIGHT)
        .text(d => d)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('transform', d => `translate(${BAR_WIDTH_MULTIPLICATOR/2}, 20)`);

}

export const destroyChart = (selector: any) => {
    d3.select(selector).select('svg').remove();
}
